// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
console.log(capitalize('a short sentence'))
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  

  let finalSentence = '';
  
  for (let i = 0; i < str.length; i++){
    if (i === 0) finalSentence += str[i].toUpperCase();
    else if (str[i - 1] === ' ') finalSentence += str[i].toUpperCase();
    else finalSentence += str[i];
  }
  return finalSentence; 


  // let finalSentence = [];
  // let words = str.split(' ');
  
  // for (let word of words) {
  //   // console.log(word.slice(1))
  //   finalSentence.push(word[0].toUpperCase() + word.slice(1));
  // }

  // return finalSentence.join(' ');
}



module.exports = capitalize;
