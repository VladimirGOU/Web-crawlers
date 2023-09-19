const doc = 'a, b, c, e, e'

// function removeVowels(doc){
//     let result = '';
//     for (let i = 0; i < doc.length; i++) {
//         const currentChar = doc[i]
//         if ( !'aeiouyAEIOUY'.includes(currentChar)){
//             result += currentChar
//         }
//     }
//     console.log(result)
// }
// removeVowels(doc)



// function removeVowels(doc){
//     let result = '';

//     for(const letter of doc){
//         if(!'aeiouyAEIOUY'.includes(letter.toLowerCase())){
//             result += letter
//         }
//     }
//     console.log(result)
//     return result
// }

function removeVowels(doc){
    let result = '';

    for(const letter of doc){
        if(!isVowel(letter)){
            result += letter
        }
    }
    console.log(result)
    return result
}

removeVowels(doc)

function isVowel(letter){
    return 'aeiouyAEIOUY'.includes(letter)
}