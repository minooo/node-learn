const http = require("http");
const config = require("./2-hello-html-config");
const chalk = require("chalk");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("ContentType", "text/html");
  // res.write("<http><body><h1>Hello Http</h1></body></http>");
  res.write("<html>");
  res.write("<body>");
  res.write("Hello Http");
  res.write("</body>");
  res.write("</>");
  res.end();
});

server.listen(config.port, config.hostname, () => {
  const addr = `${config.hostname}:${config.port}`;
  console.log(`Server running at ${chalk.blue(addr)}`);
});
