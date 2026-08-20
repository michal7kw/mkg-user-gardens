---
confidence_score: 0.75
country_availability:
  it:
    access_pathway:
      identity_required: true
      steps:
      - Visit medico di base
      - Receive ricetta (e-prescription) with NRE code via SMS
      - Book via CUP or accredited SSN lab
      type: primary_care_referral
    coverage_tier: public_co_pay
    exemptions:
    - description: E-code exemption for 59 chronic conditions
      type: chronic_condition
    - description: Full exemption for prenatal monitoring
      type: pregnancy
    - description: Income < €8,263.31/year individual
      type: low_income
    last_verified: 2026-06
    localized_name: striscio di sangue periferico
    typical_providers:
    - coverage_area: 13 Italian regions
      name: Bianalisi
      type: private_walk_in
      url: https://bianalisi.it
    - coverage_area: 8 Italian regions
      name: SYNLAB Italia
      type: private_walk_in
      url: https://synlab.it
    - coverage_area: Lombardy
      name: CDI (Centro Diagnostico Italiano)
      type: private_walk_in
      url: https://www.cdi.it
    - coverage_area: Italy nationwide
      name: Medelit
      type: home_collection
      url: https://medelit.com
  pl:
    access_pathway:
      identity_required: true
      steps:
      - Visit POZ (lekarz POZ)
      - Get e-skierowanie (e-referral)
      - Go to the designated lab specified by your POZ
      type: primary_care_referral
    coverage_tier: public_free_with_referral
    exemptions: []
    last_verified: 2026-06
    localized_name: rozmaz krwi obwodowej (ręczny)
    typical_providers:
    - coverage_area: national
      name: Diagnostyka
      type: private_walk_in
      url: https://diag.pl
    - coverage_area: national
      name: ALAB Laboratoria
      type: private_walk_in
      url: https://alab.pl
    - coverage_area: 70 cities
      name: Synevo
      type: private_walk_in
      url: https://store.synevo.pl/en
  uk:
    access_pathway:
      identity_required: true
      steps:
      - Visit your GP
      - Request the test
      - Sample sent to NHS pathology lab via your GP practice
      type: primary_care_referral
    coverage_tier: public_free_with_referral
    exemptions: []
    last_verified: 2026-06
    localized_name: Blood Film (Peripheral Smear)
    typical_providers:
    - coverage_area: UK national
      name: NHS Pathology
      type: public_lab
      url: https://www.england.nhs.uk
    - coverage_area: London
      name: TDL (The Doctors Laboratory)
      type: private_walk_in
      url: https://www.tdlpathology.com
    - coverage_area: UK national
      name: Nuffield Health
      type: private_walk_in
      url: https://www.nuffieldhealth.com
created: '2026-06-18T00:00:00+00:00'
description: A peripheral blood smear is a microscopic examination of a stained blood
  film. It evaluates the size, shape, and maturity of red cells, white cells, and
  platelets to detect morphologic abnormalities that automated counters may miss.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itestf9462b23
id: peripheral_blood_smear
permalink: /garden/itestf9462b23/labtest/peripheral-blood-smear/
provenance: curated
slug: peripheral-blood-smear
source: Manual
tags:
- labtest
- hematology
- morphology
- microscopy
templateEngineOverride: njk
title: peripheral_blood_smear
type: labtest
updated: '2026-08-20T20:04:24.692133Z'
---

{% raw %}
<h1>Peripheral Blood Smear</h1>
<h2>Overview</h2>
<p>A peripheral blood smear (blood film) is prepared by spreading a thin layer of anticoagulated (EDTA) blood on a glass slide, staining it (typically with a Romanowsky stain such as Wright-Giemsa), and examining it under light microscopy. A trained morphologist or hematopathologist assesses red blood cell size, shape, color, and inclusions; the number and morphology of white blood cells including the differential; and platelet number and appearance.</p>
<p>The smear is ordered to investigate abnormal automated complete blood count results, unexplained cytopenias, suspected hemolysis, possible leukemia or other hematologic malignancy, and infections such as malaria. It provides qualitative information (e.g., schistocytes, blasts, sickled cells, target cells, spherocytes) that numerical counts cannot capture, and is a key step in classifying anemia and identifying urgent findings.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal RBC morphology</td>
<td>Normocytic, normochromic, no significant poikilocytosis</td>
</tr>
<tr>
<td>Normal WBC differential</td>
<td>Neutrophils, lymphocytes, monocytes, eosinophils, basophils in usual proportions; no blasts</td>
</tr>
<tr>
<td>Normal platelets</td>
<td>Adequate number, normal morphology, no clumping</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Abnormal red cell findings help classify anemia: microcytic hypochromic cells suggest iron deficiency, macro-ovalocytes and hypersegmented neutrophils suggest B12/folate deficiency, sickle cells indicate sickle cell disease, and schistocytes raise concern for microangiopathic hemolysis. Spherocytes are seen in hereditary spherocytosis and autoimmune hemolytic anemia. White cell abnormalities such as circulating blasts can be the first sign of acute leukemia, while marked lymphocytosis with smudge cells suggests chronic lymphocytic leukemia. Platelet clumping can cause spurious automated thrombocytopenia detectable only on the film. The smear is therefore a critical confirmatory and triage test in hematology.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itestf9462b23/condition/sickle-cell-disease/" class="internal-link">Sickle Cell Disease</a><br />
USED_FOR::<a href="/garden/itestf9462b23/condition/iron-deficiency-anemia/" class="internal-link">Iron Deficiency Anemia</a><br />
USED_FOR::<a href="/garden/itestf9462b23/condition/pernicious-anemia/" class="internal-link">Pernicious Anemia</a><br />
USED_FOR::<a href="/garden/itestf9462b23/condition/chronic-lymphocytic-leukemia/" class="internal-link">Chronic Lymphocytic Leukemia</a><br />
RELATED::<a href="/garden/itestf9462b23/labtest/complete-blood-count/" class="internal-link">complete_blood_count</a><br />
RELATED::<a href="/garden/itestf9462b23/labtest/cbc-with-differential/" class="internal-link">cbc_with_differential</a></p>
<h2>References</h2>
<ul>
<li>Bain BJ. Diagnosis from the blood smear. <em>N Engl J Med.</em> 2005;353(5):498-507 -- review of morphologic diagnosis from peripheral blood films (PMID: 16079373)</li>
</ul>

{% endraw %}