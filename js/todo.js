const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.querySelector("#todo-list");

const TODO_KEY = "todos";
let toDos = [];

saveToDos = () => {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
};

deleteToDo = (event) => {
    const item = event.target.parentElement;
    item.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(item.id));
    saveToDos();
};

paintToDo = (newTodo) => {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);

    button.innerText = " X ";
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
};

function handleToDoForm(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
console.log("asdfasdfe");
toDoForm.addEventListener("submit", handleToDoForm);

const savedToDos = localStorage.getItem(TODO_KEY);

if(savedToDos !== null) {
    const todoItems = JSON.parse(savedToDos);
    toDos = todoItems;
    todoItems.forEach(paintToDo);
}


