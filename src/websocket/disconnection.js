export default (socket) => {
	socket.memory.removePlayer({ playerID: socket.playerID });
};
