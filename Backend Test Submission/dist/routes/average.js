"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const averageController_1 = require("../controllers/averageController");
const router = (0, express_1.Router)();
router.post('/', averageController_1.calculateAverage);
exports.default = router;
