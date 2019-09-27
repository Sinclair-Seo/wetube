export const contVideos = (req, res) => res.render("videos", { pageTitle: "Videos Home" });
export const contUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const contVideoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const contEditVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const contDeleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });
