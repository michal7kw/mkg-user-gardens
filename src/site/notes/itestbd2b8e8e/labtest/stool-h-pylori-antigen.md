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
    localized_name: antigene fecale di H. pylori
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
    localized_name: antygen H. pylori w kale
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
    localized_name: Stool H. pylori Antigen
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
description: The stool H. pylori antigen test detects Helicobacter pylori antigens
  in a stool sample using an enzyme immunoassay. It is a noninvasive method to diagnose
  active infection and to confirm eradication after treatment. It is recommended for
  both initial diagnosis and post-therapy follow-up.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itestbd2b8e8e
id: stool_h_pylori_antigen
permalink: /garden/itestbd2b8e8e/labtest/stool-h-pylori-antigen/
provenance: curated
slug: stool-h-pylori-antigen
source: Manual
tags:
- labtest
- stool
- gastrointestinal
templateEngineOverride: njk
title: stool_h_pylori_antigen
type: labtest
updated: '2026-08-19T06:18:43.199953Z'
---

{% raw %}
<h1>Stool H. pylori Antigen</h1>
<h2>Overview</h2>
<p>The stool antigen test uses a monoclonal-antibody enzyme immunoassay to detect Helicobacter pylori antigens shed in feces, providing direct evidence of active infection from a single stool sample. Unlike serology, it does not remain positive after the bacterium is cleared, making it suitable for confirming cure. Recent proton-pump inhibitors, antibiotics, and bismuth can suppress antigen levels and cause false negatives, so these should be withheld before testing.</p>
<p>It is ordered to diagnose H. pylori in patients with dyspepsia or peptic ulcer disease (test-and-treat strategy) and, importantly, to confirm eradication at least four weeks after completing therapy. It is comparable in accuracy to the urea breath test and more convenient than endoscopic biopsy.</p>
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
<td>H. pylori antigen</td>
<td>Negative</td>
</tr>
<tr>
<td>Positive</td>
<td>Antigen detected (active infection)</td>
</tr>
</tbody>
</table>
<p>(Ranges/interpretation are approximate and lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A positive test indicates active H. pylori infection, a major cause of chronic gastritis, peptic and duodenal ulcer disease, and a risk factor for gastric malignancy, prompting eradication therapy. A negative post-treatment test confirms successful eradication. False negatives occur with recent acid-suppressing or antibiotic use, so timing relative to medications is critical for accurate interpretation.</p>
<h2>Relationships</h2>
<p>ASSOCIATED_WITH::<a href="/garden/itestbd2b8e8e/condition/gastritis/" class="internal-link">Gastritis</a><br />
ASSOCIATED_WITH::<a href="/garden/itestbd2b8e8e/microbe/helicobacter-pylori/" class="internal-link">Helicobacter pylori</a><br />
USED_FOR::<a href="/garden/itestbd2b8e8e/condition/peptic-ulcer/" class="internal-link">Peptic Ulcer</a><br />
USED_FOR::<a href="/garden/itestbd2b8e8e/condition/duodenal-ulcer/" class="internal-link">Duodenal Ulcer</a></p>
<h2>References</h2>
<ul>
<li>Chey WD, Leontiadis GI, Howden CW, Moss SF. <em>American Journal of Gastroenterology.</em> 2017 -- ACG clinical guideline: treatment of Helicobacter pylori infection (PMID: 28071659)</li>
</ul>

{% endraw %}