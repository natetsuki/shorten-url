const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.post('/shorten', urlController.createShortUrl);
router.get('/', urlController.getAllUrls);
router.get('/:shortCode', urlController.redirectToLongUrl);
router.delete('/:id', urlController.deleteUrl);

module.exports = router;
