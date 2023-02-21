export default class {
	constructor() {
		this.isListening = false;
	}

	startListening() {
		this.isListening = true;
	}
	stopListening() {
		this.isListening = false;
	}

	listen(key, event, callback) {
		if (event === 'pressed') {
			window.addEventListener('keypress', (e) => {
				if (
					this.isListening &&
					e.key === key &&
					!(e.target instanceof HTMLInputElement)
				) {
					callback(e);
				}
			});
		} else if (event === 'up') {
			window.addEventListener('keyup', (e) => {
				if (
					this.isListening &&
					e.key === key &&
					!(e.target instanceof HTMLInputElement)
				) {
					callback(e);
				}
			});
		} else if (event === 'down') {
			window.addEventListener('keydown', (e) => {
				if (
					this.isListening &&
					e.key === key &&
					!(e.target instanceof HTMLInputElement)
				) {
					callback(e);
				}
			});
		} else {
			throw new Error('Event not supported');
		}
	}
}
