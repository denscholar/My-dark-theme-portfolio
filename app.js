const toggle = document.querySelector(".toggle");
const sideNav = document.querySelector(".side-nav");
const cancel = document.querySelector(".cancel");
const navItem = document.querySelectorAll(".nav-item");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const projectInput = document.getElementById("project");
const messageInput = document.getElementById("message");

toggle.addEventListener("click", () => {
  sideNav.style.display = "flex";
  toggle.style.display = "none";
  cancel.style.display = "flex";
});
cancel.addEventListener("click", () => {
  sideNav.style.display = "none";
  cancel.style.display = "none";
  toggle.style.display = "flex";
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (sideNav.style.display === "flex") {
      sideNav.style.display = "none";
      cancel.style.display = "none";
      toggle.style.display = "flex";
    }
  });
});

const typedTextSpan = document.querySelector(".typed-text");
const textArray = [
  "Dennis",
  "a software developer",
  "a designer",
  "a content creator",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newTextDelay + 250);
});

// Form Validation
// const fullName = document.getElementById('name');
// const email = document.getElementById('email');
// const project = document.getElementById('project');
// const message = document.getElementById('message');
// const errorMsgName = document.querySelector('.error-msg-name');
// const btnSubmit = document.querySelector('.form button');
// console.log(btnSubmit);



const formData = document.getElementById("form-data");

//add event listerner to the submit buttom
formData.addEventListener("submit", (e) => {
  e.preventDefault();
  //get values from the inputs

  const name = nameInput.value;
  const email = emailInput.value;
  const project = projectInput.value;
  const message = messageInput.value;

  if (!name || !email || !project || !message) {
    return;
  }

  const userData = {
    name: name,
    email: email,
    project: project,
    message: message,
  };
  localStorage.setItem("data", JSON.stringify(userData));
});

//check local storage for userData and persiting the data
const userInfo = JSON.parse(localStorage.getItem("data"));
if (userInfo) {
  nameInput.value = userInfo.name;
  emailInput.value = userInfo.email;
  projectInput.value = userInfo.project;
  messageInput.value = userInfo.message;
}
