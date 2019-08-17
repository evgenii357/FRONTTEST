const ProductController = require('../controllers/productsController');

module.exports = app => {
    app.get('/api/products', ProductController.index);
    app.post('/api/products', ProductController.create);
    app.put('/api/products/:id', ProductController.edit);
    app.delete('/api/products/:id', ProductController.delete);
}