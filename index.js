class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    return string.replace(/[^\w\s,'-]|_/g, "");
  }

  static titleize(string) {
    const exceptions = [
      "And",
      "The",
      "A",
      "An",
      "For",
      "To",
      "But",
      "At",
      "By",
      "Of",
      "From",
      "and",
      "the",
      "a",
      "an",
      "for",
      "to",
      "but",
      "at",
      "by",
      "of",
      "from",
    ];

    return string
      .split(" ")
      .map((word, index) => {
        if (index !== 0 && exceptions.includes(word)) {
          return word.toLowerCase();
        } else {
          return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join(" ");
  }
}
