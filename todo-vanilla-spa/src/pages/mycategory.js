function MyCategory($container) {
    this.$container = $container;

    this.render = () => {
        this.$container.innerHTML = `
        <body class="my_body">
            <header>
                <h1>✨ WEB TO DO MATE ✨</h1>
            </header>
            <main class="my_wrapper">
                <h2 class="my_title"> 📌 나의 카테고리 📌 </h2>
                <section id="category_list"></section>
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
            <script type="module" src="mycategory.js"></script>
        </body>
        `;
    };
    this.render();
}
export default MyCategory;