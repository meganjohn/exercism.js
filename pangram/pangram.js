//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const utf16Codes = [
  '61', '62', '63', '64', '65', '66', '67', '68', '69',
  '6a', '6b', '6c', '6d', '6e', '6f',
  '70', '71', '72', '73', '74', '75', '76', '77', '78', '79',
  '7a'
];

const letterSet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

export const isPangram = (inputString) => {
  let pangram = false;
  let characters = inputString.toLowerCase().split('');
  let letters = [];

  for (const character in characters) {
    if (character in letterSet) {
      if (character in letters === false) {
        letters.push(character);
      }
    }
  }

  if (letters.length === 26) {
    pangram = true;
  }
  
  return pangram;
};
