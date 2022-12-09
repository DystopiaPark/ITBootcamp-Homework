let v = 300;
let n = 105;
if (v / n >= 3) {
  document.write("<p style='color:green;'>DA</p>");
} else {
  document.write(
    `<p style='color:red;'>NE! Potrebno je da ${
      n - v / 3
    } coveka napuste lokal!</p>`
  );
}
