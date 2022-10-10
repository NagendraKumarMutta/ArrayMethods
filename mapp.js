function mapp(input, callback){
    let output=[]
    for(let i=0; i<input.length; i++){
        let result = callback(i)
        output.push(result)
    }
    return output
}

module.exports = mapp;