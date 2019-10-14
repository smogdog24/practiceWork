const products = require('../controllers/product')
 
module.exports = (app) => {
    app.get("/_products", products.index);
    app.get("/products/:id", products.show);
    app.post("/products", products.create);
    app.put("/products/:id", products.update);
    app.delete("/products/:id", products.delete);
}
