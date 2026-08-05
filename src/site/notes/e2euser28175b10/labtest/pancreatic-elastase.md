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
    localized_name: elastasi pancreatica fecale
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
      - NFZ funding via a gastroenterology specialist referral
      - OR pay out-of-pocket at a private lab
      type: specialist_referral
    coverage_tier: private_only_moderate
    exemptions:
    - description: NFZ funding requires a specialist referral; widely available cheaply
        at private labs
      type: specialist_referral_required
    last_verified: 2026-06
    localized_name: elastaza trzustkowa w kale
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
    localized_name: Faecal Pancreatic Elastase
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
description: Fecal pancreatic elastase-1 measures the concentration of a pancreas-specific
  enzyme in stool as a marker of exocrine pancreatic function. Low levels indicate
  exocrine pancreatic insufficiency. It is a noninvasive first-line test for malabsorption
  due to pancreatic disease.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: e2euser28175b10
id: pancreatic_elastase
permalink: /garden/e2euser28175b10/labtest/pancreatic-elastase/
provenance: curated
slug: pancreatic-elastase
source: Manual
tags:
- labtest
- stool
- pancreatic
templateEngineOverride: njk
title: pancreatic_elastase
type: labtest
updated: '2026-08-05T03:39:06.601416Z'
---

{% raw %}
<h1>Fecal Pancreatic Elastase</h1>
<h2>Overview</h2>
<p>Pancreatic elastase-1 is a proteolytic enzyme produced exclusively by the pancreas that passes through the gut largely undegraded, so its concentration in a single stool sample reflects pancreatic exocrine output. The test uses an enzyme immunoassay specific for human elastase, meaning enzyme replacement therapy does not interfere with the result. A formed (non-watery) stool sample improves accuracy, as dilution from diarrhea can falsely lower values.</p>
<p>It is ordered as a convenient first-line screen for exocrine pancreatic insufficiency in patients with chronic diarrhea, steatorrhea, unexplained weight loss, or malabsorption, and in conditions such as chronic pancreatitis and cystic fibrosis. It has largely replaced more cumbersome fecal fat quantification for initial assessment.</p>
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
<td>Normal</td>
<td>&gt;200 ug/g stool</td>
</tr>
<tr>
<td>Moderate insufficiency</td>
<td>100-200 ug/g stool</td>
</tr>
<tr>
<td>Severe insufficiency</td>
<td>&lt;100 ug/g stool</td>
</tr>
</tbody>
</table>
<p>(Ranges/interpretation are approximate and lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Reduced fecal elastase-1 indicates exocrine pancreatic insufficiency, supporting diagnoses such as chronic pancreatitis, cystic fibrosis, and pancreatic damage, and justifying pancreatic enzyme replacement therapy. Severe reduction (&lt;100 ug/g) is more specific than mild reduction, which can also occur with watery diarrhea or small-bowel disease. Normal values argue against significant pancreatic exocrine failure and redirect the malabsorption workup toward other causes.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/e2euser28175b10/condition/pancreatic-insufficiency/" class="internal-link">Pancreatic Insufficiency</a><br />
ASSOCIATED_WITH::<a href="/garden/e2euser28175b10/condition/pancreatitis/" class="internal-link">Pancreatitis</a><br />
RELATED::<a href="/garden/e2euser28175b10/condition/malnutrition-and-malabsorption/" class="internal-link">Malnutrition and Malabsorption</a></p>
<h2>References</h2>
<ul>
<li>Vanga RR, Tansel A, Sidiq S, et al. <em>Clinical Gastroenterology and Hepatology.</em> 2018 -- Diagnostic performance of fecal elastase-1 for exocrine pancreatic insufficiency: a systematic review and meta-analysis (PMID: 29481968)</li>
</ul>

{% endraw %}