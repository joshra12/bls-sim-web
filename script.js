// script.js

let currentCase = null;
let currentStepKey = "sceneDispatch";
let score = 0;

const caseListView = document.getElementById("case-list-view");
const casePlayerView = document.getElementById("case-player-view");

const caseListDiv = document.getElementById("case-list");
const caseTitleEl = document.getElementById("case-title");
const scoreDisplayEl = document.getElementById("score-display");
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
  currentStepKey = "sceneDispatch";
  score = 0;
  updateScoreDisplay();
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

// Update score display
function updateScoreDisplay() {
  if (!currentCase) {
    scoreDisplayEl.textContent = "";
    return;
  }
  scoreDisplayEl.textContent = `Score: ${score}`;
}

// Render the current step
function renderStep() {
  const step = currentCase.steps[currentStepKey];

  // Base text
  stepTextEl.textContent = step.text;

  // If it's an end step, append the final score
  if (!step.options || step.options.length === 0) {
    const scorePara = document.createElement("p");
    scorePara.textContent = `Final score for this case: ${score}`;
    stepTextEl.appendChild(document.createElement("br"));
    stepTextEl.appendChild(scorePara);
  }

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
  (step.options || []).forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-button";
    btn.textContent = opt.label;
    btn.onclick = () => {
      if (typeof opt.scoreChange === "number") {
        score += opt.scoreChange;
        if (score < 0) score = 0; // don’t go negative
        updateScoreDisplay();
      }
      currentStepKey = opt.next;
      renderStep();
    };
    optionsBoxEl.appendChild(btn);
  });

  // If no options, show "Back to Case List"
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
  currentStepKey = "sceneDispatch";
  score = 0;
  updateScoreDisplay();
  casePlayerView.style.display = "none";
  caseListView.style.display = "block";
}

// Back button in header
backButton.addEventListener("click", goBackToList);

// Initialize
renderCaseList();
