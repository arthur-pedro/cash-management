import { CashFlowOperation } from 'src/app/util/enum/cash-flow-operation.enum';
import { CreateCashFlowDto } from './create-cash-flow.dto';
declare const UpdateCashFlowDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCashFlowDto>>;
export declare class UpdateCashFlowDto extends UpdateCashFlowDto_base {
    value: number;
    operation: CashFlowOperation;
    clientId: number;
}
export {};
