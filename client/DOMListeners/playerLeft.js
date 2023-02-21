import socket from '../socket.js';
import keyboard from '../keyboard.js';

export default () => {
	keyboard.stop();
	socket.disconnect();
	location.reload();
};
