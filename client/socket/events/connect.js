import elements from '../../elements.js';
import keyboard from '../../keyboard.js';

import { Application, Sprite } from 'pixi.js';

export default () => {
	elements
		.getMultiple(['leaveButton', 'leaderboardBlock', 'chat'])
		.forEach((element) => element.classList.remove('hidden'));

	elements
		.getMultiple(['joinButton', 'usernameInput'])
		.forEach((element) => element.classList.add('hidden'));

	keyboard.startListening();

	const app = new Application({
		width: window.innerWidth,
		height: window.innerHeight,
		backgroundColor: 0x1099bb,
		resizeTo: window,
	});

	const player = Sprite.from('./img/ship.png');
	player.anchor.set(0.5);
	player.x = app.screen.width / 2;
	player.y = app.screen.height / 2;

	app.stage.addChild(player);

	elements.get('gameCanvas').appendChild(app.view);
};
