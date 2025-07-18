"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = logMiddleware;
const logger_1 = require("../utils/logger");
async function logMiddleware(req, res, next) {
    var _a;
    const token = ((_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '')) || '';
    await (0, logger_1.Log)('backend', 'info', 'middleware', `${req.method} ${req.originalUrl}`, token);
    next();
}
