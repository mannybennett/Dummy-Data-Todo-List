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
    for (let i=0; i < arrayOfTodos.length; i++) {

        const list = document.getElementById('todo-list')
        const element = document.createElement('li')
        const text = document.createTextNode(arrayOfTodos[i].title)
        list.appendChild(element)
        element.append(text)
        
    }
}