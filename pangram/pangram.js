const letterSet = [..."abcdefghijklmnopqrstuvwxyz"];
// Alternative: const letterSet = "abcdefghijklmnopqrstuvwxyz".split('');


export const isPangram = (inputString) => {
  let pangram = false;
  let characters = inputString.toLowerCase().split('');
  let letters = [];

  for (let i = 0; i < letterSet.length; i++) {
    const letter = letterSet[i];
    //Checks if valid lower case character and not already in letters.
    if (characters.indexOf(letter) >= 0
      ) {
        letters.push(letter);   
    }
  }

  if (letters.length === 26) {
    pangram = true;
  }
  
  return pangram;
};
