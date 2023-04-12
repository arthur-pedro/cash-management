"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashModule = void 0;
const common_1 = require("@nestjs/common");
const cash_service_1 = require("./cash.service");
const cash_controller_1 = require("./cash.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cash_entity_1 = require("./entities/cash.entity");
let CashModule = class CashModule {
};
CashModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cash_entity_1.Cash])],
        controllers: [cash_controller_1.CashController],
        providers: [cash_service_1.CashService],
    })
], CashModule);
exports.CashModule = CashModule;
//# sourceMappingURL=cash.module.js.map