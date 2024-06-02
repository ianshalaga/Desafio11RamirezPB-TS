import winston from "winston";
import { CustomLogger } from "../types/logger.type";

const customLevelOptions = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    http: 4,
    debug: 5,
  },
  colors: {
    fatal: "brightRed",
    error: "red",
    warning: "yellow",
    info: "green",
    http: "cyan",
    debug: "blue",
  },
};

winston.addColors(customLevelOptions.colors);

const logger = winston.createLogger({
  levels: customLevelOptions.levels,
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});

export default logger as CustomLogger;
