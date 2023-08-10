const tail = function (words) {
  if (words.length < 2) {
    return words;
  } else {
    return words.slice(1);
  }
};

module.exports = tail;
