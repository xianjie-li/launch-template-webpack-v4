module.exports = {
  testFilter(text, options) {
    return text + JSON.stringify(options);
  }
}