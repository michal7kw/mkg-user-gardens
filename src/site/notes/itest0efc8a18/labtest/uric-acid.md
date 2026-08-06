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
    localized_name: acido urico
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
    localized_name: kwas moczowy
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
    localized_name: Uric Acid
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
created: '2026-01-19T08:30:05.565833+00:00'
description: Uric acid is a substance the body produces when breaking down certain
  foods and natural waste products. Testing uric acid can provide insight into kidney
  function and how well the body is processing waste. Imbalances may indicate an increased
  risk of gout or certain kidney problems.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: itest0efc8a18
id: fh-uric-acid
permalink: /garden/itest0efc8a18/labtest/uric-acid/
provenance: curated
slug: uric-acid
source: Manual
tags:
- labtest
templateEngineOverride: njk
title: uric_acid
type: labtest
updated: '2026-08-06T03:11:41.752333Z'
---

{% raw %}
<h1>Uric Acid</h1>
<h2>Overview</h2>
<p>Uric acid is a substance the body produces when breaking down certain foods and natural waste products. Testing uric acid can provide insight into kidney function and how well the body is processing waste. Imbalances may indicate an increased risk of gout or certain kidney problems.</p>
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
<td>Blood Panel</td>
</tr>
<tr>
<td><strong>Subcategory</strong></td>
<td>Null</td>
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
<td>null-null days</td>
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
<h3>Measures</h3>
<p>MEASURES::<a href="/garden/itest0efc8a18/labtest/uric-acid/" class="internal-link">Uric Acid</a></p>
<h3>Related</h3>
<p>RELATED::<a class="internal-link is-unresolved" href="/404">Gout</a><br />
RELATED::<a href="/garden/itest0efc8a18/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
RELATED::<a href="/garden/itest0efc8a18/condition/kidney-stones/" class="internal-link">Kidney Stones</a><br />
RELATED::<a href="/garden/itest0efc8a18/clinicalpattern/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a><br />
RELATED::<a href="/garden/itest0efc8a18/condition/chronic-kidney-disease/" class="internal-link">Chronic Kidney Disease</a></p>
<h3>May Detect</h3>
<p>MAY_DETECT::<a href="/garden/itest0efc8a18/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
MAY_DETECT::<a href="/garden/itest0efc8a18/condition/chronic-kidney-disease/" class="internal-link">Chronic Kidney Disease</a><br />
MAY_DETECT::<a href="/garden/itest0efc8a18/clinicalpattern/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a><br />
MAY_DETECT::<a href="/garden/itest0efc8a18/condition/kidney-stones/" class="internal-link">Kidney Stones</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/itest0efc8a18/condition/kidney-stones/" class="internal-link">Kidney Stones</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest0efc8a18/condition/chronic-kidney-disease/" class="internal-link">Chronic Kidney Disease</a></p>
<h2>Notes</h2>
<ul>
<li>Results should be interpreted by a qualified healthcare provider</li>
<li>Reference ranges may vary by laboratory</li>
<li>Individual factors (age, sex, health status) affect interpretation</li>
</ul>
<hr />
<p><em>Last Updated: 2026-03-11T13:47:02.957017+00:00</em></p>

{% endraw %}