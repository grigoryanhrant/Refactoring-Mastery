import {
    date,
    quantity,
    SUMMER_END,
    SUMMER_START,
    summerRate,
    winterRate,
    winterServiceCharge
} from "./variables";

let charge = 0;

if ((date > SUMMER_START) || (date < SUMMER_END)) {
    charge = quantity * winterRate + winterServiceCharge;
} else {
    charge = quantity * summerRate;
}
