//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (sequence) => {
  var codons = [];
  for (i = 0; i < sequence.length; i + 3) {
    codons.push(str(sequence).slice(i, i+2));
  }
  return codons;
};

console.log(translate("ABCDEF"));
