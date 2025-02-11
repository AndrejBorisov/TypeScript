interface TodoInterface{//Todo interface
    myTasks: Array<string>;
    addTask(task: string):number;
    deleteTask(task:string):number;
}

class Todo implements TodoInterface{
    myTasks: Array<string> = [];//array of Strings

    addTask(task: string): number {//add task function
        this.myTasks.push(task);//receives string as parameter
        console.log(task + " has been added to my Tasks.")//displays meesage of succesful insertion
        return this.myTasks.length;//return all stored elements in the array after insertion
    }
    listAllTasks():void{//display all stored elements from the array function
        this.myTasks.forEach((ele)=>{
        console.log("Item: " + ele + " is on my Tasks list.");//displays message of all the tasks in the list
    })
    }

    deleteTask(task:string):number{//deletion task(element) from the array
        let index :number = this.myTasks.indexOf(task);//receives string as the parameter
    
        if (index > -1){
            this.myTasks.splice(index, 1);//deletes the element from array
            console.log("Item: " + task + " has been deleted from my Tasks list.");//displays message of succesful deletion, if it exists
        }else{
            console.log("Item: " + task + " was NOT found in my Tasks list.");//displays message if the item is not found
        }
        return this.myTasks.length;//return all stored elements in the array after deletion
    }
}
let myTodos = new Todo();//creates new Todo list
myTodos.addTask("Work!");//add "Work!" to the array
myTodos.listAllTasks();//displays all elements in the array
myTodos.deleteTask("Eat");//deletes "Eat" element if it exists in the array