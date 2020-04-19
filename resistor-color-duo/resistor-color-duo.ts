type Color = "black"| "brown" | "red" | "orange" | "yellow" | "green" | "blue" | "violet" | "grey"  | "white";
export class ResistorColor {
  private colors: Color[];
  private colorMap: Color[] = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  constructor(colors: Color[]) {
    if (colors.length < 2) {
      throw "At least two colors need to be present";
    }
    this.colors = colors.splice(0, 2);
  }
  value = (): number => {
    return Number(
      this.colors
        .map((color) => {
          return this.colorMap.findIndex((item) => item === color);
        })
        .join("")
    );
  };
}
