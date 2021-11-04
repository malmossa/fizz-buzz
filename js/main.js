let fizzNumber;
let buzzNumber;

document.querySelector(".btn").addEventListener("click", getValue);

// Get User Input
function getValue(event) {
  fizzNumber = document.getElementById("fizz-value").value;
  buzzNumber = document.getElementById("buzz-value").value;
  console.log(fizzNumber);
  console.log(buzzNumber);

  event.preventDefault();
}

// Fizz Buzz Logic
function fizzBuzz() {}
