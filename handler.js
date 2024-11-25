const { v4: uuidv4 } = require('uuid');

// Fungsi handler untuk menangani prediksi kanker
const predictHandler = (req, res) => {
    // Validasi apakah file diunggah
    if (!req.file) {
        return res.status(400).json({
            status: 'fail',
            message: 'Terjadi kesalahan dalam melakukan prediksi'
        });
    }

    // Validasi ukuran file (maksimal 1MB)
    const fileSize = req.file.size;
    if (fileSize > 1000000) { // 1MB = 1000000 byte
        return res.status(413).json({
            status: 'fail',
            message: 'Payload content length greater than maximum allowed: 1000000'
        });
    }

    // Placeholder untuk menjalankan model prediksi kanker yang sebenarnya
    try {
        // Model prediksi dummy (gunakan model sebenarnya di sini)
        // Untuk sementara, ini menggunakan nilai random untuk contoh.
        const isCancer = Math.random() > 0.5; // Ganti dengan hasil prediksi dari model Anda

        // Siapkan response berdasarkan hasil prediksi
        const responseData = {
            status: 'success',
            message: 'Model is predicted successfully',
            data: {
                id: uuidv4(),
                result: isCancer ? 'Cancer' : 'Non-cancer',
                suggestion: isCancer ? 'Segera periksa ke dokter!' : 'Penyakit kanker tidak terdeteksi.',
                createdAt: new Date().toISOString()
            }
        };

        return res.status(200).json(responseData);
    } catch (error) {
        // Penanganan kesalahan jika ada masalah dengan prediksi atau model
        return res.status(400).json({
            status: 'fail',
            message: 'Terjadi kesalahan dalam melakukan prediksi'
        });
    }
};

// Export fungsi handler
module.exports = {
    predictHandler
};
