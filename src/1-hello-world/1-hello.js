const http = require("http");
const chalk = require("chalk");
const config = require("./2-hello-html-config");
const path = require("path");
const fs = require("fs");
const port = 3000;
const host = "127.0.0.1";
// 你好，世界
const server = http.createServer((req, res) => {
  const filepath = path.join(config.root, req.url);

  fs.stat(filepath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end(`${err}: is not valid directory or filepath`);
      return;
    }
    if (stats.isFile()) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      fs.createReadStream(filepath).pipe(res);
    } else if (stats.isDirectory()) {
      fs.readdir(filepath, (err, fils) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fils.forEach(item =>
          res.write(`<a href="${path.join(req.url, item)}">${item}</a><br/>`)
        );
        res.end();
      });
    }
  });
});

server.listen(port, host, () => {
  console.log(`Server running at ${chalk.green(`http://${host}:${3000}`)}`);
});
