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
    localized_name: TAS (titolo antistreptolisinico)
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
    localized_name: ASO (antystreptolizyna O)
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
    localized_name: Antistreptolysin O (ASO)
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
description: Antistreptolysin O (ASO) measures serum antibodies against streptolysin
  O, a toxin produced by group A streptococci. Elevated or rising titers provide evidence
  of recent streptococcal infection and support the diagnosis of post-streptococcal
  complications.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itest93a709e8
id: antistreptolysin_o
permalink: /garden/itest93a709e8/labtest/antistreptolysin-o/
provenance: curated
slug: antistreptolysin-o
source: Manual
tags:
- labtest
- infection
- streptococcal
- serology
templateEngineOverride: njk
title: antistreptolysin_o
type: labtest
updated: '2026-08-19T05:21:18.916189Z'
---

{% raw %}
<h1>Antistreptolysin O (ASO)</h1>
<h2>Overview</h2>
<p>Antistreptolysin O (ASO) is a serum antibody titer directed against streptolysin O, an extracellular hemolytic toxin produced by group A beta-hemolytic streptococci (Streptococcus pyogenes). The test is run on a serum sample from venipuncture, commonly by nephelometry or latex agglutination.</p>
<p>ASO is ordered to provide serologic evidence of a recent streptococcal infection, especially when investigating its non-suppurative sequelae such as acute rheumatic fever and post-streptococcal glomerulonephritis. Titers rise about 1-3 weeks after infection, peak at 3-6 weeks, and then decline, so a single elevated value or, preferably, a rising titer on paired sera supports recent exposure.</p>
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
<td>Adults</td>
<td>&lt; 200 IU/mL (method-dependent)</td>
</tr>
<tr>
<td>Children</td>
<td>&lt; 100 IU/mL</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>An elevated or rising ASO titer indicates recent group A streptococcal infection and supports the diagnosis of post-streptococcal complications such as acute rheumatic fever and acute post-streptococcal glomerulonephritis. A single result is interpreted cautiously because titers vary with age, season, and geography; serial measurement showing a rise is more informative. A normal ASO does not exclude streptococcal disease, particularly skin infections, where anti-DNase B is often more sensitive.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itest93a709e8/condition/rheumatic-fever/" class="internal-link">Rheumatic Fever</a><br />
ASSOCIATED_WITH::<a href="/garden/itest93a709e8/condition/scarlet-fever/" class="internal-link">Scarlet Fever</a><br />
ASSOCIATED_WITH::<a href="/garden/itest93a709e8/condition/glomerulonephritis/" class="internal-link">Glomerulonephritis</a></p>
<h2>References</h2>
<ul>
<li>Shet A, Kaplan EL. <em>Pediatr Infect Dis J.</em> 2002 -- Clinical use and interpretation of group A streptococcal antibody tests: a practical approach for the pediatrician or primary care physician (PMID: 12182384)</li>
<li>Sen ES, Ramanan AV. <em>Arch Dis Child Educ Pract Ed.</em> 2014 -- How to use antistreptolysin O titre (PMID: 24482288)</li>
</ul>

{% endraw %}