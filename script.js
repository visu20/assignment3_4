// Function to convert CAD to USD
function convertToUSD() {
    const cadInput = document.getElementById("cadInput").value;
    const usdResult = document.getElementById("usdResult");

    // Validate input
    if (!cadInput || isNaN(cadInput)) {
        usdResult.innerText = "Please enter a valid number.";
        return;
    }

    // Conversion rate (hardcoded for example)
    const exchangeRate = 0.75;
    const usdAmount = (cadInput * exchangeRate).toFixed(3);

    usdResult.innerText = `USD: ${usdAmount}`;
}
// Exchange rate (hardcoded for demonstration)
const usdToCadRate = 1.25;
const cadToUsdRate = 0.8;

function convertCurrency() {
    // Get input values
    const amountInput = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Validate input
    if (isNaN(amountInput) || amountInput <= 0) {
        alert('Please enter a valid positive number for the amount.');
        return;
    }

    // Perform conversion
    let convertedAmount;
    if (fromCurrency === 'usd' && toCurrency === 'cad') {
        convertedAmount = (amountInput * usdToCadRate).toFixed(3);
    } else if (fromCurrency === 'cad' && toCurrency === 'usd') {
        convertedAmount = (amountInput * cadToUsdRate).toFixed(3);
    } else {
        // Same currency, no need to convert
        convertedAmount = amountInput.toFixed(3);
    }

    // Display the result
    document.getElementById('convertedAmount').value = convertedAmount;
}

// Function to convert USD to CAD
function convertToCAD() {
    const usdInput = document.getElementById("usdInput").value;
    const cadResult = document.getElementById("cadResult");

    // Validate input
    if (!usdInput || isNaN(usdInput)) {
        cadResult.innerText = "Please enter a valid number.";
        return;
    }

    // Conversion rate (hardcoded for example)
    const exchangeRate = 1.33;
    const cadAmount = (usdInput * exchangeRate).toFixed(3);

    cadResult.innerText = `CAD: ${cadAmount}`;
}
