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


export function translate(rna) {
    if (rna === undefined || rna.length === 0) {
        return [];
    }

    const firstThree = rna.slice(0, 3);
    const rest = rna.slice(3);

    const isStopCodon = (firstThree === "UAA") || (firstThree === "UAG") || (firstThree === "UGA");
    if (isStopCodon) {
        return [];
    }

    const protein = CODON_TRANSLATION[firstThree];

    if (protein === undefined) {
        throw Error("Invalid codon");
    }

    return [protein].concat(translate(rest));
};