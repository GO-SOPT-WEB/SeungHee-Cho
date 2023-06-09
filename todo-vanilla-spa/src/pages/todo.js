import "../style/todo.css";
import { todoUtil } from "../utils/todoutil.js";


function Todo($container) {
    todoUtil();
    this.$container = $container;

    this.render = () => {
        this.$container.innerHTML = `
        <body>
            <section id="modal">
                <div id="modal_window">
                    <h1 id="modal_title">할일 추가</h1>
                    <input type="text" id="add_todo" autofocus >
                    <button id="modal_btn">ADD</button>
                </div>
            </section>

            <header>
                <h1>✨ WEB TO DO MATE ✨</h1>
            </header>

            <main>

                <section id="calendar">
                    <ul class="day_container">
                        <li class="day">월</li>
                        <li class="heart">
                            <i>🤍</i>
                            <div class="left_task_count">6</div>
                        </li>
                        <li>3</li>
                    </ul>
            
                    <ul class="day_container">
                        <li class="day">화</li>
                        <li class="heart">
                            <i>🤍</i>
                            <div class="left_task_count">5</div>
                        </li>
                        <li>4</li>
                    </ul>

                    <ul class="day_container">
                        <li class="day">수</li>
                        <li class="heart">
                            <i>🤍</i>
                            <div class="left_task_count">3</div>
                        </li>
                        <li>5</li>
                    </ul>

                    <ul class="day_container">
                        <li class="day">목</li>
                        <li class="heart">
                            <i>🤍</i>
                            <div class="left_task_count">4</div>
                        </li>
                        <li>6</li>
                    </ul>

                    <ul class="day_container">
                        <li class="day">금</li>
                        <li class="heart">
                            <i>🤍</i>
                            <div class="left_task_count">6</div>
                        </li>
                        <li>7</li>
                    </ul>

                    <ul class="day_container">
                        <li class="day">토</li>
                        <li class="heart">
                            <i>💛</i>
                            <div class="left_task_count" id="selected_left">9</div>   
                        </li>
                        <li id="selected_date">8</li>
                    </ul>

                    <ul class="day_container">
                        <li class="day">일</li>
                        <li class="heart">
                            <i>🤍</i>
                            <div class="left_task_count">4</div>
                        </li>
                        <li>9</li>
                    </ul>

                </section>

                <section id="todolist"></section>
            </main>
            
            <footer>
                <nav class="footer_btn" onclick="location.href='todo.html'">
                    <img class="btnimg" src="./img/home.png" alt="달력 메뉴 버튼" />
                    <div class="btntext">달력</div>
                </nav>
                <nav class="footer_btn" onclick="location.href='mycategory.html'">
                    <img class="btnimg" src="./img/my.png" alt="마이 메뉴 버튼"/>
                    <div class="btntext">MY</div>
                </nav>

            </footer>
        </body>
    `;
    };
    this.render();
}
export default Todo;