import routes from "../routers";
import orderBook from "../market/orderBook";
export const home = async(req, res) => {
    try {
        const data = orderBook();
        res.render("pages/home", { title: "CryptoCurrency", data });
    } catch (error) {
        console.log(error);
        res.render("pages/home", { title: "CryptoCurrency", data });
    }
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