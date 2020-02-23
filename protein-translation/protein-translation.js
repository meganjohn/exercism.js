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
    if (rna === undefined) {
      return [];
    };

    return translateCodons(splitCodons(rna));
};

function splitCodons (rna) {
  const codons = [];

  for (let i = 0; i < rna.length; i += 3) {
    codons.push(rna.slice(i, i + 3));
  };

  return codons;
}

function translateCodons(codons) {
  const proteins = [];

  for (const codon of codons) {
    const isStopCodon = (codon === "UAA") || (codon === "UAG") || (codon === "UGA");

    if (isStopCodon) {
      return proteins;
    }

    const protein = CODON_TRANSLATION[codon];

    if (protein === undefined) {
      throw Error("Invalid codon");
    }

    proteins.push(protein);
  }

  return proteins;
}