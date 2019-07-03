const CategoryByIdFind   = require('../resources/Category/CategoryByIdFind');
const CategoryFindAll    = require('../resources/Category/CategoryFindAll');
const CategoryNameUpdate = require('../resources/Category/CategoryNameUpdate');
const CategoryCreate     = require('../resources/Category/CategoryCreate');

class CategoryController {


    /**
    * @example curl -XGET "http://localhost:8081/categories"
    */
    async listCategories(ctx, next) {
        ctx.body = await ctx.categoryRepository.find(new CategoryFindAll());
        await next();
    }

    /**
    * @example curl -XGET "http://localhost:8081/categories/1"
    */
    async viewCategoryDetail(ctx) {
        let category = await ctx.categoryRepository.find(new CategoryByIdFind(ctx.params.id));
        if(!category) {
            ctx.status = 404;
            return ctx.body = {
                message : "ID_NOT_FOUND"
            }
        }
        ctx.body = category;
    }

    /**
     * @example curl -XPOST "http://localhost:8081/categories" -d '{"name":"New category 1"}' -H 'Content-Type: application/json'
     */
    async createCategory(ctx, next) {
        if(!ctx.request.body.name) {
            ctx.status = 400;
            return  ctx.body = {
                message : "NAME_MUST_NOT_NULL"
            }
        }
        ctx.response.body = await ctx.categoryRepository.create(new CategoryCreate(ctx.request.body.name));
        ctx.response.status = 201;
        await next();

    }

    /**
     * @example curl -XPUT "http://localhost:8081/categories/2" -d '{"name":"New category 2"}' -H 'Content-Type: application/json'
     */
    async updateCategory(ctx, next) {
        if(!ctx.request.body.name) {
            ctx.status = 400;
            return  ctx.body = {
                message : "NAME_MUST_NOT_NULL"
            }
        }
        ctx.response.body = await ctx.categoryRepository.update(new CategoryNameUpdate(ctx.params.id, ctx.request.body.name));
        await next();
    }

    /**
     * @example curl -XDELETE "http://localhost:8081/categories/3"
     */
    async deleteCategory(ctx) {
        let deleted = await ctx.categoryRepository.delete(ctx.params.id);

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

module.exports = CategoryController;
