import Mock from "mockjs";

Mock.mock("/api/login?account=1&password=1", {
  success: true,
  data: true
});
