export const contHome = (req, res) => res.render("home", { pageTitle: "Home" });
export const contJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const contLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const contLogout = (req, res) => res.render("logout", { pageTitle: "Logout" });
export const contSearch = (req, res) => {
    //console.log(req.query);
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy });
}