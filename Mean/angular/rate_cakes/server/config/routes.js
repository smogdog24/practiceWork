const cakes = require('../controller/cake')
 
module.exports = (app) => {
    app.get("/_cakes", cakes.index);
    app.get("/cakes/:id", cakes.show);
    app.post("/cakes", cakes.create);
    app.put("/cakes/:id", cakes.update);
    app.delete("/cakes/:id", cakes.delete)
}