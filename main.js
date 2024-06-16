const searchInput = document.getElementById('searchInput')
const addInput = document.getElementById('addInput')
const listsInside = document.getElementById('listsInside')
const addButton = document.getElementById('addButton')
let isDisable = true;
addButton.addEventListener('click', function () {
    if (addInput.value.length != 0) {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.className = "textInput";
        input.value = addInput.value
        input.disabled = isDisable;
        const fa_pencil = document.createElement('i');
        fa_pencil.classList = "fa-solid fa-pencil";
        const fa_trash = document.createElement('i');
        fa_trash.classList = "fa-solid fa-trash";
        li.appendChild(input)
        li.appendChild(fa_pencil)
        li.appendChild(fa_trash)
        listsInside.appendChild(li)
        console.log(listsInside.children[listsInside.children.length - 1])
    }
})

for (i = 0; i < listsInside.children.length; i++) {
    listsInside.addEventListener("click", (e) => {
        if (e.target.classList.contains("fa-trash")) {
            e.target.parentNode.remove()
        } else if (e.target.classList.contains('fa-pencil')) {
            e.target.parentNode.children[0].disabled = !e.target.parentNode.children[0].disabled;
            if (!e.target.parentNode.children[0].disabled) {
                e.target.parentNode.children[0].focus();
            }
        }
    })
}