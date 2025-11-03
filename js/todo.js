const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);  // appendChild는 항상 마지막에
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;  // input의 현재 value를 새로운변수에 복사
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //localstorage에 있는 string을  js object로 변환
    toDos = parsedToDos
    parsedToDos.forEach(paintTodo)  // 
}




