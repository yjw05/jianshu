import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";

import Topic from "./components/Topic";
import List from "./components/List";
import Recommed from "./components/Recommed";
import Writer from "./components/Writer";

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4598/6eab2d9b6506c6302c4b5602405021a9e321408b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommed />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getInitHome();
    this.bindEvents();
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.props.changeShowScroll);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeShowScroll);
  }
}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = dispatch => {
  return {
    getInitHome() {
      const action = actionCreators.getInitHome();
      dispatch(action);
    },
    changeShowScroll() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Home);
