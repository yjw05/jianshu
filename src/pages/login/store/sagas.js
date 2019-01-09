import { takeEvery, put } from "redux-saga/effects";
import { LoginSuccess } from "./actionCreators";
import { LOGIN } from "./constants";
import Axios from "axios";

import "./mockdata";

function* changleLoginStatus(action) {
  const account = action.account;
  const password = action.password;
  try {
    const res = yield Axios.get(
      "/api/login?account=" + account + "&password=" + password
    );
    const result = res.data.data;
    if (result) {
      yield put(LoginSuccess());
    } else {
      alert("失败");
    }
  } catch (e) {
    console.log(e);
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN, changleLoginStatus);
}
export default loginSaga;
