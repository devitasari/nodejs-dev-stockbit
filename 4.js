function anagram(arr) {
    let result = []
    for (let i=0; i<arr.length; i++) {
        let word = arr[i]
        let subResult = [word]
        for (let j=i+1; j<arr.length; j++) {
            let toCheck = arr[j]
            if (toCheck.length === word.length) {
                let candidate = true
                for (let k=0; k<word.length; k++) {
                    if (word.indexOf(toCheck[k]) === -1) {
                        candidate = false
                    }
                }
                if (candidate === true) {
                    subResult.push(toCheck)
                    arr.splice(j,1)
                    j--
                } 
            }
        }
        result.push(subResult)
    }
    return result
}


// console.log(anagram(['kita', 'atik', 'tika']))
console.log(anagram(['aki','kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua', 'ikat', 'uak', 'kanma']))


