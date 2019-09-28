import express from "express";
import routes from "../routes";
import { contUsers, contUserDetail, contEditProfile, contChangePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, contEditProfile);
userRouter.get(routes.changePassword, contChangePassword);
userRouter.get(routes.userDetail, contUserDetail);

export default userRouter;
