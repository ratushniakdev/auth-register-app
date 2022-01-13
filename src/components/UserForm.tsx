import { Button, Checkbox, Form, Input } from 'antd';
import { FC } from 'react';
import { useUserContext } from '../context';

const UserForm: FC = () => {
	const { login, setUser } = useUserContext();

	const onFinish = (values: any) => {
		setUser(values);
		login(values);
		localStorage.setItem('user', JSON.stringify(values));
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Nickname"
				name="Nickname"
				rules={[{ required: true, message: 'Please input your nickname!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Username"
				name="Username"
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Log In
				</Button>
			</Form.Item>
		</Form>
	);
};

export default UserForm;
function key(key: any, arg1: string) {
	throw new Error('Function not implemented.');
}
