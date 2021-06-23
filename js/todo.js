const toDoForm = document.getElementById("todo-form");
// = const toDoInput = document.querySelector("#todo-form input")
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  // event.target.parentElement.innerText로 타고타고 들어가면 각 li의 차이점이 출력됨 console.dir 사용
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  // html요소를 js에서
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  //   li안에 span을 넣어주기 위해 이 형태로 작성
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //   내용이 사라지기전에 다른 곳에 value값 저장
  const newTodo = toDoInput.value;
  //   Enter를 치면 내용을 없애줌
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
