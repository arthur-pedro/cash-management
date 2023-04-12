import { CashFlowOperation } from 'src/app/util/enum/cash-flow-operation.enum';
export declare class CreateCashFlowDto {
    value: number;
    operation: CashFlowOperation;
    clientId: number;
}
