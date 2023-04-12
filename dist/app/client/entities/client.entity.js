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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const cash_flow_entity_1 = require("../../cash-flow/entities/cash-flow.entity");
const cash_entity_1 = require("../../cash/entities/cash.entity");
const typeorm_1 = require("typeorm");
const goal_entity_1 = require("./goal.entity");
let Client = class Client {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Client.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], Client.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Client.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Client.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cash_flow_entity_1.CashFlow, (cashFlow) => cashFlow.client, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'clientId' }),
    __metadata("design:type", Array)
], Client.prototype, "cashFlow", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cash_entity_1.Cash, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'clientId' }),
    __metadata("design:type", cash_entity_1.Cash)
], Client.prototype, "cash", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => goal_entity_1.Goal, (goal) => goal.client, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'clientId' }),
    __metadata("design:type", Array)
], Client.prototype, "goals", void 0);
Client = __decorate([
    (0, typeorm_1.Entity)('clients')
], Client);
exports.Client = Client;
//# sourceMappingURL=client.entity.js.map