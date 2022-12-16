// Imenovana funkcija
function velicinaStringa(n, s) {
  document.write(`<p style="font-size:${n}px;">${s}</p>`);
}

velicinaStringa(23, "Biblioteka iz prasume");

// Arrow funkcija
let stringer = (n, s) => {
  document.write(`<p style="font-size:${n}px;">${s}</p>`);
};

stringer(42, "Restoran na kraju vaseljene");
