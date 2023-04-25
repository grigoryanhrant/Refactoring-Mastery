import {expenseLimit, primaryObject, NULL_EXPENSE} from "./variables";

const getExpenseLimit = (): void => {
    return (expenseLimit != NULL_EXPENSE) ? expenseLimit : primaryObject.getMemberExpenseLimit();
}
