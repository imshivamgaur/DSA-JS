function sumArrayElements(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const ans = sumArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("Total sum of Array is: ", ans);
