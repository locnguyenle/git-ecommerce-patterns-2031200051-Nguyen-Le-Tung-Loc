import { InventoryService } from "../../services/InventoryService.js";
import { PaymentService } from "../../services/PaymentService.js";
import { ShippingService } from "../../services/ShippingService.js";

class CheckoutFacade {
    constructor() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    placeOrder(orderDetails) {
        console.log("--- Starting Checkout Process ---");

        // Trích xuất mảng ID sản phẩm từ orderDetails (hỗ trợ cả productIds lẫn items)
        const productIds = Array.isArray(orderDetails)
            ? orderDetails
            : orderDetails.productIds || orderDetails.items || [];

        const inStock = this.inventoryService.checkStock(productIds);
        if (!inStock) {
            console.log("Order failed: One or more products are out of stock.");
            return false;
        }

        const paymentSuccess = this.paymentService.processPayment(orderDetails);
        if (!paymentSuccess) {
            console.log("Order failed: Payment processing failed.");
            return false;
        }

        const shippingArranged =
            this.shippingService.arrangeShipping(orderDetails);
        if (!shippingArranged) {
            console.log("Order failed: Shipping arrangement failed.");
            return false;
        }

        console.log("Order placed successfully!");
        return true;
    }
}

export { CheckoutFacade };
