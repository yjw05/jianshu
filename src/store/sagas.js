import { all, call } from 'redux-saga/effects';
import { sagas as headerSagas } from '../common/header/store';
import { sagas as homeSagas } from '../pages/home/store'

export default function* rootSaga() {
	yield all([
		call(headerSagas),
		call(homeSagas)
	]);
}