function readTable() {
  console.log("Reading table...");
  const tbody = document.querySelector("tbody");

  if (!tbody) {
    console.log("tbody not found");
    return;
  }

  const observer = new MutationObserver((mutationsList, observer) => {
    let mutation = mutationsList[mutationsList.length - 1];
    if (mutation.type === "childList") {
      const rows = tbody.querySelectorAll("tr");

      const counts = {};

      const frequentTexts = [];

      rows.forEach((row) => {
        const secondCell = row.cells[1];

        if (secondCell && secondCell.textContent.trim()) {
          const text = secondCell.textContent.trim();

          counts[text] = (counts[text] || 0) + 1;
        }
      });

      Object.entries(counts)
        .filter(([text, count]) => count == 4)
        .forEach(([text, count]) => {
          frequentTexts.push(text);
        });
      console.log(frequentTexts);
    }
  });

  observer.observe(tbody, { childList: true });
}
