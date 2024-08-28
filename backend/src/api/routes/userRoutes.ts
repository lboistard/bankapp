import { type Context } from "koa";
import Router from "koa-router";
import { UserController } from "../controllers/userController";

const userRouter = new Router({
  prefix: "/users",
});

const userController = new UserController();

/**
 * Register a new user
 */
userRouter.post("/register", async (ctx: Context) => {
  interface RequestBody {
    email: string;
    password: string;
  }

  const { email, password } = ctx.request.body as RequestBody;

  try {
    const user = await userController.register({ email, password });
    ctx.body = user;
    ctx.status = 201; // Created
  } catch (error: unknown) {
    ctx.status = 400; // Bad Request
    log("error", `Error in /users/register ${error}`);
  }
});

/**
 * Add an account to the user
 */
userRouter.post("/link-account", async (ctx: Context) => {
  try {
    // dummy data
    userController.linkAccount({
      userId: "123",
      bankName: "bankName",
      accountNumber: "accountNumber",
      code: 123,
      postalCode: "postal",
    });

    ctx.status = 201; // Created
  } catch (error: unknown) {
    ctx.status = 400; // Bad Request
    log("error", `Error in /users/link-account ${error}`);
  }
});

export default userRouter;
