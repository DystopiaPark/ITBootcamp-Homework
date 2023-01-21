// GLOBALNE VARIJABLE ================================================================
let allLi = document.querySelectorAll("li");
let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");
let niz = [];

// UNESI NOVI TASK ====================================================================

let unosNovogTaska = () => {
  inputTask.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      let inputTaskValue = inputTask.value;
      if (inputTaskValue != "") {
        let liNewTask = document.createElement("li");
        liNewTask.textContent += inputTaskValue;
        let radioAdd = document.querySelector("input[name=add]:checked");
        if (radioAdd.value == "beggin") {
          ulTasks.prepend(liNewTask);
          niz.unshift(liNewTask.textContent);
        } else {
          ulTasks.appendChild(liNewTask);
          niz.push(liNewTask.textContent);
        }
        localStorage.setItem("list", JSON.stringify(niz));
        inputTask.value = "";
      }
    }
  });
};

unosNovogTaska();

// UCITAJ LISTU IZ LOKAL STORAGEA =====================================================

let ucitajListuIzLokalStoragea = () => {
  niz = JSON.parse(localStorage.getItem("list")) || [];
  niz.forEach((el) => {
    let liNewTask = document.createElement("li");
    liNewTask.textContent = el;
    ulTasks.appendChild(liNewTask);
  });
};

ucitajListuIzLokalStoragea();

// BRISI ELEMENTE IZ DOMA I LOCAL STORAGEA =============================================

ulTasks.addEventListener("click", () => {
  allLi.forEach((el) => {
    el.style.display = "none";
  });
});

let obrisiIzDomaIStoragea = () => {
  ulTasks.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      e.target.remove();
      niz = JSON.parse(localStorage.getItem("list"));
      for (i = 0; i < niz.length; i++) {
        if (e.target.textContent == niz[i]) {
          niz.splice(i, 1);
        }
      }
      localStorage.setItem("list", JSON.stringify(niz));
    }
  });
};

obrisiIzDomaIStoragea();
