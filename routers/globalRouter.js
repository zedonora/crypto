import express from "express";
import routes from "../routers";
import { home, detail } from "../controllers/globalController";
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.detail, detail);

export default globalRouter;