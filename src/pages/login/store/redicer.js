import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
	loginStatus: false
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.LOGIN_SUCCESS:
			return state.set("loginStatus", action.loginStatus);
		case constants.LOGOUT_SUCCESS:
			return state.set("loginStatus", action.loginStatus);
		default:
			return state;
	}
};
