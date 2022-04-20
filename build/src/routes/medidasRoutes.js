"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medidasController_1 = require("../controllers/medidasController");
class Datos_ClinicosRoutes {
    constructor() {
        this.router = (0, express_1.default)();
        this.config();
    }
    config() {
        this.router.get('/', medidasController_1.medidasController.index);
        this.router.get('/actual', medidasController_1.medidasController.actual);
    }
}
const medidasRoutes = new Datos_ClinicosRoutes();
exports.default = medidasRoutes.router;