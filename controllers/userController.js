export const contUsers = (req, res) => res.render("users", { pageTitle: "Users Home" });
export const contUserDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const contEditProfile = (req, res) => res.render("editProfile", { pageTitle: "User Profile" });
export const contChangePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });