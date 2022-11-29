// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

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
}
    
const logTodos = () => {
    console.log(arrayOfTodos)
}
    
const populateTodos = () => {
    li.innerHTML = arrayOfTodos[0].title
    const list = document.getElementById('todo-list')
    const element = document.createElement('li')
    const text = document.createTextNode(arrayOfTodos[0].title)
    list.appendChild(li)
    li.append(ol)
}