import express from "express";
import routes from "../routes";
import { contHome, contJoin, contLogin, contLogout, contSearch } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, contHome);
globalRouter.get(routes.join, contJoin);
globalRouter.get(routes.login, contLogin);
globalRouter.get(routes.logout, contLogout);
globalRouter.get(routes.search, contSearch);

export default globalRouter;
