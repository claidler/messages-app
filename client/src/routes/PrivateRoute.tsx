import React, { useEffect, useState } from 'react';
import { getUser } from '../queries/user';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute: React.FC<any> = ({ children, ...rest }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<any>();

	useEffect(() => {
		const onGetUser = async () => {
			try {
				let user = await getUser();
				if (!user.ok) {
					setLoading(false);
					return;
				}
				user = await user.json();
				setUser(user);
				setLoading(false);
			} catch (err) {
				setLoading(false);
				console.error(err);
			}
		};
		onGetUser();
	}, []);
	if (loading) return <div>loading...</div>;

	return (
		<Route
			{...rest}
			render={() =>
				user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
						}}
					/>
				)
			}
		/>
	);
};
