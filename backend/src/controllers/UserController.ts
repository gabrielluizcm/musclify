import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import User, { NewUserProps } from '../models/UserModel';

async function register(req: Request<object, object, NewUserProps>, res: Response) {
  try {
    const errors = await User.validate(req.body);
    if (errors.length)
      return res.status(400).json({ message: 'Invalid inputs', errors });

    const user = await User.create(req.body);

    return res.status(201).json({ message: 'User registered succesfully', user });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function login(req: Request<object, object, { email: string, password: string }>, res: Response) {
  try {
    const user = await User.login(req.body);
    if (!user)
      return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(user, process.env.SECRET_JWT_KEY ?? '');
    res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default {
  register,
  login
}
