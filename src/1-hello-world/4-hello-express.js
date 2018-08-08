const express = require("express");
const app = express();
const config = require("./2-hello-html-config");

app.get("/", (req, res) => {
  res.send("<h1>123</h1>");
});

app.listen(config.port, config.hostname, () => {
  const addr = `${config.hostname}:${config.port}`;
  console.log(`Server listening at ${addr}`);
});
