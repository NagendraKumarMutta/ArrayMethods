function reduce(input, callback, initialValue){
    let accumulator = initialValue
    let i=0
    
    if(accumulator== null|| accumulator==undefined){
        accumulator = input[i]; i++
    }

    for (i=1;i<input.length;i++){
        accumulator = callback(accumulator, input[i])
    }
    return accumulator
}

module.exports = reduce;