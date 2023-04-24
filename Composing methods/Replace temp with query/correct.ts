import {itemPrice, quantity} from "./variables";

const basePrice = (): number => quantity * itemPrice;

const calculateTotal = (): number => {
    if (basePrice() > 1000) {
        return basePrice() * 0.95;
    } else {
        return basePrice() * 0.98;
    }
}

const lambdaFunction = (): number => basePrice() > 1000 ? basePrice() * 0.95 : basePrice() * 0.98;
