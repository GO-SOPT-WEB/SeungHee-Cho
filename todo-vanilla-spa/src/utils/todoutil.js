import {TODO_DATA} from '../constants/todoData.js';

export const todoUtil = () => {
    let todoData = [];

    function refreshCal() {
        const selectedLeft = document.getElementById('selected_left');
        let leftCount = 0;

        // 'done:false' 인 task의 개수 
        
        for (const item of todoData) {
            for (const task of item.todo) {
                leftCount = task.done? leftCount: leftCount+1; 
            }
        }

        selectedLeft.textContent = leftCount;
    }

    // 대체왜??? 여러번 호출???
    function handleModalBtn(categoryTagId, todoList, userValue) {
        const values = [];
        for (const i of todoList) {
            values.push(i.task);
        }

        if (values.includes(userValue)) {
            console.log("중복된 할일은 추가할 수 없습니다.");
        } else {
            plusTodo(categoryTagId, userValue);
        }
        document.getElementById('modal').style.display = 'none';
    }

    function createCategory(data) {  
        /*
            <article class="todobox" id="category1">
                <header class="category_title">
                    <h1>SCHEDULE</h1>
                    <img class="plus_btn" src="./img/plus.png" alt="할일 추가 버튼"/>
                </header>
            </article>
        */

        const categoryH1 = document.createElement('h1');
        categoryH1.textContent = data.title;

        const categoryImg = document.createElement('img');
        categoryImg.className = 'plus_btn';
        categoryImg.src = "/img/plus.png";
        categoryImg.alt = "할일 추가 버튼";

        categoryImg.addEventListener('click', function(e){
            document.getElementById('modal').style.display = 'flex';
            document.getElementById('add_todo').focus();
            
            const modalBtn = document.getElementById('modal_btn');
            modalBtn.addEventListener('click', ()=>{
                const categoryTagId = e.target.parentNode.parentNode.id;
                const todoList = [...todoData[categoryTagId[categoryTagId.length-1]-1].todo];  // 복사 
                const userValue = document.getElementById('add_todo').value;
                handleModalBtn(categoryTagId, todoList, userValue)});

        });

        const categoryHeader = document.createElement('header');
        categoryHeader.className = 'category_title';
        categoryHeader.appendChild(categoryH1);
        categoryHeader.appendChild(categoryImg);

        const categoryItem = document.createElement('article');
        categoryItem.className = 'todobox';
        categoryItem.id = `category${data.id+1}`
        categoryItem.appendChild(categoryHeader);

        return categoryItem;
    }

    function createTodo(index, todo, todoindex) {   // index: 카테고리 인덱스(1~), todo : 내용, todoindex : 투두 인덱스 (1~)
        const todoitem = document.createElement('form');
        const todoCheckbox = document.createElement('input');
        const todoLabel = document.createElement('label');

        todoCheckbox.type = "checkbox";
        todoCheckbox.id = `category${index}_task${todoindex}`; 
        todoCheckbox.addEventListener('change', function(e) {
            todoData[index-1].todo[todoindex-1].done = e.target.checked? true : false;
            refreshCal();
        });

        todoLabel.htmlFor = `category${index}_task${todoindex}`;
        todoLabel.textContent = todo;

        todoitem.className = "todoitem";
        todoitem.appendChild(todoCheckbox);
        todoitem.appendChild(todoLabel);

        return todoitem;

    }

    function plusTodo(category, todo) { //category : article 태그의 id, todo : 추가하고자하는 할일 text
        const todobox = document.getElementById(category);
        const index = category[category.length-1]; //category가 몇번째 TODO_DATA에서 몇번째 index인지 
        todobox.appendChild(createTodo(index,todo, todoData[index-1].todo.length+1));

        todoData[index-1].todo.push({task : todo, done: false});
        refreshCal();  
    }

    function refreshTodo() {
        // 최초 localStorage 세팅 
        localStorage.getItem("todo_data") === null &&
            localStorage.setItem("todo_data", JSON.stringify(TODO_DATA)); 
        todoData = JSON.parse(localStorage.getItem("todo_data")); 
        console.log("new", todoData);

        // 1. 카테고리 html 구현
        for (const el of todoData) {
            const oneCategory = createCategory(el);
            document.getElementById('todolist')?.appendChild(oneCategory);
        }

        // 2. 카테고리 내 할일 배열 구현
        for (const i of todoData) {
            let todoIdx = 1;
            for (const j of i.todo) {
                const oneTodo = createTodo(i.id+1, j.task, todoIdx);
                document.getElementById(`category${i.id+1}`)?.appendChild(oneTodo);
                todoIdx++;
            }
        }
    }

    refreshTodo();

}
