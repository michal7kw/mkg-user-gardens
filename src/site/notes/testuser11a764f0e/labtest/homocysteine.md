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
    localized_name: omocisteina
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
      - Order online from a private lab (not on NFZ POZ list)
      - Pay out-of-pocket
      type: private_walk_in
    coverage_tier: private_only_low_cost
    exemptions: []
    last_verified: 2026-04
    localized_name: homocysteina
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
      - Not routinely on the NHS GP-orderable list
      - Order at a private lab (TDL, Nuffield, Medichecks, etc.)
      type: private_walk_in
    coverage_tier: private_only_moderate
    exemptions: []
    last_verified: 2026-04
    localized_name: Homocysteine
    typical_providers:
    - coverage_area: London
      name: TDL (The Doctors Laboratory)
      type: private_walk_in
      url: https://www.tdlpathology.com
    - coverage_area: UK national
      name: Nuffield Health
      type: private_walk_in
      url: https://www.nuffieldhealth.com
created: 2025-12-10T09:07:57+0000
description: Amino acid linked to cardiovascular disease and B-vitamin deficiency.
  Elevated levels associated with increased CVD risk.
dg-home: false
dg-publish: true
evidence_level: 0
gardenUsername: testuser11a764f0e
id: test-homocysteine-001
permalink: /garden/testuser11a764f0e/labtest/homocysteine/
provenance: curated
slug: homocysteine
source: Manual
tags:
- labtest
templateEngineOverride: njk
title: homocysteine
type: labtest
updated: '2026-08-20T07:48:23.605298Z'
---

{% raw %}
<h1>homocysteine</h1>
<h2>Overview</h2>
<p>Amino acid linked to cardiovascular disease and B-vitamin deficiency. Elevated levels associated with increased CVD risk.</p>
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
<td></td>
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
<p>MEASURES::<a href="/garden/testuser11a764f0e/labtest/homocysteine/" class="internal-link">Homocysteine</a></p>
<h3>Enriched</h3>
<p>INDICATES::<a href="/garden/testuser11a764f0e/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
INDICATES::<a href="/garden/testuser11a764f0e/condition/b-vitamin-deficiency/" class="internal-link">B Vitamin Deficiency</a></p>
<h2>Notes</h2>
<ul>
<li>Results should be interpreted by a qualified healthcare provider</li>
<li>Reference ranges may vary by laboratory</li>
<li>Individual factors (age, sex, health status) affect interpretation</li>
</ul>
<hr />
<p><em>Last Updated: 2026-03-11T13:47:03.601697+00:00</em></p>

{% endraw %}