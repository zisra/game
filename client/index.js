import { io } from 'socket.io-client';

String.prototype.escapeHTML = function () {
	const map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;',
	};
	return this.replace(/[&<>"']/g, (m) => map[m]);
};

const elements = {
	leaderboard: document.querySelector('#leaderboard'),
	usernameInput: document.querySelector('#username'),
	joinButton: document.querySelector('#join'),
	leaveButton: document.querySelector('#leave'),
	chat: document.querySelector('#chat'),
	messages: document.querySelector('#messages'),
	messageInput: document.querySelector('#message'),
	sendMessage: document.querySelector('#sendMessage'),
};

const socket = io({
	auth: {},
	autoConnect: false,
});

socket.on('connect', () => {
	elements.joinButton.classList.add('hidden');
	elements.usernameInput.classList.add('hidden');
	elements.leaveButton.classList.remove('hidden');
	elements.leaderboard.classList.remove('hidden');
	elements.chat.classList.remove('hidden');
});

socket.on('connect_error', (error) => {
	if (error.message === 'Invalid session') {
		localStorage.removeItem('sessionID');
		alert('Invalid session ID, please try again');
		location.reload();
	}
});

socket.on('err', (error) => {
	if (error.message === 'Session already exists') {
		alert('You are already logged in on another tab');
		location.reload();
	}
});

socket.on('players', (players) => {
	elements.leaderboard.innerHTML = players
		.map((player) => player.nickname.escapeHTML())
		.join('<br />');
});

socket.on('message', (message) => {
	elements.messages.innerHTML += `<p><b>${message.nickname.escapeHTML()}</b>: ${message.message.escapeHTML()}</p>`;
});

elements.messageInput.addEventListener('keyup', (event) => {
	if (event.key === 'Enter') {
		elements.sendMessage.click();
	}
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

elements.sendMessage.addEventListener('click', () => {
	if(!elements.messageInput.value) return;
	socket.emit('message', elements.messageInput.value);
	elements.messageInput.value = '';
});

elements.leaveButton.addEventListener('click', async () => {
	location.reload();
	socket.disconnect();
});
