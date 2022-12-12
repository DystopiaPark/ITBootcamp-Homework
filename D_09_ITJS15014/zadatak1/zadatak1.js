let n = 6;

for (i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    document.write(
      `<img src="slika.jpg" width="200px" style="border: 5px solid red;" />`
    );
  } else {
    document.write(
      `<img src="slika.jpg" width="200px" style="border: 5px solid blue;" />`
    );
  }
}
