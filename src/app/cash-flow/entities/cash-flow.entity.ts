import { Client } from 'src/app/client/entities/client.entity'
import { CashFlowOperation } from 'src/app/util/enum/cash-flow-operation.enum'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity('cash_flows')
export class CashFlow {
	@PrimaryGeneratedColumn()
	public id: string

	@Column({ name: 'client_id' })
	public clientId: number

	@Column()
	public value: number

	@Column()
	public type: string

	@Column()
	public holder: string

	@Column()
	public operation: CashFlowOperation

	@CreateDateColumn({ name: 'created_at', generated: true })
	public createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', generated: true })
	public updatedAt: Date

	@ManyToOne(() => Client, (client) => client.cashFlow)
	@JoinColumn({ name: 'client_id' })
	client: Client
}
