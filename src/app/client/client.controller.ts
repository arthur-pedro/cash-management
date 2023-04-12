import { Controller, Get, Param } from '@nestjs/common'
import { ClientService } from './client.service'

@Controller('client')
export class ClientController {
	constructor(private readonly clientService: ClientService) {}
	@Get()
	findAll() {
		return this.clientService.findAll()
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		const user = await this.clientService.findOne(+id)
		return user
	}
}
