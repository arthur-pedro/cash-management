import { Goal } from './goal.entity';
export declare class Asset {
    id: number;
    name: string;
    description: string;
    price: number;
    goals?: Goal[];
}
