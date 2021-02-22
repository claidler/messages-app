import { useHistory } from 'react-router';
import { useState } from 'react';
import { register } from '../queries/user';
import styles from './form.module.css';

export const RegisterForm = () => {
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
			const response = await register(formData);
			if (response.ok) {
				history.push('/messages');
			} else {
				const responseError = await response.json();
				setErrorMessage(responseError.message);
			}
		} catch (err) {
			setErrorMessage('Unable registering to register new user');
			console.error(err);
		}
	};

	return (
		<div>
			<h5>Register</h5>
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
				<button type="submit">Register</button>
				<div className={styles.errorMessage}>{errorMessage}</div>
			</form>
		</div>
	);
};
