import { Request, Response } from 'express';
import { getAverage } from '../services/averageService';
import { validateNumbers } from '../utils/validate';
import { Log } from '../utils/logger';

export async function calculateAverage(req: Request, res: Response) {
  const { numbers } = req.body;
  const token = req.headers['authorization']?.replace('Bearer ', '') || '';
  if (!validateNumbers(numbers)) {
    await Log('backend', 'warn', 'controller', 'Invalid input for average', token);
    return res.status(400).json({ error: 'Invalid input. Provide an array of numbers.' });
  }
  const average = getAverage(numbers);
  await Log('backend', 'info', 'controller', `Average calculated: ${average}`, token);
  return res.json({ average });
} 