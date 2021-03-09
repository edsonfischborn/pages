const slider = document.querySelector("#slider");
const price = document.querySelector("#price");

window.onload = () => {
  handlePrice();
  setSliderProgress();
};

// Change price
function handlePrice() {
  const value = Math.round(5.33 * slider.value).toFixed(2);
  price.innerText = `$${String(value).padStart(5, "0")}`;
}

slider.addEventListener("input", (e) => {
  handlePrice();
  setSliderProgress();
});

// Range chrome style
let isChanging = false;

const setSliderProgress = () => {
  const percent =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--webkitProgressPercent", `${percent}%`);
};

const handleMove = () => {
  if (!isChanging) return;
  setSliderProgress();
};
const handleUpAndLeave = () => (isChanging = false);
const handleDown = () => (isChanging = true);

slider.addEventListener("mousemove", handleMove);
slider.addEventListener("mousedown", handleDown);
slider.addEventListener("mouseup", handleUpAndLeave);
slider.addEventListener("mouseleave", handleUpAndLeave);
slider.addEventListener("click", setSliderProgress);

slider.addEventListener("touchmove", handleMove);
slider.addEventListener("touchend", handleDown);
slider.addEventListener("touchcancel", handleUpAndLeave);
slider.addEventListener("touchleave", handleUpAndLeave);
slider.addEventListener("touchstart", setSliderProgress);
