let n = 1;
let m = 43;
let zbir = 0;
while (n <= m) {
  if (n % 3 == 0 && n % 7 != 0) {
    zbir += n;
  }
  n++;
}
console.log(zbir);
