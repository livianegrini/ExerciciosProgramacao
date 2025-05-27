var input = readline();
var valor = Number(input);

if (valor >= 0 && valor <= 1000) {
    var fahrenheit = (celsius * 1.80) + 32.00;
    var kelvin = celsius + 273.15;

    ans = [kelvin.toFixed(5), fahrenheit.toFixed(5)]
}


