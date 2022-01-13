import { Layout, Avatar, Button } from 'antd';
import { FC } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useUserContext } from '../context';

const Navbar: FC = () => {
	const { logout, isAuth, user } = useUserContext();
	const name = user?.Username.toUpperCase();

	const logoutHandler = () => {
		logout();
		localStorage.removeItem('auth');
	};

	return (
		<Layout.Header style={{ width: '100%' }}>
			{isAuth ? (
				<>
					<Button type="primary" size="large" onClick={logoutHandler}>
						Log Out
					</Button>
					<div style={{ color: '#000', marginLeft: '20px' }}>{name}</div>
					<div className="user">
						<Avatar src="https://joeschmoe.io/api/v1/random" />
					</div>
				</>
			) : (
				<div className="user">
					<Avatar size={60} icon={<UserOutlined />} />
				</div>
			)}
		</Layout.Header>
	);
};

export default Navbar;
