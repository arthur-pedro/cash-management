import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateCashDto } from './dto/update-cash.dto'
import { Cash } from './entities/cash.entity'

@Injectable()
export class CashService {
	constructor(
		@InjectRepository(Cash)
		private cashRepository: Repository<Cash>,
	) {}
	findOne(id: number) {
		return this.cashRepository.findOneBy({ id: id })
	}

	async update(id: number, updateCashDto: UpdateCashDto) {
		return this.cashRepository.update(id, updateCashDto)
	}
}
