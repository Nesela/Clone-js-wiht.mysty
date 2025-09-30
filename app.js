// const loginForm = document.querySelector(".login-from");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //반복되는 스트링을 변수값으로 고정
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //기본동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);  // form에 hidden 클래스를 추가하기
    const username =loginInput.value;  //LoginInput에 value값을 유저네임으로 기입
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null ){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(savedUsername)
}