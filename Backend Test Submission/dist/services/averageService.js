"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverage = getAverage;
function getAverage(numbers) {
    if (!numbers.length)
        return 0;
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    return Math.floor(sum / numbers.length);
}
