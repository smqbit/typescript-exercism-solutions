type DNA_NUCLEITIDE = "G" | "C" | "T" | "A" | string;
type RNA_NUCLEITIDE = "C" | "G" | "A" | "U";
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
type DnaRnaMappingInterface = {
  [key in DNA_NUCLEITIDE]: RNA_NUCLEITIDE;
};

export default Transcriptor;
