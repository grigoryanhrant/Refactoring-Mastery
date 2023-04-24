import {getOutstanding, printBanner, name} from "./variables";

const printOwing = (): void => {
    printBanner();
    printDetails(getOutstanding());
}

const printDetails = (outstanding: number): void => {
    console.log(`name ${name}`);
    console.log(`amount ${outstanding}`);
}
