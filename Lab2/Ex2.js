var Todo = /** @class */ (function () {
    function Todo() {
        this.myTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTasks.push(task);
        console.log(task + " has been added to my Tasks.");
        return this.myTasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.myTasks.forEach(function (ele) {
            console.log("Item: " + ele + " is on my Tasks list.");
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log("Item: " + task + " has been deleted from my Tasks list.");
        }
        else {
            console.log("Item: " + task + " was NOT found in my Tasks list.");
        }
        return this.myTasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("Work!");
myTodos.listAllTasks();
myTodos.deleteTask("Eat");
