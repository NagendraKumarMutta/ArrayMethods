function find(input, callback){
    let num = null
    
    for(let i=0; i<input.length; i++){
        num = callback(i)
        if(num != undefined){
             break
        }
    }
    return num
}

module.exports = find;