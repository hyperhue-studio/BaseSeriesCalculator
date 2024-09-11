// Function to calculate the series
function calculateSeries() {
  let base = document.getElementById("base").value;
  let iterations = document.getElementById("iterations").value;
  let result = document.getElementById("result");

  // Clear previous results
  result.innerHTML = "";

  // Validate the inputs
  if (base === "" || iterations === "") {
    result.innerHTML = "Please enter both numbers.";
    return;
  }

  base = parseInt(base);
  iterations = parseInt(iterations);

  // Validate if the inputs are positive integers
  if (isNaN(base) || isNaN(iterations) || base <= 0 || iterations <= 0) {
    result.innerHTML = "Both inputs must be positive integers.";
    return;
  }

  // Validate the number of iterations
  if (iterations > 100) {
    result.innerHTML = "Number of iterations is too high. Please enter a number less than or equal to 100.";
    return;
  }

  // Calculate the series
  let term = base;
  let sum = 0;
  let terms = [];

  for (let i = 0; i < iterations; i++) {
    terms.push(term);
    sum += term;
    term = term * 10 + base;
  }

  // Display the result
  let termsText = terms.join(" ");
  result.innerHTML = `The terms of the series are: ${termsText}<br>
                      The sum of the first ${iterations} terms of the series with base ${base} is ${sum}`;
}
