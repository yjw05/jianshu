import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 0,
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    case constants.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.nextPage
      });
    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.flag);
    default:
      return state;
  }
};
