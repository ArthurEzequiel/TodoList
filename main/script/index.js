// Referenciando os elementos HTML
const addButton = document.getElementById("add-button");
const topicModal = document.getElementById("topic-modal");
const closeIcon = document.getElementsByClassName("close")[0];
const topicSelect = document.getElementById("topic-select");
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo-button");
const todoList = document.getElementById("todo-list");

// Adicionando evento de clique ao botão "Adicionar"
addButton.addEventListener("click", openModal);

// Adicionando evento de clique ao ícone de fechar
closeIcon.addEventListener("click", closeModal);

// Adicionando evento de clique ao botão "Adicionar" no modal
addTodoButton.addEventListener("click", addTodo);

// Função para abrir o modal
function openModal() {
  topicModal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  topicModal.style.display = "none";
}

// Função para adicionar uma tarefa à lista
function addTodo() {
  const todoText = todoInput.value.trim();
  const todoTopic = topicSelect.value;

  if (todoText !== "") {
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item topic-" + todoTopic;

    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
      todoList.removeChild(todoItem);
    });

    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    todoInput.value = "";
    closeModal();
  }
}
