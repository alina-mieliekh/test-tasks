var dom = document,
 el = dom.getElementById("tx");

var putInTheList = function(){

     var textNode = dom.createTextNode(el.value + " "),
         button = dom.createElement('button'),
         buttonText = dom.createTextNode('Delete'),
         li = dom.createElement('li'),
         list = dom.getElementById('list');

    list.setAttribute('type', 'I');

    li.appendChild(textNode);
    list.appendChild(li);

    button.appendChild(buttonText);
    li.appendChild(button);

    button.addEventListener("click", deleteElement);

    el.value = "";

};

var deleteElement = function () {
    var li = this.parentNode;
    var list = li.parentNode;
    button.removeEventListener("click", deleteElement);
    list.removeChild(li);
};

var button = dom.getElementById("bt");
button.addEventListener("click", putInTheList);