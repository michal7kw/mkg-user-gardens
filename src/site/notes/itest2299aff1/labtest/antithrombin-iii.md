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
    localized_name: antitrombina III (AT III)
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
    localized_name: antytrombina III
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
    localized_name: Antithrombin III
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
description: Antithrombin III (AT III) measures the activity or antigen level of antithrombin,
  the principal natural inhibitor of thrombin and factor Xa. It is used to investigate
  hereditary or acquired thrombophilia and to explain heparin resistance. Reduced
  activity predisposes to venous thromboembolism.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: itest2299aff1
id: antithrombin_iii
permalink: /garden/itest2299aff1/labtest/antithrombin-iii/
provenance: curated
slug: antithrombin-iii
source: Manual
tags:
- labtest
- coagulation
- thrombophilia
- anticoagulant
templateEngineOverride: njk
title: antithrombin_iii
type: labtest
updated: '2026-08-06T01:39:29.417856Z'
---

{% raw %}
<h1>Antithrombin III</h1>
<h2>Overview</h2>
<p>Antithrombin III is the main physiological inhibitor of the coagulation cascade. It neutralizes thrombin (factor IIa) and factor Xa, and to a lesser extent factors IXa, XIa, and XIIa, an action that is greatly accelerated by heparin. The test is reported as functional (activity) or antigen levels, with the functional assay preferred because it detects both quantitative (type I) and qualitative (type II) deficiencies. Samples are drawn into a sodium citrate (blue-top) tube and analyzed on platelet-poor plasma.</p>
<p>Antithrombin III testing is ordered to evaluate unexplained or recurrent venous thromboembolism, a family history of thrombophilia, and otherwise unexplained heparin resistance (since heparin requires antithrombin to act). Levels are also reduced in liver disease, nephrotic syndrome, disseminated intravascular coagulation, and during acute thrombosis, so testing is generally deferred until the patient is stable and off anticoagulants where feasible.</p>
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
<td>Adult functional activity</td>
<td>~80-120% of normal pooled plasma</td>
</tr>
<tr>
<td>Deficiency (heterozygous)</td>
<td>typically ~40-60%</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method/reagent-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Reduced antithrombin III activity reflects either an inherited deficiency or acquired consumption/loss and is associated with an increased risk of venous thrombosis. Inherited deficiency is one of the more thrombogenic of the common thrombophilias. Acquired low levels occur with hepatic synthetic failure, urinary loss in nephrotic syndrome, consumption in DIC, and heparin therapy. Because heparin acts through antithrombin, severe deficiency can manifest as apparent heparin resistance, sometimes requiring antithrombin concentrate.</p>
<h2>Relationships</h2>
<p>ASSOCIATED_WITH::<a href="/garden/itest2299aff1/condition/venous-thromboembolism/" class="internal-link">Venous Thromboembolism</a><br />
ASSOCIATED_WITH::<a href="/garden/itest2299aff1/condition/liver-disease/" class="internal-link">Liver Disease</a></p>
<h2>References</h2>
<ul>
<li>Patnaik MM, Moll S. Inherited antithrombin deficiency: a review. <em>Haemophilia.</em> 2008 (PMID: 18819499)</li>
<li>Egeberg O. Inherited antithrombin deficiency causing thrombophilia. <em>Thromb Diath Haemorrh.</em> 1965 (PMID: 14347873)</li>
</ul>

{% endraw %}