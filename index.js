const express = require('express');
const app = express();
const server = require('http').createServer(app); 

const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/build'));

server.listen(port, () => {
    // console.log('Server started at http://localhost:' + port);
})