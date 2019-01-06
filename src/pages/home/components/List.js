import React, { Component } from 'react';
import {ListItem,ListInfo } from '../style';

class List extends Component {
	render() {
		return (
			<div>
				<ListItem>
				<img className="pic" src="//upload-images.jianshu.io/upload_images/14336331-d1cf0ebc029f59c8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
				<ListInfo>
					<h3 className="title">哪一瞬间让你觉得演员的演技炸裂</h3>
					<p className="desc">有着“娘娘”称号的孙俪演技不得不让人佩服，尤其哭戏更是吊打圈内的花瓶们，完全展示出一个演员演技的沉淀和积累。 《楚乔传》相信大家一定多多少少了解...</p>
					 
				</ListInfo>
			</ListItem>
			<ListItem>
				<img className="pic" src="//upload-images.jianshu.io/upload_images/14336331-d1cf0ebc029f59c8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
				<ListInfo>
					<h3 className="title">哪一瞬间让你觉得演员的演技炸裂</h3>
					<p className="desc">有着“娘娘”称号的孙俪演技不得不让人佩服，尤其哭戏更是吊打圈内的花瓶们，完全展示出一个演员演技的沉淀和积累。 《楚乔传》相信大家一定多多少少了解...</p>
					 
				</ListInfo>
			</ListItem>
			<ListItem>
				<img className="pic" src="//upload-images.jianshu.io/upload_images/14336331-d1cf0ebc029f59c8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
				<ListInfo>
					<h3 className="title">哪一瞬间让你觉得演员的演技炸裂</h3>
					<p className="desc">有着“娘娘”称号的孙俪演技不得不让人佩服，尤其哭戏更是吊打圈内的花瓶们，完全展示出一个演员演技的沉淀和积累。 《楚乔传》相信大家一定多多少少了解...</p>
					 
				</ListInfo>
			</ListItem>
			</div>
			
		)
	}
}

export default List;