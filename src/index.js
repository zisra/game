import express from 'express';
import { Server } from 'socket.io';

import http from 'node:http';

import handleSocketConnection from './websocket/connection.js';
import handleSocketDisconnection from './websocket/disconnection.js';
import authMiddleware from './websocket/middleware/auth.js';
import router from './server/index.js';
import gameMemory from './memory.js';

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);
const memory = new gameMemory();

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
