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
    localized_name: reticolociti
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
    localized_name: retikulocyty
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
    localized_name: Reticulocyte Count
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
description: Reticulocytes are immature red blood cells released from the bone marrow.
  The reticulocyte count measures the rate of new red cell production and is used
  to classify anemias as hypo- or hyper-proliferative.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: e2euserdeddc1e3
id: reticulocytes
permalink: /garden/e2euserdeddc1e3/labtest/reticulocytes/
provenance: curated
slug: reticulocytes
source: Manual
tags:
- labtest
- hematology
- anemia
- bone_marrow
templateEngineOverride: njk
title: reticulocytes
type: labtest
updated: '2026-08-19T19:12:42.244377Z'
---

{% raw %}
<h1>Reticulocytes</h1>
<h2>Overview</h2>
<p>Reticulocytes are young, anucleate red blood cells that still contain residual ribosomal RNA, having been released from the bone marrow within roughly the previous 1-2 days. They are quantified on a peripheral blood EDTA sample, traditionally by supravital staining (e.g., new methylene blue) and now most commonly by automated flow-cytometry analyzers that report a percentage of red cells, an absolute count, and reticulocyte indices such as the immature reticulocyte fraction (IRF).</p>
<p>The reticulocyte count is ordered to assess the bone marrow's erythropoietic response. It is the single most useful test for distinguishing anemias caused by inadequate red cell production (low/inappropriately normal reticulocytes) from those caused by blood loss or accelerated red cell destruction (elevated reticulocytes), and it is used to monitor recovery of marrow function after treatment.</p>
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
<td>Adult relative count</td>
<td>~0.5-2.5% of red cells</td>
</tr>
<tr>
<td>Adult absolute count</td>
<td>~25-100 x10^9/L</td>
</tr>
<tr>
<td>Newborn (transient)</td>
<td>~2-6%</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>An elevated reticulocyte count (reticulocytosis) reflects increased erythropoiesis and is typical of hemolytic anemias, acute blood loss, and the appropriate response to iron, B12, or folate repletion. A low or inappropriately normal count in the setting of anemia indicates a hypoproliferative marrow, as seen in iron deficiency, aplastic anemia, marrow infiltration, chronic kidney disease (reduced erythropoietin), or untreated B12/folate deficiency. Because the percentage is influenced by the degree of anemia, it is often corrected (corrected reticulocyte count or reticulocyte production index). Serial measurements are widely used to confirm marrow recovery after chemotherapy, transplant, or initiation of hematinic therapy.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/e2euserdeddc1e3/condition/iron-deficiency-anemia/" class="internal-link">Iron Deficiency Anemia</a><br />
USED_FOR::<a href="/garden/e2euserdeddc1e3/condition/pernicious-anemia/" class="internal-link">Pernicious Anemia</a><br />
USED_FOR::<a href="/garden/e2euserdeddc1e3/condition/sickle-cell-disease/" class="internal-link">Sickle Cell Disease</a><br />
RELATED::<a href="/garden/e2euserdeddc1e3/labtest/complete-blood-count/" class="internal-link">complete_blood_count</a><br />
RELATED::<a href="/garden/e2euserdeddc1e3/labtest/hemoglobin/" class="internal-link">hemoglobin</a></p>
<h2>References</h2>
<ul>
<li>Piva E, Brugnara C, Spolaore F, Plebani M. Clinical utility of reticulocyte parameters. <em>Clin Lab Med.</em> 2015;35(1):133-163 -- review of reticulocyte indices in anemia evaluation (PMID: 25676377)</li>
</ul>

{% endraw %}