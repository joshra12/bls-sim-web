// cases.js

const CASES = [
  {
    id: "chestPain1",
    title: "Chest Pain – 58 y/o M",
    category: "Medical",
    difficulty: "Easy",
    steps: {
      start: {
        text: "You arrive to a 58 y/o male with chest pain in a dorm room. He looks pale and diaphoretic, sitting upright on the edge of the bed.",
        vitals: {
          hr: 112,
          rr: 22,
          bp: "96/62",
          spo2: "92% RA",
        },
        options: [
          { label: "Perform primary assessment (ABCs)", next: "primary" },
          { label: "Give aspirin immediately", next: "tooSoonAspirin" },
        ],
      },
      tooSoonAspirin: {
        text:
          "At BLS level, you should complete a primary assessment and check for contraindications before giving medications.",
        vitals: null,
        options: [
          { label: "Go back and perform primary assessment", next: "primary" },
        ],
      },
      primary: {
        text:
          "Airway is patent. Breathing is labored at 22/min, lungs clear. Radial pulse is weak and rapid, skin cool and pale. Patient rates pain 8/10, central chest pressure.",
        vitals: {
          hr: 112,
          rr: 22,
          bp: "96/62",
          spo2: "92% RA",
        },
        options: [
          {
            label: "Apply O2 via nasal cannula at 2 L/min",
            next: "lowO2",
          },
          {
            label: "Apply O2 via NRB at 15 L/min",
            next: "goodO2",
          },
          {
            label: "Ignore O2 and start moving to stretcher",
            next: "noO2",
          },
        ],
      },
      lowO2: {
        text:
          "For significant chest pain and poor perfusion, low-flow NC is not ideal. The patient remains short of breath.",
        vitals: {
          hr: 115,
          rr: 24,
          bp: "94/60",
          spo2: "93% NC 2 L",
        },
        options: [
          {
            label: "Increase to NRB at 15 L/min",
            next: "goodO2",
          },
        ],
      },
      goodO2: {
        text:
          "You place the patient on high-flow O2 via NRB. He reports slightly easier breathing, pain now 7/10.",
        vitals: {
          hr: 108,
          rr: 20,
          bp: "98/64",
          spo2: "96% NRB",
        },
        options: [
          {
            label: "Request ALS and prepare for rapid transport",
            next: "goodPlan",
          },
          {
            label: "Decide to stay on scene for a long history",
            next: "badPlan",
          },
        ],
      },
      noO2: {
        text:
          "You delay oxygen and focus on movement. The patient becomes more dyspneic and lightheaded.",
        vitals: {
          hr: 118,
          rr: 26,
          bp: "90/58",
          spo2: "90% RA",
        },
        options: [
          {
            label: "Stop and apply NRB at 15 L/min and reassess",
            next: "goodO2",
          },
        ],
      },
      goodPlan: {
        text:
          "You appropriately request ALS, continue monitoring ABCs, and prepare for rapid transport to an appropriate facility.",
        vitals: {
          hr: 104,
          rr: 18,
          bp: "102/66",
          spo2: "97% NRB",
        },
        options: [
          {
            label: "End case",
            next: "end",
          },
        ],
      },
      badPlan: {
        text:
          "Staying on scene too long with an unstable patient increases risk. Continuing scene time may worsen outcome.",
        vitals: {
          hr: 120,
          rr: 24,
          bp: "88/54",
          spo2: "94% NRB",
        },
        options: [
          {
            label: "Realize your error and prepare for rapid transport",
            next: "goodPlan",
          },
        ],
      },
      end: {
        text:
          "End of case. Key BLS priorities: early primary assessment, appropriate oxygen, rapid ALS request, and transport.",
        vitals: null,
        options: [],
      },
    },
  },

  // Add more cases here
];
