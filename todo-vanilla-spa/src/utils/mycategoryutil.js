import { TODO_DATA } from "../constants/todoData.js";

let todoData = [];

function setList() {
    localStorage.getItem("todo_data") === null &&
        localStorage.setItem("todo_data", JSON.stringify(TODO_DATA)); 
    todoData = JSON.parse(localStorage.getItem("todo_data"));

    for (const el of todoData) {
        const item = document.createElement('p');
        item.className = 'draggable';
        item.draggable = true;
        item.id = el.id;    
        item.textContent = el.title;    // 카테고리 글자 추가 
        document.getElementById('category_list').appendChild(item);
    }
}
setList();

const draggables = document.querySelectorAll(".draggable");
draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

const container = document.getElementById("category_list");
container.addEventListener("dragover", e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement === undefined) {
        container.appendChild(draggable);
    } else {
        container.insertBefore(draggable, afterElement);
    }
});
container.addEventListener("dragend", e => {
    // local Storage에 바뀐 카테고리 순서 저장 
    const tempArr = [];     // 새로이 정렬된 데이터들의 배열 
    for (const el of container.childNodes) {
        tempArr.push(TODO_DATA[el.id]);
    }
    localStorage.setItem("todo_data", JSON.stringify(tempArr)); 
    console.log("set!");
});

function getDragAfterElement(container, y) {
    const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
        (closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
        },
        { offset: Number.NEGATIVE_INFINITY },
    ).element;
}