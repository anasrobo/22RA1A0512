import { Request, Response, NextFunction } from 'express';
import { Log } from '../utils/logger';

export default async function logMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization']?.replace('Bearer ', '') || '';
  await Log('backend', 'info', 'middleware', `${req.method} ${req.originalUrl}`, token);
  next();
} 