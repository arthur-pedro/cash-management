import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCashFlowDto } from './dto/create-cash-flow.dto'
import { CashFlow } from './entities/cash-flow.entity'

@Injectable()
export class CashFlowService {
	constructor(
		@InjectRepository(CashFlow)
		private cashFlowRepository: Repository<CashFlow>,
	) {}
	async create(createCashFlowDto: CreateCashFlowDto): Promise<CashFlow> {
		const cashFlow = new CashFlow()
		cashFlow.clientId = createCashFlowDto.clientId
		cashFlow.operation = createCashFlowDto.operation
		cashFlow.value = createCashFlowDto.value
		cashFlow.type = 'DEFAULT'
		cashFlow.holder = 'DEFAULT'
		return this.cashFlowRepository.save(cashFlow)
	}
}
