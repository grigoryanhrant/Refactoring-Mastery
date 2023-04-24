import {numberOfLateDeliveries} from "./variables";

const getRating = (): number => {
    return moreThanFiveLateDeliveries() ? 2 : 1;
}

const moreThanFiveLateDeliveries = (): boolean => {
    return numberOfLateDeliveries() > 5
}
