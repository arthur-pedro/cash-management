import { Client } from 'src/app/client/entities/client.entity';
import { CashFlowOperation } from 'src/app/util/enum/cash-flow-operation.enum';
export declare class CashFlow {
    id: string;
    clientId: number;
    value: number;
    type: string;
    holder: string;
    operation: CashFlowOperation;
    createdAt: Date;
    updatedAt: Date;
    client: Client;
}
