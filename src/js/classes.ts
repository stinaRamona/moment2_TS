//klass skapas 

//importerar interface från filen ifTodo 
import {Todo} from './ifTodo.ts'; 

export class todoList {
  //tom array för att spara todoItems i 
    private todos: Todo[] = [];

    //konstruktor som hämtar array från local storage 
    constructor() {
        this.loadFromLocalStorage();
    }
    
    //metoder för klassen:
    
    //lägger till todo om inmantningen är korrekt. 
    addTodo(task: string, priority:number): boolean {
        if (priority === 1 || priority === 2 || priority === 3 && task != "") { 
            //skapa ny todo 
            const newTodo: Todo = { task: task, completed: false, priority: priority}; 

            //pusha till arrayen
            this.todos.push(newTodo);

            //spara till localStorage (kallar på funktionen)
            this.saveToLocalStorage(); 

            return true; 

        } else { 
            return false; 
        }
    }; 

    //Markerar todos som klara (överstrukna)
    markTodoCompleted(todoIndex: number): void {
        //kontrollerar ifall todoIndex är större än eller lika med 0 och mindre än längden på arrayen av todos
        if (todoIndex >= 0 && todoIndex < this.todos.length) {

            //sätter completed till true om det är sant
            this.todos[todoIndex].completed = true; 

            //sparar i local storage (kallar på funktionen)
            this.saveToLocalStorage(); 
        }
        //knappen returnerar indexet. kallar på denna metod - skapas i main

    } 

    //hämtar listan med todos
    getTodos(): Todo[] {
        //returnera arrayen. 
        return this.todos;  
    }

    //Sparar till local storage 
    saveToLocalStorage(): void {
        //spara arrayen i local storage 
        localStorage.setItem('todoItems', JSON.stringify(this.todos))
    } 

    //Laddar todos från local storage 
    loadFromLocalStorage(): void {
        //ladda in från local stroage till arrayen. 
        let storedItems = localStorage.getItem('todoItems')

        if (storedItems) {
            return JSON.parse(storedItems)
        }  
    }
} 