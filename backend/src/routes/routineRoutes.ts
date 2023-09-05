import express from 'express';

import RoutineController from '../controllers/RoutineController';

const route = express.Router();

route.post('/routine/create', RoutineController.create);
route.post('/routine/:id', RoutineController.fetch);

export default route;
