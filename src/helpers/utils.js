class Utils {
  static strSlug(word, symbol = '-') {
    const slug = word.toLowerCase().split(' ').join(symbol);
    return slug;
  }
}

export default Utils;
