// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true

// hasUniqueChars("Moonday")
// // returns false

// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true

let charArr = []

function hasUniqueChars (word){
    let charArr = []
    for (let i = 0; i < word.length; i++){
        if (charArr.includes(word[i])){
            return false
        } else {
      charArr.push(word[i])}
    }
  return true
}

// const hasUniqueChars = word => {
//     for (let i = 0; i < word.length; i++){
//         ((charArr.includes(word[i]) ? return false : charArr.push(word[i])))
//     }
//        return true
// }
console.log(hasUniqueChars("MoOday"))