let myTasks: Array<string>=[];//Array of strings

function addTask(task: string): number{//function that receives a string as a parameter called task
    myTasks.push(task);//adds task to array
    console.log(task + " has been added to my Tasks.");//displays message that tasks has been added to array
    return myTasks.length;//returns current number of elements storeed in the array
}

function listAllTasks():void{//display all stored tasks function
    myTasks.forEach((ele)=>{//iterates over all taks stored in array
        console.log("Item: " + ele + " is on my Tasks list.");//display each item in the array
        })
}

function deleteTask(task:string):number{//delete task from array function
    let index :number = myTasks.indexOf(task);//receives string as parameter

    if (index > -1){
        myTasks.splice(index, 1);//removes the string from array
        console.log("Item: " + task + " has been deleted from my Tasks list.");//message displaying of succesful deletion of task,if it is located in the array
    }else{
        console.log("Item: " + task + " was NOT found in my Tasks list.");//message displaying that item could not be found in the array
    }
    return myTasks.length;//returns all stored elements after deletion
}

addTask("Work");//adds tasks to array
listAllTasks();//displays all currently stored tasks
deleteTask("Work");//deletes specified task from array