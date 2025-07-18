import axios from 'axios';

export type Stack = 'backend' | 'frontend';
export type Level = 'debug' | 'info' | 'warn' | 'error' | 'fatal';
export type BackendPackage = 'cache' | 'controller' | 'service';
export type SharedPackage = 'auth' | 'config' | 'middleware' | 'utils';
export type LogPackage = BackendPackage | SharedPackage;

const LOG_API_URL = 'http://20.244.56.144/evaluation-service/logs';

export async function Log(
  stack: Stack,
  level: Level,
  pkg: LogPackage,
  message: string,
  token: string
): Promise<void> {
  try {
    await axios.post(
      LOG_API_URL,
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    // Optionally log to console or file if remote logging fails
    console.error('Failed to log to remote API:', error);
  }
} 