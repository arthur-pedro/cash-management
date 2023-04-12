import { Response } from 'express';
import { CashService } from '../cash/cash.service';
import { ClientService } from '../client/client.service';
import { CashFlowService } from './cash-flow.service';
import { CreateCashFlowDto } from './dto/create-cash-flow.dto';
export declare class CashFlowController {
    private readonly cashFlowService;
    private readonly clientService;
    private readonly cashService;
    constructor(cashFlowService: CashFlowService, clientService: ClientService, cashService: CashService);
    create(res: Response, createCashFlowDto: CreateCashFlowDto): Promise<Response<any, Record<string, any>>>;
}
