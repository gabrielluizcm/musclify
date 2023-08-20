import express from 'express';

import ExerciseController from '../controllers/ExerciseController';

const route = express.Router();

route.post('/exercise/create', ExerciseController.create);

export default route;
