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

// Ispis svih knjiga

let sveBtn = document.getElementById("sve-btn");
let sveResetBtn = document.getElementById("sve-btn-reset");
let sveP = document.getElementById("sve-p");
sveBtn.addEventListener("click", () => {
  sveP.textContent = "";
  nizKnjiga.forEach((knjiga) => {
    sveP.innerHTML += knjiga.stampajListu();
  });
});

sveResetBtn.addEventListener("click", () => {
  sveP.textContent = "";
});

// Ispisati sve autore kojima je ime dugačko.

let dugoImeBtn = document.getElementById("dugo-btn");
let dugoImeP = document.getElementById("dugo-p");
let dugoResetBtn = document.getElementById("dugo-btn-reset");
dugoImeBtn.addEventListener("click", () => {
  dugoImeP.textContent = "";
  nizKnjiga.forEach((knjiga) => {
    if (knjiga.dugackoIme() == true) {
      dugoImeP.innerHTML = knjiga.stampajListu();
    }
  });
});

dugoResetBtn.addEventListener("click", () => {
  dugoImeP.textContent = "";
});

// Ispisati sve one knjige koje su istovremeno i skupe i obimne.

let skupoObimneBtn = document.getElementById("skupo-obimne-btn");
let skupoObimneResetBtn = document.getElementById("skupo-obimne-btn-reset");
let skupoObimneP = document.getElementById("skupo-obimne-p");
skupoObimneBtn.addEventListener("click", () => {
  skupoObimneP.textContent = "";
  nizKnjiga.forEach((knjiga) => {
    if (knjiga.obimna() == true && knjiga.skupa() == true) {
      skupoObimneP.innerHTML = knjiga.stampajListu();
    }
  });
});

skupoObimneResetBtn.addEventListener("click", () => {
  skupoObimneP.textContent = "";
});

// Napraviti sledeće funkicje kojima se prosleđuje niz knjiga:

// ukupnaCena - Određuje i vraća koliko ukupno koštaju sve knjge u nizu knjiga

let ukupnoBtn = document.getElementById("ukupno-btn");
let ukupnoResetBtn = document.getElementById("ukupno-btn-reset");
let ukupnoP = document.getElementById("ukupno-p");
ukupnoBtn.addEventListener("click", () => {
  ukupnoP.textContent = "";
  ukupnoP.textContent = `Ukupna cena je : ${ukupnaCena(nizKnjiga)}`;
});

ukupnoResetBtn.addEventListener("click", () => {
  ukupnoP.textContent = "";
});

let ukupnaCena = (niz) => {
  let zbir = 0;
  niz.forEach((knjiga) => {
    zbir += knjiga.cena;
  });
  return zbir;
};

// prosecnaCena - Određuje i vraća kolika je prosečna cena knjige
let prosecnoBtn = document.getElementById("prosecno-btn");
let prosecnoResetBtn = document.getElementById("prosecno-btn-reset");
let prosecnoP = document.getElementById("prosecno-p");
prosecnoBtn.addEventListener("click", () => {
  prosecnoP.textContent = "";
  prosecnoP.textContent = `Prosecna cena je : ${prosecnaCena(nizKnjiga)}`;
});

prosecnoResetBtn.addEventListener("click", () => {
  prosecnoP.textContent = "";
});

let prosecnaCena = (niz) => {
  let zbir = 0;
  niz.forEach((knjiga) => {
    zbir += knjiga.cena;
  });
  return zbir / niz.length;
};

// prosecnaStranica - Određuje i vraća kolika je prosečna cena jedne stranice knjige

let prosecnoSBtn = document.getElementById("prosecnoS-btn");
let prosecnoSResetBtn = document.getElementById("prosecnoS-btn-reset");
let prosecnoSP = document.getElementById("prosecnoS-p");
prosecnoSBtn.addEventListener("click", () => {
  prosecnoSP.textContent = "";
  prosecnoSP.textContent = `Prosecna cena po stranici je : ${prosecnaStranica(
    nizKnjiga
  )}`;
});

prosecnoSResetBtn.addEventListener("click", () => {
  prosecnoSP.textContent = "";
});

let prosecnaStranica = (niz) => {
  let zbir = ukupnaCena(niz);
  let ukupnoStranica = 0;
  niz.forEach((knjiga) => {
    ukupnoStranica += knjiga.brojStrana;
  });
  return zbir / ukupnoStranica;
};

let resetBtn = document.getElementById("reset-btn");
resetBtn.style.position = "fixed";
resetBtn.style.top = 0;
resetBtn.style.right = 0;
resetBtn.addEventListener("click", () => {
  location.reload();
});
