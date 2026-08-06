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
    localized_name: curva da carico orale di glucosio (OGTT)
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
    - description: Routinely reimbursed as part of antenatal screening
      type: pregnancy
    last_verified: 2026-06
    localized_name: doustny test obciążenia glukozą (krzywa cukrowa)
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
    localized_name: Oral Glucose Tolerance Test (OGTT)
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
description: The oral glucose tolerance test (OGTT) measures how efficiently the body
  clears a standardized glucose load from the blood over time. After an overnight
  fast, plasma glucose is measured at baseline and again two hours after drinking
  a 75 g glucose solution. It is used to diagnose diabetes, prediabetes, and gestational
  diabetes.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: itest46e8e9ab
id: oral_glucose_tolerance_test
permalink: /garden/itest46e8e9ab/labtest/oral-glucose-tolerance-test/
provenance: curated
slug: oral-glucose-tolerance-test
source: Manual
tags:
- labtest
- diabetes
- glucose_metabolism
templateEngineOverride: njk
title: oral_glucose_tolerance_test
type: labtest
updated: '2026-08-06T00:21:00.371827Z'
---

{% raw %}
<h1>Oral Glucose Tolerance Test (OGTT)</h1>
<h2>Overview</h2>
<p>The oral glucose tolerance test (OGTT) assesses the body's ability to dispose of an ingested glucose load. After an overnight fast, a baseline venous plasma glucose sample is drawn; the patient then drinks a solution containing 75 g of anhydrous glucose (or a weight-based dose in children), and plasma glucose is measured again at 2 hours. Some protocols add a 1-hour draw, and the gestational diabetes screen uses a 1-, 2-, and sometimes 3-hour series.</p>
<p>OGTT is ordered when fasting glucose or HbA1c are equivocal, to confirm impaired glucose tolerance, and as the standard screen for gestational diabetes in pregnancy. Because it directly probes post-load glucose handling, it can detect early dysglycemia that fasting measures miss.</p>
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
<td>Normal (2-hour plasma glucose)</td>
<td>&lt; 140 mg/dL (&lt; 7.8 mmol/L)</td>
</tr>
<tr>
<td>Impaired glucose tolerance</td>
<td>140-199 mg/dL (7.8-11.0 mmol/L)</td>
</tr>
<tr>
<td>Diabetes (2-hour)</td>
<td>&gt;= 200 mg/dL (&gt;= 11.1 mmol/L)</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A 2-hour value at or above 200 mg/dL confirms diabetes mellitus, while values of 140-199 mg/dL indicate impaired glucose tolerance (prediabetes), a state of elevated cardiovascular and progression risk. The test is the diagnostic standard for gestational diabetes, where lower pregnancy-specific thresholds apply. OGTT is more sensitive than fasting glucose for detecting post-prandial dysglycemia but is less reproducible and more time-consuming.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itest46e8e9ab/condition/prediabetes/" class="internal-link">Prediabetes</a><br />
ASSOCIATED_WITH::<a href="/garden/itest46e8e9ab/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a><br />
USED_FOR::<a href="/garden/itest46e8e9ab/condition/diabetes/" class="internal-link">Diabetes</a><br />
USED_FOR::<a href="/garden/itest46e8e9ab/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a><br />
USED_FOR::<a href="/garden/itest46e8e9ab/condition/gestational-diabetes/" class="internal-link">Gestational Diabetes</a><br />
RELATED::<a href="/garden/itest46e8e9ab/metabolite/glucose/" class="internal-link">glucose</a><br />
RELATED::<a href="/garden/itest46e8e9ab/labtest/fasting-glucose/" class="internal-link">fasting_glucose</a></p>
<h2>References</h2>
<ul>
<li>American Diabetes Association. <em>Diabetes Care.</em> 2024 -- Standards of Care in Diabetes: Classification and Diagnosis of Diabetes (PMID: 38078589)</li>
<li>Metzger BE et al. <em>N Engl J Med.</em> 2008 -- Hyperglycemia and adverse pregnancy outcomes (HAPO) study, basis for OGTT-based gestational diabetes thresholds (PMID: 18463375)</li>
</ul>

{% endraw %}