class Transcriptor {
  toRna(dna: string) {
    const DNA_RNA_MAPPING: DnaRnaMappingInterface = {
      G: "C",
      C: "G",
      T: "A",
      A: "U",
    };

    return Array.from(dna)
      .map((dna) => DNA_RNA_MAPPING[dna] || this.throwError())
      .join("");
  }

  throwError() {
    throw new Error("Invalid input DNA.");
  }
}
interface DnaRnaMappingInterface {
  [key: string]: string;
}

export default Transcriptor;
