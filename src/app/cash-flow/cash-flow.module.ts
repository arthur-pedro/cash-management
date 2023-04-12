import { Module } from '@nestjs/common'
import { CashFlowService } from './cash-flow.service'
import { CashFlowController } from './cash-flow.controller'
import { CashFlow } from './entities/cash-flow.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Client } from '../client/entities/client.entity'
import { ClientController } from '../client/client.controller'
import { ClientService } from '../client/client.service'
import { Cash } from '../cash/entities/cash.entity'
import { CashController } from '../cash/cash.controller'
import { CashService } from '../cash/cash.service'

@Module({
	imports: [TypeOrmModule.forFeature([CashFlow, Client, Cash])],
	controllers: [CashFlowController, ClientController, CashController],
	providers: [CashFlowService, ClientService, CashService],
})
export class CashFlowModule {}
