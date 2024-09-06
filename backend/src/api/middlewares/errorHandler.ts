import Koa from "koa";

export const errorHandler: Koa.Middleware = async (ctx, next) => {
  try {
    await next(); // Execute the next middleware or route
  } catch (err: any) {
    ctx.status = err.status || 500;
    ctx.body = {
      success: false,
      message: err.message || "Internal Server Error",
    };
    // Log the error (you can log it to a file, or monitoring system like Sentry)
    log("error", err);
  }
};
