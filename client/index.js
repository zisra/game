import elements from './elements.js';
import keyboard from './keyboard.js';

import inputMessageSent from './DOMListeners/inputMessageSent.js';
import messageSent from './DOMListeners/messageSent.js';
import playerJoined from './DOMListeners/playerJoined.js';
import playerLeft from './DOMListeners/playerLeft.js';
import contextMenu from './DOMListeners/contextMenu.js';
import usernameInput from './DOMListeners/usernameInput.js';

elements.get('sendMessage').addEventListener('click', messageSent);
elements.get('messageInput').addEventListener('keypress', inputMessageSent);
elements.get('usernameInput').addEventListener('keypress', usernameInput);
elements.get('joinButton').addEventListener('click', playerJoined);
elements.get('leaveButton').addEventListener('click', playerLeft);
elements.get('gameCanvas').addEventListener('contextmenu', contextMenu);

keyboard.listen('Enter', 'pressed', () => {
	elements.get('messageInput').classList.remove('hidden');
	elements.get('messageInput').focus();
});
