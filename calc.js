function calc (op, a, b) {

    if (typeof a != "number" || typeof b != "number") {
        return "Error";
    }

    switch (op) {
        case "sum" :
            return a + b;
            break;
        case "minus" :
            return a - b;
            break;
        case "delete" :
            return a / b;
            break;
        case "multi" :
            return a * b;
            break;
        case "degree" :
            return a ** b;
            break;
        case "remain" :
            return a % b;
            break;

        default :
            return "Unknown operation";
            break;
    }
}
console.log(calc("sum", 3, 5));
console.log(calc("delete", 10,5));
console.log(calc("remain", 15,6));
console.log(calc());
console.log(calc("sum","b",6));
