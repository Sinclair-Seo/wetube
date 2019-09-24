import express from "express";
import routes from "../routes";
import { contUsers, contUserDetail, contEditProfile, contChangePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, contUsers);
userRouter.get(routes.userDetail, contUserDetail);
userRouter.get(routes.editProfile, contEditProfile);
userRouter.get(routes.changePassword, contChangePassword);

export default userRouter;
