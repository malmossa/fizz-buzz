// Selectors
const fizzValue = document.getElementById("fizz-value");
const buzzValue = document.getElementById("buzz-value");
const submitBtn = document.querySelector(".btn");

// Event Listeners
submitBtn.addEventListener("click", fizzBuzz);

// Fizz Buzz Logic
function fizzBuzz(event) {
  // Getting Values
  const fizzNumber = fizzValue.value;
  const buzzNumber = buzzValue.value;

  // Generating the array 1 to 100
  let numbers = [];

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

  console.log(numbers);

  event.preventDefault();
}
