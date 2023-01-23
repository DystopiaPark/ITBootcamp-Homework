let getUsers = (resolve, reject) => {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);
      resolve(data);
    } else if (request.readyState === 4) {
      reject("Desila se greska");
    }
  });
  request.open("GET", "sportisti.json");
  request.send();
};

let ispisKonzola = (poruka) => {
  console.log(poruka);
};

// 3. Ispisati prosečnu visinu svih sportista.

let prosecnaVisinaSportista = (niz) => {
  let zbir = 0;
  niz.forEach((el) => {
    zbir += el.visina;
  });
  console.log((zbir / niz.length).toFixed(2));
};

getUsers(prosecnaVisinaSportista, ispisKonzola);

// 4. Ispisati ime i prezime sportiste sa najmanje transfera (bilo kog ako ima više
// takvih sportista).

let sportistaSaNajmanjeTransfera = (niz) => {
  let minTransfera = niz[0].timovi.length;
  let minIme = niz[0].imePrezime;
  niz.forEach((el) => {
    if (el.timovi.length < minTransfera) {
      minTransfera = el.timovi.length;
      minIme = el.imePrezime;
    }
  });
  console.log(minIme);
};

getUsers(sportistaSaNajmanjeTransfera, ispisKonzola);

// 5. Ispisati imena i prezimena svih sportista koji su igrali za „Lakers“-e.

let sportistiIgraliZaLejkerse = (niz) => {
  niz.forEach((el) => {
    el.timovi.forEach((el2) => {
      if (el2 === "Lakers") {
        console.log(el.imePrezime);
      }
    });
  });
};

getUsers(sportistiIgraliZaLejkerse, ispisKonzola);
