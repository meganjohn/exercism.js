//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//Can use either .split() or spread operator in for loop below
// const letterSet = "abcdefghijklmnopqrstuvwxyz".split('');
const letterSet = "abcdefghijklmnopqrstuvwxyz";


export const isPangram = (inputString) => {
  let pangram = false;
  let characters = inputString.toLowerCase().split('');
  let letters = [];

  

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    //Checks if valid lower case character and not already in letters.
    if ([...letterSet].indexOf(character) >= 0
        && letters.indexOf(character) === -1
      ) {
        letters.push(character);   
    }
  }

  if (letters.length === 26) {
    pangram = true;
  }
  
  return pangram;
};
