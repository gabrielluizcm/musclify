import express from 'express';

import { authAdminJwt } from '../middleware/adminMiddleware';

import ExerciseController from '../controllers/ExerciseController';

const route = express.Router();

route.post('/exercise/create', authAdminJwt, ExerciseController.create);

export default route;
