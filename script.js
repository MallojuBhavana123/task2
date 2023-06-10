function convert() {
  var celsiusInput = document.getElementById("celsius");
  var resultElement = document.getElementById("result");

  if (celsiusInput.value === "") {
    resultElement.innerHTML = "Please enter a temperature in Celsius.";
    return;
  }

  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = (celsius * 9 / 5) + 32;

   resultElement.innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.";
}