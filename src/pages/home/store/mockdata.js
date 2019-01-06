import Mock from 'mockjs';
var Random = Mock.Random;
Mock.mock('/api/home', {
	"success": true,
	"topicList|10": [{
		"id|+1": 0,
		"title": '@cname()',
		"imgUrl": Random.image('32x32', '#FF6600')
	}],
	"articleList|10": [{
		"id|+1": 0,
		"title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
		"desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
		"imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
	}],
	"recommendList": [{
		"id": 1,
		"imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
	}, {
		"id": 2,
		"imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
	}]
})