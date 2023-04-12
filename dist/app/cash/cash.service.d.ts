import { Repository } from 'typeorm';
import { UpdateCashDto } from './dto/update-cash.dto';
import { Cash } from './entities/cash.entity';
export declare class CashService {
    private cashRepository;
    constructor(cashRepository: Repository<Cash>);
    findOne(id: number): Promise<Cash>;
    update(id: number, updateCashDto: UpdateCashDto): Promise<import("typeorm").UpdateResult>;
}
