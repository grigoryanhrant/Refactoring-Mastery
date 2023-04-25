import {gift, isBirthDay, isRetired, isSeparated, normalPayAmount, retiredAmount, separatedAmount} from "./variables";

const getPayAmount = (): number => {
    let result: number;
    if (isBirthDay) {
        result = gift();
    } else {
        if (isSeparated) {
            result = separatedAmount();
        } else {
            if (isRetired) {
                result = retiredAmount();
            } else {
                result = normalPayAmount();
            }
        }
    }
    return result;
}
