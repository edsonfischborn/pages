const items = document.querySelectorAll(".card-item");

items.forEach((item) => {
  const [itemTitle] = item.children;
  itemTitle.addEventListener("click", () => handleItemClick(item));
});

function handleItemClick(item) {
  item.classList.toggle("selected");
}
