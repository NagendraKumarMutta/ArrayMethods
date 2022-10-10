const mapp = require("./mapp")

const items = [1, 2, 3, 4, 5]

function square(i){
    return items[i]**2
}

const result1 = mapp(items, square)
console.log(result1)