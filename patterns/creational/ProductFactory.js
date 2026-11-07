class Product {
    constructor(details) {
        this.name = details.name || "Generic Product";
        this.price = details.price || 0;
    }
    describe() {
        console.log(`${this.name} - $${this.price}`);
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.name;
    }
}

class Book extends Product {
    constructor(details) {
        super(details);
        this.name = details.title || this.name;
        this.author = details.author || "Unknown";
    }
    describe() {
        console.log(`Book: "${this.name}" by ${this.author} - $${this.price}`);
    }
}

class Electronic extends Product {
    constructor(details) {
        super(details);
        this.name = details.model || this.name;
        this.brand = details.brand || "Unknown";
    }
    describe() {
        console.log(`Electronic: ${this.brand} ${this.name} - $${this.price}`);
    }
}

class ProductFactory {
    createProduct(type, details) {
        switch (type ? type.toLowerCase() : "") {
            case "book":
                return new Book(details);
            case "electronic":
                return new Electronic(details);
            default:
                return new Product(details);
        }
    }
}

export { ProductFactory };
