class ReverseString {
  static reverse(word: string) {
    return word.length ? word.split("").reverse().join("") : word;
  }
}

export default ReverseString;
