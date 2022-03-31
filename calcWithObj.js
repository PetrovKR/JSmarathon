function calc (a,b,operator) {
    const operations = {
        sum: a + b,
        sub: a - b,
        multi: a * b,
        div: a / b,
    }
    const isValidImput =
        typeof a === "number" &&
        typeof b === "number" &&
        typeof operator !== "undefined";
    const operatorExist = [operator] in operations;
    if isValidImput {
        if operatorExist {
            return operations[operator];
        }else{
            return "Unknown operations";
        }
        return "Error";
    }
}



