function sumArrayRecursive(arr) {
  if (arr.length == 0) {
    return 0;
  }

  return arr[0] + sumArrayRecursive(arr.slice(1));
}

console.log(sumArrayRecursive([1, 2, 3, 4, 5]));
