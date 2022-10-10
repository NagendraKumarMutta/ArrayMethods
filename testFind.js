const find = require("./find");

const ages = [12, 13, 18, 21, 24]

function checkAges(i){
    if (ages[i]>21){
        return ages[i]
    }
}

const result1 = find(ages, checkAges)
console.log(result1);