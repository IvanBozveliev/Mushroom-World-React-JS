const express = require('express');
const config = require('./config/config');
const router = require('./routes');
const app = express();


require('./config/mongoose')();
require('./config/express')(app);

app.use(router);


app.listen(process.env.PORT || 5000, () => console.log(`Server is loading on port ${config.PORT}...`))