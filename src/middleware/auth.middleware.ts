import {
	ForbiddenException,
	Injectable,
	NestMiddleware,
	UnauthorizedException,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { User } from 'src/app/users/entities/user.entity'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
	constructor(private jwtService: JwtService) {}

	async use(req: Request | any, res: Response, next: () => void) {
		const bearerHeader = req.headers.authorization
		const accessToken = bearerHeader && bearerHeader.split(' ')[1]
		const bearerValue = bearerHeader && bearerHeader.split(' ')[0]

		if (!bearerHeader || !accessToken || bearerValue != 'Bearer') {
			throw new UnauthorizedException('Token de acesso inválido/não encontrado')
		}

		try {
			const user = await this.jwtService.verify(accessToken, { secret: 'KEY' })
			req.user = user
		} catch (error) {
			throw new ForbiddenException('Não autorizado')
		}

		next()
	}
}
