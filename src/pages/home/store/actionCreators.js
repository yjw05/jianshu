import * as constants from "./constants";

import Axios from "axios";
import { fromJS } from "immutable";

export const getInitHome = () => ({
  type: constants.GET_INIT_HOME
});

export const getHomeData = result => ({
  type: constants.GET_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
});

export const getMoreList = page => {
  return dispatch => {
    Axios.get("/api/homeList?page=" + page).then(res => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  };
};

export const toggleTopShow = flag => ({
  type: constants.TOGGLE_SCROLL_TOP,
  flag
});
