window.onload = printTodo;

//används för att skriva ut till DOM 
import { todoList } from "./classes";

//instans av todoList skapas
let newTodo = new todoList(); 

//hämtar element (Alla element flyttade utanför funktionerna)
let submitBtnEl = document.getElementById("submitBtn") as HTMLButtonElement;
let todoInputEl = document.getElementById("todoInput") as HTMLInputElement; 
let todoPrioEl = document.getElementById("todoPrio") as HTMLInputElement; 
let todoListDivEl = document.getElementById("todoListDiv") as HTMLElement; //Div där todosen skrivs ut

//eventlyssnare på submitbtn för att få ut värden från formuläret
submitBtnEl.addEventListener('click', function(){ 

    // Hämta värdena från input-fälten
    const todoString = todoInputEl.value;
    const todoPrioNum = parseInt(todoPrioEl.value);

    // Lägg till en ny todo i TodoList-instansen
    if (todoString && !isNaN(todoPrioNum)) {
        const added = newTodo.addTodo(todoString, todoPrioNum);
        if (added) {
            // Uppdatera listan över todos
            printTodo();
        } else {
            // Hantera felaktig inmatning
            console.error('Felaktig inmatning för att lägga till todo.');
        }
    } 
});


function printTodo(): void {
    
    //resnar listan 
    todoListDivEl.innerHTML = "";  

    newTodo.getTodos().forEach(todo => { 
        //skapar article-element för var todo 
        let todoItem = document.createElement("article"); 
        todoItem.textContent = todo.task; 

        //skapar en button efter varje task 
        let complBtn = document.createElement("button"); 
        complBtn.textContent = "Färdig"; 

        //eventlyssnare till knappen skickas till ifcompleted metoden i klassen
        complBtn.addEventListener('click', function(){
            newTodo.markTodoCompleted(newTodo.getTodos().indexOf(todo)); 
            printTodo(); 
        })

        if (todo.completed){
            todoItem.style.textDecoration ="line-through"
        }

        todoItem.appendChild(complBtn); 
        todoListDivEl.appendChild(todoItem); 
    });

}  