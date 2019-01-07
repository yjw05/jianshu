import Mock from "mockjs";
var Random = Mock.Random;
Mock.mock("/api/home", {
  success: true,
  "topicList|10": [
    {
      "id|+1": 0,
      title: "@cname()",
      imgUrl: Random.image("32x32", "#FF6600")
    }
  ],
  "articleList|5": [
    {
      "id|+1": 0,
      title: "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
      desc:
        "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }
  ],
  "recommendList|5": [
    {
      "id|+1": 0,
      imgUrl: Random.image("280x50", "#FF6600")
    }
  ]
});

Mock.mock("/api/homeList?page=0", {
  success: true,
  data: [
    {
      id: 5,
      title: "胡歌12年后首谈车祸",
      desc:
        "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 6,
      title: "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
      desc:
        "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 7,
      title: "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
      desc:
        "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 8,
      title: "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
      desc:
        "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }
  ]
});
