import { CreateCashDto } from './create-cash.dto';
declare const UpdateCashDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCashDto>>;
export declare class UpdateCashDto extends UpdateCashDto_base {
    id: number;
    value: number;
    clientId: number;
}
export {};
