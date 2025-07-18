export function getAverage(numbers: number[]): number {
  if (!numbers.length) return 0;
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  return Math.floor(sum / numbers.length);
} 