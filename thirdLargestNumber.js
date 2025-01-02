function thirdLargestNumber(arr){
    if(arr.length<=3) return Math.max(...arr)
    return arr.sort((a,b) => b-a).at(2)
}
console.log(thirdLargestNumber([1,3,7,9,10]));