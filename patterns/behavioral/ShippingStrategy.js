// The Context class that uses a strategy
class ShippingCalculator {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(packageDetails) {
        if (!this.strategy) {
            throw new Error("Shipping strategy is not set.");
        }
        return this.strategy.calculate(packageDetails);
    }
}

// The Strategy interface (conceptual in JS)
class ShippingStrategy {
    calculate(packageDetails) {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Strategy 1: Flat Rate
class FlatRateStrategy extends ShippingStrategy {
    calculate(packageDetails) {
        return 10;
    }
}

// Concrete Strategy 2: Weight-Based
class WeightBasedStrategy extends ShippingStrategy {
    calculate(packageDetails) {
        return (packageDetails.weight || 0) * 3;
    }
}

export { ShippingCalculator, FlatRateStrategy, WeightBasedStrategy };
