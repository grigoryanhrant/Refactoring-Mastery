import {expenseLimit, NULL_EXPENSE, primaryObject} from "./variables";

const getExpenseLimit = (): void => {
    if (!(expenseLimit != NULL_EXPENSE || (typeof primaryObject !== 'undefined' && primaryObject))) {
        console.error("Assertion failed: getExpenseLimit()");
    }

    return (expenseLimit != NULL_EXPENSE) ? expenseLimit : primaryObject.getMemberExpenseLimit();
}
