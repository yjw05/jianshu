import Mock from "mockjs";
Mock.mock("/api/detail/0", {
  success: true,
  data: {
    title: "浙大博士生遗体被找到：人生实苦，不如放过自己",
    content:
      '<img src="//upload-images.jianshu.io/upload_images/10289013-53ffbf7907c89e81" alt="" /><p>尸体找到时，面目已经全非，可是，通过身上装着的校园卡和手机，以及亲属们的辩认，已经确认是他本人。</p><p> 这位优秀的青年，终于还是以这样的方式，和世界告别。</p><p>10月10日，侯京京在朋友圈发了最后一条消息，然后手机关机，再也无法取得联系。</p>'
  }
});
