import { Client } from 'src/app/client/entities/client.entity';
export declare class User {
    id: string;
    email: string;
    fullName: string;
    bestName: string;
    status: string;
    type: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    client: Client;
}
