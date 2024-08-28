import pino from "pino";
import pretty from "pino-pretty";

const stream = pretty({
  colorize: true,
  translateTime: true,
});

const logger = pino(stream);

type level = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

// @ts-ignore
global.log = function (level: level, message: string) {
  if (logger[level]) {
    logger[level](message);
  } else {
    logger.info(message); // Fallback to 'info' level
  }
};

export default logger;
