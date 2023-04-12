import { Module } from '@nestjs/common'
import { ClientService } from './client.service'
import { ClientController } from './client.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Client } from './entities/client.entity'
import { Asset } from './entities/asset.entity'
import { Portfolio } from './entities/porfolio.entity'
import { Goal } from './entities/goal.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Client, Goal, Asset, Portfolio])],
	controllers: [ClientController],
	providers: [ClientService],
})
export class ClientModule {}
