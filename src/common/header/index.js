import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTittle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from "./style";

class Header extends Component {
	getListArea() {
		const {
			focused,
			list,
			page,
			totalPage,
			mouseIn,
			handleMouseEnter,
			handleMouseLeave,
			handleChangePage
		} = this.props;
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				if (newList[i]) {
					pageList.push(
						<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
					);
				}
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTittle>
						热门搜索
            <SearchInfoSwitch
							onClick={() => {
								handleChangePage(page, totalPage, this.spinIcon);
							}}
						>
							<i
								ref={icon => {
									this.spinIcon = icon;
								}}
								className="iconfont spin"
							>
								&#xe858;
              </i>
							换一批
            </SearchInfoSwitch>
					</SearchInfoTittle>
					<SearchInfoList>{pageList}</SearchInfoList>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}

	render() {
		const {
			focused,
			list,
			handleInputFocus,
			handleInputBlur,
			loginStatus,
			logout
		} = this.props;
		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo />
				</Link>

				<Nav>
					<Link to="/">
						<NavItem className="left active">首页</NavItem>{" "}
					</Link>
					<NavItem className="left">下载App</NavItem>
					{loginStatus ? (
						<NavItem className="right" onClick={logout}>退出</NavItem>
					) : (
							<Link to="/login">
								<NavItem className="right">登录</NavItem>
							</Link>
						)}

					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition in={focused} timeout={200} classNames="slide">
							<NavSearch
								className={focused ? "focused" : ""}
								onFocus={() => {
									handleInputFocus(list);
								}}
								onBlur={handleInputBlur}
							/>
						</CSSTransition>
						<i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
							&#xe60b;
            </i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>

				<Addition>
					<Link to="/write">
						<Button className="writting">
							<i className="iconfont">&#xe615;</i>
							写文章
          				</Button>
					</Link>

					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		focused: state.getIn(["header", "focused"]),
		list: state.getIn(["header", "list"]),
		page: state.getIn(["header", "page"]),
		totalPage: state.getIn(["header", "totalPage"]),
		mouseIn: state.getIn(["header", "mouseIn"]),
		// state.get('header').get('focused')

		loginStatus: state.getIn(["login", "loginStatus"])
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus(list) {
			// (list.size === 0) && dispatch(actionCreators.getList());
			if (list.size === 0) {
				dispatch(actionCreators.getList());
			}
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		},
		logout() {
			dispatch(loginActionCreators.LogoutSuccess());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
