// cases.js

const CASES = [
  {
    id: "chestPainFlow1",
    title: "Chest Pain – Full BLS Assessment Flow",
    category: "Medical",
    difficulty: "Medium",
    steps: {
      sceneDispatch: {
        text:
          "You are dispatched for a 58 y/o male with chest pain in a dorm. As you arrive on scene, what is your FIRST priority?",
        vitals: null,
        options: [
          {
            label: "Ensure scene safety and don appropriate PPE",
            next: "sceneSizeUp",
            scoreChange: 1,
          },
          {
            label: "Grab the monitor and rush directly to the patient",
            next: "sceneSafetyRemind",
            scoreChange: -1,
          },
        ],
      },

      sceneSafetyRemind: {
        text:
          "Rushing in without confirming scene safety puts you and your crew at risk. Remember: scene safety and PPE come first.",
        vitals: null,
        options: [
          {
            label: "Reassess scene safety and PPE, then proceed inside",
            next: "sceneSizeUp",
            scoreChange: 1,
          },
        ],
      },

      sceneSizeUp: {
        text:
          "The scene appears safe. You and your partner are in gloves and eye protection. There is one patient sitting on the edge of the bed, clutching his chest. No obvious hazards. What do you do as part of your scene size-up?",
        vitals: null,
        options: [
          {
            label: "Confirm NOI, # of patients, and consider additional resources/ALS",
            next: "generalImpression",
            scoreChange: 1,
          },
          {
            label: "Skip size-up and go straight to a full physical exam",
            next: "generalImpression",
            scoreChange: -1,
          },
        ],
      },

      generalImpression: {
        text:
          "You note: one patient, medical NOI (chest pain), no obvious hazards. ALS is available. The patient appears pale and anxious. What’s your next step in the primary assessment?",
        vitals: null,
        options: [
          {
            label:
              "Form a general impression, consider need for spinal precautions, and identify the chief complaint",
            next: "locAssessment",
            scoreChange: 1,
          },
          {
            label: "Immediately obtain a blood pressure",
            next: "locAssessment",
            scoreChange: -1,
          },
        ],
      },

      locAssessment: {
        text:
          "The patient states, “My chest really hurts.” He appears to be protecting his own airway and is sitting upright. You suspect no trauma and do not take spinal precautions. You should now assess level of consciousness. How do you do this?",
        vitals: null,
        options: [
          {
            label:
              "Use AVPU and orientation questions (person, place, time, event)",
            next: "abcd",
            scoreChange: 1,
          },
          {
            label: "Assume he’s alert because he’s talking and skip LOC",
            next: "abcd",
            scoreChange: -1,
          },
        ],
      },

      abcd: {
        text:
          "He is alert and oriented x4. Moving into ABC(D): Airway is patent. He is speaking in full sentences but appears mildly short of breath.",
        vitals: {
          hr: 112,
          rr: 22,
          bp: "96/62",
          spo2: "92% RA",
        },
        options: [
          {
            label:
              "Assess breathing (rate, quality, lung sounds) and circulation (pulse, skin, major bleeding)",
            next: "rapidScanIntro",
            scoreChange: 1,
          },
          {
            label: "Skip to SAMPLE history since he can talk",
            next: "rapidScanIntro",
            scoreChange: -1,
          },
        ],
      },

      rapidScanIntro: {
        text:
          "Breathing is labored at 22/min, lungs clear bilaterally. Radial pulse is rapid and weak, skin cool and pale. No major external bleeding. You move into a rapid scan to look for immediate life threats.",
        vitals: {
          hr: 112,
          rr: 22,
          bp: "96/62",
          spo2: "92% RA",
        },
        options: [
          {
            label:
              "Perform a quick head-to-toe rapid scan and then decide on transport priority",
            next: "transportDecisionPrimary",
            scoreChange: 1,
          },
          {
            label: "Skip rapid scan because it’s a medical call",
            next: "transportDecisionPrimary",
            scoreChange: -1,
          },
        ],
      },

      transportDecisionPrimary: {
        text:
          "Rapid scan reveals no trauma or obvious injuries. Based on the primary assessment, he appears potentially unstable (borderline BP, chest pain, cool/pale skin). What is the BEST BLS decision now?",
        vitals: {
          hr: 112,
          rr: 22,
          bp: "96/62",
          spo2: "92% RA",
        },
        options: [
          {
            label:
              "Request ALS, begin preparations for early transport, and continue assessment en route",
            next: "historyIntro",
            scoreChange: 1,
          },
          {
            label:
              "Decide he is stable and plan to stay on scene for an extended assessment",
            next: "historyIntro",
            scoreChange: -1,
          },
        ],
      },

      historyIntro: {
        text:
          "You’ve completed your primary assessment and identified no immediate life threats requiring CPR or airway maneuvers. You begin history taking focused on the chief complaint. What framework do you use FIRST for the chest pain?",
        vitals: null,
        options: [
          {
            label: "OPQRST for history of present illness",
            next: "opqrstDone",
            scoreChange: 1,
          },
          {
            label: "Jump straight to SAMPLE and skip OPQRST",
            next: "opqrstDone",
            scoreChange: -1,
          },
        ],
      },

      opqrstDone: {
        text:
          "You obtain an OPQRST history:\n\nOnset: Gradual while walking to class.\nProvocation: Worse with exertion, better at rest.\nQuality: Pressure.\nRadiation: To left arm.\nSeverity: 8/10.\nTime: Started 20 minutes ago.\n\nWhat do you do next in your history?",
        vitals: null,
        options: [
          {
            label: "Complete a SAMPLE history",
            next: "sampleDone",
            scoreChange: 1,
          },
          {
            label: "Skip SAMPLE and move straight to transport",
            next: "sampleDone",
            scoreChange: -1,
          },
        ],
      },

      sampleDone: {
        text:
          "SAMPLE:\nS: Chest pressure, mild SOB, nausea.\nA: NKDA.\nM: Daily aspirin and a beta-blocker.\nP: HTN, high cholesterol, prior MI 3 years ago.\nL: Ate breakfast 2 hours ago.\nE: Was walking across campus when pain started.\n\nYou’re ready for your secondary assessment. What should you obtain as BASELINE VITALS at this point?",
        vitals: null,
        options: [
          {
            label: "Respiratory rate, pulse, and blood pressure",
            next: "baselineVitalsGood",
            scoreChange: 1,
          },
          {
            label: "Only blood pressure, since that’s most important",
            next: "baselineVitalsIncomplete",
            scoreChange: -1,
          },
          {
            label:
              "Skip vitals and load immediately without any baseline measurements",
            next: "baselineVitalsSkip",
            scoreChange: -1,
          },
        ],
      },

      baselineVitalsGood: {
        text:
          "You obtain baseline vitals:\nRR 22 (labored), HR 112 (rapid, weak), BP 96/62, SpO₂ 92% on room air. These confirm borderline perfusion and respiratory distress.\n\nAs part of your focused secondary assessment for this cardiac patient, what is the MOST appropriate next step at the BLS level?",
        vitals: {
          hr: 112,
          rr: 22,
          bp: "96/62",
          spo2: "92% RA",
        },
        options: [
          {
            label:
              "Apply high-flow O₂ via NRB, continue focused cardiovascular/respiratory exam, and prepare for transport",
            next: "secondaryAssessmentGood",
            scoreChange: 1,
          },
          {
            label: "Perform a full head-to-toe trauma exam",
            next: "secondaryAssessmentGood",
            scoreChange: -1,
          },
        ],
      },

      baselineVitalsIncomplete: {
        text:
          "Only obtaining blood pressure leaves you without a full picture of perfusion and respiratory status. You correct this and get full baseline vitals.",
        vitals: {
          hr: 112,
          rr: 22,
          bp: "96/62",
          spo2: "92% RA",
        },
        options: [
          {
            label:
              "Obtain RR and pulse as well, then proceed with focused cardiovascular/respiratory exam and O₂",
            next: "secondaryAssessmentGood",
            scoreChange: 1,
          },
        ],
      },

      baselineVitalsSkip: {
        text:
          "Skipping baseline vitals removes an important comparison for future reassessments and can affect patient care and documentation. You realize this and quickly obtain them before moving.",
        vitals: {
          hr: 112,
          rr: 22,
          bp: "96/62",
          spo2: "92% RA",
        },
        options: [
          {
            label:
              "Get RR, pulse, and BP, then begin focused cardiovascular/respiratory exam and O₂",
            next: "secondaryAssessmentGood",
            scoreChange: 1,
          },
        ],
      },

      secondaryAssessmentGood: {
        text:
          "On focused cardiovascular and respiratory exam: lungs are clear, no JVD, no pedal edema. Pain persists at 7/10. You place the patient on high-flow O₂ via NRB at 15 L/min. ALS has been requested and will intercept en route.\n\nAs you begin transport, how often should you plan to reassess this patient?",
        vitals: {
          hr: 108,
          rr: 20,
          bp: "100/64",
          spo2: "96% NRB",
        },
        options: [
          {
            label: "Every 5 minutes because he is potentially unstable",
            next: "reassessmentGood",
            scoreChange: 1,
          },
          {
            label: "Every 15 minutes because he is sitting up and talking",
            next: "reassessmentGood",
            scoreChange: -1,
          },
        ],
      },

      reassessmentGood: {
        text:
          "You reassess every 5 minutes: monitoring ABCs, checking vital signs again, reassessing the chief complaint, and evaluating your interventions.\n\nALS joins you in the ambulance, and the patient is transported to an appropriate cardiac receiving facility.",
        vitals: {
          hr: 104,
          rr: 18,
          bp: "104/68",
          spo2: "97% NRB",
        },
        options: [
          {
            label: "End case and view score",
            next: "end",
            scoreChange: 1,
          },
        ],
      },

      end: {
        text:
          "End of case.\n\nThis call followed the BLS flow: scene size-up → primary assessment (GI, LOC, ABCD, rapid scan, transport decision) → history (OPQRST + SAMPLE) → secondary assessment (baseline vitals and focused exam) → reassessment with appropriate frequency.",
        vitals: null,
        options: [],
      },
    },
  },
];
