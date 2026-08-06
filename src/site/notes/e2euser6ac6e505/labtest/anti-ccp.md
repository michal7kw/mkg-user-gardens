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
    localized_name: anticorpi anti-CCP
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
    localized_name: przeciwciała anty-CCP
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
    localized_name: anti-CCP Antibodies
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
description: Anti-CCP (anti-cyclic citrullinated peptide) antibody testing detects
  autoantibodies against citrullinated proteins in serum. It is a highly specific
  marker for rheumatoid arthritis, aids early diagnosis, and helps predict erosive
  disease.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: e2euser6ac6e505
id: anti_ccp
permalink: /garden/e2euser6ac6e505/labtest/anti-ccp/
provenance: curated
slug: anti-ccp
source: Manual
tags:
- labtest
- autoimmune
- rheumatoid_arthritis
- autoantibody
templateEngineOverride: njk
title: anti_ccp
type: labtest
updated: '2026-08-06T00:17:29.467750Z'
---

{% raw %}
<h1>Anti-CCP Antibodies</h1>
<h2>Overview</h2>
<p>Anti-cyclic citrullinated peptide (anti-CCP) antibodies, also called anti-citrullinated protein antibodies (ACPA), target proteins that have undergone post-translational citrullination. The test is run on a serum sample from venipuncture, typically by enzyme immunoassay (ELISA) using second- or third-generation CCP substrates.</p>
<p>Anti-CCP is among the most specific serologic markers for rheumatoid arthritis (RA) and is part of the 2010 ACR/EULAR classification criteria. It is ordered when RA is suspected, particularly in early or undifferentiated arthritis, because it can be positive years before symptom onset and identifies patients at higher risk of progressive joint damage.</p>
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
<td>&lt; 20 U/mL (method-dependent)</td>
</tr>
<tr>
<td>Weak positive</td>
<td>20-39 U/mL</td>
</tr>
<tr>
<td>Positive</td>
<td>&gt;= 40 U/mL</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A positive anti-CCP result strongly supports a diagnosis of rheumatoid arthritis, with specificity generally exceeding 95%. High titers are associated with more aggressive, erosive disease and a worse prognosis, informing earlier and more intensive treatment. Anti-CCP and rheumatoid factor are frequently ordered together; anti-CCP offers superior specificity, while combined positivity increases diagnostic confidence.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/e2euser6ac6e505/condition/rheumatoid-arthritis/" class="internal-link">Rheumatoid Arthritis</a><br />
ASSOCIATED_WITH::<a href="/garden/e2euser6ac6e505/condition/autoimmune-disease/" class="internal-link">Autoimmune Disease</a><br />
RELATED::<a href="/garden/e2euser6ac6e505/labtest/rheumatoid-factor-rf/" class="internal-link">rheumatoid_factor_rf</a></p>
<h2>References</h2>
<ul>
<li>Schellekens GA, et al. <em>Arthritis Rheum.</em> 2000 -- The diagnostic properties of rheumatoid arthritis antibodies recognizing a cyclic citrullinated peptide (PMID: 10643697)</li>
<li>Nishimura K, et al. <em>Ann Intern Med.</em> 2007 -- Meta-analysis: diagnostic accuracy of anti-CCP antibody and rheumatoid factor for rheumatoid arthritis (PMID: 17548411)</li>
</ul>

{% endraw %}