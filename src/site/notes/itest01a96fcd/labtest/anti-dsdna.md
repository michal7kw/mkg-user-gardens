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
    localized_name: anticorpi anti-dsDNA
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
    localized_name: przeciwciała anty-dsDNA
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
    localized_name: anti-dsDNA Antibodies
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
description: Anti-dsDNA antibody testing detects autoantibodies against double-stranded
  DNA in serum. It is a highly specific marker for systemic lupus erythematosus and
  is used to support diagnosis and to monitor disease activity, particularly lupus
  nephritis.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itest01a96fcd
id: anti_dsdna
permalink: /garden/itest01a96fcd/labtest/anti-dsdna/
provenance: curated
slug: anti-dsdna
source: Manual
tags:
- labtest
- autoimmune
- lupus
- autoantibody
templateEngineOverride: njk
title: anti_dsdna
type: labtest
updated: '2026-08-06T00:25:19.281517Z'
---

{% raw %}
<h1>Anti-dsDNA Antibodies</h1>
<h2>Overview</h2>
<p>Anti-double-stranded DNA (anti-dsDNA) antibodies are autoantibodies directed against native double-stranded DNA. The test is performed on a serum sample obtained by venipuncture, most commonly by enzyme immunoassay (ELISA), Crithidia luciliae indirect immunofluorescence (CLIFT), or the Farr radioimmunoassay, which differ in sensitivity and specificity.</p>
<p>Anti-dsDNA is one of the most specific serologic markers for systemic lupus erythematosus (SLE) and is included in classification criteria. Clinicians order it to support a diagnosis of SLE in patients with a positive ANA screen and to monitor disease activity, since rising titers can precede or accompany flares, especially renal involvement.</p>
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
<td>Negative</td>
<td>&lt; 30 IU/mL (method-dependent)</td>
</tr>
<tr>
<td>Borderline</td>
<td>30-75 IU/mL</td>
</tr>
<tr>
<td>Positive</td>
<td>&gt; 75 IU/mL</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Elevated anti-dsDNA antibodies strongly support a diagnosis of SLE, particularly when present at high titer, and high-avidity antibodies (Farr/CLIFT) correlate with lupus nephritis. Titers often track disease activity, so a rising level may signal an impending flare and prompt closer monitoring or treatment intensification. Low or undetectable levels do not exclude SLE, as some patients are persistently negative.</p>
<h2>Relationships</h2>
<p>ASSOCIATED_WITH::<a href="/garden/itest01a96fcd/condition/lupus-nephritis/" class="internal-link">Lupus Nephritis</a><br />
USED_FOR::<a href="/garden/itest01a96fcd/condition/systemic-lupus-erythematosus/" class="internal-link">Systemic Lupus Erythematosus</a><br />
ASSOCIATED_WITH::<a href="/garden/itest01a96fcd/condition/autoimmune-disease/" class="internal-link">Autoimmune Disease</a><br />
ASSOCIATED_WITH::<a href="/garden/itest01a96fcd/condition/glomerulonephritis/" class="internal-link">Glomerulonephritis</a><br />
RELATED::<a href="/garden/itest01a96fcd/labtest/antinuclear-antibodies-ana-screen/" class="internal-link">antinuclear_antibodies_ana_screen</a></p>
<h2>References</h2>
<ul>
<li>Kavanaugh AF, Solomon DH. <em>Arthritis Rheum.</em> 2002 -- Guidelines for clinical use of the antinuclear antibody test and tests for specific autoantibodies to nuclear antigens (PMID: 12115156)</li>
<li>Pisetsky DS. <em>Nat Rev Rheumatol.</em> 2017 -- Anti-DNA antibodies, quintessential biomarkers of SLE (PMID: 28148919)</li>
</ul>

{% endraw %}