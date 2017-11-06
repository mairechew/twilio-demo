const express = require('express');
const ngrok = require('ngrok');
const app = express();

app.use('/', express.static(__dirname + '/'))

ngrok.connect(function (err, url) {});

app.listen(8080)
