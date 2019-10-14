const celeb = require('./../controllers/celebrity');

module.exports = (app) => {
    app.get('/', celeb.index);
    app.get('/new/:name', celeb.new);
    app.get('/remove/:name', celeb.delete);
    app.get('/:name', celeb.Show);
};