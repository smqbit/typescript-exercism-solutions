class Transcriptor {
  toRna(dna: string) {
    const DNA_RNA_MAPPING: Foo = {
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

type d = "G" | "C" | "T" | "A";
type r = "C" | "G" | "A" | "U";
type Foo = {
  [K in d]: r
};

export default Transcriptor;
