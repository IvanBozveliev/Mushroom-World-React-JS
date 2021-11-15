const express = require('express');
const config = require('./config/config');
const router = require('./routes');
const cors = require('cors');
const app = express();

require('./config/express')(app);
require('./config/mongoose')(app);

app.use(router);
app.use(cors());

app.use((err, req, res, next) => {
    res.status(err.statusCode || 400).json({message: 'error'});
});

app.listen(config.PORT, () => console.log(`Server is loading on port ${config.PORT}...`))