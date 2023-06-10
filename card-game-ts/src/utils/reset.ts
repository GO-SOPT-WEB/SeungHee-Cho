const resetAll = (flippedList : HTMLElement[]) => {
    // reset 버튼 클릭 시 카드 초기화
    for (const item of flippedList) {
        item.classList.remove('flipped');
    }
}

export default resetAll;