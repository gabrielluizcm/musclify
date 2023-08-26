import express from 'express';

import { authAdminJwt } from '../middleware/adminMiddleware';

import ExerciseController from '../controllers/ExerciseController';

const route = express.Router();

route.get('/exercises', ExerciseController.index);
route.post('/exercise/create', authAdminJwt, ExerciseController.create);
route.get('/exercise/:id', ExerciseController.fetch);

export default route;
