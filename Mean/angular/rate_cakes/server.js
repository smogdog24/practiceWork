const express = require('express');
const mongoose = require('mongoose');
 
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public'));
 
require("./server/config/mongoose");
require("./server/config/routes")(app);
 
 
app.listen(9000, () => console.log('Listening on PORT: 9000!'));