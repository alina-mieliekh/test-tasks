var dom = document;


var putInTheList = function(){
    var el = dom.getElementById("tx").value,
     textNode = dom.createTextNode(el),
     li = dom.createElement('li'),
     list = dom.getElementById('list');

    list.setAttribute('type', 'I');

    li.appendChild(textNode);
    list.appendChild(li);

};

var button = dom.getElementById("bt");
button.addEventListener("click", putInTheList);
