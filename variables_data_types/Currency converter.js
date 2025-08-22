// Design a currency converter that works without using any APIs. Use a
//  hardcoded data structure of conversion rates but allow the user to switch the
//  base (from) currency dynamically. Input 2 currencies from given options (From
//  and To) and value of base currency then display result after conversion

let fromCurrency = prompt("Enter from currency (USD, EUR, GBP, INR, PKR):");
let toCurrency = prompt("Enter to currency (USD, EUR, GBP, INR, PKR):");
let amount = parseFloat(prompt("Enter amount in " + fromCurrency + ":"));

const conversionRates = {
    USD: { EUR: 0.8625, GBP: 0.75, INR: 87.5, PKR: 284.55 },
    EUR: { USD: 1.159, GBP: 0.87, INR: 101.4, PKR: 326.9 },
    GBP: { USD: 1.333, EUR: 1.15, INR: 116.7, PKR: 375.9 },
    INR: { USD: 0.0114, EUR: 0.0099, GBP: 0.0086, PKR: 3.22 },
    PKR: { USD: 0.0035, EUR: 0.00306, GBP: 0.00266, INR: 0.31 }
};
function convertCurrency(fromCurrency, toCurrency, amount) {
    //check if user do not enter valid currencies
    if (!conversionRates[fromCurrency] || !conversionRates[fromCurrency][toCurrency]) {
        console.log("Invalid currency selection.");
        return null;
    }
    if (fromCurrency === toCurrency) {
        return amount; // No conversion needed
    }
    
    //conversionRates["USD"]["PKR"];
    const rate = conversionRates[fromCurrency][toCurrency];
    return amount * rate;

}

let result = convertCurrency(fromCurrency, toCurrency, amount);
if (result !== null) {
    console.log(`Converted amount: ${result} ${toCurrency}`);
}
