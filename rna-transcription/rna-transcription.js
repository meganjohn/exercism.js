//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const NUCLEOTIDE_PAIRS = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}

export const toRna = (dna) => {
  const dnaArray = dna.split("");

  return dnaArray.reduce(
    (rnaString, nucleotide) => {
      rnaString += NUCLEOTIDE_PAIRS[nucleotide];
      return rnaString;
    },
    ""
  );
};
