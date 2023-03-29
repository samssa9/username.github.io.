function convert() {
	// Get user input
	var amount = document.getElementById("amount").value;
	var fromCurrency = document.getElementById("from").value;
	var toCurrency = document.getElementById("to").value;

	// Make API call to get exchange rate
	var xhr = new XMLHttpRequest();
	var url = "https://api.exchangerate-api.com/v4/latest/" + fromCurrency;
	xhr.open("GET", url, true);
	xhr.onload = function() {
		if (xhr.status === 200) {
			var data = JSON.parse(xhr.responseText);
			var rate = data.rates[toCurrency];
			var result = amount * rate;
			document.getElementById("result").innerHTML = amount + " " + fromCurrency + " = " + result + " " + toCurrency;
		}
	};
	xhr.send();
}
