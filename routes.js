const express = require('express');
const multer = require('multer');
const { predictHandler } = require('./handler');

// Membuat router baru
const router = express.Router();

// Konfigurasi multer untuk handling file upload (ukuran maksimum 1MB)
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 1000000 } // Batas ukuran file 1MB
});

// Menambahkan rute POST /predict dan menghubungkannya dengan handler
router.post('/predict', upload.single('image'), predictHandler);

// Export router
module.exports = router;
