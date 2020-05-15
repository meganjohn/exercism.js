//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const letterSet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

export const isPangram = (inputString) => {
  let pangram = false;
  let characters = inputString.toLowerCase().split('');
  let letters = [];

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    if (letterSet.indexOf(character) >= 0
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
