import Router from "koa-router";
import authRouter from "./authRoutes";
import userRoutes from "./userRoutes";

const router = new Router();

router.use(authRouter.routes(), authRouter.allowedMethods());
router.use(userRoutes.routes(), userRoutes.allowedMethods());

export default router;
