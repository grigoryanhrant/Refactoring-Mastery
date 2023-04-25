import {date, quantity, SUMMER_END, SUMMER_START, summerRate, winterRate, winterServiceCharge} from "./variables";

let charge = 0;

const isSummer = (date): boolean => date > SUMMER_START || date < SUMMER_END

const summerChange = (quantity): number => quantity * winterRate + winterServiceCharge

const winterCharge = (quantity): number => quantity * summerRate

if (isSummer(date)) {
    charge = summerChange(quantity);
} else {
    charge = winterCharge(quantity);
}
