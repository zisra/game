import { connect, connectError, appError, players, message } from './events.js';

export default function (socket) {
	socket.on('connect', connect);
	socket.on('connect_error', connectError);
	socket.on('appError', appError);
	socket.on('players', players);
	socket.on('message', message);
}
