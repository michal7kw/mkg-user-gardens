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
    localized_name: anti-HBs
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
    - description: Free with an occupational/post-vaccination referral; otherwise
        private for self-requested checks
      type: occupational_or_post_vaccination
    last_verified: 2026-06
    localized_name: przeciwciała anty-HBs
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
    localized_name: Hepatitis B Surface Antibody (anti-HBs)
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
description: Hepatitis B surface antibody (anti-HBs) is a blood test that measures
  antibodies against the hepatitis B surface antigen. Its presence indicates immunity
  to hepatitis B, acquired either through recovery from infection or vaccination.
  It is used to confirm protection and assess vaccine response.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: itest0dc5306e
id: anti_hbs
permalink: /garden/itest0dc5306e/labtest/anti-hbs/
provenance: curated
slug: anti-hbs
source: Manual
tags:
- labtest
- serology
- infectious
- hepatitis_b
- immunity
templateEngineOverride: njk
title: anti_hbs
type: labtest
updated: '2026-08-05T23:32:54.530980Z'
---

{% raw %}
<h1>Hepatitis B Surface Antibody (Anti-HBs)</h1>
<h2>Overview</h2>
<p>Anti-HBs is a protective antibody directed against the hepatitis B surface antigen (HBsAg). It is the antibody that confers immunity to hepatitis B virus (HBV). The test is performed on a venous blood sample by immunoassay and is reported either qualitatively (reactive/non-reactive) or quantitatively in mIU/mL, with a level of 10 mIU/mL or greater generally regarded as protective.</p>
<p>Anti-HBs is ordered to determine immune status after suspected exposure, to confirm response to hepatitis B vaccination, and as part of HBV serological panels to distinguish immunity from active infection. In recovery from acute infection, anti-HBs appears after HBsAg clears and persists, marking resolved infection with immunity.</p>
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
<td>&lt; 10 mIU/mL (non-reactive)</td>
<td>No / inadequate immunity; non-responder or never exposed/vaccinated</td>
</tr>
<tr>
<td>&gt;= 10 mIU/mL (reactive)</td>
<td>Protective immunity from prior infection or successful vaccination</td>
</tr>
</tbody>
</table>
<p>(Interpretation is assay-dependent; quantitative thresholds and qualitative index values vary by platform.)</p>
<h2>Clinical Significance</h2>
<p>A positive (protective) anti-HBs indicates immunity to HBV. Combined with negative HBsAg and positive anti-HBc it signals recovery from past natural infection; an isolated positive anti-HBs (with negative anti-HBc) reflects vaccine-induced immunity. A negative anti-HBs in a vaccinated person suggests a non-responder or waning titre and may prompt revaccination. It does not by itself diagnose active infection — HBsAg and anti-HBc are needed for full interpretation.</p>
<h2>Relationships</h2>
<p>ASSOCIATED_WITH::<a href="/garden/itest0dc5306e/condition/hepatitis-b/" class="internal-link">Hepatitis B</a><br />
ASSOCIATED_WITH::<a href="/garden/itest0dc5306e/organ/liver/" class="internal-link">Liver</a><br />
RELATED::<a href="/garden/itest0dc5306e/labtest/hbsag/" class="internal-link">hbsag</a></p>
<h2>References</h2>
<ul>
<li>WHO. <em>Hepatitis B fact sheet and guidelines on testing for hepatitis B.</em> World Health Organization, 2024 -- anti-HBs as marker of immunity and vaccine response.</li>
<li>Schillie S et al. <em>MMWR Recomm Rep.</em> 2018 -- CDC recommendations for hepatitis B vaccination and post-vaccination serologic testing (PMID: 29939980)</li>
</ul>

{% endraw %}