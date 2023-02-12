const express = require('express');
const ytdl = require('ytdl-core')
const router = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(router);

app.listen(port, () => {
  console.log("Server runing in port: " + port);
});