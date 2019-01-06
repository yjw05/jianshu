import { put, takeEvery } from 'redux-saga/effects';
import { getHomeData } from './actionCreators';
import { GET_INIT_HOME } from './constants';
import Axios from 'axios';

import './mockdata'

function* getInitHome() {
	try {
		const res = yield Axios.get("/api/home");
		const data = res.data;
		const action = getHomeData(data.topicList);
		yield put(action);
	} catch (e) {
		console.log(e);
	}
}

function* homeSaga() {
	yield takeEvery(GET_INIT_HOME, getInitHome);
}

export default homeSaga;