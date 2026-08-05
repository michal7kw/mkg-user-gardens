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
    localized_name: raccolta urine delle 24 ore
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
    exemptions:
    - description: Advanced analytes (metanephrines, clearance) typically need a specialist
        referral; basic analytes orderable at POZ
      type: specialist_referral_for_advanced_analytes
    last_verified: 2026-06
    localized_name: dobowa zbiórka moczu (DZM)
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
    localized_name: 24-hour Urine Collection
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
description: A 24-hour urine collection gathers all urine produced over a full day
  to measure the total excretion of analytes such as protein, creatinine, electrolytes,
  and hormones. It overcomes the variability of spot samples and is used to quantify
  proteinuria, assess kidney function, and evaluate metabolic and endocrine disorders.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: e2euserd06faaf2
id: urine_collection_24h
permalink: /garden/e2euserd06faaf2/labtest/urine-collection-24h/
provenance: curated
slug: urine-collection-24h
source: Manual
tags:
- labtest
- urine
- renal
templateEngineOverride: njk
title: urine_collection_24h
type: labtest
updated: '2026-08-05T03:44:35.640782Z'
---

{% raw %}
<h1>24-Hour Urine Collection</h1>
<h2>Overview</h2>
<p>A 24-hour urine collection captures every void over a complete day into a container (sometimes with a preservative), allowing the laboratory to measure the total daily excretion of substances rather than a single concentration. Adequacy is often validated using total creatinine excretion, which is relatively constant for a given body mass. Discarding the first morning void and including the next morning's void defines the collection window.</p>
<p>This timed approach is ordered to quantify proteinuria and albuminuria, calculate measured creatinine clearance, and evaluate stone risk (calcium, oxalate, citrate), pheochromocytoma (catecholamines/metanephrines), Cushing syndrome (free cortisol), and electrolyte handling. It reduces the noise of diurnal and dietary variation seen in spot samples.</p>
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
<td>Total volume</td>
<td>~0.8-2.0 L/24h (intake-dependent)</td>
</tr>
<tr>
<td>Protein excretion</td>
<td>&lt;150 mg/24h</td>
</tr>
<tr>
<td>Albumin excretion</td>
<td>&lt;30 mg/24h</td>
</tr>
<tr>
<td>Creatinine (men)</td>
<td>~14-26 mg/kg/24h</td>
</tr>
<tr>
<td>Creatinine (women)</td>
<td>~11-20 mg/kg/24h</td>
</tr>
</tbody>
</table>
<p>(Ranges/interpretation are approximate and lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Elevated 24-hour protein or albumin excretion confirms and grades glomerular kidney disease and is a key marker in diabetic and hypertensive nephropathy. Measured creatinine clearance estimates glomerular filtration rate when estimating equations are unreliable. Abnormal stone-risk chemistries guide prevention of recurrent nephrolithiasis, and elevated catecholamines, metanephrines, or free cortisol support endocrine tumor diagnoses. Incomplete collection is the most common source of error.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/e2euserd06faaf2/condition/chronic-kidney-disease/" class="internal-link">Chronic Kidney Disease</a><br />
USED_FOR::<a href="/garden/e2euserd06faaf2/condition/kidney-stones/" class="internal-link">Kidney Stones</a><br />
RELATED::<a href="/garden/e2euserd06faaf2/labtest/albumin-microalbumin-urine/" class="internal-link">albumin_microalbumin_urine</a><br />
RELATED::<a href="/garden/e2euserd06faaf2/labtest/protein-urine/" class="internal-link">protein_urine</a><br />
RELATED::<a href="/garden/e2euserd06faaf2/labtest/creatinine/" class="internal-link">creatinine</a></p>
<h2>References</h2>
<ul>
<li>Levey AS, Stevens LA, Schmid CH, et al. <em>Annals of Internal Medicine.</em> 2009 -- A new equation to estimate glomerular filtration rate (CKD-EPI) (PMID: 19414839)</li>
</ul>

{% endraw %}