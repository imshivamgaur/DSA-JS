function printNumber(Lrange, Urange) {
  // if (Lrange < Urange) {
  //   console.log(Lrange);
  //   Lrange++;
  //   printNumber(Lrange, Urange);
  // }

  //! Base Case
  if (Lrange > Urange) {
    return;
  } else {
    printNumber(Lrange + 1, Urange);
    console.log(Lrange);
  }
}

printNumber(5, 10);
