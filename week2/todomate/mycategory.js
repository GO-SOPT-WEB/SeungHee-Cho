import { TODO_DATA } from "./constants/todoData.js";

function setList() {
    for (const el of TODO_DATA) {
        const item = document.createElement('p');
        item.textContent = el.title;    // 카테고리 글자 추가 
        document.getElementById('category_list').appendChild(item);
    }
}
setList();
