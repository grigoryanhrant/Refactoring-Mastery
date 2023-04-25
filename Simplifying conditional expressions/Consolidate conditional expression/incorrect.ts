import {isPartTime, monthsDisabled, seniority} from "./variables";

const disabilityAmount = (): number => {
    if (seniority < 2) {
        return 0;
    }
    if (monthsDisabled > 12) {
        return 0;
    }
    if (isPartTime) {
        return 0;
    }
}
