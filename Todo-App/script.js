// Call this function when the page loads to retrieve the todo list from local storage

window.onload = function() {
  if (localStorage.getItem('todoList')) {
    todoList = JSON.parse(localStorage.getItem('todoList'))
    displayItem()
  }
}

// Call this function whenever you add or delete a todo item
function updateLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

let todoList = [
  { item: 'Buy milk', dueDate: '2/3/2024' },
  { item: 'Go to college', dueDate: '2/3/2024' },
];
// we call this function when we reload the page
displayItem();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  let dateElement = document.querySelector('#todo-date');
  let todoDate = dateElement.value;

  todoList.push({ item: todoItem, dueDate: todoDate });
  // clear input element
  inputElement.value = '';
  dateElement.value = '';

  // we call this function when we add new todo
  displayItem();
  // After adding the item, update the local storage
  updateLocalStorage()
}

function displayItem() {
  let ContainerElement = document.querySelector('.todo-container');

  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="delete-button" onclick="todoList.splice(${i}, 1); displayItem()">Delete</button>
    `;
  }

  ContainerElement.innerHTML = newHtml;
  // After displaying the items, update the local storage
  updateLocalStorage();
}
