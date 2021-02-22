import { useState } from 'react';
import { useHistory } from 'react-router';
import { login } from '../queries/user';
import styles from './form.module.css';

export const LoginForm = () => {
	const history = useHistory();

	const [username, setUsername] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [errorMessage, setErrorMessage] = useState<string>();

	const onInputChange = (
		input: 'username' | 'password',
		event: React.FormEvent<HTMLInputElement>
	) => {
		if (input === 'username') {
			setUsername(event.currentTarget.value);
		}
		if (input === 'password') {
			setPassword(event.currentTarget.value);
		}
	};
	const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		try {
			evt.preventDefault();
			if (!username || !password) {
				setErrorMessage('Please input a password and username.');
				return;
			}
			const formData = new FormData();
			formData.append('username', username);
			formData.append('password', password);
			const response = await login(formData);
			if (response.ok) {
				history.push('/messages');
			} else {
				const responseError = await response.json();
				setErrorMessage(responseError.message);
			}
		} catch (err) {
			setErrorMessage('Unable to login at this time, please try again later.');
			console.error(err);
		}
	};
	return (
		<div>
			<h5>Login</h5>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					placeholder="username"
					onChange={(evt) => onInputChange('username', evt)}
				/>
				<input
					placeholder="password"
					type="password"
					onChange={(evt) => onInputChange('password', evt)}
				/>
				<button type="submit">Login</button>
				<div className={styles.errorMessage}>{errorMessage}</div>
			</form>
		</div>
	);
};
