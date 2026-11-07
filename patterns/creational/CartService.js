let instance;

class CartService {
    constructor() {
        if (instance) {
            return instance;
        }
        this.products = [];
        instance = this;
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }

    getProducts() {
        return this.products;
    }
}

export { CartService };
