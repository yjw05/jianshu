import { put, takeEvery } from 'redux-saga/effects';
import { changeList } from './actionCreators';
import { GET_LIST } from './constants';
import Axios from 'axios';

import './mockdata'

function* getList() {
	try {
		const res = yield Axios.get("/api/headerList");
		const data = res.data;
		const action = changeList(data.data);
		yield put(action);
	} catch (e) {
		console.log(e);
	}
}

function* headerSaga() {
	yield takeEvery(GET_LIST, getList);
}

export default headerSaga;