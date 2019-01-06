import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [],
	acticleList: [],
	recommedList: []
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.GET_HOME_DATA:
			return state.set('topicList', action.data);
		default:
			return state;
	}
}