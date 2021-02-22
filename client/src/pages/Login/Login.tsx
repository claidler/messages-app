import React from 'react';
import { LoginForm } from '../../components/LoginForm';
import { RegisterForm } from '../../components/RegisterForm';
import styles from './login.module.css';

export const Login = () => {
	return (
		<div className={styles.forms}>
			<LoginForm />
			<RegisterForm />
		</div>
	);
};
