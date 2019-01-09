import { all, call } from "redux-saga/effects";
import { sagas as headerSagas } from "../common/header/store";
import { sagas as homeSagas } from "../pages/home/store";
import { sagas as detailSagas } from "../pages/detail/store";
import { sagas as loginSagas } from "../pages/login/store";

export default function* rootSaga() {
  yield all([
    call(headerSagas),
    call(homeSagas),
    call(detailSagas),
    call(loginSagas)
  ]);
}
