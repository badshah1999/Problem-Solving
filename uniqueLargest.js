function uniqueLargest(arr){
    const map={}
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]){
            map[arr[i]]++
        }
        else{
            map[arr[i]]=1
        }
    }
    for(let key in map){
        if(map[key]==1){
            res.push(key)
        }
    }
    return Math.max(...res)
}
console.log(uniqueLargest([2,2,5,7,8,8]));