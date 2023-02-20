import socket from '../socket.js';
import elements from '../elements.js';

export default () => {
	if (!elements.get('messageInput').value) return;
	socket.emit('message', elements.get('messageInput').value);
	elements.get('messageInput').value = '';
};
