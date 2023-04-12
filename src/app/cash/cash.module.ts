import { Module } from '@nestjs/common'
import { CashService } from './cash.service'
import { CashController } from './cash.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Cash } from './entities/cash.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Cash])],
	controllers: [CashController],
	providers: [CashService],
})
export class CashModule {}
