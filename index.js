const express = require('express');
const cors = require('cors')
const ytdl = require('ytdl-core')
const fs = require('fs')

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({ pong: "Pong" })
})

app.get('/download', (req, res) => {
  const url = 'https://www.youtube.com/watch?v=eeidJuv3t30&ab_channel=Froid';
  res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
  res.setHeader('Content-Type', 'video/mp4');
  ytdl(url)
    .on('progress', (chunkLength, downloaded, total) => {
      console.log('Downloaded: ' + (downloaded / 1024 / 1024).toFixed(2) + ' MB');
    })
    .pipe(res);
});




app.listen(port, () => {
  console.log("Server runing in port: " + port);
});