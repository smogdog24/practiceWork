const Weapons = require('../controllers/Weapons.js')

module.exports = function(app){
    console.log("..in express routes")
    app.get('/weapons', Weapons.index);
    app.get('/weapons/:id', Weapons.show);
    app.post('/', Weapons.create);
    app.put('/update/:id', Weapons.update);
    app.delete('/delete/:id', Weapons.delete);
}