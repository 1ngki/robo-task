document.addEventListener(
  "contextmenu",
  function(e) {
    e.preventDefault();
  },
  false
);

document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.keyCode === 85) {
    return false;
  }
});

const squareOne = document.querySelectorAll("[square-one]");
const squareTwo = document.querySelectorAll("[square-two]");
const squareThree = document.querySelectorAll("[square-three]");
const squareFour = document.querySelectorAll("[square-four]");

squareOne.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "https://tut.by";
  });
});

squareTwo.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "https://onliner.by";
  });
});

squareThree.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "https://dev.by";
  });
});

squareFour.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "https://jobs.tut.by";
  });
});
