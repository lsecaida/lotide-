const middle = (array) => {
  if (array.length <= 2) {
    array = [];
    console.log(array);
    return array;
  }
  if (array.length % 2 !== 0) {
    let chop = array.length / 2 + 0.5;
    console.log(array[chop - 1]);
    return array[chop - 1];
  }

  if (array.length % 2 === 0) {
    let emptyArr = [];
    let chop = array.length / 2;
    console.log(array[chop - 1], array[chop]);
    emptyArr.push(array[chop - 1], array[chop]);
    return emptyArr;
  }
};

module.exports = middle;
