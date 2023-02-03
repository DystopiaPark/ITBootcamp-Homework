import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.getElementById("poruke-ul");
let sendBtn = document.getElementById("send-btn");
let sendInput = document.getElementById("send-input");
let updateInput = document.getElementById("update-input");
let updateBtn = document.getElementById("update-btn");
let imeSection = document.getElementById("ime-section");
let navUL = document.getElementById("nav-ul");
let chatSection = document.getElementById("chat-section");
let prevButton;

// Loads username
let username;
if (localStorage.user) {
  username = localStorage.getItem("user");
} else {
  username = "anonymous";
  localStorage.setItem("user", username);
}

// Loads room
let room;
if (localStorage.room) {
  room = localStorage.getItem("room");
} else {
  room = "#general";
  localStorage.setItem("room", room);
}

// Sets current room list color on load/reload
onload = (e) => {
  let color = document.getElementById(room);
  color.style.opacity = 0.7;
  prevButton = color;
};

// Objects
let chatroom = new Chatroom(room, username); // Object of chatroom class
let chatUI = new ChatUI(ul); // Object of ChatUI class

// Listens and makes changes
let makeChange = () => {
  chatroom.getChats((data) => {
    chatUI.templateLI(data);
    chatSection.scrollTo(0, chatSection.scrollHeight);
  });
};
makeChange();

// Inputs chat
sendBtn.addEventListener("click", () => {
  if (sendInput.value.trim().length == 0) return (sendInput.value = ""); // guard
  chatroom
    .addChat(sendInput.value)
    .then(() => {
      sendInput.value = "";
      chatSection.scrollTo(0, chatSection.scrollHeight);
    })
    .catch((err) => console.log(err));
});

// Changes username
updateBtn.addEventListener("click", () => {
  chatroom.username = updateInput.value;
  updateInput.value = "";
  let ime = document.createElement("span");
  ime.textContent = chatroom.username;
  if (ime.textContent == localStorage.user || localStorage.user == "Anonymous")
    return;
  localStorage.setItem("user", chatroom.username);
  ime.id = "user-show";
  ime.textContent = `New username: ${chatroom.username}`;
  imeSection.appendChild(ime);
  window.scrollTo(0, document.body.scrollHeight);
  setTimeout(() => {
    ime.remove();
    location.reload();
  }, 3000);
});

// Changes room
navUL.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    // 1. Uzimamo ime sobe na koju je kliknuto
    let newRoom = e.target.textContent;
    // 2. Update sobe na koju je kliknuto
    chatroom.updateRoom(newRoom);
    // 3. Izbrisati sve poruke sa ekrana
    chatUI.clearUL();
    localStorage.setItem("room", newRoom);
    // 4. Prikazi chatove
    makeChange();
  }
});

// Signify currently clicked button
navUL.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    if (e.target == prevButton) return;
    e.target.style.opacity = "0.7";
    if (prevButton !== null) {
      prevButton.style.opacity = "1";
    }
    prevButton = e.target;
  }
});
