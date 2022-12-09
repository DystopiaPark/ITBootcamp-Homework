let n = 15;
let i = 1;
let a = 0;
while (i <= n) {
  if (n % i == 0 && i % 3 == 0 && i % 2 == 1) {
    a++;
  }
  i++;
}
console.log(a);
