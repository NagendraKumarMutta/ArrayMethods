const reduce = require("./reduce");

const items = [10, 3, 2];

function add(previous, current){
    return previous-current
}

const result1 = reduce(items, add)
console.log(result1)