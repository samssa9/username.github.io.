function convertTemp() {
  // Get the value of the Celsius input field
  var celsius = document.getElementById("celsius").value;

  // Convert Celsius to Fahrenheit
  var fahrenheit = (celsius * 9/5) + 32;

  // Display the result in the Fahrenheit input field
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}
