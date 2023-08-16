import express, { Request } from 'express';
import validator from 'validator';
import bcryptjs from 'bcryptjs';

const route = express.Router();

import UserModel from '../models/User';

type NewUserProps = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
}

// todo refactor
route.post('/user/register', async (req: Request<object, object, NewUserProps>, res) => {
  const { username, email, password = '', confirmPassword, name } = req.body;
  const errors = [];

  if (!username || username.length < 3 || username.length > 30) errors.push('Invalid name: must have between 3 and 30 characters');
  if (!email || !validator.isEmail(email)) errors.push('Invalid email');
  if (!password || password.length < 6 || password.length > 18) errors.push('Invalid password: must have between 6 and 18 characters');
  if (!confirmPassword || password !== confirmPassword) errors.push('Passwords must match');
  if (!name || !name.length || name.length > 36) errors.push('Invalid name: must have and least 1 character and 36 max');

  if (errors.length)
    return res.status(400).json({ message: 'Invalid inputs', errors });

  try {
    if (await UserModel.findOne({ email }))
      return res.status(409).json({ message: 'Email already registered' });

    const salt = bcryptjs.genSaltSync();
    const cryptPassword = bcryptjs.hashSync(password ?? '', salt);
    const newUser = await UserModel.create({
      username, email, name,
      role: 'user',
      password: cryptPassword
    });

    res.status(201).json({ message: 'User registered succesfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error });
  }
})

export default route;
