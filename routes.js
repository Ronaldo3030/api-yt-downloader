const express = require('express');
const cors = require('cors');
const { Router } = require('express');
const DonwloadController = require('./controllers/DonwloadController');

const router = Router();

router.use(cors());
router.use(express.json());

router.get('/ping', (req,res) => {
  return res.status(200).json({ pong: "Pong" });
});

router.get('/download/:cod/:format', DonwloadController.downloadVideo);

module.exports = router;