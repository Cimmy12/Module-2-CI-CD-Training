//Create a function that filters out negative numbers.


const numArray =[-3, -2, 5,10,17,-1]
const result= numArray.filter(filterfunction)
function filterfunction(values){
    return values <0
}
console.log(result)