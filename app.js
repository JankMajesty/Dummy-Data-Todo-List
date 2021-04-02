
   let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
    console.log('arrayOfTodos', arrayOfTodos)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    // get ol tag to insert list items
    const ol = document.getElementById('todo-list');

    for (let index = 0; index < array.length; index++) {
      const li = document.createElement("li");
      const title = arrayOfTodos[index].title
      const listItemText = document.createTextNode(title);
      li.appendChild(listItemText)
      document.body.insertBefore(li,ol);
      
      console.log('element:' element)
      
    }
    //create and element <li></li>
    //get parent element <ol></ol>
    // 
  }