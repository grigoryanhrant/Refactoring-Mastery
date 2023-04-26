const _name = '';
let height = 0;
let width = 0;

const setValue = (name: string, value: number): void => {
    if (_name.match("height")) {
        height = value;
        return;
    }
    if (_name.match("width")) {
        width = value;
        return;
    }
}
