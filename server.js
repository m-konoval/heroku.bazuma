/* ----------- DEPENDENCIES ----------- */
const createError   = require('http-errors');
const express       = require('express');
const path          = require('path');
const mongoose      = require('mongoose');


/* ----------- WORK SPACE ----------- */
const app           = express();
const port          = process.env.PORT || 8080;
const DB_URI        = process.env.MONGODB_URI || 'mongodb://localhost:27017/dbbazuma';
const LOCAL_DIR     = '/dist/webapp';
const SERVER_DIR    = '/dist/webapp/index.html';


/* ----------- init APP & SERVER ----------- */
app.listen(port);

app.use(express.json());
app.use(express.static(__dirname + LOCAL_DIR));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + SERVER_DIR));
});


/* ----------- HEADERS settings ----------- */
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});


/* ----------- start TEST connection MongoDB ----------- */
mongoose.Promise = global.Promise;
mongoose.connect(DB_URI, { useNewUrlParser: true })
    .then(() => {console.log('OK')})
    .catch((err) => console.log('My_Error: ' + err));