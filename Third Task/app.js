var  solarSystem = [
    ['Jupiter', '5.2 AU'],
    ['Saturn', '9.5 AU'],
    ['Uranus', '19.2 AU'],
    ['Neptune', '30.1 AU'],
    ['Earth', '1 AU'],
    ['Venus', '0.7 AU'],
    ['Mars', '1.5 AU'],
    ['Mercury', '0.4 AU']
];

console.log(solarSystem);

var solarToString = function(){
    var solarContent = '<table border="1">';

    for (var i = 0; i < solarSystem.length; i++) {
        solarContent += '<tr>';
        for (var k = 0; k < solarSystem[i].length; k++){
            solarContent += '<td>' + solarSystem[i][k] + '</td>';

        }
        solarContent += '</tr>'
    }
    solarContent += '</table>';

    document.getElementsByClassName('array-table')[0].innerHTML = solarContent;
};

solarToString();