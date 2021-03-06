"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const solicitudesController_1 = require("../controllers/solicitudesController");
const admin_1 = __importDefault(require("../middlewares/admin"));
class SolicitudesRoutes {
    constructor() {
        this.router = (0, express_1.default)();
        this.config();
    }
    config() {
        this.router.get('/', solicitudesController_1.solicitudesController.index);
        this.router.get('/findAll', admin_1.default, solicitudesController_1.solicitudesController.findAll);
        this.router.get('/findAllSimple', admin_1.default, solicitudesController_1.solicitudesController.findAllSimple);
        this.router.get('/findOneByUser/:id', solicitudesController_1.solicitudesController.findOneByUser);
        this.router.post('/create', solicitudesController_1.solicitudesController.create);
        this.router.get('/userHave/:id', solicitudesController_1.solicitudesController.userHave);
        this.router.get('/findOne/:id', solicitudesController_1.solicitudesController.findOne);
        this.router.put('/:id', solicitudesController_1.solicitudesController.update);
        this.router.delete('/:id', solicitudesController_1.solicitudesController.remove);
        this.router.put('/updateStatus/:id', admin_1.default, solicitudesController_1.solicitudesController.updateStatus);
        // this.router.put('/:id',chequesRegaloController.update)
        // this.router.delete('/:id',chequesRegaloController.remove)
        // this.router.post('/create',chequesRegaloController.create)
    }
}
const solicitudesRoutes = new SolicitudesRoutes();
exports.default = solicitudesRoutes.router;
