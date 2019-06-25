Joi = require('joi'),
  productSchema = Joi.object().keys({
      name: Joi.string().trim().required()
  });

class ProductController {


    /**
    * @example curl -XGET "http://localhost:8081/products"
    */
    async listProducts(ctx, next) {
        ctx.body = await ctx.productRepository.findProducts();
        await next();
    }

    /**
    * @example curl -XGET "http://localhost:8081/products/1"
    */
    async viewProductDetail(ctx, next) {
        ctx.response.body = await ctx.productRepository.findProduct(ctx.params.id);
        await next();
    }

    /**
     * @example curl -XPOST "http://localhost:8081/products" -d '{"name":"New Product 1"}' -H 'Content-Type: application/json'
     */
    async createProduct(ctx, next) {
        let body = await Joi.validate(ctx.request.body, productSchema, {allowUnknown: true});
        ctx.response.body = await ctx.productRepository.create(body.name);
        ctx.response.status = 201;
        await next();

    }

    /**
     * @example curl -XPUT "http://localhost:8081/products/2" -d '{"name":"New Product 2"}' -H 'Content-Type: application/json'
     */
    async updateProduct(ctx, next) {
        let body = await Joi.validate(ctx.request.body, productSchema, {allowUnknown: true});
        ctx.response.body = await ctx.productRepository.update(ctx.params.id, body.name);
        await next();
    }

    /**
     * @example curl -XDELETE "http://localhost:8081/products/3"
     */
    async deleteProduct(ctx, next) {
        await ctx.productRepository.delete(ctx.params.id);
        ctx.response.status = 204;
        await next();
    }

}

module.exports = ProductController;
