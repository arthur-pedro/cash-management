import { Asset } from './asset.entity';
import { Client } from './client.entity';
export declare class Goal {
    id: number;
    clientId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    client: Client;
    assets: Asset[];
}
