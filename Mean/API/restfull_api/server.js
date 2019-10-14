const express = require('express');
const app = express();
app.use(express.json());
require('./server/config/routes.js')(app);











app.listen(7000, () =>console.log('listening on port 7000'))