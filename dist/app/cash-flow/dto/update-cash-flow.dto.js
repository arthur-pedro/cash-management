"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCashFlowDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cash_flow_dto_1 = require("./create-cash-flow.dto");
class UpdateCashFlowDto extends (0, mapped_types_1.PartialType)(create_cash_flow_dto_1.CreateCashFlowDto) {
}
exports.UpdateCashFlowDto = UpdateCashFlowDto;
//# sourceMappingURL=update-cash-flow.dto.js.map