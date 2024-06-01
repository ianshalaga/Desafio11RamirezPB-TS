import { User } from "../src/interfaces/user.interface";

declare module "express-serve-static-core" {
  interface Request {
    customUser?: User;
  }
}
