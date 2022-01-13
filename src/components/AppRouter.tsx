import { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useUserContext } from '../context';
import { privateRoutes, publicRoutes, RouteNames } from '../router';

const AppRouter: FC = () => {
	const { isAuth } = useUserContext();

	return isAuth ? (
		<Switch>
			{privateRoutes.map((route) => (
				<Route
					path={route.path}
					exact={route.exact}
					component={route.component}
					key={route.path}
				/>
			))}
			<Redirect to={RouteNames.LOGIN} />
		</Switch>
	) : (
		<Switch>
			{publicRoutes.map((route) => (
				<Route
					path={route.path}
					exact={route.exact}
					component={route.component}
					key={route.path}
				/>
			))}
			<Redirect to={RouteNames.EVENT} />
		</Switch>
	);
};

export default AppRouter;
