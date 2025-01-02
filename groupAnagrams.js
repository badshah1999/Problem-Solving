function groupAnagrams(arr){
    const map = new Map()
    for(let i=0;i<arr.length;i++){
        const sorted = arr[i].split('').sort().join('')
        if(!map.has(sorted)){
            map.set(sorted,[])
        }
        map.get(sorted).push(arr[i])
    }
    return Array.from(map.values())
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));