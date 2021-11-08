// Selectors
const fizzValue = document.getElementById("fizz-value");
const buzzValue = document.getElementById("buzz-value");
const table = document.getElementById("tableBody");
const tableData = document.getElementById("dataTemplate");
const submitBtn = document.querySelector(".btn");

// Event Listeners
submitBtn.addEventListener("click", fizzBuzz);

// Array
let numbers = [];

// Fizz Buzz Logic
function fizzBuzz(event) {
  // Getting Values
  const fizzNumber = fizzValue.value;
  const buzzNumber = buzzValue.value;

  // Generating the array 1 to 100

  for (let i = 1; i <= 100; i++) {
    if (i % fizzNumber == 0 && i % buzzNumber == 0) {
      numbers.push("FIZZ");
    } else if (i % buzzNumber == 0) {
      numbers.push("BUZZ");
    } else if (i % fizzNumber == 0) {
      numbers.push("FIZZ BUZZ");
    } else {
      numbers.push(i);
    }
  }

  displayResult();
  event.preventDefault();
}

console.log(numbers);
// Display Result
function displayResult() {
  // Clear the table
  table.innerHTML = "";

  for (let i = 0; i < numbers.length; i += 10) {
    table.innerHTML += `<tr>
      <td>${numbers[i]}</td>
      <td>${numbers[i + 1]}</td>
      <td>${numbers[i + 2]}</td>
      <td>${numbers[i + 3]}</td>
      <td>${numbers[i + 4]}</td>
      <td>${numbers[i + 5]}</td>
      <td>${numbers[i + 6]}</td>
      <td>${numbers[i + 7]}</td>
      <td>${numbers[i + 8]}</td>
      <td>${numbers[i + 9]}</td>
    </tr>`;
  }
}
