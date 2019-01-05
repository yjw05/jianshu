import { put, takeEvery } from 'redux-saga/effects';
import { getTopicList } from './actionCreators';
import { GET_INIT_TOPIC } from './constants';
import Axios from 'axios';

import './mockdata'

function* getInitTopic() {
	try {
		const res = yield Axios.get("/api/topicList");
		const data = res.data;
		const action = getTopicList(data.data);
		yield put(action);
	} catch (e) {
		console.log(e);
	}
}

function* homeSaga() {
	yield takeEvery(GET_INIT_TOPIC, getInitTopic);
}

export default homeSaga;