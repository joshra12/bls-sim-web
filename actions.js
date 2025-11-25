// actions.js
// All actions for the single chest-pain patient scenario

const ACTION_CATEGORIES = {
  History: [
    {
      label: "Obtain a chief complaint",
      result:
        "The patient states, “I’ve got this heavy pressure in the middle of my chest and I feel short of breath.”"
    },
    {
      label: "Obtain a detailed history",
      result:
        "He reports the pain started about 20 minutes ago while walking across campus. It is a central pressure that does not change with position or breathing. He feels slightly nauseated and sweaty."
    },
    {
      label: "Obtain SAMPLE",
      result:
        "S: Central chest pressure with shortness of breath and mild nausea.\n" +
        "A: No known drug or food allergies.\n" +
        "M: Daily aspirin 81 mg and a beta-blocker for blood pressure.\n" +
        "P: Hypertension, high cholesterol, prior MI 3 years ago, no recent surgeries or long travel.\n" +
        "L: Ate breakfast about 2 hours ago.\n" +
        "E: Pain began gradually while walking to class."
    },
    {
      label: "Obtain OPQRST",
      result:
        "Onset: Gradual, started while walking.\n" +
        "Provocation/Palliation: Worse with exertion, improves slightly at rest; not affected by palpation or position.\n" +
        "Quality: Heavy pressure or squeezing.\n" +
        "Radiation: To his left arm and slightly to his jaw.\n" +
        "Severity: 8/10.\n" +
        "Time: Constant for about 20 minutes, not sharp or fleeting."
    },
    {
      label: "Obtain patient demographics",
      result:
        "58-year-old male, lives on campus as staff housing, no language barrier, able to provide consent and answer questions appropriately."
    }
  ],

  Scene: [
    {
      label: "Inspect the scene",
      result:
        "The dorm room is tidy. No drug paraphernalia, alcohol bottles, or signs of trauma are noted. There are no immediate hazards; the scene appears safe."
    },
    {
      label: "Talk to bystanders",
      result:
        "A roommate states the patient suddenly complained of chest pain and sat down. He has not lost consciousness or fallen. No seizure activity or choking was observed."
    }
  ],

  Exam: [
    {
      label: "Perform an abdominal exam",
      result:
        "Abdomen is soft, non-distended, and non-tender in all quadrants. No guarding, rebound, or masses are noted."
    },
    {
      label: "Perform a stroke exam",
      result:
        "Facial symmetry is normal, speech is clear, and he has equal strength and sensation in all extremities. No obvious stroke findings."
    },
    {
      label: "Perform a rapid trauma exam",
      result:
        "Head-to-toe sweep shows no signs of trauma, deformity, or bleeding. This appears to be an isolated medical complaint."
    },
    {
      label: "Perform a selective spinal exam",
      result:
        "There is no history of trauma, no midline cervical tenderness, and the patient denies any numbness or tingling. Spinal motion restriction is not indicated."
    }
  ],

  Airway: [
    {
      label: "Assess patient’s airway",
      result:
        "The patient is speaking in full sentences. Airway is patent with no obstruction, snoring, or gurgling noted."
    },
    {
      label: "Perform a head-tilt chin-lift manuever",
      result:
        "You perform a head-tilt chin-lift. The airway remains patent and there is no change because he was already maintaining his airway."
    },
    {
      label: "Perform a jaw thrust manuever",
      result:
        "Jaw thrust is performed. There is no trauma history; airway remains patent but this maneuver is not strictly necessary in this scenario."
    },
    {
      label: "Insert an OPA",
      result:
        "The patient is awake and has an intact gag reflex. He gags on the OPA and you must remove it."
    },
    {
      label: "Insert an NPA",
      result:
        "NPA is lubricated and inserted without resistance. The patient tolerates it, but he was already able to maintain his own airway, so the benefit is minimal."
    },
    {
      label: "Suction airway",
      result:
        "There are no obvious secretions or emesis. Suctioning is not needed and yields no material."
    }
  ],

  Breathing: [
    {
      label: "Assess patient’s breathing",
      result:
        "Respirations are 22/min and slightly labored. Lungs are clear bilaterally with no wheezes, rales, or rhonchi."
    },
    {
      label: "Administer a nasal cannula",
      result:
        "You place the patient on a nasal cannula at 4 L/min. His SpO₂ improves modestly but given his distress and perfusion status, high-flow oxygen via NRB would be more appropriate."
    },
    {
      label: "Administer a non-rebreather",
      result:
        "You place the patient on a non-rebreather at 15 L/min. He reports slightly easier breathing; SpO₂ rises from 92% to about 96%."
    },
    {
      label: "Administer a bag-valve-mask",
      result:
        "You attempt BVM ventilation, but the patient is awake and fighting the mask. Assisted ventilations are not indicated at this time since he is breathing adequately on his own."
    }
  ],

  Circulation: [
    {
      label: "Assess patient’s circulation",
      result:
        "Radial pulse is rapid and weak. Skin is cool, pale, and slightly diaphoretic. No major external bleeding is present."
    }
  ],

  Impressions: [
    {
      label: "Obtain a general primary impression of the patient",
      result:
        "General impression: potentially unstable medical patient with suspected cardiac ischemia/ACS. He is alert but appears anxious and uncomfortable."
    }
  ],

  Procedures: [
    {
      label: "Any procedures done at the BLS level in MA",
      result:
        "At the BLS level you can provide high-flow oxygen, assist with certain prescribed medications, obtain vital signs, perform a focused exam, and request ALS for advanced management and transport."
    }
  ],

  Vitals: [
    {
      label: "Obtain blood pressure",
      result:
        "Blood pressure is 96/62, which is lower than normal and concerning in the setting of chest pain."
    },
    {
      label: "Obtain blood glucose",
      result:
        "Capillary blood glucose is 124 mg/dL, within normal range for this patient. Hypoglycemia is unlikely to be the primary cause of his symptoms."
    },
    {
      label: "Obtain pupils",
      result:
        "Pupils are equal, round, and reactive to light. No pinpoint or blown pupil is noted."
    },
    {
      label: "Obtain SpO2",
      result: "SpO₂ is 92% on room air on initial assessment."
    },
    {
      label: "Obtain pulse",
      result:
        "Pulse is 112 beats per minute, regular but weak at the radial artery."
    },
    {
      label: "Obtain respiratory rate",
      result:
        "Respiratory rate is 22 breaths per minute and slightly labored, with the patient describing mild shortness of breath."
    },
    {
      label: "Assess skin",
      result:
        "Skin is cool, pale, and slightly diaphoretic—findings consistent with possible shock or poor perfusion."
    },
    {
      label: "Obtain GCS",
      result:
        "GCS is 15. He is alert, oriented, and follows commands appropriately."
    },
    {
      label: "Obtain temperature",
      result:
        "Oral temperature is 98.4°F (36.9°C). There is no fever suggesting infection."
    },
    {
      label: "Obtain lung sounds",
      result:
        "Lung sounds are clear and equal bilaterally. No crackles or wheezes are heard."
    }
  ],

  Medications: [
    {
      label: "Administer aspirin",
      result:
        "You confirm that the patient has no allergy, no recent GI bleed, and has not already taken a large dose. You assist him in taking 324 mg of chewable aspirin, which is appropriate for suspected ACS at the BLS level per protocol."
    },
    {
      label: "Administer albuterol",
      result:
        "The patient does not have wheezing or a history of asthma/COPD, and albuterol is not indicated for his current presentation."
    },
    {
      label: "Administer epinephrine",
      result:
        "There are no signs of anaphylaxis or severe bronchospasm. Epinephrine is not indicated in this chest-pain scenario and could be harmful if given inappropriately."
    }
  ],

  Transport: [
    {
      label: "Lights and sirens",
      result:
        "Given his chest pain, borderline blood pressure, and concerning history, transport with lights and sirens could be appropriate depending on local protocol and distance to the hospital."
    },
    {
      label: "No lights and sirens",
      result:
        "Non-emergent transport may underplay the potential seriousness of this case. Many systems would consider this patient high priority."
    },
    {
      label: "To Brigham and Women’s",
      result:
        "Brigham and Women’s is a major tertiary cardiac center and an appropriate destination for a suspected ACS/STEMI patient, assuming it is within your normal destination range."
    },
    {
      label: "To Boston Medical Center",
      result:
        "Boston Medical Center is a large teaching hospital with cardiac capabilities and could be an appropriate destination based on your system’s protocols."
    },
    {
      label: "To Boston Children’s Hospital",
      result:
        "Boston Children’s Hospital is primarily a pediatric facility and is not an appropriate destination for a 58-year-old chest-pain patient."
    },
    {
      label: "To Beth Israel",
      result:
        "Beth Israel Deaconess is a major tertiary center with cardiac capabilities and may be an appropriate destination depending on protocols and travel time."
    },
    {
      label: "To MGH",
      result:
        "Massachusetts General Hospital is a major tertiary cardiac center and is an appropriate destination for this patient if within normal transport area."
    },
    {
      label: "To Cambridge Hospital",
      result:
        "Cambridge Hospital can manage many emergencies but may not be your first choice for a high-risk ACS patient if a tertiary cardiac center is reasonably accessible."
    },
    {
      label: "To Mount Auburn Hospital",
      result:
        "Mount Auburn Hospital can manage many adult emergencies; destination choice should follow your local protocols and time-to-definitive-care considerations."
    },
    {
      label: "To Tufts Hospital",
      result:
        "Tufts is a major academic center that can manage serious cardiac cases and may be appropriate depending on your catchment area."
    },
    {
      label: "To BMC Brighton",
      result:
        "BMC Brighton has more limited capabilities compared to larger downtown centers; appropriateness depends on your local guidelines."
    }
  ],

  Operations: [
    {
      label: "Call in a trauma alert",
      result:
        "There is no mechanism of injury or evidence of trauma. A trauma alert would not be appropriate for this patient."
    },
    {
      label: "Call in a STEMI alert",
      result:
        "BLS crews typically cannot activate a STEMI alert directly without an ECG showing ST elevation, but you should clearly communicate your concern for ACS to ALS and the receiving hospital."
    },
    {
      label: "Call in a sepsis alert",
      result:
        "He is afebrile with a localized complaint of chest pain and no clear source of infection. A sepsis alert is not indicated."
    },
    {
      label: "Call in a stroke alert",
      result:
        "Stroke exam is reassuring with no focal neurologic deficits. A stroke alert is not indicated in this case."
    },
    {
      label: "Call in Protocol X",
      result:
        "Protocol X would depend on your local guidelines. In this scenario, standard chest-pain/ACS protocols are most relevant."
    },
    {
      label: "Request security",
      result:
        "The scene is calm with no signs of violence or behavioral emergency. Security is not needed at this time."
    },
    {
      label: "Request CPAP",
      result:
        "He is short of breath but not in severe respiratory distress, and his lungs are clear. CPAP is not indicated for this chest-pain-without-pulmonary-edema presentation."
    },
    {
      label: "Call in an entry note",
      result:
        "You provide an entry note to the receiving facility with age, sex, chief complaint, vital signs, and ETA so they can prepare for your arrival."
    },
    {
      label: "Call Medical Control",
      result:
        "You contact Medical Control to discuss aspirin administration and destination choice if required by your protocol."
    },
    {
      label: "Call Supervisor",
      result:
        "You call your supervisor to update them on a potentially serious ACS patient and confirm any system-specific requirements."
    },
    {
      label: "Request ALS",
      result:
        "You request ALS for advanced cardiac monitoring, IV access, and potential medication administration. This is appropriate for a high-risk chest-pain patient."
    }
  ]
};
