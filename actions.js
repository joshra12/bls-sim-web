// actions.js

const ACTION_CATEGORIES = {
  History: [
    { label: "Obtain a chief complaint", result: "Chief complaint: Chest pain." },
    { label: "Obtain a detailed history", result: "Detailed history obtained." },
    { label: "Obtain SAMPLE", result: "SAMPLE collected." },
    { label: "Obtain OPQRST", result: "OPQRST collected." },
    { label: "Obtain patient demographics", result: "Patient demographics obtained." }
  ],

  Scene: [
    { label: "Inspect the scene", result: "Scene is safe, no hazards." },
    { label: "Talk to bystanders", result: "Bystanders provide relevant info." }
  ],

  Exam: [
    { label: "Perform an abdominal exam", result: "Abdomen soft, non-tender." },
    { label: "Perform a stroke exam", result: "Stroke exam performed." },
    { label: "Perform a rapid trauma exam", result: "No trauma found." },
    { label: "Perform a selective spinal exam", result: "No spinal tenderness." }
  ],

  Airway: [
    { label: "Assess patient’s airway", result: "Airway patent." },
    { label: "Perform a head-tilt chin-lift maneuver", result: "Airway opened via HTCL." },
    { label: "Perform a jaw thrust maneuver", result: "Jaw thrust performed." },
    { label: "Insert an OPA", result: "OPA inserted successfully." },
    { label: "Insert an NPA", result: "NPA inserted successfully." },
    { label: "Suction airway", result: "Airway suctioned." }
  ],

  Breathing: [
    { label: "Assess patient’s breathing", result: "Breathing assessed." },
    { label: "Administer a nasal cannula", result: "NC applied at 2–6 L/min." },
    { label: "Administer a non-rebreather", result: "NRB applied at 10–15 L/min." },
    { label: "Administer a bag-valve-mask", result: "BVM ventilation initiated." }
  ],

  Circulation: [
    { label: "Assess patient’s circulation", result: "Circulation assessed." }
  ],

  Impressions: [
    { label: "Obtain a general primary impression of the patient", result: "Primary impression formed." }
  ],

  Procedures: [
    { label: "Perform BLS procedures", result: "BLS procedures performed." }
  ],

  Vitals: [
    { label: "Obtain blood pressure", result: "BP obtained." },
    { label: "Obtain blood glucose", result: "BG measured." },
    { label: "Obtain pupils", result: "Pupils assessed." },
    { label: "Obtain SpO2", result: "SpO₂ obtained." },
    { label: "Obtain pulse", result: "Pulse obtained." },
    { label: "Obtain respiratory rate", result: "Respirations counted." },
    { label: "Assess skin", result: "Skin assessed." },
    { label: "Obtain GCS", result: "GCS calculated." },
    { label: "Obtain temperature", result: "Temperature taken." },
    { label: "Obtain lung sounds", result: "Lung sounds auscultated." }
  ],

  Medications: [
    { label: "Administer aspirin", result: "Aspirin administered." },
    { label: "Administer albuterol", result: "Albuterol administered." },
    { label: "Administer epinephrine", result: "Epinephrine administered." }
  ],

  Transport: [
    { label: "Lights and sirens", result: "Transporting L&S." },
    { label: "No lights and sirens", result: "Transport without L&S." },
    { label: "To Brigham and Women’s", result: "Destination: BWH." },
    { label: "To Boston Medical Center", result: "Destination: BMC." },
    { label: "To Boston Children’s Hospital", result: "Destination: BCH." },
    { label: "To Beth Israel", result: "Destination: BIDMC." },
    { label: "To MGH", result: "Destination: MGH." },
    { label: "To Cambridge Hospital", result: "Destination: CH." },
    { label: "To Mount Auburn Hospital", result: "Destination: MAH." },
    { label: "To Tufts Hospital", result: "Destination: Tufts." },
    { label: "To BMC Brighton", result: "Destination: BMC Brighton." }
  ],

  Operations: [
    { label: "Call in a trauma alert", result: "Trauma alert activated." },
    { label: "Call in a STEMI alert", result: "STEMI alert activated." },
    { label: "Call in a sepsis alert", result: "Sepsis alert activated." },
    { label: "Call in a stroke alert", result: "Stroke alert activated." },
    { label: "Call in Protocol X", result: "Protocol X activated." },
    { label: "Request security", result: "Security requested." },
    { label: "Request CPAP", result: "CPAP requested." },
    { label: "Call in an entry note", result: "Entry note made." },
    { label: "Call Medical Control", result: "Medical Control contacted." },
    { label: "Call Supervisor", result: "Supervisor contacted." },
    { label: "Request ALS", result: "ALS requested." }
  ]
};
