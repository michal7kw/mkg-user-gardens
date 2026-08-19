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
    localized_name: esame delle urine (completo)
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
    localized_name: badanie ogólne moczu
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
    - coverage_area: major Polish cities
      name: uPacjenta
      type: home_collection
      url: https://upacjenta.pl
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
    localized_name: Urinalysis (Urine Dipstick + Microscopy)
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
description: A urinalysis is a panel of physical, chemical, and microscopic examinations
  of a urine sample. It screens for urinary tract infections, kidney disease, diabetes,
  and metabolic disorders. It is one of the most commonly ordered first-line laboratory
  tests.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itest5b944eaa
id: urinalysis
permalink: /garden/itest5b944eaa/labtest/urinalysis/
provenance: curated
slug: urinalysis
source: Manual
tags:
- labtest
- urine
- renal
templateEngineOverride: njk
title: urinalysis
type: labtest
updated: '2026-08-19T19:25:22.530111Z'
---

{% raw %}
<h1>Urinalysis (General Urine Test)</h1>
<h2>Overview</h2>
<p>A urinalysis evaluates urine through three components: physical inspection (color, clarity, specific gravity), chemical analysis via reagent dipstick (pH, protein, glucose, ketones, blood, leukocyte esterase, nitrite, bilirubin, urobilinogen), and microscopic examination of the sediment (red and white blood cells, casts, crystals, bacteria, and epithelial cells). A clean-catch midstream spot sample is preferred to reduce contamination.</p>
<p>It is ordered as a broad screening tool during routine checkups and as a diagnostic test when urinary or systemic disease is suspected. Because it is inexpensive, rapid, and non-invasive, it frequently provides the first clue to infection, kidney damage, glycemic dysregulation, or liver dysfunction.</p>
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
<td>Appearance</td>
<td>Clear, pale to dark yellow</td>
</tr>
<tr>
<td>pH</td>
<td>4.5-8.0</td>
</tr>
<tr>
<td>Specific gravity</td>
<td>1.005-1.030</td>
</tr>
<tr>
<td>Protein</td>
<td>Negative</td>
</tr>
<tr>
<td>Glucose</td>
<td>Negative</td>
</tr>
<tr>
<td>Ketones</td>
<td>Negative</td>
</tr>
<tr>
<td>Blood</td>
<td>Negative</td>
</tr>
<tr>
<td>Leukocyte esterase</td>
<td>Negative</td>
</tr>
<tr>
<td>Nitrite</td>
<td>Negative</td>
</tr>
</tbody>
</table>
<p>(Ranges/interpretation are approximate and lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Abnormal findings localize disease and guide workup. Positive leukocyte esterase and nitrite with pyuria suggest urinary tract infection; proteinuria and casts indicate glomerular or tubular kidney disease; glucosuria points to hyperglycemia or diabetes; ketonuria reflects fasting, diabetic ketoacidosis, or low-carbohydrate states; and hematuria warrants evaluation for stones, infection, or malignancy. It is widely used for screening, monitoring chronic kidney disease, and pre-operative assessment.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itest5b944eaa/condition/urinary-tract-infection/" class="internal-link">Urinary Tract Infection</a><br />
USED_FOR::<a href="/garden/itest5b944eaa/condition/chronic-kidney-disease/" class="internal-link">Chronic Kidney Disease</a><br />
USED_FOR::<a href="/garden/itest5b944eaa/condition/diabetes-mellitus/" class="internal-link">Diabetes Mellitus</a><br />
RELATED::<a href="/garden/itest5b944eaa/labtest/protein-urine/" class="internal-link">protein_urine</a><br />
RELATED::<a href="/garden/itest5b944eaa/labtest/glucose-urine/" class="internal-link">glucose_urine</a><br />
RELATED::<a href="/garden/itest5b944eaa/labtest/albumin-microalbumin-urine/" class="internal-link">albumin_microalbumin_urine</a></p>
<h2>References</h2>
<ul>
<li>Simerville JA, Maxted WC, Pahira JJ. <em>American Family Physician.</em> 2005 -- Urinalysis: a comprehensive review (PMID: 15791892)</li>
</ul>

{% endraw %}