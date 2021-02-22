import React from 'react';
import { PrivateRoute } from './PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Messages } from '../pages';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<PrivateRoute path="/messages">
					<Messages />
				</PrivateRoute>
				<Route default path="/">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}
