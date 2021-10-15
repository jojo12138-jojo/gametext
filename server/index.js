// node 后端服务器
const test = require("./api/test");
const fs = require("fs"); // file-system ,进行文件操作,核心模块
const path = require("path"); // 处理路径
const bodyParser = require("body-parser"); // 解析json之类的吧
const express = require("express"); //Express的request可以用于获取前端传输过来的数据，而response则可以像前端返回数据，
const app = express();

app.all("*", function(req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options") {
    console.log("req", req);
    res.send(200);
  }
  //让options尝试请求快速结束
  else next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("./api/test", test); //后端api路由
app.listen(1314); // 监听端口
console.log("服务启动");
