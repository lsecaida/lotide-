const assertEqual = require("./assertEqual");

const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //only run the code on items included in the itemsToCount
    if (itemsToCount[item]) {
      //if the item is already in the object, increase its value by one.
      //if not, add it to the object with 1 as its value
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

//TEST
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
