import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { MessageForm } from 'src/components/MessageForm';
import { getUser, logout } from 'src/queries/user';
import { IUser } from 'src/types/user';
import styles from './messages.module.css';

export const Messages = () => {
	const history = useHistory();

	const [user, setUser] = useState<string>();

	const onLogout = async () => {
		try{
			await logout();
			history.push('/');
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		const onGetUser = async () => {
			try {
				const response = await getUser();
				if (!response.ok) {
					history.push('/');
					return;
				}
				const user: IUser = await response.json();
				setUser(user.username);
			} catch (err) {
				console.error(err);
			}
		};
		onGetUser();
	});
	return (
		<div className={styles.messages}>
			<div className={styles.username}>
				Logged in as: {user}
				<button className={styles.logoutButton}
					onClick={onLogout}
				>Logout</button>
			</div>
			<div>Messages</div>
			<MessageForm />
		</div>
	);
};
