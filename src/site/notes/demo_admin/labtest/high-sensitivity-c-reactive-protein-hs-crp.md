---
aliases:
- high sensitivity c reactive protein hs crp
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
    last_verified: 2026-04
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
    last_verified: 2026-04
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
created: '2026-06-13T17:47:00.571330Z'
description: high-sen-sih-tiv see-ree-ak-tiv pro-teen (h-s c-r-p) Tested twice a year
  High-sensitivity C-reactive protein (hs-CRP) can reveal even small amounts of inflammation
  in the body, making it a powerful tool for understanding risk for diseases linked
  to long-term inflammation. Chronic inflammation is connected to nearly every major
  health problem—including heart disease (even before there are symptoms), type 2
  diabetes, high blood pressure, Alzheimer’s, depression, autoimmune conditions, and
  severe allergies like asthma. Elevated hs-CRP levels can signal higher risk for
  these issues, while normal results suggest lower risk, though the test does not
  show the exact cause of the inflammation.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: demo_admin
id: fh-high-sensitivity-c-reactive-protein-hs-crp
permalink: /garden/demo_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/
slug: high-sensitivity-c-reactive-protein-hs-crp
source: Manual
tags:
- labtest
templateEngineOverride: njk
title: high_sensitivity_c_reactive_protein_hs_crp
type: labtest
updated: '2026-06-13T17:47:00.571330Z'
---

{% raw %}
<h1>High-Sensitivity C-Reactive Protein (hs-CRP)</h1>
<h2>Overview</h2>
<p>high-sen-sih-tiv see-ree-ak-tiv pro-teen (h-s c-r-p) Tested twice a year High-sensitivity C-reactive protein (hs-CRP) can reveal even small amounts of inflammation in the body, making it a powerful tool for understanding risk for diseases linked to long-term inflammation. Chronic inflammation is connected to nearly every major health problem—including heart disease (even before there are symptoms), type 2 diabetes, high blood pressure, Alzheimer’s, depression, autoimmune conditions, and severe allergies like asthma. Elevated hs-CRP levels can signal higher risk for these issues, while normal results suggest lower risk, though the test does not show the exact cause of the inflammation.</p>
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
<p>RELATED::<a href="/garden/demo_admin/labtestpanel/genetic-heart-risks/" class="internal-link">genetic heart risks</a><br />
RELATED::<a href="/garden/demo_admin/condition/chronic-inflammation/" class="internal-link">Chronic Inflammation</a><br />
RELATED::<a href="/garden/demo_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a><br />
RELATED::<a href="/garden/demo_admin/condition/autoimmune-disease/" class="internal-link">Autoimmune Disease</a><br />
RELATED::<a href="/garden/demo_admin/labtestpanel/extended-immune-regulation/" class="internal-link">extended immune regulation</a><br />
RELATED::<a href="/garden/demo_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
RELATED::<a href="/garden/demo_admin/labtestpanel/extended-heart-metabolic/" class="internal-link">extended heart metabolic</a><br />
RELATED::<a href="/garden/demo_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Infection</a><br />
RELATED::<a href="/garden/demo_admin/labtestpanel/chronic-inflammatory-response-mold-response/" class="internal-link">chronic inflammatory response mold response</a></p>
<h3>May Detect</h3>
<p>MAY_DETECT::<a href="/garden/demo_admin/condition/chronic-inflammation/" class="internal-link">Chronic Inflammation</a><br />
MAY_DETECT::<a href="/garden/demo_admin/condition/autoimmune-disease/" class="internal-link">Autoimmune Disease</a><br />
MAY_DETECT::<a href="/garden/demo_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
MAY_DETECT::<a href="/garden/demo_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a></p>
<h3>Included In</h3>
<p>INCLUDED_IN::<a href="/garden/demo_admin/labtestpanel/genetic-heart-risks/" class="internal-link">genetic heart risks</a><br />
INCLUDED_IN::<a href="/garden/demo_admin/labtestpanel/extended-immune-regulation/" class="internal-link">extended immune regulation</a><br />
INCLUDED_IN::<a href="/garden/demo_admin/labtestpanel/extended-heart-metabolic/" class="internal-link">extended heart metabolic</a><br />
INCLUDED_IN::<a href="/garden/demo_admin/labtestpanel/chronic-inflammatory-response-mold-response/" class="internal-link">chronic inflammatory response mold response</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/demo_admin/condition/autoimmune-disease/" class="internal-link">Autoimmune Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/demo_admin/condition/chronic-inflammation/" class="internal-link">Chronic Inflammation</a></p>
<h2>Notes</h2>
<ul>
<li>Results should be interpreted by a qualified healthcare provider</li>
<li>Reference ranges may vary by laboratory</li>
<li>Individual factors (age, sex, health status) affect interpretation</li>
</ul>
<hr />
<p><em>Last Updated: 2026-03-11T13:47:04.694221+00:00</em></p>

{% endraw %}