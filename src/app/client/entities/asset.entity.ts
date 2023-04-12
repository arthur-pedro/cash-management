import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Goal } from './goal.entity'

@Entity('assets')
export class Asset {
	@PrimaryGeneratedColumn()
	public id: number

	@Column()
	public name: string

	@Column()
	public description: string

	@Column()
	public price: number

	@ManyToMany(() => Goal, (goal) => goal.assets)
	goals?: Goal[]
}
