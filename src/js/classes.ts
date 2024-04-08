//klass skapas 

//importerar interface från filen ifTodo 
import {todo} from './ifTodo.ts'; 

export class todoList implements todo {
    task: string;
    completed: boolean;
    priority: number;  

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
            return true; 
        } else { 
            return false; 
        }
    }; 

    //Markerar todos som klara (överstrukna)
    markTodoCompleted(todoIndex: number): void {
    } 

    //hämtar listan med todos
    getTodos(): Todo[] {

    }

    //Sparar till local storage 
    saveToLocalStorage(): void {

    } 

    //Laddar todos från local storage 
    loadFromLocalStorage(): void {

    }

}