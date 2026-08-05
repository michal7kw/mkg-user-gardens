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
    localized_name: anticorpi anti-Toxoplasma
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
    - description: Routinely included free in antenatal screening; otherwise private
        for self-requested checks
      type: pregnancy
    last_verified: 2026-06
    localized_name: przeciwciała Toxoplasma gondii (toksoplazmoza)
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
    localized_name: Toxoplasma Antibodies
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
description: Toxoplasma gondii antibody testing measures IgM and IgG antibodies against
  the parasite Toxoplasma gondii to detect current or past infection. It is most often
  ordered in pregnancy and in immunocompromised patients. IgG avidity helps date a
  recent infection.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: testuser19c6540a3
id: toxoplasma_antibodies
permalink: /garden/testuser19c6540a3/labtest/toxoplasma-antibodies/
provenance: curated
slug: toxoplasma-antibodies
source: Manual
tags:
- labtest
- serology
- infectious
- parasitic
templateEngineOverride: njk
title: toxoplasma_antibodies
type: labtest
updated: '2026-08-05T02:07:18.099745Z'
---

{% raw %}
<h1>Toxoplasma gondii Antibodies</h1>
<h2>Overview</h2>
<p>Toxoplasma gondii antibody testing measures immunoglobulin M (IgM) and immunoglobulin G (IgG) against the intracellular protozoan parasite Toxoplasma gondii. IgM appears early in acute infection and IgG develops shortly after and persists for life. The test is performed on a venous blood sample by immunoassay; IgG avidity testing is frequently added because high avidity excludes a recently acquired infection.</p>
<p>Serology is ordered mainly to screen pregnant women (because primary maternal infection can be transmitted to the fetus), to evaluate suspected toxoplasmosis in immunocompromised patients (such as reactivation in HIV/AIDS), and to investigate lymphadenopathy or chorioretinitis. Infection is typically acquired from undercooked meat or contact with cat feces.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Result</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>IgM positive, IgG negative or low avidity</td>
<td>Acute / recent infection</td>
</tr>
<tr>
<td>IgG positive, IgM negative</td>
<td>Past (latent) infection, immune</td>
</tr>
<tr>
<td>IgM and IgG negative</td>
<td>No prior exposure (susceptible)</td>
</tr>
</tbody>
</table>
<p>(Interpretation is assay-dependent; qualitative or index values, and avidity thresholds, vary by platform.)</p>
<h2>Clinical Significance</h2>
<p>A positive IgG indicates prior exposure and generally lifelong immunity, with the parasite persisting as latent tissue cysts that can reactivate under immunosuppression. A positive IgM may indicate acute infection but is prone to false positives and prolonged persistence, so IgG avidity is used to confirm or exclude a recent (within months) primary infection — critical in pregnancy for assessing congenital toxoplasmosis risk. Seronegative pregnant women are counselled on prevention. Reactivation in immunocompromised patients can cause severe disease such as toxoplasmic encephalitis.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/testuser19c6540a3/condition/toxoplasmosis/" class="internal-link">Toxoplasmosis</a><br />
ASSOCIATED_WITH::<a href="/garden/testuser19c6540a3/condition/infections/" class="internal-link">Infections</a></p>
<h2>References</h2>
<ul>
<li>Montoya JG, Liesenfeld O. <em>Lancet.</em> 2004 -- review of toxoplasmosis, diagnosis, and serological interpretation (PMID: 15194258)</li>
<li>CDC. <em>About Toxoplasmosis — Diagnosis.</em> Centers for Disease Control and Prevention, 2024 -- IgM/IgG and avidity interpretation, screening in pregnancy and immunocompromise.</li>
</ul>

{% endraw %}