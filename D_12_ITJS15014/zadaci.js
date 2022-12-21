//========================================================================

// ZADATAK 1
// Dat je niz stavki za kupovinu (članovi niza su stringovi).
// Prolaskom kroz niz napraviti neuređenu listu i ispisati je u
// html dokument.

//========================================================================

let listaNiz = ["prasak", "zejtin", "hleb", "so", "kafa", "sirce"];

// 1) standard

let lista = `<ul>`;
let kupovina = (niz) => {
  for (i = 0; i < niz.length; i++) {
    lista += `
      <li>${niz[i]}</li>
      `;
  }
  lista += `</ul>`;
  return lista;
};

kupovina(listaNiz);
document.body.innerHTML += lista;

// 2) forEach

let lista2 = `<ul>`;
let kupovina2 = (niz) => {
    lista2 += `
      <li>${niz}</li>
      `;
    return lista2;
};

listaNiz.forEach(kupovina2);
lista2 += `</ul>`;
document.body.innerHTML += lista2;

//========================================================================

// ZADATAK 2
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz
// formirati tabelu u čijim su redovima imena tima, i tabelu
// ispisati u html dokument.

//========================================================================

let imenaTimovaNiz = [
  "Mavericks",
  "Nuggets",
  "Bucks",
  "76'ers",
  "Lakers",
  "Grizzlies"
];

let imenaIgracaNiz = [
  "Doncic",
  "Jokic",
  "Antetekumpo",
  "Embid",
  "Lebron",
  "Morant"
];

// 1) standard

let tabela = `<table border= 1>`;
let kosarka = (niz1, niz2) => {
  for (i = 0; i < niz1.length; i++) {
    tabela += `
      <tr>
        <th>${niz1[i]}</th>
        <td>${niz2[i]}</td>
      </tr>
    `;
  }
  tabela += `</table>`;
  return tabela;
};

kosarka(imenaTimovaNiz, imenaIgracaNiz);
document.body.innerHTML += tabela;

// 2) forEach

let tabela2 = `<table border= 1>`;
let kosarka2 = (niz1) => {
    tabela2 += `
      <tr>
        <td>${niz1}</td>
      </tr>
    `;
    return tabela2;
};

imenaTimovaNiz.forEach(kosarka2);
tabela2 += `</table>`;
document.body.innerHTML += tabela2;

//========================================================================

// ZADATAK 3
// Dat je niz stringova čiji su članovi putanje do slika.
// Prikazati sve slike u html dokumentu, pri čemu su putanje do slika one
// putanje koje su navedene u nizu

//========================================================================

let imgNiz = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
];

// 1) standard

let imgPut = (niz) => {
  for (i = 0; i < niz.length; i++) {
    document.write(`<img src=${niz[i]} style="width: 300px; height: 300px;"/>`);
  }
};
imgPut(imgNiz);

// 2) forEach

let imgPut2 = niz => {
    document.write(`<img src=${niz} style="width: 300px; height: 300px;"/>`);
}
imgNiz.forEach(imgPut2);
