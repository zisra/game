import sanitizeText from '../../util/sanitizeText.js';

const random = () => Math.floor(Math.random() * 100);

export default (socket, next) => {
	const nickname = socket.handshake.auth.nickname || `Player${random()}`;
	const sessionID = socket.handshake.auth.sessionID;

	const session = socket.memory.getSession(sessionID);

	if (!session) {
		return next(new Error('Invalid session'));
	}

	socket.sessionID = sessionID;
	socket.nickname = sanitizeText(nickname.trim().substring(0, 12));

	next();
};
