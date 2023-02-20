import socket from '../socket.js';
import elements from '../elements.js';

export default async () => {
	let sessionID = localStorage.getItem('sessionID');

	if (!sessionID) {
		const data = await fetch('/api/session', {
			method: 'POST',
		});

		sessionID = await data.text();

		localStorage.setItem('sessionID', sessionID);
	}

	socket.auth = {
		nickname: elements.get('usernameInput').value,
		sessionID,
	};

	socket.connect();
};
