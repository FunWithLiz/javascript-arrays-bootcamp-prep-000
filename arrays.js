chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, n){
var addElementToBeginningOfArray = ["foo", 1]
return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element)
return array
}

function addElementToEndOfArray(a,n){
var array = [...a,n]
return array
}

function destructivelyAddElementToEndOfArray(a,n){
  a.push(n)
  return a
}
  
function accessElementInArray(array,index){
var element = array
return array[0]
}