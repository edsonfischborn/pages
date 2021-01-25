const shareBtn = document.querySelector("#shareBtn");
const shareOptions = document.querySelector("#shareOptions");

shareBtn.addEventListener("click", () => {
  shareOptions.classList.toggle("active");
  shareBtn.classList.toggle("active");
});
