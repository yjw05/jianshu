import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { RecommedWrapper, RecommedItem } from "../style";

class Recommed extends PureComponent {
  render() {
    const { list } = this.props;
    return list.map(item => {
      return (
        <RecommedWrapper key={item.get("id")}>
          <RecommedItem imgUrl={item.get("imgUrl")} />
        </RecommedWrapper>
      );
    });
  }
}

const mapState = state => ({
  list: state.getIn(["home", "recommendList"])
});

export default connect(mapState)(Recommed);
