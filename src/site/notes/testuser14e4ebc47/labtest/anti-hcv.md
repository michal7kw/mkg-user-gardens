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
    - description: Free SSN HCV screening for the 1969-1989 birth cohort and other
        at-risk groups
      type: free_screening_cohort
    last_verified: 2026-05
    localized_name: anti-HCV
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
      - Not on the standard NFZ POZ list
      - Covered within the Moje Zdrowie programme (e-skierowanie through IKP)
      - Otherwise order at a private lab and pay out-of-pocket
      type: private_walk_in
    coverage_tier: private_only_low_cost
    exemptions:
    - description: Offered free as a risk-based test in the Moje Zdrowie preventive
        programme
      type: moje_zdrowie_covered
    last_verified: 2026-05
    localized_name: anty-HCV (przeciwciała przeciw HCV)
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
    exemptions:
    - description: Free NHS HCV self-test kits are available to order online for eligible
        at-risk groups
      type: free_self_test
    last_verified: 2026-05
    localized_name: Hepatitis C antibody (anti-HCV)
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
created: 2026-05-28T00:00:00+0000
description: Screening antibody test for hepatitis C virus (HCV) exposure. A reactive
  result indicates past or present infection and is confirmed with HCV RNA. Part of
  the risk-based panel in Poland's Moje Zdrowie preventive programme.
dg-home: false
dg-publish: true
evidence_level: 0
gardenUsername: testuser14e4ebc47
id: test-anti-hcv-001
permalink: /garden/testuser14e4ebc47/labtest/anti-hcv/
provenance: curated
slug: anti-hcv
source: Manual
tags:
- labtest
templateEngineOverride: njk
title: anti_hcv
type: labtest
updated: '2026-08-05T02:29:10.448767Z'
---

{% raw %}
<h1>anti_hcv</h1>
<h2>Overview</h2>
<p>Screening antibody test for hepatitis C virus (HCV) exposure. A reactive (positive) result indicates past or present infection and must be confirmed with an HCV RNA (PCR) test. Many infections are asymptomatic for years, so screening is a key part of preventive programmes.</p>
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
<td>Immune</td>
</tr>
<tr>
<td><strong>Subcategory</strong></td>
<td>Infectious disease screening</td>
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
</tbody>
</table>
<h2>Recommended For</h2>
<h3>Conditions</h3>
<p>Hepatitis C screening; pre-treatment evaluation of liver disease; risk-based screening (history of transfusion before screening era, injection exposure, elevated liver enzymes).</p>
<h2>Reference Ranges</h2>
<p>Reported as non-reactive (negative) or reactive (positive). Reactive results require HCV RNA confirmation. Reference interpretation varies by laboratory and assay.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/testuser14e4ebc47/condition/hepatitis-c/" class="internal-link">Hepatitis C</a></p>
<h3>Enriched</h3>
<p>ASSOCIATED_WITH::<a href="/garden/testuser14e4ebc47/organ/liver/" class="internal-link">Liver</a></p>
<h2>Notes</h2>
<ul>
<li>A reactive antibody result does not by itself confirm active infection — HCV RNA confirms.</li>
<li>In Poland, anti-HCV is one of the risk-based tests offered through the Moje Zdrowie preventive programme.</li>
<li>Results should be interpreted by a qualified healthcare provider.</li>
</ul>

{% endraw %}