"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAverage = calculateAverage;
const averageService_1 = require("../services/averageService");
const validate_1 = require("../utils/validate");
const logger_1 = require("../utils/logger");
async function calculateAverage(req, res) {
    var _a;
    const { numbers } = req.body;
    const token = ((_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '')) || '';
    if (!(0, validate_1.validateNumbers)(numbers)) {
        await (0, logger_1.Log)('backend', 'warn', 'controller', 'Invalid input for average', token);
        return res.status(400).json({ error: 'Invalid input. Provide an array of numbers.' });
    }
    const average = (0, averageService_1.getAverage)(numbers);
    await (0, logger_1.Log)('backend', 'info', 'controller', `Average calculated: ${average}`, token);
    return res.json({ average });
}
