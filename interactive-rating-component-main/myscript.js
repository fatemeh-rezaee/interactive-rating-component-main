const cardOne = document.querySelector(".card-1");

const cardTwo = document.querySelector(".card-2");

const submitButton = document.getElementById("submit");

const rating = document.getElementById("rating");

const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  cardTwo.classList.remove("hide");
  cardOne.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
