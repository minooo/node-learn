const koa = require("koa");
const app = new koa();
const config = require("./2-hello-html-config");

app.use(ctx => {
  ctx.body = "Hello Koa!";
});

app.listen(config.port, config.hostname, () => {
  const addr = `${config.hostname}:${config.port}`;
  console.log(`App runing at ${addr}`);
});
