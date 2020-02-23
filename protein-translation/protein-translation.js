const CODON_TRANSLATION = {
  "AUG": "Methionine",
  "UUU": "Phenylalanine",
  "UUC": "Phenylalanine",
  "UUA": "Leucine",
  "UUG": "Leucine",
  "UCU": "Serine",
  "UCC": "Serine",
  "UCA": "Serine",
  "UCG": "Serine",
  "UAU": "Tyrosine",
  "UAC": "Tyrosine",
  "UGU": "Cysteine",
  "UGC": "Cysteine",
  "UGG": "Tryptophan"
};


export const translate = (rna) => {
    if (rna) {
      return translateCodons(splitCodons(rna));
    } else {
      return [];
    };
};

function splitCodons (rna) {
  const codons = [];
  if (rna) {
    for (let i = 0; i < rna.length; i += 3) {
      codons.push(rna.slice(i, i + 3));
    };
  };
  return codons;
}

function translateCodons(codons) {
  const proteins = [];
  let i = 0;
  while (
    codons[i] 
    && codons[i] !== "UAA"
    && codons[i] !== "UAG" 
    && codons[i] !== "UGA") {
      if (CODON_TRANSLATION[codons[i]]){
        proteins.push(CODON_TRANSLATION[codons[i]]);
        i++;
      } else {
        throw Error("Invalid codon");
      };
  };
  return proteins;
}