const Router          = require('koa-router');
const router          = new Router();

let ProductController = require('../controllers/ProductsController');
let productController = new ProductController();

  // todoList Routes

router
     .get('/products', productController.listProducts)
     .post('/products', productController.createProduct)
     .get('/products/:id', productController.viewProductDetail)
     .put('/products/:id', productController.updateProduct)
     .delete('/products/:id', productController.deleteProduct)
     ;


module.exports = router;
