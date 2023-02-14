import express from 'express';

import sessionRoute from './routes/session.js';
import playersRoute from './routes/players.js';

const api = express.Router();

api.post('/session', sessionRoute);
api.get('/players', playersRoute);

export default api;
