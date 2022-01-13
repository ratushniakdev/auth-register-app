import { Layout } from 'antd';
import { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import FooterApp from './components/Footer';
import Navbar from './components/Navbar';
import { useUserContext } from './context';

const App: FC = () => {
	const { setUser, login } = useUserContext();

	useEffect(() => {
		const userData = localStorage.getItem('user');
		const authData = localStorage.getItem('auth');
		if (!authData && !userData) return;
		const user = JSON.parse(userData!);
		const auth = JSON.parse(authData!);
		setUser(user);
		login(auth);
	}, []);

	return (
		<Layout>
			<Navbar />
			<Layout.Content>
				<AppRouter />
			</Layout.Content>
			<FooterApp />
		</Layout>
	);
};

export default App;
