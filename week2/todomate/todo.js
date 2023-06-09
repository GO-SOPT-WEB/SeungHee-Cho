import {TODO_DATA} from './constants/todoData.js';


function refreshCal() {
    const selectedLeft = document.getElementById('selected_left');
    let leftCount = 0;

    // 'done:false' 인 task의 개수 
    for (const item of TODO_DATA) {
        for (const task of item.todo) {
            leftCount = task.done? leftCount: leftCount+1; 
        }
    }

    selectedLeft.textContent = leftCount;
}


function createTodo(index, todo, todoindex) {
    const todoitem = document.createElement('form');
    const todoCheckbox = document.createElement('input');
    const todoLabel = document.createElement('label');

    todoCheckbox.type = "checkbox";
    todoCheckbox.id = `category${index}_task${todoindex}`; 
    todoCheckbox.addEventListener('change', function(e) {
        TODO_DATA[index-1].todo[todoindex-1].done = e.target.checked? true : false;
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
    todobox.appendChild(createTodo(index,todo, TODO_DATA[index-1].todo.length+1));

    TODO_DATA[index-1].todo.push({task : todo, done: false});
    refreshCal();  
}

function refreshTodo() {
    for (let i = 1; i<=TODO_DATA.length; i++) {
        for (let j = 0; j < TODO_DATA[i-1].todo.length; j++) {
            const oneTodo = createTodo(i, TODO_DATA[i-1].todo[j].task, j+1);
            document.getElementById(`category${i}`).appendChild(oneTodo);
        }
    }
}

// 대체왜??? 여러번 호출???
function handleModalBtn(categoryTagId, todoList, userValue) {
    const values = [];
    for (const i of todoList) {
        values.push(i.task);
    }
    console.log(values);

    if (values.includes(userValue)) {
        console.log("중복된 할일은 추가할 수 없습니다.");
    } else {
        plusTodo(categoryTagId, userValue);
    }
    document.getElementById('modal').style.display = 'none';
}

const plusBtns = document.getElementsByClassName('plus_btn');
for (const plusBtn of plusBtns) {
    plusBtn.addEventListener('click', function(e){
        document.getElementById('modal').style.display = 'flex';
        document.getElementById('add_todo').focus();
        
        const modalBtn = document.getElementById('modal_btn');
        modalBtn.addEventListener('click', ()=>{
            const categoryTagId = e.target.parentNode.parentNode.id;
            const todoList = [...TODO_DATA[categoryTagId[categoryTagId.length-1]-1].todo];  // 복사 
            const userValue = document.getElementById('add_todo').value;
            handleModalBtn(categoryTagId, todoList, userValue)});

    });
}

refreshTodo();

