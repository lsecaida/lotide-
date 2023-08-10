const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns ['Raphael', 'Michaelangelo', 'Donatello'] for ['Leonardo', 'Raphael', 'Michaelangelo', 'Donatello']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});

const words = ["Leonardo", "Raphael", "Michaelangelo", "Donatello"];

tail(words);
