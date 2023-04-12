import { Repository } from 'typeorm';
import { CreateCashFlowDto } from './dto/create-cash-flow.dto';
import { CashFlow } from './entities/cash-flow.entity';
export declare class CashFlowService {
    private cashFlowRepository;
    constructor(cashFlowRepository: Repository<CashFlow>);
    create(createCashFlowDto: CreateCashFlowDto): Promise<CashFlow>;
}
