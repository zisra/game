class gameMemory {
	constructor() {
		this.players = new Map();
		this.sessions = new Map();
	}
	// Players
	addPlayer({ sessionID, nickname, playerID }) {
		this.players.set(playerID, {
			nickname,
			sessionID,
		});
	}

	removePlayer({ playerID }) {
		this.players.delete(playerID);
	}

	getPlayers() {
		const players = Object.fromEntries(this.players);
		return Object.keys(Object.fromEntries(this.players)).map((player) => ({
			nickname: players[player].nickname,
			playerID: player,
		}));
	}

	getPlayer(id) {
		return this.players.get(id);
	}

	sessionExists(session) {
		// Check if map contains a player with the sessionID
		return [...this.players.values()].some(
			(player) => player.sessionID === session
		);
	}
	// Sessions
	addSession({ sessionID }) {
		this.sessions.set(sessionID, {
			accountID: null,
		});
	}

	getSession(id) {
		return this.sessions.get(id);
	}

	getSessions() {
		return Object.fromEntries(this.sessions);
	}

	revokeSession(id) {
		this.sessions.delete(id);
	}
}

export default gameMemory;
