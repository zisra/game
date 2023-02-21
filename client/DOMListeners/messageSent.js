import socket from '../socket.js';
import elements from '../elements.js';

export default () => {
	if (elements.get('messageInput').value) {
		socket.emit('message', elements.get('messageInput').value);
		elements.get('messageInput').value = '';
	}
	elements.get('messages').scrollTop = elements.get('messages').scrollHeight;
	elements.get('messageInput').blur();
	elements.get('messageInput').classList.add('hidden');
};
