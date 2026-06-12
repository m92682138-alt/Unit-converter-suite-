function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const conversion = document.getElementById("conversion").value;
    const resultElement = document.getElementById("result");

    if (isNaN(value)) {
        resultElement.innerHTML = "Please enter a valid number!";
        return;
    }

    let result;

    switch (conversion) {
        case "m-km":
            result = value / 1000;
            resultElement.innerHTML = `${value} m = ${result} km`;
            break;

        case "km-m":
            result = value * 1000;
            resultElement.innerHTML = `${value} km = ${result} m`;
            break;

        case "g-kg":
            result = value / 1000;
            resultElement.innerHTML = `${value} g = ${result} kg`;
            break;

        case "kg-g":
            result = value * 1000;
            resultElement.innerHTML = `${value} kg = ${result} g`;
            break;

        case "c-f":
            result = (value * 9 / 5) + 32;
            resultElement.innerHTML = `${value} °C = ${result.toFixed(2)} °F`;
            break;

        case "f-c":
            result = (value - 32) * 5 / 9;
            resultElement.innerHTML = `${value} °F = ${result.toFixed(2)} °C`;
            break;

        default:
            resultElement.innerHTML = "Invalid conversion!";
    }
}
