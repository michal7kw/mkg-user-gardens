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
    - description: Free SSN colorectal-cancer screening (FIT) for the 50-69 / 50-74
        age cohort
      type: population_screening
    last_verified: 2026-06
    localized_name: sangue occulto nelle feci (FIT/SOF)
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
    exemptions:
    - description: FIT is the basis of Poland's organized colorectal-cancer screening
        programme (free to eligible-age adults)
      type: population_screening
    last_verified: 2026-06
    localized_name: krew utajona w kale (FIT)
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
    exemptions:
    - description: Free NHS bowel-cancer screening (FIT home kit) for eligible age
        cohorts
      type: population_screening
    last_verified: 2026-06
    localized_name: Faecal Occult Blood / FIT (FIT-DG)
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
description: The fecal occult blood test detects small, non-visible amounts of blood
  in stool. The fecal immunochemical test (FIT) uses antibodies specific to human
  hemoglobin, while older guaiac-based tests (gFOBT) detect heme peroxidase activity.
  It is a primary noninvasive screening tool for colorectal cancer.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itestfdac7513
id: fecal_occult_blood
permalink: /garden/itestfdac7513/labtest/fecal-occult-blood/
provenance: curated
slug: fecal-occult-blood
source: Manual
tags:
- labtest
- stool
- colorectal_screening
templateEngineOverride: njk
title: fecal_occult_blood
type: labtest
updated: '2026-08-05T23:56:51.330314Z'
---

{% raw %}
<h1>Fecal Occult Blood Test (FOBT/FIT)</h1>
<h2>Overview</h2>
<p>The fecal occult blood test identifies hidden blood in stool that is not visible to the eye. The modern fecal immunochemical test (FIT) uses antibodies against human globin and is specific for lower gastrointestinal bleeding, requiring no dietary or medication restrictions. The older guaiac-based test (gFOBT) detects heme peroxidase activity and can react to dietary peroxidases, so it requires dietary preparation. Patients collect a small stool sample at home.</p>
<p>It is most widely ordered as an annual or biennial population screen for colorectal cancer in average-risk adults, and is also used to investigate suspected gastrointestinal bleeding and unexplained iron-deficiency anemia. A positive result is followed by colonoscopy.</p>
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
<td>FIT / gFOBT result</td>
<td>Negative</td>
</tr>
<tr>
<td>Positive (FIT, common cutoff)</td>
<td>&gt;=20 ug hemoglobin/g feces</td>
</tr>
</tbody>
</table>
<p>(Ranges/interpretation are approximate and lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A positive result signals bleeding somewhere in the gastrointestinal tract and, in the screening context, raises concern for colorectal adenomas or carcinoma, mandating diagnostic colonoscopy. Programmatic FIT/FOBT screening reduces colorectal cancer mortality. Outside screening, occult blood can indicate peptic ulcer disease, inflammatory bowel disease, angiodysplasia, or other lesions. A negative test does not exclude intermittent bleeding, so repeated or alternative testing may be needed.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itestfdac7513/condition/colorectal-neoplasms/" class="internal-link">Colorectal Neoplasms</a><br />
RELATED::<a href="/garden/itestfdac7513/labtest/occult-blood-urine/" class="internal-link">occult_blood_urine</a></p>
<h2>References</h2>
<ul>
<li>Lin JS, Perdue LA, Henrikson NB, et al. <em>JAMA.</em> 2021 -- Screening for colorectal cancer: updated evidence report for the USPSTF (PMID: 34003219)</li>
</ul>

{% endraw %}