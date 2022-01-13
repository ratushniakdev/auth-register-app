import { SmileOutlined } from '@ant-design/icons';
import { FC, useEffect } from 'react';
import { useUserContext } from '../context';

const Login: FC = () => {
	const { user, isAuth } = useUserContext();
	const name = user?.Username?.toUpperCase();

	useEffect(() => {
		localStorage.setItem('auth', JSON.stringify(isAuth));
	}, []);

	return (
		<div className="user__login">
			<span>Hi, {name}</span>
			<SmileOutlined />
		</div>
	);
};

export default Login;
