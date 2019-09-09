import routes from "../routers";

// Home
export const home = async(req, res) => {

    // fs.readFile(__dirname + "/static/index.html", { json: true }, function(
    //     err,
    //     data
    // ) {
    //     if (err) {
    //         res.writeHead(500);
    //         return res.end("Error loading");
    //     }
    //     res.writeHead(200, { "content-type": "text/html" });
    //     res.end(data);
    // });
    res.render("home", {
        title: "MY HOMEPAGE",
        length: 5
    });
    // try {
    //     // const videos = await Video.find({}).sort({ _id: -1 });
    //     // res.render("home", { pageTitle: "Home", videos });
    // } catch (error) {
    //     console.log(error);
    //     res.render("home", { pageTitle: "Home", videos: [] });
    // }
};

// Detail
export const detail = async(req, res) => {
    const {
        params: { id }
    } = req;
    try {
        res.render("detail");
        //res.render("videoDetail", { video });
    } catch (error) {
        res.redirect(routes.home);
    }
};