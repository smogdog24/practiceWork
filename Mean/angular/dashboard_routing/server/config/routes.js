const rabbits = require('../controllers/rabbit')

module.exports = (app) => {
    app.get("/rabbits", rabbits.index);
    app.get("/rabbits/:id", rabbits.show);
    app.post("/rabbits", rabbits.create);
    app.put("/rabbits/:id", rabbits.update);
    app.delete("/rabbits/:id", rabbits.delete);
}
