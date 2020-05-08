var ul = document.getElementsByTagName("ul")[0];
var button = document.getElementById("enter");
var input = document.getElementById("userinput");

ul.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("lt");
    }

    if (event.target.tagName === "BUTTON") {
        element = event.target.parentNode;
        ul.removeChild(element);
    }
})

function inputLen() {
    return input.value.length;
}

function addDeleteButton(element) {
    var del = document.createElement("button");
    del.classList.add("delButton");
    del.innerHTML = "delete";
    element.appendChild(del);
}

function addShoplistItem() {
    if (inputLen() > 0) {
        var value = input.value;
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        addDeleteButton(li);
        ul.appendChild(li);
        input.value = "";
    }
}

function addShoptAfterKeypress(event) {
    if (event.which == 13) { addShoplistItem(); }
}

button.addEventListener("click", addShoplistItem);
input.addEventListener("keypress", addShoptAfterKeypress);

Array.prototype.forEach.call(ul.children, element => {
    addDeleteButton(element)
});
