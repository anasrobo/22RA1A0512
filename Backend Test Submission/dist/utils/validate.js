"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumbers = validateNumbers;
function validateNumbers(numbers) {
    return Array.isArray(numbers) && numbers.every(n => typeof n === 'number');
}
