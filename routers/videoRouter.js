import express from "express";
import routes from "../routes";
import { contVideos, contUpload, contVideoDetail, contEditVideo, contDeleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, contUpload);
videoRouter.get(routes.videoDetail, contVideoDetail);
videoRouter.get(routes.editVideo, contEditVideo);
videoRouter.get(routes.deleteVideo, contDeleteVideo);

export default videoRouter;
