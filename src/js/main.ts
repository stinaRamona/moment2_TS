//används för att skriva ut till DOM 
import { todoList } from "./classes";
 

//hämtar element 
let submitBtnEl = document.getElementById("submitBtn") as HTMLButtonElement; 

let todoListEl = document.getElementById("todoList") as HTMLElement; //Div där todosen skrivs ut

submitBtnEl.addEventListener('click', function(event){
    event.preventDefault(); 

    addTodo(); 
}) 

function addTodo() : void {
    let todoInputEl = document.getElementById("todoInput") as HTMLInputElement; 
    let todoPrioEl = document.getElementById("todoPrio") as HTMLInputElement; 
    
    let todoString = todoInputEl.value; 
    let todoPrio = todoPrioEl.value;
    let todoPrioNum = parseInt(todoPrio); //gör om sträng till numeriskt värde  
    let completed = false; 


    if(todoString && todoPrio) {
        
        let todoInstance = new todoList(todoString, completed, todoPrioNum); 

        todoInstance.addTodo(todoString, todoPrioNum); //vill skicka till addTodo metoden i klassen. Verkar inte komma dit

        printTodo();
    }
}

function printTodo(): void {
    //hämtar diven där todosen ska skrivas ut
    let todoListDiv = document.getElementById("todoListDiv"); 

    todoList.todos.forEach(todo => { //vill komma åt arrayen i TodoList 
        let todoItem = document.createElement("article"); 
        todoItem.textContent = todo.task; 
        document.createElement("button") 

        if (todo.conpleted){
            todoItem.style.textDecoration ="line-through"
        }

        todoListDiv?.appendChild(todoItem); 
    });

}