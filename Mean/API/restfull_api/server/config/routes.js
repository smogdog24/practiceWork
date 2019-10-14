const Weapons = require('../controllers/Weapons.js')

module.exports = function(app){
    app.get('/', Weapons.index);
    app.get('/show/:name', Weapons.show);
    app.post('/', Weapons.create);
    app.put('/update/:name', Weapons.update);
    app.delete('/delete/:name', Weapons.delete);
}