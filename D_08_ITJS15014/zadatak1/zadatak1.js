let v = 302;
let n = 108;
if (v / n >= 3) {
  document.write("<p style='color:green;'>DA</p>");
} else {
  document.write(
    `<p style='color:red;'>NE! Potrebno je da ${Math.ceil(
      n - v / 3
    )} coveka napuste lokal!</p>`
  );
}
