// script.js

const categoriesContainer = document.getElementById("categories");
const resultBox = document.getElementById("result-box");

// Build the category sections and action buttons
for (const [categoryName, actions] of Object.entries(ACTION_CATEGORIES)) {
  const section = document.createElement("div");
  section.className = "category-section";

  const header = document.createElement("h2");
  header.textContent = categoryName;

  const list = document.createElement("div");
  list.className = "action-list";
  list.style.display = "none";

  // Toggle open/closed on header click
  header.onclick = () => {
    list.style.display = list.style.display === "none" ? "block" : "none";
  };

  actions.forEach(action => {
    const btn = document.createElement("button");
    btn.className = "action-button";
    btn.textContent = action.label;
    btn.onclick = () => {
      // Show result text for this specific action
      const formatted = action.result.replace(/\n/g, "<br>");
      resultBox.innerHTML = `<strong>${action.label}</strong><br>${formatted}`;
    };
    list.appendChild(btn);
  });

  section.appendChild(header);
  section.appendChild(list);
  categoriesContainer.appendChild(section);
}
