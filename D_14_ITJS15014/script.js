let knjiga1 = {
  naziv: "Sofijin Svet",
  autor: "Justejn Gorder",
  link: "/slike/sofijin_svet.jpg",
  procitana: true,
};

let knjiga2 = {
  naziv: "Papagajeva Teorema",
  autor: "Deni Gedj",
  link: "/slike/papagajeva_teorema.jpg",
  procitana: false,
};

let knjiga3 = {
  naziv: "2001: Odiseja u svemiru",
  autor: "Artur Klark",
  link: "/slike/2001.jpg",
  procitana: true,
};

nizKnjiga = [knjiga1, knjiga2, knjiga3];

// Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.
// U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.
// Ukoliko je knjiga pročitana, boja teksta treba da bude plava, a ako nije, boja teksta treba da bude siva.
// Vrste tabele treba da budu naizmenično obojene u dve pozadinske boje.

const tabela = document.createElement("table");
document.body.appendChild(tabela);
tabela.style.border = `2px solid red`;
for (i = 0; i < nizKnjiga.length; i++) {
  let row = document.createElement("tr");
  let data = document.createElement("td");
  let data2 = document.createElement("td");
  let img = document.createElement("img");
  let paragraph = document.createElement("p");
  let paragraph2 = document.createElement("p");
  tabela.appendChild(row);
  row.appendChild(data);
  row.appendChild(data2);
  data.appendChild(img);
  img.src = `${nizKnjiga[i].link}`;
  img.style.width = `100px`;
  img.style.height = `100px`;
  img.style.objectFit = `contain`;
  data2.appendChild(paragraph);
  data2.appendChild(paragraph2);
  paragraph.textContent = `Naslov: ${nizKnjiga[i].naziv}`;
  paragraph2.textContent += `Autor: ${nizKnjiga[i].autor}`;
  data.style.border = `2px solid red`;
  data2.style.border = `2px solid red`;
  if (nizKnjiga[i].procitana == true) {
    data2.style.color = `blue`;
  } else {
    data2.style.color = `gray`;
  }
  if (i % 2 == 0) {
    row.style.backgroundColor = `rgb(201, 204, 63)`;
  } else {
    row.style.backgroundColor = `rgb(175, 225, 175)`;
  }
}
