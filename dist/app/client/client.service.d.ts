import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
export declare class ClientService {
    private clientsRepository;
    constructor(clientsRepository: Repository<Client>);
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<Client>;
}
