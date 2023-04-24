import {numberOfLateDeliveries} from "./variables";

const getRating = (): number => {
    return numberOfLateDeliveries() > 5 ? 2 : 1;
}
