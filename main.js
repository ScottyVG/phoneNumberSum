// Input: [Phone Numbers] - Strings
// Output: Ph # w/ Largest sum

function phoneNumberSum(array) {
  var arraySum = array.map( noDashCcn => Array.prototype.reduce.call(noDashCcn.replace(/-/g,""), (arg1,arg2) => 1*arg1+1*arg2));
  var store = 0;

  for (i = 0; i < array.length; i++){
    if (arraySum[i] >= store) {
      store = arraySum[i];
    }
  }
  return store;
}

console.log(phoneNumberSum(['303-333-3423', '720-418-5000', '867-5309', '123-456-7890']));
