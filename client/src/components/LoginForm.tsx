import { useState, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router';
import { login } from '../queries/user';
import styles from './form.module.css';

export const LoginForm = () => {
	const history = useHistory();

	const [username, setUsername] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [errorMessage, setErrorMessage] = useState<string>();
	
	const onTextInputChange = (e: React.FormEvent<HTMLInputElement>) => (setStateFn: Dispatch<SetStateAction<string>>) => setStateFn(e.currentTarget.value)

	const handleUsernameChange = (
		e: React.FormEvent<HTMLInputElement>
	) => onTextInputChange(e)(setUsername);
	
	const handlePasswordChange = (
		e: React.FormEvent<HTMLInputElement>
	) => onTextInputChange(e)(setPassword);
			
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
					onChange={handleUsernameChange}
				/>
				<input
					placeholder="password"
					type="password"
					onChange={handlePasswordChange}
				/>
				<button type="submit">Login</button>
				<div className={styles.errorMessage}>{errorMessage}</div>
			</form>
		</div>
	);
};
