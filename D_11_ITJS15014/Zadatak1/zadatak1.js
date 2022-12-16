// Imenovana funkcija
function aS(n, m) {
  let zbir = 0;
  let brBrojeva = 0;
  for (n; n <= m; n++) {
    if (n % 3 != 0) {
      zbir += n;
      brBrojeva++;
    }
  }
  return zbir / brBrojeva;
}

console.log(aS(5, 9));

// Arrow funkcija
let arithmeticMean = (n, m) => {
  let zbir = 0;
  let brBrojeva = 0;
  for (n; n <= m; n++) {
    if (n % 3 != 0) {
      zbir += n;
      brBrojeva++;
    }
  }
  return zbir / brBrojeva;
};

console.log(arithmeticMean(1, 4));
