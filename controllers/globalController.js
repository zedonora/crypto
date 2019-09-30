import routes from "../routers";
import orderBook from "../market/orderBook";
let newJson = new Array();
export const home = async(req, res) => {
    try {
        let obj = new Object();
        for (let func in orderBook) {
            obj = orderBook[func]();
            obj.then(function(result) {
               console.log(result);
               newJson.push(result);
               console.log(newJson);
            });
        }
        //console.log(newJson);
    } catch (error) {
        console.log(error);
        res.render("pages/home", { title: "CryptoCurrency" });
    } finally {
        console.log(">>>>>>>>>>>>>>>>>>");
        res.render("pages/home", { title: "CryptoCurrency", items:newJson, test:newJson });
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