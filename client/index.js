import elements from './elements.js';

import inputMessageSent from './DOMListeners/inputMessageSent.js';
import messageSent from './DOMListeners/messageSent.js';
import playerJoined from './DOMListeners/playerJoined.js';
import playerLeft from './DOMListeners/playerLeft.js';

elements.get('sendMessage').addEventListener('click', messageSent);
elements.get('messageInput').addEventListener('keyup', inputMessageSent);
elements.get('joinButton').addEventListener('click', playerJoined);
elements.get('leaveButton').addEventListener('click', playerLeft);
