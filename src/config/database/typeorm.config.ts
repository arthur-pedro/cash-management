import { SequelizeModuleOptions } from '@nestjs/sequelize'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: process.env.DB_HOST || 'localhost',
	port: 5432,
	username: process.env.DB_USER || 'pedro',
	password: process.env.DB_PASS || '310896',
	database: process.env.DB_NAME || 'asset_allocation',
	entities: [__dirname + '/../../**/*.entity.{js,ts}'],
	synchronize: false,
	// ssl: {
	// 	rejectUnauthorized: false,
	// },
}

export const sequelizeOrmConfig: SequelizeModuleOptions = {
	dialect: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'pedro',
	password: '310896',
	database: 'asset_allocation',
	models: [],
}
