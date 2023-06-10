
document.getElementById('menu_img').addEventListener('change',function(e) {
    let file = e.target.files[0];

    let container = document.getElementById('img_container');
    container.textContent = ""

    let newImage = document.createElement("img");
    newImage.id = 'img_data';
    newImage.src = URL.createObjectURL(file);
    newImage.style.width = "100%";
    newImage.style.height = "100%";
    container.appendChild(newImage);
})

document.getElementById('add_btn').addEventListener('click',function(e){
    // 메뉴 추가 버튼 클릭 시, localStorage에 저장후 메인페이지로 이동

    const localData = JSON.parse(localStorage.getItem('data'));

    localData.push(
        {
            id: localData.length,
            name: document.getElementById('menu_name').value,
            tags: document.getElementById('menu_tag').value.split(','),     // 태그 분리 
            img : './img/양념.png',
            value : document.getElementById('menu_category').value
        }
    )

    localStorage.setItem("data", JSON.stringify(localData));

    window.location.href='../chicken.html';

})