import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import Topic from './components/Topic';
import List from './components/List';
import Recommed from './components/Recommed';
import Writer from './components/Writer';

import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style'


class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4598/6eab2d9b6506c6302c4b5602405021a9e321408b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommed />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}
}

const mapState = (state) => {
	return {
		list: state.getIn(['home', 'topicList'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		getTopic() {
			const action = actionCreators.getInitHome();
			dispatch(action);
		}
	}
}

export default connect(mapState, mapDispatch)(Home);