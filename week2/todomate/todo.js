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

const plusBtns = document.getElementsByClassName('plus_btn');
for (const plusBtn of plusBtns) {
    plusBtn.addEventListener('click', function(e){
        document.getElementById('modal').style.display = 'flex';

        const modalBtn = document.getElementById('modal_btn');
        modalBtn.addEventListener('click', function() {
            const categoryTag = e.target.parentNode.parentNode;
            plusTodo(categoryTag.id, document.getElementById('add_todo').value);
            document.getElementById('modal').style.display = 'none';
        });

    });
}

refreshTodo();

