class Transcriptor {
  DNA_RNA_MAPPING: Array<string[]> = [
    ["G", "C"],
    ["C", "G"],
    ["T", "A"],
    ["A", "U"],
  ];

  DNA_RNA_MAP = new Map();

  constructor() {
    this.DNA_RNA_MAP = this.DNA_RNA_MAPPING.reduce(
      (map, [key, value]) => map.set(key, value),
      this.DNA_RNA_MAP
    );
  }

  toRna(dna: string) {
    const result = Array.from(dna).reduce((complement, nucleotide) => {
      if (!this.DNA_RNA_MAP.has(nucleotide)) {
        throw new Error("Invalid input DNA.");
      } else {
        return `${complement}${this.DNA_RNA_MAP.get(nucleotide)}`;
      }
    }, "");
    return result;
  }
}

export default Transcriptor;
