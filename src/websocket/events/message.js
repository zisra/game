export default (message, socket) => {
	const messageContent = {
		nickname: socket.nickname,
		playerID: socket.playerID,
		message: message.trim().substring(0, 500),
	};
	socket.emit('message', messageContent);
	socket.broadcast.emit('message', messageContent);
};
