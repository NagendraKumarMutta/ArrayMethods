function flatten(nestedArray){
  let newArray=[]
  for(let i=0; i < nestedArray.length; i++){
     if(Array.isArray(nestedArray[i])){
        newArray = newArray.concat(flatten(nestedArray[i]))
     }else{
        newArray.push(nestedArray[i])
     }
  }
  return newArray
}

module.exports = flatten