/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;
  let str = Math.abs(x).toString();
  let reversedStr = str.split("").reverse().join("");
  let reversedNum = parseInt(reversedStr, 10);
  
  if (isNegative) { 
    reversedNum = -reversedNum;
  }
  
  if (reversedNum > Math.pow(2, 31) - 1 || reversedNum < -Math.pow(2, 31)) {
    return 0;
  }
  
  return reversedNum;
};



/** * Alternative implementation using mathematical approach
var reverse = function (x) {
  // Constants for 32-bit signed integer bounds
  const INT_MAX = 2147483647; // 2^31 - 1
  const INT_MIN = -2147483648; // -2^31

  let reversed = 0;
  let num = Math.abs(x);

  // Mathematical approach - more efficient than string manipulation
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  // Apply original sign
  reversed = x < 0 ? -reversed : reversed;

  // Check overflow before returning
  if (reversed > INT_MAX || reversed < INT_MIN) {
    return 0;
  }

  return reversed;
};
*/