

function Fun() {
    var Celsius = parseInt(document.getElementById('c').value);
    var Fahrenheit = parseInt(document.getElementById('f').value);



    if (Celsius != "") {
        var vaue1 = (Celsius * (9 / 5)) + 32;
        document.getElementById('f').value = vaue1;
        document.getElementById('c').value = Celsius;
    }
    else {
        var vaue1 = (Fahrenheit - 32) * (5 / 9);
        document.getElementById('c').value = vaue1;
    }
    if (Fahrenheit != "") {
        var vaue1 = (Fahrenheit - 32) * (5 / 9);
        document.getElementById('c').value = vaue1;
    }
    else {
        var vaue1 = (Celsius * (9 / 5)) + 32;
        document.getElementById('f').value = Celsius;
    }
}
function Clear() {
    document.getElementById('c').value = "";
    document.getElementById('f').value = "";
}


