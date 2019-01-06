import * as constants from './constants';
import { fromJS } from 'immutable';

export const getInitHome = () => ({
	type: constants.GET_INIT_HOME
});

export const getHomeData = (data) => ({
	type: constants.GET_HOME_DATA,
	data: fromJS(data)
});