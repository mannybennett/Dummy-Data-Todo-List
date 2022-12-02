const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (todos) => arrayOfTodos = todos)
}
    
const logTodos = () => {
    console.log(arrayOfTodos)
}

const list = document.getElementById('todo-list')

const populateTodos = () => {
    for (let i=0; i < arrayOfTodos.length; i++) {

        
        const element = document.createElement('li')
        const text = document.createTextNode(arrayOfTodos[i].title)
        list.appendChild(element)
        element.append(text)
        
    }
}

const form = document.querySelector("form")

form.addEventListener("submit", e => {
    e.preventDefault();
    list.innerHTML = "" 
})

const userInput = () => {
    let input = document.getElementById("userId").value
    const completed = true

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (todos) => {
        const arrayOfTodos = todos.filter(todo => todo.userId === input && todo.completed === completed)
        console.log(arrayOfTodos) })
}

