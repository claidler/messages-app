import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	JoinColumn,
	OneToMany,
} from 'typeorm';
import { Message } from './Message';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column('text')
	username!: string;

	@Column('varchar')
	password!: string;

	@OneToMany(() => Message, (message) => message.user)
	@JoinColumn()
	message: Message | undefined;
}
