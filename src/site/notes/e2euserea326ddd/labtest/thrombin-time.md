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
    localized_name: tempo di trombina (TT)
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
    last_verified: 2026-06
    localized_name: czas trombinowy (TT)
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
    localized_name: Thrombin Time (TT)
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
description: Thrombin Time (TT) measures the time for plasma to clot after adding
  exogenous thrombin, assessing the final conversion of fibrinogen to fibrin. It is
  prolonged by low or dysfunctional fibrinogen and by thrombin inhibitors such as
  heparin or direct thrombin inhibitors.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: e2euserea326ddd
id: thrombin_time
permalink: /garden/e2euserea326ddd/labtest/thrombin-time/
provenance: curated
slug: thrombin-time
source: Manual
tags:
- labtest
- coagulation
- fibrinogen
- heparin_monitoring
templateEngineOverride: njk
title: thrombin_time
type: labtest
updated: '2026-08-05T02:38:32.289020Z'
---

{% raw %}
<h1>Thrombin Time</h1>
<h2>Overview</h2>
<p>Thrombin Time assesses the final common step of coagulation: the thrombin-mediated conversion of fibrinogen into a fibrin clot. A standardized amount of thrombin is added to platelet-poor citrated plasma and the clotting time is measured, bypassing the intrinsic and extrinsic pathways entirely. Because it isolates the fibrinogen-to-fibrin reaction, it is sensitive to both the quantity and the quality of fibrinogen and to any substance that inhibits thrombin. Blood is collected into a sodium citrate (blue-top) tube.</p>
<p>The test is clinically ordered to investigate a prolonged PT or APTT of unclear cause, to detect heparin contamination of a sample, to screen for dysfibrinogenemia or hypofibrinogenemia, and to assess elevated fibrin degradation products. It complements the reptilase time, which is insensitive to heparin and can distinguish heparin effect from a true fibrinogen abnormality.</p>
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
<td>Adult normal</td>
<td>~14-21 seconds (reagent-dependent)</td>
</tr>
<tr>
<td>Prolonged</td>
<td>greater than upper reference limit</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method/reagent-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A prolonged thrombin time indicates low fibrinogen (hypofibrinogenemia), abnormal fibrinogen (dysfibrinogenemia), the presence of thrombin inhibitors such as unfractionated heparin or direct thrombin inhibitors, or high levels of fibrin/fibrinogen degradation products as seen in disseminated intravascular coagulation. It is frequently used to confirm or exclude heparin as the cause of an otherwise unexplained prolonged APTT, and pairing it with a reptilase time helps separate heparin effect from intrinsic fibrinogen disorders.</p>
<h2>Relationships</h2>
<p>RELATED::<a href="/garden/e2euserea326ddd/labtest/fibrinogen/" class="internal-link">fibrinogen</a></p>
<h2>References</h2>
<ul>
<li>Marlar RA, et al. Laboratory evaluation of prolonged thrombin time and reptilase time. <em>Am J Clin Pathol.</em> 2017 (PMID: 28419183)</li>
<li>Ignjatovic V. Thrombin clotting time. <em>Methods Mol Biol.</em> 2013 (PMID: 23666707)</li>
</ul>

{% endraw %}