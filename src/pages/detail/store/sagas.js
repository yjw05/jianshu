import { takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { changeDetailData } from "./actionCreators";
import { GET_DETAIL } from "./constants";
import "./mockdata";

function* changeDetail(action) {
  let id = action.id;
  try {
    const res = yield Axios.get("/api/detail/" + id);
    const data = res.data.data;
    const action = changeDetailData(data.title, data.content);
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* detailSaga() {
  yield takeEvery(GET_DETAIL, changeDetail);
}
export default detailSaga;
