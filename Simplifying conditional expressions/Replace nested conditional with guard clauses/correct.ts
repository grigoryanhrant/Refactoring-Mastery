import {gift, isBirthDay, isRetired, isSeparated, normalPayAmount, retiredAmount, separatedAmount} from "./variables";

const getPayAmount = (): number => {
    if (isBirthDay) {
        return gift();
    }
    if (isSeparated) {
        return separatedAmount();
    }
    if (isRetired) {
        return retiredAmount();
    }
    return normalPayAmount();
}
