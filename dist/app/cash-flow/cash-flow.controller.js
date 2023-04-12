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
exports.CashFlowController = void 0;
const common_1 = require("@nestjs/common");
const cash_service_1 = require("../cash/cash.service");
const client_service_1 = require("../client/client.service");
const cash_flow_operation_enum_1 = require("../util/enum/cash-flow-operation.enum");
const cash_flow_service_1 = require("./cash-flow.service");
const create_cash_flow_dto_1 = require("./dto/create-cash-flow.dto");
let CashFlowController = class CashFlowController {
    constructor(cashFlowService, clientService, cashService) {
        this.cashFlowService = cashFlowService;
        this.clientService = clientService;
        this.cashService = cashService;
    }
    async create(res, createCashFlowDto) {
        try {
            const client = await this.clientService.findOne(createCashFlowDto.clientId);
            if (!client) {
                throw new common_1.HttpException('Cliente não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            let cashResult = 0;
            if (createCashFlowDto.operation === cash_flow_operation_enum_1.CashFlowOperation.OUT) {
                if (client.cash.value < createCashFlowDto.value) {
                    throw new common_1.HttpException('Este cliente não tem caixa necessário para realizar esta operação', common_1.HttpStatus.BAD_REQUEST);
                }
                cashResult = client.cash.value - createCashFlowDto.value;
            }
            else {
                cashResult = client.cash.value + createCashFlowDto.value;
            }
            client.cash.value = cashResult;
            const cashFlow = await this.cashFlowService.create(createCashFlowDto);
            await this.cashService.update(client.cash.id, client.cash);
            return res.status(common_1.HttpStatus.CREATED).send(cashFlow);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_cash_flow_dto_1.CreateCashFlowDto]),
    __metadata("design:returntype", Promise)
], CashFlowController.prototype, "create", null);
CashFlowController = __decorate([
    (0, common_1.Controller)('cash-flow'),
    __metadata("design:paramtypes", [cash_flow_service_1.CashFlowService,
        client_service_1.ClientService,
        cash_service_1.CashService])
], CashFlowController);
exports.CashFlowController = CashFlowController;
//# sourceMappingURL=cash-flow.controller.js.map