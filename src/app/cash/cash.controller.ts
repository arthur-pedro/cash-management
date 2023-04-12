import { Body, Controller, Get, Param, Patch } from '@nestjs/common'
import { CashService } from './cash.service'
import { UpdateCashDto } from './dto/update-cash.dto'

@Controller('cash')
export class CashController {
	constructor(private readonly cashService: CashService) {}
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.cashService.findOne(+id)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateCashDto: UpdateCashDto) {
		return this.cashService.update(+id, updateCashDto)
	}
}
