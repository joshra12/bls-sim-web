// script.js

const categoriesContainer = document.getElementById("categories");
const resultBox = document.getElementById("result-box");

// Build UI
for (const [categoryName, actions] of Object.entries(ACTION_CATEGORIES)) {
  const section = document.createElement("div");
  section.className = "category-section";

  const header = document.createElement("h2");
  header.textContent = categoryName;
  header.onclick = () => {
    list.style.display = list.style.display === "none" ? "block" : "none";
  };

  const list = document.createElement("div");
  list.style.display = "none";

  actions.forEach(action => {
    const btn = document.createElement("button");
    btn.className = "action-button";
    btn.textContent = action.label;
    btn.onclick = () => {
      resultBox.innerHTML = `<strong>${action.label}</strong><br>${action.result}`;
    };
    list.appendChild(btn);
  });

  section.appendChild(header);
  section.appendChild(list);
  categoriesContainer.appendChild(section);
}
