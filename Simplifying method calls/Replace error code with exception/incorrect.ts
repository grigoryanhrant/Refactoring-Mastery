import {_balance} from "./variables";

let balance = 0;

const withdraw = (amount: number): number => {
    if (amount > _balance) {
        return -1;
    } else {
        balance -= amount;
        return 0;
    }
}
