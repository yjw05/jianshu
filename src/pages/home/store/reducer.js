import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: []
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.GET_TOPIC_LIST:
			return state.set('topicList', action.data);
		default:
			return state;
	}
}