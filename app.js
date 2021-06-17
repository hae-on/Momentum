const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 폼 글자 입력 후 새로고침 현상 방지
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // localStorage에 username을 저장해주어 사용자 이름을 기억
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello " + username; 이렇게 적을 수 있으나 밑의 형식을 선호
  greeting.innerText = `Hello ${username}`;
}

// localStorage에 저장된 값을 출력
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //form을 보여줌
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //greetings을 보여줌
  paintGreetings(savedUsername);
}
