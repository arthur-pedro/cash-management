"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashFlowService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cash_flow_entity_1 = require("./entities/cash-flow.entity");
let CashFlowService = class CashFlowService {
    constructor(cashFlowRepository) {
        this.cashFlowRepository = cashFlowRepository;
    }
    async create(createCashFlowDto) {
        const cashFlow = new cash_flow_entity_1.CashFlow();
        cashFlow.clientId = createCashFlowDto.clientId;
        cashFlow.operation = createCashFlowDto.operation;
        cashFlow.value = createCashFlowDto.value;
        cashFlow.type = 'DEFAULT';
        cashFlow.holder = 'DEFAULT';
        return this.cashFlowRepository.save(cashFlow);
    }
};
CashFlowService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cash_flow_entity_1.CashFlow)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CashFlowService);
exports.CashFlowService = CashFlowService;
//# sourceMappingURL=cash-flow.service.js.map