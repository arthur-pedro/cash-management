import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity('cash')
export class Cash {
	@PrimaryGeneratedColumn()
	public id: number

	@Column({ name: 'client_id' })
	public clientId: number

	@Column({ name: 'value' })
	public value: number

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date
}
