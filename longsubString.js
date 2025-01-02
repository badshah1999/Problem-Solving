function longSubString(str){
    let arr=[]
    for(let i=0;i<str.length;i++){
        if(str[i]!=str[i+1] && !arr.includes(str[i])){
            arr.push(str[i])
        }
    }
    return arr.length
}
console.log(longSubString("abcabcbb"));