document.getElementById('menu_img').addEventListener('change',function(e) {
    let file = e.target.files[0];

    let container = document.getElementById('img_container');
    container.textContent = ""

    let newImage = document.createElement("img");
    newImage.src = URL.createObjectURL(file);
    newImage.style.width = "100%";
    newImage.style.height = "100%";
    container.appendChild(newImage);

})
