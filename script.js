// script.js

let currentCase = null;
let currentStepKey = "start";

const caseListView = document.getElementById("case-list-view");
const casePlayerView = document.getElementById("case-player-view");

const caseListDiv = document.getElementById("case-list");
const caseTitleEl = document.getElementById("case-title");
const stepTextEl = document.getElementById("step-text");
const vitalsBoxEl = document.getElementById("vitals-box");
const optionsBoxEl = document.getElementById("options-box");
const backButton = document.getElementById("back-button");

// Render list of cases
function renderCaseList() {
  caseListDiv.innerHTML = "";

  CASES.forEach((c) => {
    const card = document.createElement("div");
    card.className = "case-card";
    card.onclick = () => openCase(c.id);

    const title = document.createElement("div");
    title.className = "case-card-title";
    title.textContent = c.title;

    const meta = document.createElement("div");
    meta.className = "case-card-meta";
    meta.textContent = `${c.category} • ${c.difficulty}`;

    card.appendChild(title);
    card.appendChild(meta);
    caseListDiv.appendChild(card);
  });
}

// Open a case
function openCase(caseId) {
  currentCase = CASES.find((c) => c.id === caseId);
  currentStepKey = "start";
  showCasePlayer();
}

// Show the case player view
function showCasePlayer() {
  if (!currentCase) return;

  caseTitleEl.textContent = currentCase.title;
  renderStep();

  caseListView.style.display = "none";
  casePlayerView.style.display = "block";
}

// Render the current step
function renderStep() {
  const step = currentCase.steps[currentStepKey];

  // Step text
  stepTextEl.textContent = step.text;

  // Vitals
  vitalsBoxEl.innerHTML = "";
  if (step.vitals) {
    const v = step.vitals;
    vitalsBoxEl.style.display = "block";
    vitalsBoxEl.innerHTML = `
      <strong>Vitals</strong><br>
      HR: ${v.hr} • RR: ${v.rr}<br>
      BP: ${v.bp} • SpO₂: ${v.spo2}
    `;
  } else {
    vitalsBoxEl.style.display = "none";
  }

  // Options
  optionsBoxEl.innerHTML = "";
  step.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-button";
    btn.textContent = opt.label;
    btn.onclick = () => {
      currentStepKey = opt.next;
      renderStep();
    };
    optionsBoxEl.appendChild(btn);
  });

  // If it's an end step (no options)
  if (!step.options || step.options.length === 0) {
    const endBtn = document.createElement("button");
    endBtn.id = "end-button";
    endBtn.className = "option-button";
    endBtn.textContent = "Back to Case List";
    endBtn.onclick = goBackToList;
    optionsBoxEl.appendChild(endBtn);
  }
}

// Go back to list
function goBackToList() {
  currentCase = null;
  currentStepKey = "start";
  casePlayerView.style.display = "none";
  caseListView.style.display = "block";
}

// Back button in header
backButton.addEventListener("click", goBackToList);

// Initialize
renderCaseList();
