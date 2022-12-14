let division = `<div>`;
for (i = 1; i <= 64; i++) {
  if (i < 9 || (i > 16 && i < 25) || (i > 32 && i < 41) || (i > 48 && i < 57)) {
    if (i % 2 != 0) {
      division += `<span class="white">${i}</span>`;
    } else {
      division += `<span class="black">${i}</span>`;
      if (i % 8 == 0) {
        division += `<br>`;
      }
    }
  } else {
    if (i % 2 == 0) {
      division += `<span class="white">${i}</span>`;
      if (i % 8 == 0) {
        division += `<br>`;
      }
    } else {
      division += `<span class="black">${i}</span>`;
    }
  }
}
division += `</div>`;
document.body.innerHTML += division;
