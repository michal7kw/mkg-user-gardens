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
    localized_name: complemento C3
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
    localized_name: składowa C3 dopełniacza
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
    localized_name: Complement C3
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
description: Complement C3 measures the serum level of the C3 protein, a central component
  of the complement cascade. Low levels indicate complement consumption and are used
  to assess and monitor immune-complex and autoimmune diseases such as lupus.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itest542bad04
id: labtest_complement_c3
permalink: /garden/itest542bad04/labtest/complement-c3/
provenance: curated
slug: complement-c3
source: Manual
tags:
- labtest
- autoimmune
- complement
- inflammation
templateEngineOverride: njk
title: complement_c3
type: labtest
updated: '2026-08-06T03:13:43.482480Z'
---

{% raw %}
<h1>Complement C3</h1>
<h2>Overview</h2>
<p>Complement C3 is a quantitative serum measurement of the C3 protein, the most abundant complement component and the convergence point of the classical, alternative, and lectin activation pathways. The test is performed on a serum sample from venipuncture, typically by nephelometry or turbidimetry.</p>
<p>C3 is ordered, usually alongside C4, to evaluate suspected complement-mediated or immune-complex disease. Because C3 is consumed when the complement cascade is activated, a low level reflects ongoing activation and is used to support diagnosis and to track disease activity in conditions such as systemic lupus erythematosus and certain forms of glomerulonephritis.</p>
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
<td>Adult reference</td>
<td>90-180 mg/dL (method-dependent)</td>
</tr>
<tr>
<td>Low (consumption)</td>
<td>&lt; 90 mg/dL</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Low C3 indicates complement consumption, seen in active immune-complex disease such as lupus (especially lupus nephritis), post-infectious and membranoproliferative glomerulonephritis, and cryoglobulinemia. Falling C3 in a known lupus patient can signal a flare and prompt closer monitoring or treatment. As an acute-phase reactant, C3 may be normal or even elevated in nonspecific inflammation, so results are interpreted together with C4 and the clinical picture.</p>
<h2>Relationships</h2>
<h3>Measures</h3>
<p>MEASURES::<a href="/garden/itest542bad04/labtest/complement-c3/" class="internal-link">Complement C3</a><br />
ASSOCIATED_WITH::<a href="/garden/itest542bad04/condition/lupus-nephritis/" class="internal-link">Lupus Nephritis</a><br />
ASSOCIATED_WITH::<a href="/garden/itest542bad04/condition/systemic-lupus-erythematosus/" class="internal-link">Systemic Lupus Erythematosus</a><br />
ASSOCIATED_WITH::<a href="/garden/itest542bad04/condition/glomerulonephritis/" class="internal-link">Glomerulonephritis</a><br />
ASSOCIATED_WITH::<a href="/garden/itest542bad04/condition/autoimmune-disease/" class="internal-link">Autoimmune Disease</a><br />
RELATED::<a href="/garden/itest542bad04/labtest/complement-component-c4a/" class="internal-link">complement_component_c4a</a></p>
<h2>References</h2>
<ul>
<li>Walport MJ. <em>N Engl J Med.</em> 2001 -- Complement. First of two parts (PMID: 11297707)</li>
<li>Ricklin D, et al. <em>Nat Immunol.</em> 2010 -- Complement: a key system for immune surveillance and homeostasis (PMID: 20720586)</li>
</ul>

{% endraw %}