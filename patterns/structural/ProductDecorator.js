// Base Decorator
class ProductDecorator {
    constructor(product) {
        this.product = product;
    }

    getPrice() {
        return this.product.getPrice();
    }

    getDescription() {
        return this.product.getDescription();
    }
}

// Concrete Decorator for Gift Wrapping
class GiftWrapDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
    }

    getPrice() {
        return this.product.getPrice() + 5;
    }

    getDescription() {
        return `${this.product.getDescription()}, gift wrapped`;
    }
}

// Concrete Decorator for Extended Warranty
class ExtendedWarrantyDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
    }

    getPrice() {
        return this.product.getPrice() + 20;
    }

    getDescription() {
        return `${this.product.getDescription()}, with extended warranty`;
    }
}

// We need a base Product class with the same interface to decorate it
class BaseProduct {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    getPrice() {
        return this._price;
    }
    getDescription() {
        return this._name;
    }
}

export { ProductDecorator, GiftWrapDecorator, ExtendedWarrantyDecorator, BaseProduct };