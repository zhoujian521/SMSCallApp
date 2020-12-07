const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // res.write("helloworld");
    let buf = fs.readFileSync("./index.html");
    res.write(buf);
    res.end();
  })
  .listen(3000, () => {
    console.log("服务器已启动");
  });
