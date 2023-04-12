import {
	Column,
	Entity,
	JoinColumn,
	ManyToMany,
	ManyToOne,
	OneToOne,
	PrimaryColumn,
} from 'typeorm'
import { Asset } from './asset.entity'
import { Goal } from './goal.entity'

@Entity('portfolios')
export class Portfolio {
	@PrimaryColumn({ name: 'goal_id', primary: true })
	public goalId: number

	@PrimaryColumn({ name: 'asset_id', primary: true })
	public assetId: number

	@Column()
	public custody: string

	@Column()
	public amount: number
}
