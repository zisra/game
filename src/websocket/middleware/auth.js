export default (socket, next) => {
	const nickname = socket.handshake.auth.nickname || 'Player';
	const sessionID = socket.handshake.auth.sessionID;

	const session = socket.memory.getSession(sessionID);

	if (!session) {
		return next(new Error('Invalid session'));
	}

	socket.sessionID = sessionID;
	socket.nickname = nickname;

	next();
};
