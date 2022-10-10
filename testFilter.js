const filter = require("./filter");

const items = [-2, -1, 0, 1, 2, 3]

function positiveNum(i){
   if(items[i]>0){
    return items[i]
   }
}

const result1 = filter(items, positiveNum);
console.log(result1)