const middle = (array) => {
  if (array.length <= 2) {
    array = []; //holds the middle elements of the arr array
    console.log(array);
    return array;
  }
  if (array.length % 2 !== 0) {
    //check if the lenght is not an even number
    let chop = array.length / 2 + 0.5;
    console.log(array[chop - 1]);
    return array[chop - 1];
  }

  if (array.length % 2 === 0) {
    //check if the length is an even number
    let emptyArr = [];
    let chop = array.length / 2;
    console.log(array[chop - 1], array[chop]);
    emptyArr.push(array[chop - 1], array[chop]);
    return emptyArr; //Adds the middle number
  }
};

module.exports = middle;
