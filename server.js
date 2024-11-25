const express = require('express');
const routes = require('./routes');

// Inisialisasi aplikasi Express
const app = express();

// Menggunakan routes yang didefinisikan di routes.js
app.use(routes);

// Middleware untuk menangani error payload terlalu besar
app.use((err, req, res, next) => {
    if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({
            status: 'fail',
            message: 'Payload content length greater than maximum allowed: 1000000'
        });
    }
    next(err);
});

// Menjalankan server pada port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
