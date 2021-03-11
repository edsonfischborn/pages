const htmlSlider = document.querySelector("#slider");
const htmlPlanSelection = document.querySelector("#planSelection");
const htmlViewsCount = document.querySelector("#viewsCount");
const htmlPrice = document.querySelector("#price");

const dataSlider = [
  {
    basePrice: 8,
    viewsCount: "8k",
  },
  {
    basePrice: 12,
    viewsCount: "50k",
  },
  {
    basePrice: 16,
    viewsCount: "100k",
  },
  {
    basePrice: 24,
    viewsCount: "500k",
  },
  {
    basePrice: 36,
    viewsCount: "1M",
  },
];

// Change price
function handlePrice() {
  let { basePrice, viewsCount } = dataSlider[slider.value];
  if (htmlPlanSelection.checked) basePrice -= basePrice * 0.25;

  htmlPrice.innerText = `$${String(basePrice.toFixed(2)).padStart(5, "0")}`;
  htmlViewsCount.innerText = viewsCount;
}

htmlSlider.addEventListener("input", handlePrice);
htmlPlanSelection.addEventListener("change", handlePrice);
handlePrice();

// Range google chrome style
let isChanging = false;

const setSliderProgress = () => {
  const percent =
    ((htmlSlider.value - htmlSlider.min) / (htmlSlider.max - htmlSlider.min)) *
    100;
  htmlSlider.style.setProperty("--webkitProgressPercent", `${percent}%`);
};

const handleMove = () => {
  if (!isChanging) return;
  setSliderProgress();
};
const handleUpAndLeave = () => (isChanging = false);
const handleDown = () => (isChanging = true);

htmlSlider.addEventListener("mousemove", handleMove);
htmlSlider.addEventListener("mousedown", handleDown);
htmlSlider.addEventListener("mouseup", handleUpAndLeave);
htmlSlider.addEventListener("mouseleave", handleUpAndLeave);
htmlSlider.addEventListener("click", setSliderProgress);

htmlSlider.addEventListener("touchmove", handleMove);
htmlSlider.addEventListener("touchend", handleDown);
htmlSlider.addEventListener("touchcancel", handleUpAndLeave);
htmlSlider.addEventListener("touchleave", handleUpAndLeave);
htmlSlider.addEventListener("touchstart", setSliderProgress);

htmlSlider.addEventListener("input", setSliderProgress);

setSliderProgress();
