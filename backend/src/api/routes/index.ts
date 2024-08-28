import Router from "koa-router";
import userRoutes from "./userRoutes";

const router = new Router();

router.use(userRoutes.routes(), userRoutes.allowedMethods());

export default router;
