const express = require('express');

 
const app = express();
app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public'));
 
app.listen(9000, () => console.log('Listening on PORT: 9000!'));