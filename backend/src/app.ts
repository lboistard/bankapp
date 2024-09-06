import Koa from "koa";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import path from "path";

import docRouter from "./swagger/router";
import router from "./api/routes";
import connectDB from "./mongoose";
import Authenticator from "./libs/credit_agricole/authenticator";
import Accounts from "./libs/credit_agricole/accounts";
import { errorHandler } from "./api/middlewares/errorHandler";

const swaggerUiAssetsPath = require("swagger-ui-dist").getAbsoluteFSPath();
const app = new Koa();

// Swagger
app.use(serve(swaggerUiAssetsPath));
app.use(serve(path.join(__dirname, "public")));
app.use(docRouter.routes());

// Connect to MongoDB
connectDB();

console.log("25367815234");

// Body parser
app.use(bodyParser());

// Apply error handling middleware globally
app.use(errorHandler);

// Register routes
app.use(router.routes()).use(router.allowedMethods());

export default app;
