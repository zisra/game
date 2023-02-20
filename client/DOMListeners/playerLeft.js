import socket from '../socket.js';

export default () => {
	socket.disconnect();
	location.reload();
};
