// Převodní funkce
document.getElementById("convertButton").addEventListener("click", function () {
    const temperature = parseFloat(document.getElementById("temperatureInput").value);
    const conversionType = document.getElementById("conversionType").value;

    if (isNaN(temperature)) {
        document.getElementById("result").textContent = "Prosím zadejte platné číslo.";
        return;
    }

    let result = "";
    if (conversionType === "cToF") {
        // Převod z Celsia na Fahrenheita
        const fahrenheit = (temperature * 9 / 5) + 32;
        result = `${temperature} °C = ${fahrenheit.toFixed(2)} °F`;
    } else if (conversionType === "fToC") {
        // Převod z Fahrenheita na Celsia
        const celsius = (temperature - 32) * 5 / 9;
        result = `${temperature} °F = ${celsius.toFixed(2)} °C`;
    }

    document.getElementById("result").textContent = result;
});
