import { CashService } from './cash.service';
import { UpdateCashDto } from './dto/update-cash.dto';
export declare class CashController {
    private readonly cashService;
    constructor(cashService: CashService);
    findOne(id: string): Promise<import("./entities/cash.entity").Cash>;
    update(id: string, updateCashDto: UpdateCashDto): Promise<import("typeorm").UpdateResult>;
}
