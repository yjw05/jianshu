import * as constants from "./constants";

export const login = (account, password) => ({
	type: constants.LOGIN,
	account,
	password
});

export const LoginSuccess = () => ({
	type: constants.LOGIN_SUCCESS,
	loginStatus: true
});

export const LogoutSuccess = () => ({
	type: constants.LOGOUT_SUCCESS,
	loginStatus: false
});
