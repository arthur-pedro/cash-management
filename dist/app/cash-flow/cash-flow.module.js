"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashFlowModule = void 0;
const common_1 = require("@nestjs/common");
const cash_flow_service_1 = require("./cash-flow.service");
const cash_flow_controller_1 = require("./cash-flow.controller");
const cash_flow_entity_1 = require("./entities/cash-flow.entity");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../client/entities/client.entity");
const client_controller_1 = require("../client/client.controller");
const client_service_1 = require("../client/client.service");
const cash_entity_1 = require("../cash/entities/cash.entity");
const cash_controller_1 = require("../cash/cash.controller");
const cash_service_1 = require("../cash/cash.service");
let CashFlowModule = class CashFlowModule {
};
CashFlowModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cash_flow_entity_1.CashFlow, client_entity_1.Client, cash_entity_1.Cash])],
        controllers: [cash_flow_controller_1.CashFlowController, client_controller_1.ClientController, cash_controller_1.CashController],
        providers: [cash_flow_service_1.CashFlowService, client_service_1.ClientService, cash_service_1.CashService],
    })
], CashFlowModule);
exports.CashFlowModule = CashFlowModule;
//# sourceMappingURL=cash-flow.module.js.map