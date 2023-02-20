import elements from '../../elements.js';
import { Application, Sprite } from 'pixi.js';

export default () => {
	elements
		.getMultiple(['leaveButton', 'leaderboard', 'chat'])
		.forEach((element) => element.classList.remove('hidden'));

	elements
		.getMultiple(['joinButton', 'usernameInput'])
		.forEach((element) => element.classList.add('hidden'));

	const app = new Application({
		width: 800,
		height: 600,
		backgroundColor: 0x1099bb,
	});

	const player = Sprite.from('./img/ship.png');
	player.anchor.set(0.5);
	player.x = app.screen.width / 2;
	player.y = app.screen.height / 2;

	app.eventMode = 'dynamic';
	app.stage.addChild(player);

	elements.get('gameCanvas').appendChild(app.view);
};
