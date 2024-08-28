import Koa from "koa";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";

import docRouter from "./swagger/router";
import router from "./api/routes";
import connectDB from "./mongoose";

const swaggerUiAssetsPath = require("swagger-ui-dist").getAbsoluteFSPath();
const app = new Koa();

// Swagger
app.use(serve(swaggerUiAssetsPath));
app.use(docRouter.routes());

// Connect to MongoDB
connectDB();

// Body parser
app.use(bodyParser());

// Register routes
app.use(router.routes()).use(router.allowedMethods());

export default app;
