import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { typeOrmConfig } from './config/database/typeorm.config'
import { UsersModule } from './app/users/users.module'
import { CashFlowModule } from './app/cash-flow/cash-flow.module'
import { CashModule } from './app/cash/cash.module'
import { ClientModule } from './app/client/client.module'
import { AuthModule } from './app/auth/auth.module'
import { AuthMiddleware } from './middleware/auth.middleware'
import { UsersController } from './app/users/users.controller'
import { ClientController } from './app/client/client.controller'
import { CashController } from './app/cash/cash.controller'
import { CashFlowController } from './app/cash-flow/cash-flow.controller'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

@Module({
	imports: [
		TypeOrmModule.forRoot(typeOrmConfig),
		UsersModule,
		CashFlowModule,
		CashModule,
		ClientModule,
		AuthModule,
		PassportModule,
		JwtModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(AuthMiddleware)
			.forRoutes(
				UsersController,
				ClientController,
				CashController,
				CashFlowController,
			)
	}
}
