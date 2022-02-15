const toDoForm = document.querySelector(".write-form");
const toDoInput = document.querySelector(".write-form input");
const toDoList = document.querySelector(".todo-lists");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.classList.add("toDoList")
    const a = document.createElement("a");
    a.setAttribute("href", "#");
	a.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
	span.classList.add("text");
	const i = document.createElement("i");
	i.classList.add("bx", "bx-check-circle", "icon");
    li.appendChild(a);
	a.appendChild(i);
    a.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
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

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}