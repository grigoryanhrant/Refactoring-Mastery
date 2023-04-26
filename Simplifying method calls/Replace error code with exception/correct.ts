import {_balance} from "./variables";

let balance = 0;

const withdraw = (amount: number): void => {
    if (amount > _balance) {
        throw new Error();
    }
    balance -= amount;
}
