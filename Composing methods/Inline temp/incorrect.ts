import type {Order} from "./variables";

const hasDiscount = (order: Order): boolean => {
    let basePrice: number = order.basePrice();
    return basePrice > 1000;
}
