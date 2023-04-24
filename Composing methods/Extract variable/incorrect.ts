import {browser, platform, resize, wasInitialized} from "./variables";

const renderBanner = (): void => {
    if ((platform.toUpperCase().indexOf("MAC") > -1) &&
        (browser.toUpperCase().indexOf("IE") > -1) &&
        wasInitialized() && resize > 0) {
        console.log('hello world')
    }
}
