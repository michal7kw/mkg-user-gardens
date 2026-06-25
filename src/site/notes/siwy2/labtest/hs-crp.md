---
aliases:
- High-Sensitivity C-Reactive Protein
- hs-CRP
- high_sensitivity_c_reactive_protein_hs_crp
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
    last_verified: 2026-05
    localized_name: PCR (Proteina C Reattiva)
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
    last_verified: 2026-05
    localized_name: CRP
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
    last_verified: 2026-05
    localized_name: CRP / hs-CRP
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
created: '2026-06-21T16:03:53.980734Z'
description: Sensitive marker of systemic inflammation. Important for cardiovascular
  risk stratification.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: siwy2
id: test-hscrp-001
permalink: /garden/siwy2/labtest/hs-crp/
slug: hs-crp
source: Manual
tags:
- labtest
templateEngineOverride: njk
title: hs_crp
type: labtest
updated: '2026-06-21T16:03:53.980734Z'
---

{% raw %}
<h1>hs-CRP (High-Sensitivity C-Reactive Protein)</h1>
<h2>Overview</h2>
<p>Sensitive marker of systemic inflammation. Important for cardiovascular risk stratification.</p>
<p><strong>Evidence Level:</strong> ⭐⭐⭐⭐⭐ (5/5)</p>
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
<td>Inflammation</td>
</tr>
<tr>
<td><strong>Subcategory</strong></td>
<td>Inflammation Markers</td>
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
<td>1-3 days</td>
</tr>
</tbody>
</table>
<h2>Biomarkers Measured</h2>
<p>This test measures the following biomarkers:</p>
<ul>
<li><a href="/garden/siwy2/labtest/hs-crp/" class="internal-link">Hs Crp</a></li>
</ul>
<h2>Recommended For</h2>
<h3>Supplement Monitoring</h3>
<p>No specific supplement monitoring recommendations.</p>
<h3>Conditions</h3>
<p>General health screening.</p>
<h2>Reference Ranges</h2>
<p>Reference ranges vary by laboratory and testing method. Consult your healthcare provider for interpretation.</p>
<h2>Relationships</h2>
<p>INDICATES::<a href="/garden/siwy2/condition/chronic-inflammation/" class="internal-link">Chronic Inflammation</a><br />
INDICATES::<a href="/garden/siwy2/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
ASSOCIATED_WITH::<a href="/garden/siwy2/condition/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/siwy2/labtest/hs-crp/" class="internal-link">Hs Crp</a></p>
<h2>Notes</h2>
<ul>
<li>Results should be interpreted by a qualified healthcare provider</li>
<li>Reference ranges may vary by laboratory</li>
<li>Individual factors (age, sex, health status) affect interpretation</li>
</ul>
<hr />
<p><em>Last Updated: 2026-03-11T13:46:55.672956+00:00</em></p>

{% endraw %}