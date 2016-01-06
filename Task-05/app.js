var el = document.getElementsByName("quantity")[0];
el.addEventListener("keyup", function (event) {
    var words = toWords(el.value);
    document.getElementById("tx").innerHTML = words;
    }, true);


