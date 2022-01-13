import { ReactNode, useReducer } from 'react';
import authReducer, { initialState } from '../auth';
import { AuthActionEnum, UserActionEnum } from '../auth/types';
import { AppContextInterface, UserContext } from '../context';

type Props = {
	children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const logout = () => {
		dispatch({ type: AuthActionEnum.SET_LOGOUT, payload: false });
	};

	const login = (v: boolean) => {
		dispatch({ type: AuthActionEnum.SET_LOGIN, payload: v });
	};

	const setUser = (values: any) => {
		dispatch({ type: UserActionEnum.SET_USER, payload: values });
	};

	const userValues: AppContextInterface = {
		isAuth: state.isAuth,
		logout,
		login,
		user: { ...state.user },
		setUser,
	};

	return (
		<UserContext.Provider value={userValues}>{children}</UserContext.Provider>
	);
};
