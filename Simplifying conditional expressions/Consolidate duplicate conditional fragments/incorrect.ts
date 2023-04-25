import {isSpecialDeal, send, price} from "./variables";

let total = 0;

if (isSpecialDeal()) {
    total = price * 0.95;
    send();
} else {
    total = price * 0.98;
    send();
}
