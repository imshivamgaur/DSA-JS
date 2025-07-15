function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

let ans = reverseString("shivam");
console.log(ans);
console.log(ans.length);

