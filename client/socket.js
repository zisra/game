import io from 'socket.io-client';
import socketHandler from './socket/socketHandler.js';

class SocketConnection {
	constructor() {
		const socket = io({
			auth: {},
			autoConnect: false,
		});

		socketHandler(socket);
		return socket;
	}
}

const socket = new SocketConnection();

export default socket;
