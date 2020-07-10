const letterSet = [..."abcdefghijklmnopqrstuvwxyz"];
// Alternative: const letterSet = "abcdefghijklmnopqrstuvwxyz".split('');

export const isPangram = (inputString) => {
  const characters = inputString.toLowerCase().split('');
  return letterSet.every(currentLetter => (characters.indexOf(currentLetter) !== -1));
};