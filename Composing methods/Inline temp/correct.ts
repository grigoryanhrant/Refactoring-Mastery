import type {Order} from "./variables";

const hasDiscount = (order: Order): boolean => {
    return order.basePrice() > 1000;
}
