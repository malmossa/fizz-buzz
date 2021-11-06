let fizzNumber;
let buzzNumber;

document.querySelector(".btn").addEventListener("click", fizzBuzz);

// Get User Input
function getValue(event) {
  fizzNumber = document.getElementById("fizz-value").value;
  buzzNumber = document.getElementById("buzz-value").value;

  event.preventDefault();
}

// Fizz Buzz Logic
function fizzBuzz(event) {
  // Generating the array 1 to 100
  let numbers = [];

  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  for (let i = 0; i <= numbers.length; i++) {
    if (i % fizzNumber == 0) {
      numbers[i] = "FIZZ";
    } else if (i % buzzNumber == 0) {
      numbers[i] = "BUZZ";
    }
  }

  console.log(numbers);

  event.preventDefault();
}
