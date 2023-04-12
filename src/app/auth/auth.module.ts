import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../users/entities/user.entity'
import { UsersController } from '../users/users.controller'
import { UsersService } from '../users/users.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.auth'

@Module({
	imports: [TypeOrmModule.forFeature([User]), PassportModule, JwtModule],
	controllers: [AuthController, UsersController],
	providers: [AuthService, UsersService, LocalStrategy],
})
export class AuthModule {}
