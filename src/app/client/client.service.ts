import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'
import { Client } from './entities/client.entity'

@Injectable()
export class ClientService {
	constructor(
		@InjectRepository(Client)
		private clientsRepository: Repository<Client>,
	) {}
	findAll() {
		return this.clientsRepository.find()
	}

	async findOne(id: number) {
		return this.clientsRepository.findOneBy({ id: id })
	}
}
