import express from 'express';

import UserController from '../controllers/UserController';

const route = express.Router();

route.post('/user/register', UserController.register);

export default route;
