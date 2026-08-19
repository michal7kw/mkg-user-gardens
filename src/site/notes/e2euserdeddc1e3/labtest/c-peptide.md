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
    last_verified: 2026-05
    localized_name: peptide C
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
      - Not routinely orderable at POZ level
      - NFZ-funded via specialist (endokrynolog/ginekolog) referral
      - Otherwise order at a private lab and pay out-of-pocket
      type: private_walk_in
    coverage_tier: private_only_low_cost
    exemptions:
    - description: NFZ funding requires a specialist referral; widely available cheaply
        at private labs
      type: specialist_referral_required
    last_verified: 2026-05
    localized_name: peptyd C
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
    localized_name: C-Peptide
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
created: 2026-02-07T00:00:00+0000
description: C-Peptide test. Measures endogenous insulin production by quantifying
  the connecting peptide released during proinsulin cleavage. Used to differentiate
  Type 1 from Type 2 diabetes and evaluate beta-cell function.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: e2euserdeddc1e3
id: test-c-peptide-001
permalink: /garden/e2euserdeddc1e3/labtest/c-peptide/
provenance: curated
slug: c-peptide
source: Manual
tags:
- labtest
templateEngineOverride: njk
title: c_peptide
type: labtest
updated: '2026-08-19T19:12:40.092441Z'
---

{% raw %}
<h1>C-Peptide</h1>
<h2>Overview</h2>
<p>C-Peptide test. Measures endogenous insulin production by quantifying the connecting peptide released during proinsulin cleavage. Used to differentiate Type 1 from Type 2 diabetes and evaluate beta-cell function.</p>
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
<td>Metabolic Panel</td>
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
<h2>Fasting Requirements</h2>
<p>⚠️ <strong>Fasting Required</strong></p>
<ul>
<li>Fast for <strong>null hours</strong> before the test</li>
<li>Water is generally permitted during fasting</li>
<li>Take medications as usual unless advised otherwise by your provider</li>
</ul>
<h2>Biomarkers Measured</h2>
<p>This test measures the following biomarkers:</p>
<ul>
<li><a href="/garden/e2euserdeddc1e3/labtest/c-peptide/" class="internal-link">c peptide</a></li>
</ul>
<h2>Recommended For</h2>
<h3>Supplement Monitoring</h3>
<p>No specific supplement monitoring recommendations.</p>
<h3>Conditions</h3>
<p>General health screening.</p>
<h2>Reference Ranges</h2>
<p>Reference ranges vary by laboratory and testing method. Consult your healthcare provider for interpretation.</p>
<h2>Relationships</h2>
<h3>Measures</h3>
<p>MEASURES::<a href="/garden/e2euserdeddc1e3/biomarker/c-peptide/" class="internal-link">C-Peptide</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euserdeddc1e3/condition/diabetes/" class="internal-link">Diabetes</a><br />
RELATED::<a href="/garden/e2euserdeddc1e3/labtest/insulin/" class="internal-link">insulin</a></p>
<h2>Notes</h2>
<ul>
<li>Results should be interpreted by a qualified healthcare provider</li>
<li>Reference ranges may vary by laboratory</li>
<li>Individual factors (age, sex, health status) affect interpretation</li>
</ul>
<hr />
<p><em>Last Updated: 2026-03-11T13:47:10.060044+00:00</em></p>

{% endraw %}