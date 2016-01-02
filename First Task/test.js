var teams = ['Team 1', 'Team 2', '123_deleted_Hello_deleted', 'South Park_deleted', 'Team 3_deleted'];

var printTeams = function() {
    for (var i = 0; i < teams.length; i++) {
        teams[i] = teams[i].replace(/_deleted$/g, '');
    }
    document.getElementById("dynamic-teamlist").innerHTML = teams.join(", ");
};

var printTeams2 = function() {
    document.getElementById("dynamic-teamlist").innerHTML = teams.join(", ").replace(/_deleted/g, '');
};

printTeams();

// cut unnececary part from string
//var str = 'qwe 123 rty 678 123 qwe';
//str = str.replace(/123/g, '');
//console.log(str);



// find useful part in string
//var str = 'qwe 123 rty 678 123 qwe';
//str = str.replace(/^.*([0-9]{3}\s[0-9]{3}).*$/g, '$1');
//console.log(str);

// just checking your results
var el = function(id){
    return document.getElementById(id);
};

setTimeout(function(){
    var result, color;

    if (el('plain-teamlist').innerHTML == el('dynamic-teamlist').innerHTML){
        result = 'Correct! :-*';
        color = 'green';
    } else {
        result = 'Wrong, Alinochka, please, try again';
        color = 'red';
    }

    el('result').innerHTML = '<span style="color: '+color+';">'+result+'</span>';
}, 200);

