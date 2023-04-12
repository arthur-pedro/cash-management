import { Controller, Get, Req } from '@nestjs/common'
import { Request } from 'express'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	async findAll() {
		return await this.usersService.findAll()
	}

	@Get('logged')
	async getLoggedUser(@Req() request: Request) {
		return await this.usersService.findOneByEmail(request.user['email'])
	}
}
