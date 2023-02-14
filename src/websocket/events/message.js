export default (message, socket) => {
	const messageContent = {
		nickname: socket.nickname,
		playerID: socket.playerID,
		message,
	};
	socket.emit('message', messageContent);
	socket.broadcast.emit('message', messageContent);
};
