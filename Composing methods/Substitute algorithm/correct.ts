const foundPerson = (people: string[]): string => {
    let candidates = ["Don", "John", "Kent"];
    for (let person of people) {
        // @ts-ignore
        if (candidates.includes(person)) {
            return person;
        }
    }
    return "";
}
