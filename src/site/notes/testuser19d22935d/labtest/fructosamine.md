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
    localized_name: fruttosamina
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
    last_verified: 2026-06
    localized_name: fruktozamina
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
    localized_name: Fructosamine
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
description: Fructosamine measures glycated serum proteins, chiefly albumin, reflecting
  average blood glucose over the preceding 2-3 weeks. It is a shorter-term glycemic
  marker than HbA1c and does not require fasting. It is useful when HbA1c is unreliable,
  such as in hemoglobinopathies or rapidly changing glycemic control.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: testuser19d22935d
id: fructosamine
permalink: /garden/testuser19d22935d/labtest/fructosamine/
provenance: curated
slug: fructosamine
source: Manual
tags:
- labtest
- diabetes
- glucose_metabolism
templateEngineOverride: njk
title: fructosamine
type: labtest
updated: '2026-08-06T02:07:15.805084Z'
---

{% raw %}
<h1>Fructosamine</h1>
<h2>Overview</h2>
<p>Fructosamine is a measure of glycated serum proteins, predominantly glycated albumin, formed by the non-enzymatic attachment of glucose to protein amino groups. Because serum albumin turns over faster than red blood cells, fructosamine reflects mean glycemia over roughly the prior 2-3 weeks rather than the 2-3 months captured by HbA1c. The test is performed on a venous serum sample and does not require fasting.</p>
<p>Fructosamine is ordered when a shorter glycemic window is clinically useful, for example to gauge the recent effect of a medication change, or when HbA1c is unreliable, such as in hemoglobinopathies, hemolytic anemia, recent transfusion, or pregnancy. Results are influenced by serum protein concentration and albumin turnover.</p>
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
<td>Typical adult reference</td>
<td>200-285 umol/L</td>
</tr>
<tr>
<td>Good glycemic control (diabetic)</td>
<td>&lt; ~300 umol/L (method-dependent)</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Elevated fructosamine indicates higher average glucose over the preceding weeks and supports the diagnosis or monitoring of diabetes when HbA1c is uninterpretable. Falsely low values occur with hypoalbuminemia, nephrotic syndrome, or conditions that shorten protein half-life, while elevated total protein can raise results. It is most valuable as a complement to HbA1c when a recent, fast-responding glycemic readout is needed.</p>
<h2>Relationships</h2>
<p>ASSOCIATED_WITH::<a href="/garden/testuser19d22935d/condition/prediabetes/" class="internal-link">Prediabetes</a><br />
ASSOCIATED_WITH::<a href="/garden/testuser19d22935d/condition/diabetes/" class="internal-link">Diabetes</a><br />
RELATED::<a href="/garden/testuser19d22935d/labtest/hba1c/" class="internal-link">hba1c</a><br />
RELATED::<a href="/garden/testuser19d22935d/metabolite/glucose/" class="internal-link">glucose</a></p>
<h2>References</h2>
<ul>
<li>American Diabetes Association. <em>Diabetes Care.</em> 2024 -- Standards of Care in Diabetes: Glycemic targets and assessment (PMID: 38078592)</li>
<li>Armbruster DA. <em>Clin Chem.</em> 1987 -- Fructosamine: structure, analysis, and clinical usefulness (PMID: 3319287)</li>
</ul>

{% endraw %}