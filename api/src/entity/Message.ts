import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Message {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column('text')
	message!: string;

	@Column('int')
	userId!: number;

	@ManyToOne(() => User, (user) => user.message)
	@JoinColumn({ name: 'userId' })
	user: User | undefined;
}
