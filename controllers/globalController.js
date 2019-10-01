import routes from "../routers";
import orderBook from "../market/orderBook";
export const home = async(req, res) => {
    try {
        const newJson = await callMarketInfo();
        // let obj = new Object();
        // let newJson = new Array();
        // for (let func in orderBook) {
        //     obj = orderBook[func]();
        //     obj.then(function(result) {
        //         newJson.push(result);
        //     });
        // }
        console.log(newJson);
        res.render("pages/home", { title: "CryptoCurrency", items: newJson });
    } catch (error) {
        console.log(error);
        res.render("pages/home", { title: "CryptoCurrency" });
    } 
};

let callMarketInfo = async() => new Promise((resolve)=> {
    let obj = new Object();
    let newJson = new Array();
    for (let func in orderBook) {
        obj = orderBook[func]();
        obj.then(function(result) {
            newJson.push(result);
            resolve(newJson);
        });
    }
});

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