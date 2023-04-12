import {
	BadRequestException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { User } from '../users/entities/user.entity'
import { UsersService } from '../users/users.service'

// $2b$10$HixW7s.VDf50kyc8x9snSukBm5qrUNPrV..QAh.eHWroeQJ6fgHcm <- 123456 @todo
@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private jwtService: JwtService,
	) {}
	async validateUser(email: string, password: string): Promise<any> {
		if (!email || !password) {
			throw new BadRequestException('Payload inválido')
		}
		const user = await this.usersService.findOneByEmail(email)
		if (!user) {
			throw new UnauthorizedException('Usuário ou Senha Inválidos')
		}
		const dbPassword = user.password
		const isMatch = await bcrypt.compare(password, dbPassword)

		if (isMatch) {
			return await this.gerarToken(user)
		}
		throw new UnauthorizedException('Usuário ou Senha Inválidos')
	}

	async gerarToken(payload: User) {
		return {
			access_token: this.jwtService.sign(
				{ email: payload.email },
				{
					secret: 'KEY',
					expiresIn: '3600s',
				},
			),
		}
	}
}
