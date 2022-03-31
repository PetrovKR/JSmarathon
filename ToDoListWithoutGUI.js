"use strict";

const STATUS = {
    TO_DO : "To Do",
    DONE : "Done",
    IN_PROGRESS : "In progress",
};
const DEFAULT_STATUS = STATUS.TO_DO;
const list = {
    "create a new practice task": STATUS.DONE,
    "make a bed": STATUS.IN_PROGRESS,
    "write a post": STATUS.TO_DO,
};

function changeStatus(name,status) {
    if ([name] in list) {
        list[name] = status;
    }
}

function addTask(name) {
    if ([name] in list) {
        console.log ("Task exist");
    } else {
        list[name] = DEFAULT_STATUS;
    }
}

function deleteTask (name) {
    if ([name] in list) {
        delete list[name];
    } else {
        console.log ("Unknown task");
    }
}

function showList () {
    let toDo = "";
    let done = "";
    let inProgress = "";

    for (let task in list) {
        if (list[task] === STATUS.TO_DO) {
            toDo += task + "\n";
        }
        if (list[task] === STATUS.DONE) {
            done += task + "\n";
        }
        if (list[task] === STATUS.IN_PROGRESS) {
            inProgress += task + "\n";
        }
    }
    if (toDo === "") { toDo = "-"};
    if (done === "") { done = "-"};
    if (inProgress === "") {inProgress = "-"};

    console.log (`\n${STATUS.TO_DO}:\n`, toDo, `\n${STATUS.DONE}:\n`, done, `\n${STATUS.IN_PROGRESS}:\n`, inProgress);
}


addTask("1th Task");
addTask("2th Task");
addTask("3th Task");
changeStatus("2th Task", STATUS.IN_PROGRESS);
changeStatus("create a new practice task", STATUS.IN_PROGRESS);
deleteTask("3th Task");
console.log(list);
showList();