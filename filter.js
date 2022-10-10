function filter(input, callback){
    let output=[]
    
    for (let i=0; i<input.length; i++){
        let result = callback(i)
        if(result != undefined){
           output.push(result)
        }
    }
    return output
}

module.exports = filter