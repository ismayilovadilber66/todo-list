
const array = JSON.parse(localStorage.getItem('array')) || [{
  name: '',
  dueDate: ''
}];



renderTodoList();
function renderTodoList(){

  let result = '';

  for(let i = 0; i<array.length; i++){
    const newArray = array[i];

    const name = newArray.name;
    const dueDate = newArray.dueDate;

    const html = `
    <div class="title">${name}</div>
    <div class="title">${dueDate}</div>
    <button onclick="
    array.splice(${i}, 1)
    renderTodoList();
    " class="delete-js delete-btn">Delete</button>
    `;

    result += html;
  }

  document.querySelector('.todo-js').innerHTML = result;

  localStorage.setItem('array', JSON.stringify(array));
}


function todoList(){
  const inputElement = document.querySelector('.name-input-js');
  const name = inputElement.value;
  inputElement.value = '';

  const dueDateElement = document.querySelector('.date-input-js');
  const dueDate = dueDateElement.value;
  dueDateElement.value = '';

  array.push({
    name: name,
    dueDate: dueDate
  })

  renderTodoList();
}
  






  
  