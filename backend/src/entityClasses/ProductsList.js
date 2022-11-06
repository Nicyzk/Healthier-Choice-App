class ProductsList {
    constructor(products) {
        this.products = products;    // []
    }

    // getter
    get getProducts() {
        return this.products;
    }

    // setter
    setProducts(products) {
        this.products = products;
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProducts(product) {
        let idx = products.indexOf(product);
        this.products.splice(idx, 1);
    }


}

export default ProductsList