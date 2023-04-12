import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Asset } from './asset.entity'
import { Client } from './client.entity'

@Entity('goals')
export class Goal {
	@PrimaryGeneratedColumn()
	public id: number

	@Column({ name: 'client_id' })
	public clientId: number

	@Column()
	public name: string

	@CreateDateColumn({ name: 'created_at', generated: true })
	public createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', generated: true })
	public updatedAt: Date

	@ManyToOne(() => Client, (client) => client.goals)
	@JoinColumn({ name: 'client_id' })
	client: Client

	@ManyToMany(() => Asset, (asset) => asset.goals, { eager: true })
	@JoinTable({
		name: 'portfolios',
		joinColumn: {
			name: 'goal_id',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'asset_id',
			referencedColumnName: 'id',
		},
	})
	assets: Asset[]
}
