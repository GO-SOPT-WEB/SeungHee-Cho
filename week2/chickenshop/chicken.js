import { menuData } from "./constant/chickenData.js";

function createItem(data) {
    
    const item = document.createElement('article');
    const itemName = document.createElement('header');
    const itemTagContainer = document.createElement('p');
    const itemTagBox = document.createElement('ul');
    const itemTagPlus = document.createElement('i');
    const itemImg = document.createElement('img');
    const itemLike = document.createElement('i');
    const itemModal = document.createElement('section');
    const itemModalClose = document.createElement('i');

    item.className = "item";

    itemName.className = "item_name";
    itemName.textContent = data.name;

    itemTagContainer.className = "item_tag_container";
    itemTagBox.className = "item_tag_box";
    for (const tag of data.tags) {
        const itemTag = document.createElement('li');
        itemTag.className = "item_tag";
        itemTag.textContent = tag;
        itemTagBox.appendChild(itemTag);
    }
    itemTagContainer.appendChild(itemTagBox);

    itemTagPlus.className = "item_tag_plus";
    itemTagPlus.textContent = "⊕";
    // 태그 전체보기 모달 
    itemTagPlus.addEventListener('click', function() {
        document.getElementById(`${data.name}_modal`).style.display = 'flex';
    });
    itemTagContainer.appendChild(itemTagPlus);

    itemImg.src = data.img;
    itemImg.alt = `${data.name} 사진`;

    itemLike.className = "item_like";

    itemModal.className = "item_modal";
    itemModal.id = `${data.name}_modal`;
    for (const tag of data.tags) {
        const itemModalTag = document.createElement('p');
        itemModalTag.textContent = `#${tag}`;
        itemModal.appendChild(itemModalTag);
    }
    itemModalClose.className = "item_modal_close";
    itemModalClose.textContent = "x";
    // 태그 끄기 
    itemModalClose.addEventListener('click', function() {
        document.getElementById(`${data.name}_modal`).style.display = 'none';
    });
    itemModal.appendChild(itemModalClose);
    

    item.appendChild(itemName);
    item.appendChild(itemTagContainer);
    item.appendChild(itemImg);
    item.appendChild(itemLike);
    item.appendChild(itemModal);

    return item;
}

//화면 띄우는 함수
function refresh() {
    localStorage.getItem("data") === null &&
    localStorage.setItem("data", JSON.stringify(menuData));

    const chickenData = JSON.parse(localStorage.getItem("data")); 

    document.getElementById("card_section").innerHTML = "";
    for (const oneData of chickenData) {
        if (document.getElementById("전체").checked || document.getElementById(oneData.value).checked) {
            const oneItem = createItem(oneData);
            document.getElementById("card_section").appendChild(oneItem);
        }
    }
}


// 메뉴 태그 추가 
function createMenuTag(tagValue) {
    const menuTag = document.createElement('li');
    const menuTagName = document.createElement('p');
    const menuTagBtn = document.createElement('button');

    menuTag.className = "menu_tag";
    menuTag.id = `${tagValue}_checked`;
    menuTagName.textContent = tagValue;
    menuTagBtn.className = "menu_x";   
    menuTagBtn.textContent = "X";
    menuTag.appendChild(menuTagName);
    menuTag.appendChild(menuTagBtn);

    menuTagBtn.addEventListener('click', function(e) {      
        const deleteMenu = document.getElementById(e.target.parentNode.id);
        deleteMenu.parentNode.removeChild(deleteMenu);
        document.getElementById(tagValue).checked = false;  
        refresh();
    })

    return menuTag;
}

const checkTags = document.querySelectorAll('input[type="checkbox"]');
for (const checkTag of checkTags) {
    checkTag.addEventListener('change', function(e) {
        if (e.target.checked) {
            document.getElementById("card_tags").appendChild(createMenuTag(e.target.id));
                refresh();
        }
        else {
            const deleteMenu = document.getElementById(`${e.target.id}_checked`);
            deleteMenu.parentNode.removeChild(deleteMenu);
            refresh();
        }
    });
}


refresh();