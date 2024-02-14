import express from 'express';

import HistoryController from '../controllers/HistoryController';

const route = express.Router();

route.get('/historic', HistoryController.index);
route.post('/history/create', HistoryController.create);
route.get('/history/:id', HistoryController.fetch);

export default route;
