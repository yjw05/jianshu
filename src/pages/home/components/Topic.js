import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
	render() {
		const { list } = this.props;
		const newList = list.toJS();
		return (
			<TopicWrapper>
				{
					newList.map((item) => {
						return (
							<TopicItem key={item.id}>
								<img className="topic-pic" src={item.imgUrl} alt={item.title} />
								{item.title}
							</TopicItem>
						)
					})
				}


			</TopicWrapper>
		)


	}

	componentDidMount() {
		this.props.getTopic();
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

export default connect(mapState, mapDispatch)(Topic);