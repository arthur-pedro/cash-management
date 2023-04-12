import { CashFlow } from 'src/app/cash-flow/entities/cash-flow.entity';
import { Cash } from 'src/app/cash/entities/cash.entity';
import { Goal } from './goal.entity';
export declare class Client {
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    cashFlow: CashFlow[];
    cash: Cash;
    goals: Goal[];
}
