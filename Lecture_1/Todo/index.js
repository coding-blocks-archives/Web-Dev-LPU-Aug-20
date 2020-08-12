
const actionButton = document.getElementById('todo-action');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function deleteLiTodo(id) {
  const li = document.getElementById(id);
  li.remove();
}
function createLiForTodo(text) {
  const li = document.createElement('li')
  const textEl = document.createElement('span')
  textEl.appendChild(document.createTextNode(text))
  const button = document.createElement('button')
  button.appendChild(document.createTextNode('Delete'))
  button.addEventListener('click', () => {
    li.remove()
  })

  li.appendChild(textEl)
  li.appendChild(button)

  return li
}

actionButton.addEventListener('click', () => {
  const todoText = todoInput.value;
  const htmlContent = createLiForTodo(todoText);

  todoList.append(htmlContent)
});


// function a() {

// }
// const a = function () {

// }
// const a = () => {

// }
// const a = () => 1
