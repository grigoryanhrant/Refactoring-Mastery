import {getOutstanding, printBanner, name} from "./variables";

const printOwing = (): void => {
    printBanner();

    console.log(`name ${name}`);
    console.log("amount" + getOutstanding());
}
