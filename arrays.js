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
return element[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
return array
}

function removeElementFromBeginningOfArray(array){
  var element = array
  element.slice(1)
  return element
}