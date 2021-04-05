// let arrayOfTodos = [
//   {
//       "userId": 14,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//   },
//   {
//       "userId": 20,
//       "id": 2,
//       "title": "delectus aut autem",
//       "completed": false
//   }]

let filteredList = ""

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => arrayOfTodos = json)
      .then((json) => filteredList = json)
} 

const logTodos = () => {
  console.log(arrayOfTodos)
}
let todoList = document.getElementById('todo-list')

const populateTodos = (arrayOfTodos) => {
  document.getElementById('todo-list').innerHTML = ""
  arrayOfTodos.forEach(function (todo) {

      let li = document.createElement('li');
      let doneButton = document.createElement('button');
      li.textContent = todo.title;
      todoList.appendChild(li);
      
      if (todo.completed == false) {
          li.style.color = "red";
          li.style.textDecoration = "none";
          li.appendChild(doneButton)
          doneButton.innerText = "done"
          doneButton.classList.add("done-button")
      }

      doneButton.addEventListener('click', function () {
          console.log("clicked")
          li.style.color = "black"
          li.style.textDecoration = "line-through"
          li.removeChild(doneButton)
      })
  });
  fetchTodos()   
}

const filterTodos = (filtered) => {
  document.getElementById('todo-list').innerHTML = ""
  populateTodos(filtered)
  }

const isDone = (trueOrFalse) => {
  let completed = trueOrFalse
  filteredList = filteredList.filter(function (todo) {
      if (todo.completed === completed) {
          return todo
      }
  })

  filterTodos(filteredList)
  console.log(filteredList);
}

const idFilter = () => {
  let userID = document.getElementById('userID').value;
  console.log(userID)
  filteredList = arrayOfTodos.filter(function (todo) {
      if (todo.userId == userID) {
          return todo
      }
  })
  filterTodos(filteredList)
  console.log(filteredList)
}
