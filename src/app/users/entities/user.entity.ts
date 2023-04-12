import { HasOne } from 'sequelize-typescript'
import { Client } from 'src/app/client/entities/client.entity'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: string

	@Column({ nullable: false, type: 'varchar', length: 200 })
	email: string

	@Column({ nullable: false, type: 'varchar', length: 200, name: 'full_name' })
	fullName: string

	@Column({ nullable: false, type: 'varchar', length: 200, name: 'best_name' })
	bestName: string

	@Column({ nullable: false })
	status: string

	@Column({ nullable: false })
	type: string

	@Column({ nullable: false })
	password: string

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date

	@OneToOne(() => Client, { cascade: true, eager: true })
	@JoinColumn({ name: 'id' })
	client: Client
}
