var numbers = ['23 people', '5 apples and 6 pears', '1000000 documents', 'cats: 700'];

var convertToDropdown = function(){
    var i,
        dropdown = document.getElementById("dropdownMenue");

    for (i = 0; i < numbers.length; i++) {
        numbers[i] =
            numbers[i]
                .replace(/0/g, ' zero ')
                .replace(/1/g, ' one ')
                .replace(/2/g, ' two ')
                .replace(/3/g, ' three ')
                .replace(/4/g, ' four ')
                .replace(/5/g, ' five ')
                .replace(/6/g, ' six ')
                .replace(/7/g, ' seven ')
                .replace(/8/g, ' eight ')
                .replace(/9/g, ' nine ')
                .replace(/\s+/g, ' ')
                .trim();

        dropdown[dropdown.length] = new Option(numbers[i], numbers[i]);
    }
};

convertToDropdown();
