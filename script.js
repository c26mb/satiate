const search = document.getElementById("search");

if (search) {
  search.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(value) ? "inline-block" : "none";
    });
  });
}