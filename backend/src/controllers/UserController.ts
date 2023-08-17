import { Request, Response } from 'express';

import { create, validate, NewUserProps } from '../models/UserModel';

async function register(req: Request<object, object, NewUserProps>, res: Response) {
  try {
    const errors = await validate(req.body);
    if (errors.length)
      return res.status(400).json({ message: 'Invalid inputs', errors });

    const user = await create(req.body);

    return res.status(201).json({ message: 'User registered succesfully', user });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default {
  register
}
