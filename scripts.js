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

const reset = () => {
    list.innerHTML = ""
}

let complete = []

const filteredTodos = () => {
    
    reset()
    
    let input = document.getElementById("userId").value
    
    const filterArray = arrayOfTodos.filter(todos => todos.userId == input)

    console.log(filterArray)
    
    for (let i=0; i < filterArray.length; i++) {
        const element = document.createElement('li')
        const text = document.createTextNode(filterArray[i].title)
        list.appendChild(element)
        element.append(text)
        complete = filterArray

        console.log(complete)
    }
}

const completedTodos = () => {
    
    reset()
    console.log(complete)
    for (let i=0; i < complete.length; i++) {
        if (complete[i].completed === true) {
            
            console.log(complete)

            const element = document.createElement('li')
            const text = document.createTextNode(complete[i].title)
            list.appendChild(element)
            element.append(text)
            
        }
    }
}

const incompleteTodos = () => {
    
    reset()
    console.log(complete)
    for (let i=0; i < complete.length; i++) {
        if (complete[i].completed === false) {
            
            console.log(complete)

            const element = document.createElement('li')
            const text = document.createTextNode(complete[i].title)
            list.appendChild(element)
            element.append(text)
            
        }
    }
}

// ***prevents crashing***

const form = document.querySelector("form")

form.addEventListener("submit", e => {
    e.preventDefault();
})