import { type Context } from "koa";
import Router from "koa-router";
import { AuthenticationController } from "../controllers/authController";

const authRouter = new Router({
  prefix: "/auth",
});

const authController = new AuthenticationController();

/**
 * Register a new user
 */
authRouter.post("/register", async (ctx: Context) => {
  interface RequestBody {
    email: string;
    password: string;
  }

  const { email, password } = ctx.request.body as RequestBody;
  const user = await authController.register({ email, password });
  ctx.body = user;
});

export default authRouter;
