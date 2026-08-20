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
    localized_name: coprocoltura / esame parassitologico delle feci
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
    - description: SANEPID carrier-state certification (e.g. food-handler 'książeczka')
        is typically paid out-of-pocket
      type: sanepid_carrier_testing
    last_verified: 2026-06
    localized_name: posiew kału / badanie kału na pasożyty
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
    localized_name: Stool Culture / Ova & Parasites
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
description: Stool culture and ova-and-parasite examination identify enteric bacterial
  pathogens and intestinal parasites in a stool sample. Cultures grow organisms such
  as Salmonella, Shigella, and Campylobacter, while microscopy or molecular panels
  detect protozoa and helminths. It is used to investigate infectious diarrhea.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: itestae1a96e2
id: stool_culture_parasites
permalink: /garden/itestae1a96e2/labtest/stool-culture-parasites/
provenance: curated
slug: stool-culture-parasites
source: Manual
tags:
- labtest
- stool
- gastrointestinal
- microbiology
templateEngineOverride: njk
title: stool_culture_parasites
type: labtest
updated: '2026-08-20T07:47:43.702908Z'
---

{% raw %}
<h1>Stool Culture &amp; Parasites</h1>
<h2>Overview</h2>
<p>This testing combines bacterial stool culture with an ova-and-parasite (O&amp;P) examination. Culture grows common enteric bacterial pathogens such as Salmonella, Shigella, Campylobacter, and certain Escherichia coli on selective media, followed by identification and susceptibility testing. The O&amp;P examination uses microscopy of concentrated and stained stool to detect protozoa (for example Giardia, Entamoeba, Cryptosporidium) and helminth eggs or larvae. Increasingly, multiplex molecular gastrointestinal panels supplement or replace traditional methods.</p>
<p>It is ordered for acute or persistent infectious diarrhea, particularly when symptoms are severe, bloody, prolonged, or follow travel, immunosuppression, or an outbreak. Multiple specimens collected on separate days improve sensitivity for intermittently shed parasites.</p>
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
<td>Bacterial culture</td>
<td>No enteric pathogens isolated</td>
</tr>
<tr>
<td>Ova and parasites</td>
<td>Negative (none seen)</td>
</tr>
</tbody>
</table>
<p>(Ranges/interpretation are approximate and lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A positive culture or parasite finding identifies the cause of infectious diarrhea, guiding targeted antimicrobial or antiparasitic therapy and public-health reporting for notifiable organisms. Negative results in persistent diarrhea redirect the workup toward inflammatory, malabsorptive, or functional causes such as inflammatory bowel disease or irritable bowel syndrome. Susceptibility data support stewardship, and outbreak isolates aid epidemiologic tracing.</p>
<h2>Relationships</h2>
<p>RELATED::<a href="/garden/itestae1a96e2/condition/irritable-bowel-syndrome/" class="internal-link">Irritable Bowel Syndrome</a><br />
RELATED::<a href="/garden/itestae1a96e2/labtest/fecal-calprotectin/" class="internal-link">fecal_calprotectin</a></p>
<h2>References</h2>
<ul>
<li>Shane AL, Mody RK, Crump JA, et al. <em>Clinical Infectious Diseases.</em> 2017 -- IDSA clinical practice guidelines for the diagnosis and management of infectious diarrhea (PMID: 29053792)</li>
</ul>

{% endraw %}