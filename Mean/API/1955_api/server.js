const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./server/config/routes')(app);
require('./server/config/mongoose');


app.listen(8000, function(){console.log('listening on port 8000')});