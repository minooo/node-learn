const http = require("http");

const port = 3000;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world! success~ \n");
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${3000}`);
});
