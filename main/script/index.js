// Referenciando os elementos HTML
const addButton = document.getElementById("add-button");
const topicModal = document.getElementById("topic-modal");
const closeIcon = document.getElementsByClassName("close")[0];
const topicSelect = document.getElementById("topic-select");
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo-button");
const todoList = document.getElementById("todo-list");



// Array para armazenar as listas
let todos = [];

// Verificando se há dados salvos no armazenamento local
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
  renderTodos();
}

// Adicionando evento de clique ao botão "Adicionar"
addButton.addEventListener("click", openModal);

// Adicionando evento de clique ao ícone de fechar
closeIcon.addEventListener("click", closeModal);

// Adicionando evento de clique ao botão "Adicionar" no modal
addTodoButton.addEventListener("click", addTodo);

// Função para abrir o modal
function openModal() {
  topicModal.style.display = "grid";
}

// Função para fechar o modal
function closeModal() {
  topicModal.style.display = "none";
}

// ao inciar o modal fica invisivel, para que grid deixe ele no meio da tela sem problema
topicModal.style.display = "none";

function addTodo() {
  const todoText = todoInput.value.trim();
  const todoTopic = topicSelect.value;

  if (todoText !== "") {
    const todo = {
      text: todoText,
      topic: todoTopic
    };

    todos.push(todo);
    saveTodos();

    todoInput.value = "";
    closeModal();
    renderTodos();
  }
}

// Função para salvar as listas no armazenamento local
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Função para renderizar as listas na tela
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item topic-" + todo.topic;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Apagar";
    deleteButton.className = "delete-button";

    const todoTitle = document.createElement("h2");
    todoTitle.textContent = todo.topic;
    todoItem.appendChild(todoTitle);

    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = todo.text;


    deleteButton.addEventListener("click", function () {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  });
}

