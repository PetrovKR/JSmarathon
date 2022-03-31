"use strict";

const STATUS = {
    TO_DO : "To Do",
    DONE : "Done",
    IN_PROGRESS : "In progress",
}
const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
    "create a new practice task": STATUS.DONE,
    "make a bed": STATUS.IN_PROGRESS,
    "write a post": STATUS.TO_DO,

}

function changeStatus(name,status) {
    if ([name] in list) {
        list[name] = status;
    }
}

function addTask(task) {
    list[task] = DEFAULT_STATUS;
}

function deleteTask (task) {
    delete list[task];
}

function showList ()