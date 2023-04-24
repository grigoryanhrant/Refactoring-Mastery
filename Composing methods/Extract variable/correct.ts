import {browser, platform, resize, wasInitialized} from "./variables";

const renderBanner = (): void => {
    const isMacOs = platform.toUpperCase().indexOf("MAC") > -1;
    const isIE = browser.toUpperCase().indexOf("IE") > -1;
    const wasResized = resize > 0;

    if (isMacOs && isIE && wasInitialized() && wasResized) {
        console.log('hello world')
    }
}
