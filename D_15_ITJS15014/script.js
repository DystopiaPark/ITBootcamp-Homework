// import
import { Knjiga } from "./knjiga.js";

// objekti
let k1 = new Knjiga("Sofijin svet", "Justejn Gorder", 1991, 544, 1000);
let k2 = new Knjiga(
  "Cudesno putovanje Nilsa Holgersona kroz Svedsku",
  "Selma Lagerlef",
  1906,
  360,
  800
);
let k3 = new Knjiga("Timaj", "Platon", -360, 176, 1500);
let k4 = new Knjiga("Kritika cistog uma", "Imanuel Kant", 1781, 856, 9000);
let k5 = new Knjiga("Mali Princ", "Antoan De Sent Egziperi", 1943, 112, 600);
let k6 = new Knjiga("", "", "", "", "");

let nizKnjiga = [k1, k2, k3, k4, k5, k6];
console.log(nizKnjiga);

// Ispisati sve autore kojima je ime dugačko.

nizKnjiga.forEach((knjiga) => {
  if (knjiga.dugackoIme() == true) {
    console.log(knjiga);
  }
});

// Ispisati sve one knjige koje su istovremeno i skupe i obimne.

nizKnjiga.forEach((knjiga) => {
  if (knjiga.obimna() == true && knjiga.skupa() == true) {
    console.log(knjiga);
  }
});

// Napraviti sledeće funkicje kojima se prosleđuje niz knjiga:

// ukupnaCena - Određuje i vraća koliko ukupno koštaju sve knjge u nizu knjiga

let ukupnaCena = (niz) => {
  let zbir = 0;
  niz.forEach((knjiga) => {
    zbir += knjiga.cena;
  });
  return zbir;
};

console.log(ukupnaCena(nizKnjiga));

// prosecnaCena - Određuje i vraća kolika je prosečna cena knjige

let prosecnaCena = (niz) => {
  let zbir = 0;
  niz.forEach((knjiga) => {
    zbir += knjiga.cena;
  });
  return zbir / niz.length;
};

console.log(prosecnaCena(nizKnjiga));
// prosecnaStranica - Određuje i vraća kolika je prosečna cena jedne stranice knjige

let prosecnaStranica = (niz) => {
  let zbir = ukupnaCena(niz);
  let ukupnoStranica = 0;
  niz.forEach((knjiga) => {
    ukupnoStranica += knjiga.brojStrana;
  });
  return zbir / ukupnoStranica;
};

console.log(prosecnaStranica(nizKnjiga));
