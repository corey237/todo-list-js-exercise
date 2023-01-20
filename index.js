// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    markCompleted: function() {
      this.complete = true;
    },

    logState: function() {
      console.log(`${this.title} has ${this.complete ? "" : "not "}been completed`);
    }

  }
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box."); // task 0
const task2 = newTask("Do Laundry", "😁"); // task 1
task1.logState();
task1.markCompleted();
task1.logState();


// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
