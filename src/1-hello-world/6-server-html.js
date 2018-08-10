const http = require("http");
const fs = require("fs");
const path = require("path");
const config = require("./2-hello-html-config");
const compress = require("./1-helper/compress");
const isFresh = require("./1-helper/cache");
const openUrl = require("./1-helper/openUrl");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  const filepath = path.join(config.root, "./src/1-hello-world/index.html");

  fs.stat(filepath, (err, stats) => {
    if (isFresh(stats, req, res)) {
      res.statusCode = 304;
      res.end();
      return;
    }
    compress(fs.createReadStream(filepath), req, res);
  });
});

server.listen(config.port, config.hostname, () => {
  const addr = `http://${config.hostname}:${config.port}`;
  console.log(`Server runing at ${addr}`);
  openUrl(addr);
});
