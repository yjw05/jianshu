import Mock from 'mockjs';
var Random = Mock.Random;
Mock.mock('/api/topicList', {
	"success": true,
	"data|10": [{
		"id|+1": 0,
		"title": '@cname()',
		"imgUrl": Random.image('32x32', '#FF6600')
	}]
})