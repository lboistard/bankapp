import Koa from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();

router.get("/api", (ctx) => {
  ctx.body = { message: "Hello from the API!" };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("API server running on http://localhost:3000");
});
