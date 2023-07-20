function findVowel(str){
    let vowelNum = 0
    const words = ['a','e', 'i','o', 'u']

    for(let char of str) {
        if (words.includes(char)){
            vowelNum++
        }
    }

    return vowelNum
}


console.log(findVowel('Excellence'));