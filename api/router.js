const Router           = require('koa-router');
const router           = new Router();

let BookController     = require('../controller/BookController');
let bookController     = new BookController();
let CategoryController = require('../controller/CategoryController');
let categoryController = new CategoryController();


router
     .get('/books', bookController.listBooks)
     .post('/books', bookController.createBook)
     .get('/books/:id', bookController.viewBookDetail)
     .put('/books/:id', bookController.updateBook)
     .delete('/books/:id', bookController.deleteBook)

     .get('/categories', categoryController.listCategories)
     .post('/categories', categoryController.createCategory)
     .get('/categories/:id', categoryController.viewCategoryDetail)
     .put('/categories/:id', categoryController.updateCategory)
     .delete('/categories/:id', categoryController.deleteCategory)

     ;


module.exports = router;
