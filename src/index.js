import express from 'express';
import { Server } from 'socket.io';

import http from 'node:http';

import handleSocketConnection from './socket/connection.js';
import handleSocketDisconnection from './socket/disconnection.js';
import authMiddleware from './socket/middleware/auth.js';
import router from './server/index.js';
import GameMemory from './memory.js';

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);
const memory = new GameMemory();

const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));
app.use(express.static('./public'));
app.use((req, res, next) => {
	req.memory = memory;
	next();
});
app.use('/api', router);

io.use((socket, next) => {
	socket.memory = memory;
	next();
});
io.use(authMiddleware);

io.on('connection', (socket) => {
	handleSocketConnection(socket);

	socket.on('disconnect', () => {
		handleSocketDisconnection(socket);
	});
});

httpServer.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
});
