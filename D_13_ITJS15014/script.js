let dan = {
  // OSOBINE
  datum: "2021/12/23",
  kisa: true,
  sunce: false,
  oblacno: true,
  temperature: [10, 25, 1, 23, 25, 2],
  // ZADATAK 1
  // Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
  tropskiDan: function () {
    let tropski = true;
    this.temperature.forEach((t) => {
      if (t < 24) {
        tropski = false;
      }
    });
    return tropski;
  },
  // ZADATAK 2
  // Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
  nepovoljanDan: function () {
    let nepovoljan = false;
    for (i = 0; i < this.temperature.length; i++) {
      if (Math.abs(this.temperature[i] - this.temperature[i + 1]) > 8) {
        nepovoljan = true;
      }
    }
    return nepovoljan;
  },
  // ZADATAK 3
  // Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
  neuobicajanDan: function () {
    let neuobicajan = false;
    this.temperature.forEach((t) => {
      if (
        (t < -5 && this.kisa == true) ||
        (t > 25 && this.oblacno == true) ||
        (this.kisa == true && this.oblacno == true && this.sunce == true)
      ) {
        neuobicajan = true;
      }
    });
    return neuobicajan;
  }
};
console.log(dan.tropskiDan());
console.log(dan.nepovoljanDan());
console.log(dan.neuobicajanDan());
