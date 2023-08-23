import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import User, { UserJwtType } from '../models/UserModel';

export async function authAdminJwt(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token)
    return res.status(401).json({ message: 'Invalid authorization token' });

  try {
    const user = <UserJwtType>jwt.verify(token, process.env.SECRET_JWT_KEY ?? '');
    const dbUser = await User.findById(user.id);
    if (dbUser?.role !== 'admin')
      return res.status(403).json({ message: 'User does not meet required access level' });
    req.body.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token authentication failed' });
  }
}
