const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const todo = document.querySelector("#todo-form");
const quot = document.querySelector("#quote");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSunmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  painGreetings();
}

function painGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `어서와, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
  quot.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSunmit);
} else {
  // show the greetings

  painGreetings(savedUsername);
}
