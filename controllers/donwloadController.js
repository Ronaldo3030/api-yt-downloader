const ytdl = require('ytdl-core');

class donwloadController {
  static async downloadVideo(req, res) {
    const { cod, format } = req.params;
    const url = 'https://www.youtube.com/watch?v=' + cod;
    res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
    res.setHeader('Content-Type', 'video/mp4');
    ytdl(url)
      .on('progress', (chunkLength, downloaded, total) => {
        console.log('Downloaded: ' + (downloaded / 1024 / 1024).toFixed(2) + ' MB');
      })
      .pipe(res);
  }
}

module.exports = donwloadController;