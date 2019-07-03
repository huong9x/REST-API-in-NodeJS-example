const FindAllBook    = require('../resources/Book/FindAllBook');
const BookCreate     = require('../resources/Book/BookCreate');
const BookNameUpdate = require('../resources/Book/BookNameUpdate');
const BookByIdFind   = require('../resources/Book/BookByIdFind');

class BookController {


    /**
    * @example curl -XGET "http://localhost:8081/books"
    */
    async listBooks(ctx, next) {
        ctx.body = await ctx.bookRepository.find(new FindAllBook());
        await next();
    }

    /**
    * @example curl -XGET "http://localhost:8081/books/1"
    */
    async viewBookDetail(ctx, next) {
        let book = await ctx.bookRepository.find(new BookByIdFind(ctx.params.id));
        if(!book) {
            ctx.status = 404;
            return ctx.body = {
                message : "ID_NOT_FOUND"
            }
        }
        ctx.body = book;
        await next();
    }

    /**
     * @example curl -XPOST "http://localhost:8081/books" -d '{"name":"New book 1"}' -H 'Content-Type: application/json'
     */
    async createBook(ctx, next) {
        if(!ctx.request.body.name) {
            ctx.status = 400;
            return  ctx.body = {
                message : "NAME_MUST_NOT_NULL"
            }
        }
        ctx.body = await ctx.bookRepository.create(new BookCreate(ctx.request.body.name));
        ctx.status = 201;
        await next();

    }

    /**
     * @example curl -XPUT "http://localhost:8081/books/2" -d '{"name":"New book 2"}' -H 'Content-Type: application/json'
     */
    async updateBook(ctx, next) {
        let book = await ctx.bookRepository.find(ctx.params.id);
        if(!book) {
            ctx.status = 404;
            return ctx.body = {
                message : "ID_NOT_FOUND"
            }
        }
        ctx.response.body = await ctx.bookRepository.update(new BookNameUpdate(ctx.params.id, context.request.body.name));
        await next();
    }

    /**
     * @example curl -XDELETE "http://localhost:8081/books/3"
     */
    async deleteBook(ctx) {
        let deleted = await ctx.bookRepository.delete(ctx.params.id);

        if(deleted) {
            return ctx.body = {
                status : "DELETE_SUCCESS"
            }
        } else {
            ctx.status = 204;
            return  context.body = {
                message : 'ID_NOT_FOUND'
            }
        }
    }

}

module.exports = BookController;
