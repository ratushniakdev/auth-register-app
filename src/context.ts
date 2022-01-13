import { createContext, useContext } from 'react';
import { User } from './auth/types';

const foo = () => {};

type SetUser = (value: any) => void;

export interface AppContextInterface {
	user: User;
	logout: () => void;
	login: (v: boolean) => void;
	setUser: SetUser;
	isAuth: boolean;
}

const initialValues: AppContextInterface = {
	user: { Username: '', Nickname: '', password: '', remember: true },
	isAuth: false,
	setUser: foo,
	logout: foo,
	login: foo,
};

export const UserContext = createContext<AppContextInterface>(initialValues);

export const useUserContext = () => useContext(UserContext);
