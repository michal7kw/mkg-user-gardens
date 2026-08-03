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
    localized_name: urinocoltura
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
    localized_name: posiew moczu
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
    localized_name: Urine Culture (MSU)
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
description: A urine culture grows and identifies bacteria or yeast present in a urine
  sample to diagnose urinary tract infection. It quantifies the organism burden and
  includes antibiotic susceptibility testing to guide treatment. It is the diagnostic
  gold standard for UTI.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: layouttest
id: urine_culture
permalink: /garden/layouttest/labtest/urine-culture/
provenance: curated
slug: urine-culture
source: Manual
tags:
- labtest
- urine
- infection
- microbiology
templateEngineOverride: njk
title: urine_culture
type: labtest
updated: '2026-08-03T23:57:22.572307Z'
---

{% raw %}
<h1>Urine Culture</h1>
<h2>Overview</h2>
<p>A urine culture incubates a clean-catch midstream urine sample on growth media to detect, quantify, and identify uropathogens. Colony counts are reported in colony-forming units per milliliter (CFU/mL), and positive isolates undergo antimicrobial susceptibility testing to determine which antibiotics are effective. Proper collection technique minimizes skin and periurethral contamination.</p>
<p>It is ordered when urinary tract infection is suspected, especially in complicated, recurrent, or treatment-failing cases, in pregnancy, and before urologic procedures. Results typically take 24-48 hours, so empiric therapy is often started while awaiting the culture.</p>
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
<td>No growth / no significant growth</td>
<td>Negative</td>
</tr>
<tr>
<td>Significant bacteriuria (symptomatic)</td>
<td>&gt;=10^5 CFU/mL (lower thresholds with symptoms)</td>
</tr>
</tbody>
</table>
<p>(Ranges/interpretation are approximate and lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A significant pure growth of a single uropathogen (most commonly Escherichia coli) confirms urinary tract infection and directs targeted antibiotic therapy. Mixed flora at low counts usually indicates contamination. Asymptomatic bacteriuria is generally not treated except in pregnancy or before urologic surgery. The test is essential for managing recurrent and complicated UTIs and for antimicrobial stewardship.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/layouttest/condition/urinary-tract-infection/" class="internal-link">Urinary Tract Infection</a><br />
RELATED::<a href="/garden/layouttest/labtest/urinalysis/" class="internal-link">urinalysis</a><br />
RELATED::<a href="/garden/layouttest/labtest/bacteria-urine/" class="internal-link">bacteria_urine</a><br />
RELATED::<a href="/garden/layouttest/labtest/nitrite-urine/" class="internal-link">nitrite_urine</a></p>
<h2>References</h2>
<ul>
<li>Gupta K, Hooton TM, Naber KG, et al. <em>Clinical Infectious Diseases.</em> 2011 -- IDSA guidelines for treatment of acute uncomplicated cystitis and pyelonephritis (PMID: 21292654)</li>
</ul>

{% endraw %}