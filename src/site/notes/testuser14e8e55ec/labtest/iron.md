---
confidence_score: 0.0
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
    last_verified: 2026-04
    localized_name: sideremia
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
    last_verified: 2026-04
    localized_name: żelazo (Fe)
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
    last_verified: 2026-04
    localized_name: Iron (Serum Iron)
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
created: 2026-01-18T16:02:30+0000
description: Iron is a mineral the body uses to make hemoglobin, which helps red blood
  cells carry oxygen in the blood to maintain energy and health. Testing iron can
  show if levels are too low (leading to anemia with tiredness and weakness) or too
  high (which can damage organs and raise diabetes risk).
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: testuser14e8e55ec
id: fh-iron
permalink: /garden/testuser14e8e55ec/labtest/iron/
provenance: curated
slug: iron
source: Manual
tags:
- labtest
- functional-medicine
- function-health
templateEngineOverride: njk
title: iron
type: labtest
updated: '2026-08-05T21:52:53.606785Z'
---

{% raw %}
<h1>Iron</h1>
<h2>Overview</h2>
<p>Iron is a mineral the body uses to make hemoglobin, which helps red blood cells carry oxygen in the blood to maintain energy and health. Testing iron can show if levels are too low (leading to anemia with tiredness and weakness) or too high (which can damage organs and raise diabetes risk).</p>
<p><strong>Evidence Level:</strong> ⭐⭐⭐ (3/5)</p>
<h2>Test Information</h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Category</strong></td>
<td>Functional Medicine</td>
</tr>
<tr>
<td><strong>Subcategory</strong></td>
<td>Nutrient Panel</td>
</tr>
<tr>
<td><strong>Test Type</strong></td>
<td>Standard</td>
</tr>
<tr>
<td><strong>Sample Type</strong></td>
<td>Blood</td>
</tr>
<tr>
<td><strong>Collection Method</strong></td>
<td>Venipuncture</td>
</tr>
<tr>
<td><strong>Turnaround Time</strong></td>
<td>3-7 days</td>
</tr>
<tr>
<td><strong>Price Range</strong></td>
<td>$null-$null</td>
</tr>
<tr>
<td><strong>HSA Eligible</strong></td>
<td>✅ Yes</td>
</tr>
<tr>
<td><strong>FSA Eligible</strong></td>
<td>✅ Yes</td>
</tr>
</tbody>
</table>
<h2>Recommended For</h2>
<h3>Supplement Monitoring</h3>
<p>No specific supplement monitoring recommendations.</p>
<h3>Conditions</h3>
<p>General health screening.</p>
<h2>Reference Ranges</h2>
<p>Reference ranges vary by laboratory and testing method. Consult your healthcare provider for interpretation.</p>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/testuser14e8e55ec/clinicalpattern/chronic-inflammation/" class="internal-link">Chronic Inflammation</a><br />
RELATED::<br />
RELATED::<a href="/garden/testuser14e8e55ec/condition/anemia/" class="internal-link">Anemia</a><br />
RELATED::<a href="/garden/testuser14e8e55ec/condition/liver-disease/" class="internal-link">Liver Disease</a><br />
RELATED::<a href="/garden/testuser14e8e55ec/clinicalpattern/iron-deficiency/" class="internal-link">Iron Deficiency</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Iron Overload Hemochromatosis Or Excess Supplementation</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser14e8e55ec/clinicalpattern/iron-deficiency/" class="internal-link">Iron Deficiency</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser14e8e55ec/clinicalpattern/chronic-inflammation/" class="internal-link">Chronic Inflammation</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser14e8e55ec/condition/liver-disease/" class="internal-link">Liver Disease</a></p>
<h3>May Detect</h3>
<p>MAY_DETECT::<a href="/garden/testuser14e8e55ec/clinicalpattern/chronic-inflammation/" class="internal-link">Chronic Inflammation</a><br />
MAY_DETECT::<a href="/garden/testuser14e8e55ec/condition/liver-disease/" class="internal-link">Liver Disease</a></p>
<h3>Included In</h3>
<p>INCLUDED_IN::</p>
<h2>Notes</h2>
<ul>
<li>Results should be interpreted by a qualified healthcare provider</li>
<li>Reference ranges may vary by laboratory</li>
<li>Individual factors (age, sex, health status) affect interpretation</li>
</ul>
<hr />
<p><em>Last Updated: 2026-03-11T13:47:12.889827+00:00</em></p>

{% endraw %}