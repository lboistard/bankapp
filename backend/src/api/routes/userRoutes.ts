import { type Context } from "koa";
import Router from "koa-router";
import { UserController } from "../controllers/userController";

const userRouter = new Router({
  prefix: "/users",
});

const userController = new UserController();

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
