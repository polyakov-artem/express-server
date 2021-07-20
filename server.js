
const express = require('express');
const server = express();
const port = 8080;
const publicPath = '/resume';
const localDirectory = __dirname + '/public';


server.use(publicPath, express.static(localDirectory));
server.listen(port);


console.log(`Файлы доступны по адресу: localhost:${port}${publicPath}`);