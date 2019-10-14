const monkey = require('./../controllers/monkeys');

module.exports = (app) => {
    app.get("/", monkey.index);
    app.get('/monkeys/new', monkey.new);
    app.get('/monkeys/:id/edit', monkey.edit);
    app.get('/monkeys/:id', monkey.show);
    app.post('/monkeys/:id', monkey.update);
    app.post('/monkeys/:id/delete', monkey.delete);
    app.post('/monkeys', monkey.create);
};
