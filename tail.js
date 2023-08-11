const tail = function (arr) {
  let newArr = arr.slice(1); // adds the elements of the array except for the first element.
  return newArr;
};

module.exports = tail;
