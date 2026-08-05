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
    localized_name: ANCA (anticorpi anti-citoplasma dei neutrofili)
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
    localized_name: przeciwciała ANCA
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
    localized_name: ANCA (Antineutrophil Cytoplasmic Antibodies)
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
description: ANCA testing detects antineutrophil cytoplasmic antibodies in serum,
  distinguishing cytoplasmic (c-ANCA/PR3) and perinuclear (p-ANCA/MPO) patterns. It
  is a key marker for ANCA-associated vasculitis and supports diagnosis and disease
  monitoring.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: testuser11765219c
id: anca
permalink: /garden/testuser11765219c/labtest/anca/
provenance: curated
slug: anca
source: Manual
tags:
- labtest
- autoimmune
- vasculitis
- autoantibody
templateEngineOverride: njk
title: anca
type: labtest
updated: '2026-08-05T02:24:03.095218Z'
---

{% raw %}
<h1>ANCA (Antineutrophil Cytoplasmic Antibodies)</h1>
<h2>Overview</h2>
<p>Antineutrophil cytoplasmic antibodies (ANCA) are autoantibodies directed against antigens in neutrophil cytoplasmic granules. Testing is performed on a serum sample from venipuncture and combines indirect immunofluorescence (IIF), which identifies a cytoplasmic (c-ANCA) or perinuclear (p-ANCA) staining pattern, with antigen-specific immunoassays for proteinase 3 (PR3) and myeloperoxidase (MPO).</p>
<p>ANCA is ordered when small-vessel vasculitis is suspected, for example in patients with pulmonary-renal syndromes, rapidly progressive glomerulonephritis, or otherwise unexplained multisystem inflammation. PR3-ANCA (c-ANCA) is associated with granulomatosis with polyangiitis, while MPO-ANCA (p-ANCA) is associated with microscopic polyangiitis and eosinophilic granulomatosis with polyangiitis.</p>
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
<td>IIF screen</td>
<td>Negative</td>
</tr>
<tr>
<td>PR3-ANCA</td>
<td>&lt; 20 U/mL (method-dependent)</td>
</tr>
<tr>
<td>MPO-ANCA</td>
<td>&lt; 20 U/mL (method-dependent)</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A positive ANCA result, especially when both IIF and antigen-specific assays agree, strongly supports a diagnosis of ANCA-associated vasculitis. PR3- and MPO-ANCA specificities help subclassify the syndrome and predict relapse patterns. Titers may correlate with disease activity in some patients, and a rising level can prompt closer monitoring, though treatment decisions are not based on serology alone. A negative result reduces but does not eliminate the likelihood of vasculitis.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/testuser11765219c/condition/granulomatosis-with-polyangiitis/" class="internal-link">Granulomatosis with Polyangiitis</a><br />
USED_FOR::<a href="/garden/testuser11765219c/condition/vasculitis/" class="internal-link">Vasculitis</a><br />
ASSOCIATED_WITH::<a href="/garden/testuser11765219c/condition/autoimmune-disease/" class="internal-link">Autoimmune Disease</a><br />
ASSOCIATED_WITH::<a href="/garden/testuser11765219c/condition/glomerulonephritis/" class="internal-link">Glomerulonephritis</a></p>
<h2>References</h2>
<ul>
<li>Jennette JC, et al. <em>Arthritis Rheum.</em> 2013 -- 2012 revised International Chapel Hill Consensus Conference Nomenclature of Vasculitides (PMID: 23045170)</li>
<li>Bossuyt X, et al. <em>Nat Rev Rheumatol.</em> 2017 -- Position paper: Revised 2017 international consensus on testing of ANCAs in granulomatosis with polyangiitis and microscopic polyangiitis (PMID: 28851952)</li>
</ul>

{% endraw %}