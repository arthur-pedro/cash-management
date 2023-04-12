import { ForeignKey, HasOne } from 'sequelize-typescript'
import { CashFlow } from 'src/app/cash-flow/entities/cash-flow.entity'
import { Cash } from 'src/app/cash/entities/cash.entity'
import { User } from 'src/app/users/entities/user.entity'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Goal } from './goal.entity'

@Entity('clients')
export class Client {
	@PrimaryGeneratedColumn()
	public id: number

	@Column({ name: 'user_id' })
	public userId: number

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date

	@OneToMany(() => CashFlow, (cashFlow) => cashFlow.client, {
		eager: true,
	})
	@JoinColumn({ name: 'id', referencedColumnName: 'clientId' })
	cashFlow: CashFlow[]

	@OneToOne(() => Cash, { cascade: true, eager: true })
	@JoinColumn({ name: 'id', referencedColumnName: 'clientId' })
	cash: Cash

	@OneToMany(() => Goal, (goal) => goal.client, {
		eager: true,
	})
	@JoinColumn({ name: 'id', referencedColumnName: 'clientId' })
	goals: Goal[]
}
