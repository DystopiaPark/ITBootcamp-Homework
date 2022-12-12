// prvi nacin
let n = 37;
let a = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    a++;
  }
}

if (a > 2) {
  console.log(`Broj ${n} je složen broj`);
} else {
  console.log(`Broj ${n} je prost broj`);
}
