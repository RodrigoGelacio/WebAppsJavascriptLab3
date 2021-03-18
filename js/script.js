//Script para pagina html

let toDoBody = document.getElementById("toDoBody");
let inputToDo = document.getElementById("textLabel");

document.getElementById("buttonToDo").onclick = function () {

    toDoBody.innerHTML += `<p><input type="checkbox" class="check"> ${inputToDo.value}</p>`;

}

document.getElementById("clearList").onclick = function () {

    toDoBody.innerHTML = "";

}

document.getElementById("allToDo").onclick = function () {

    let checklists = document.getElementsByClassName("check");

    for (var i = 0; i < checklists.length; i++) {

        checklists[i].checked = true;

    }

}

document.getElementById("clearToDo").onclick = function () {

    let checklists = document.getElementsByClassName("check");

    for (var i = 0; i < checklists.length; i++) {

        checklists[i].checked = false;

    }

}

