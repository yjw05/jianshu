import * as constants from './constants';
import { fromJS } from 'immutable';

export const getInitTopic = () => ({
	type: constants.GET_INIT_TOPIC
});

export const getTopicList = (data) => ({
	type: constants.GET_TOPIC_LIST,
	data: fromJS(data)
});