import crypto from 'crypto';

import messageEvent from './events/message.js';

const generateID = () => crypto.randomBytes(6).toString('hex');

export default (socket) => {
	if (!socket.sessionID) return socket.disconnect();
	if (socket.memory.sessionExists(socket.sessionID)) {
		socket.emit('err', {
			message: 'Session already exists',
		});
		return socket.disconnect();
	}

	const playerID = generateID();
	socket.playerID = playerID;

	socket.memory.addPlayer({
		sessionID: socket.sessionID,
		playerID,
		nickname: socket.nickname,
	});

	socket.broadcast.emit('players', socket.memory.getPlayers());
	socket.emit('players', socket.memory.getPlayers());

	socket.on('message', (message) => {
		messageEvent(message, socket);
	});
};
