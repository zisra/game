import { io } from 'socket.io-client';

const elements = {
	leaderboard: document.querySelector('#leaderboard'),
	usernameInput: document.querySelector('#username'),
	joinButton: document.querySelector('#join'),
	leaveButton: document.querySelector('#leave'),
};

const socket = io({
	auth: {},
	autoConnect: false,
});

socket.on('connect', () => {
	console.log('Connected');
});

socket.on('connect_error', (error) => {
	if (error instanceof Error) {
		if (error.message === 'Invalid session') {
			localStorage.removeItem('sessionID');
			alert('Invalid session ID, please try again');
			location.reload();
		}
	}
});

socket.on('err', (error) => {
	if ((error.message = 'Session already exists')) {
		alert('You are already logged in on another tab');
		location.reload();
	}
});

socket.on('players', (players) => {
	elements.leaderboard.innerHTML = players
		.map((player) => player.nickname)
		.join('<br />');
});

elements.joinButton.addEventListener('click', async () => {
	let sessionID = localStorage.getItem('sessionID');

	if (!sessionID) {
		const data = await fetch('/api/session', {
			method: 'POST',
		});

		sessionID = await data.text();

		localStorage.setItem('sessionID', sessionID);
	}

	socket.auth = {
		nickname: elements.usernameInput.value,
		sessionID,
	};

	socket.connect();
});

elements.leaveButton.addEventListener('click', async () => {
	socket.disconnect();
});
