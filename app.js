// const loginForm = document.querySelector(".login-from");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault(); //기본동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);  // form에 hidden 클래스를 추가하기
    const username =loginInput.value;  //LoginInput에 value값을 유저네임으로 기입
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`; // greeting 에 텍스트를 "Hello 유저네임" 으로 설정
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting 에서 hidden 클래스를 제거
}

loginForm.addEventListener("submit", onLoginSubmit);
