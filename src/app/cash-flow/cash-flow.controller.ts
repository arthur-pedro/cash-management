import {
	Body,
	Controller,
	HttpException,
	HttpStatus,
	Post,
	Res,
} from '@nestjs/common'
import { Response } from 'express'
import { CashService } from '../cash/cash.service'
import { ClientService } from '../client/client.service'
import { CashFlowOperation } from '../util/enum/cash-flow-operation.enum'
import { CashFlowService } from './cash-flow.service'
import { CreateCashFlowDto } from './dto/create-cash-flow.dto'

@Controller('cash-flow')
export class CashFlowController {
	constructor(
		private readonly cashFlowService: CashFlowService,
		private readonly clientService: ClientService,
		private readonly cashService: CashService,
	) {}

	@Post()
	async create(
		@Res() res: Response,
		@Body() createCashFlowDto: CreateCashFlowDto,
	) {
		try {
			const client = await this.clientService.findOne(
				createCashFlowDto.clientId,
			)

			if (!client) {
				throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND)
			}

			let cashResult = 0
			if (createCashFlowDto.operation === CashFlowOperation.OUT) {
				if (client.cash.value < createCashFlowDto.value) {
					throw new HttpException(
						'Este cliente não tem caixa necessário para realizar esta operação',
						HttpStatus.BAD_REQUEST,
					)
				}
				cashResult = client.cash.value - createCashFlowDto.value
			} else {
				cashResult = client.cash.value + createCashFlowDto.value
			}

			client.cash.value = cashResult

			const cashFlow = await this.cashFlowService.create(createCashFlowDto)

			await this.cashService.update(client.cash.id, client.cash)

			return res.status(HttpStatus.CREATED).send(cashFlow)
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error)
		}
	}
}
