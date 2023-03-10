import elements from '../../elements.js';
import sanitizeHTML from '../../util/sanitizeHTML.js';

export default (players) => {
	elements.get('leaderboard').innerHTML = players
		.map((player) => `<li>${sanitizeHTML(player.nickname)}</li>`)
		.join('<br />');
};
