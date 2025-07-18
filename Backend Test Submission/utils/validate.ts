export function validateNumbers(numbers: any): numbers is number[] {
  return Array.isArray(numbers) && numbers.every(n => typeof n === 'number');
} 