let input = document.querySelector('#input');
let form = document.querySelector('form');
let itemsList = document.querySelector('#items-list')
let searchbar = document.querySelector('#searchbar')

//Add Items
form.addEventListener('submit', addItem);
//Delete Item
itemsList.addEventListener('click', deleteItem);
//Search Items
searchbar.addEventListener('keyup', search);

//AddItem Function
function addItem(e) {
    e.preventDefault();
    if (input.value !== "") {
        item = input.value
        let li = document.createElement('li');
        li.className = "list-group-item";
        li.textContent = item;
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "X";
        deleteBtn.className = "float-right bg-danger btn btn-sm text-white delete";
        itemsList.appendChild(li);
        li.appendChild(deleteBtn);
        input.value = "";
    }
}

//ADD ITEM 
// $(".clone").hide();
// $(".btn-dark").click(function (e) {
//     e.preventDefault();
//     var valTxt = $("#input").val();
//     var newclone = $(".clone").clone();
//     newclone.removeClass("clone");
//     newclone.find(".txt").text(valTxt);
//     newclone.find(".delete").unbind("click").click(function () {
//         newclone.remove();
//     });
//     newclone.appendTo('#items-list').show();
// });

// function addItem() {
//     return null
// }
//Delete Item Function 
function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains('list-group-item')) {
        e.target.classList.toggle('highlight')
    }
}

function search(e) {
    let word = e.target.value.toLowerCase()
    items = document.querySelectorAll('.list-group-item');
    Array.from(items).forEach((item) => {
        if (item.firstChild.textContent.toLowerCase().indexOf(word) !== -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}