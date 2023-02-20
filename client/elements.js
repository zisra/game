import ElementManager from './util/ElementManager';

const elements = new ElementManager({
	leaderboard: '#leaderboard',
	usernameInput: '#username',
	joinButton: '#join',
	leaveButton: '#leave',
	chat: '#chat',
	messages: '#messages',
	messageInput: '#message',
	sendMessage: '#sendMessage',
	gameCanvas: '#game',
});

export default elements;
