/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let res = "";

  const values = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  for (let [value, symbol] of values) {
    while (num >= value) {
      num -= value;
      res += symbol;
    }
  }

  return res;
};

console.log(intToRoman(1993)); //"MCMXCIII"
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(3749)); // MMMDLXXIX

// Explanation:
// The function intToRoman converts an integer to its Roman numeral representation.
// It uses a greedy algorithm by iterating through a list of value-symbol pairs,
// subtracting the value from the number and appending the symbol to the result
// string until the number is reduced to zero.

// The code is well-structured and easy to understand.
// The time complexity is O(n), where n is the number of value-symbol pairs.
// The space complexity is O(1) since the size of the result string is limited.

