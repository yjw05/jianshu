import * as constants from "./constants";

export const getDetail = id => ({
  type: constants.GET_DETAIL,
  id
});

export const changeDetailData = (title, content) => ({
  type: constants.CHANGE_DETAIL_DATA,
  title,
  content
});
