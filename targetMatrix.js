function targetMatrix(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            if(arr[i][j]==target){
                return true
            }
        }
    }
    return false
}
console.log(targetMatrix([
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]],5));