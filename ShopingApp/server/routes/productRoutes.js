const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    generateDescription,
    generateDetailsFromImage
} = require('../controllers/productController');

router.route('/')
    .get(getProducts)
    .post(createProduct);

router.route('/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct)
router.post('/generate-desc',generateDescription);
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

router.route('/generate-details-from-image')
    .post(upload.single('image'), generateDetailsFromImage)


module.exports = router;
