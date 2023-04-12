"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCashDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cash_dto_1 = require("./create-cash.dto");
class UpdateCashDto extends (0, mapped_types_1.PartialType)(create_cash_dto_1.CreateCashDto) {
}
exports.UpdateCashDto = UpdateCashDto;
//# sourceMappingURL=update-cash.dto.js.map