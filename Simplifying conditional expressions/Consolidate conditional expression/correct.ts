import {isPartTime, monthsDisabled, seniority} from "./variables";

const isNotEligibleForDisability = () => seniority < 2 || monthsDisabled > 12 || isPartTime

const disabilityAmount = (): number => {
    if (isNotEligibleForDisability()) return

    return 1;
}
