"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = Log;
const axios_1 = __importDefault(require("axios"));
const LOG_API_URL = 'http://20.244.56.144/evaluation-service/logs';
async function Log(stack, level, pkg, message, token) {
    try {
        await axios_1.default.post(LOG_API_URL, {
            stack,
            level,
            package: pkg,
            message,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
    }
    catch (error) {
        // Optionally log to console or file if remote logging fails
        console.error('Failed to log to remote API:', error);
    }
}
