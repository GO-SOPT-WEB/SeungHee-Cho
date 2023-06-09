function MainPage($container) {
    this.$container = $container;

    this.render = () => {
        this.$container.innerHTML = `
                <main class="mainPage">
                    <header>
                        <h1>해삐 바닐라자스 🌼</h1>
                    </header>
                </main>
            `;
    };
    this.render();
}
export default MainPage;