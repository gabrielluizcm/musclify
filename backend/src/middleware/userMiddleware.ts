import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authUserJwt(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token)
    return res.status(401).json({ message: 'Invalid authorization token' });

  try {
    const user = jwt.verify(token, process.env.SECRET_JWT_KEY ?? '');
    req.body.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token authentication failed' });
  }
}
