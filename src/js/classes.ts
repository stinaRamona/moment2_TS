//klass skapas 

//importerar interface från filen ifTodo 
import {todo} from './ifTodo.ts'; 

export class todoList implements todo {
    task: string;
    completed: boolean;
    priority: number;  

    //konstrukorn ska hämta listan från local storage. 
    constructor(task: string, completed:boolean, priority:number){
        this.task = task; 
        this.completed = false; 
        this.priority = priority; 
    }
    todos = []; //tom array för todosen att sparas i
    
    //metoder för klassen:
    
    //lägger till todo om inmantningen är korrekt. 
    addTodo(task:string, priority:number): boolean {
        if (priority === 1 || priority === 2 || priority === 3 && task != "") { //"om prio är 1-3 och textsträngen inte är tom"
            //funktionen lägger till en todo till arrayen från formuläret
            //pusha till arrayen 
            return true; 
        } else { 
            return false; 
        }

    }; 

    //Markerar todos som klara (överstrukna)
    markTodoCompleted(todoIndex: number): void {
        //todoIndex = index på todos[] 
        //knappen returnerar indexet. kallar på denna metod. 
        //Completed = true. Style läggs in i main.ts
    } 

    //hämtar listan med todos
    getTodos(): Todo[] {
        //returnera arrayen. 
    }

    //Sparar till local storage 
    saveToLocalStorage(): void {
        //spara arrayen i local storage 
    } 

    //Laddar todos från local storage 
    loadFromLocalStorage(): void {
        //ladda in från local stroage till arrayen. 
        //window onload. get item. osv 
    }

} 