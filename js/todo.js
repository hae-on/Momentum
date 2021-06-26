const toDoForm = document.getElementById("todo-form");
// = const toDoInput = document.querySelector("#todo-form input")
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // localStorage에 todo의 내용을 저장한다. json을 이용해 배열 형태로 담아줌 (근데 진짜 배열은 아니고 string임)
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  // event.target.parentElement.innerText로 타고타고 들어가면 각 li의 차이점이 출력됨 console.dir 사용
  const li = event.target.parentElement;
  li.remove();
  // toDo.id는 num, li.id는 string이므로 비교 자체가 안 됨 -> parseInt사용
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  // html요소를 js에서
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //  컴퓨터가 이해할 수 있도록 예쁜 배열을 만들어줌
  const parsedToDos = JSON.parse(savedToDos);
  // 원래 있던 배열 요소 + 새로 생긴 배열 요소 (계속 toDos가 빈 배열인 것을 막기 위해)
  toDos = parsedToDos;
  // forEach를 통해 각각의 배열 요소 하나하나마다 함수를 담아줌 결국 새로고침해도 todo 값을 잃어버리지 않음
  parsedToDos.forEach(paintToDo);
}
