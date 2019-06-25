class Product {
    constructor(product_id, product_name) {
        this.product_id   = product_id;
        this.product_name = product_name;
    }

    getProductId() {
        return this.product_id;
    }
    getProductName() {
        return this.product_name;
    }
}

module.exports = Product;
