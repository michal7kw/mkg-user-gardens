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
    localized_name: bilirubina diretta
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
    localized_name: bilirubina bezpośrednia
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
    localized_name: Direct (Conjugated) Bilirubin
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
description: Direct (conjugated) bilirubin measures the water-soluble fraction of
  bilirubin that has been processed by the liver. It is reported alongside total bilirubin
  to help distinguish hepatobiliary from hemolytic causes of jaundice.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: e2euser3e26671d
id: direct_bilirubin
permalink: /garden/e2euser3e26671d/labtest/direct-bilirubin/
provenance: curated
slug: direct-bilirubin
source: Manual
tags:
- labtest
- liver
- biochemistry
- bilirubin
templateEngineOverride: njk
title: direct_bilirubin
type: labtest
updated: '2026-08-05T21:08:08.154855Z'
---

{% raw %}
<h1>Direct Bilirubin (Conjugated)</h1>
<h2>Overview</h2>
<p>Direct bilirubin is the conjugated, water-soluble form of bilirubin produced when the liver attaches glucuronic acid to unconjugated (indirect) bilirubin. It is measured in serum by a diazo (van den Bergh) colorimetric reaction, with the &quot;direct-reacting&quot; fraction reported as direct bilirubin and the remainder calculated as indirect.</p>
<p>Clinicians order direct bilirubin together with total bilirubin to characterize the type of hyperbilirubinemia. A predominantly elevated direct (conjugated) fraction points toward hepatocellular injury or biliary obstruction (cholestasis), whereas an elevated indirect fraction suggests hemolysis or impaired conjugation.</p>
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
<td>Normal adult</td>
<td>0.0-0.3 mg/dL</td>
</tr>
<tr>
<td>SI units</td>
<td>0-5 µmol/L</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Elevated direct bilirubin (conjugated hyperbilirubinemia) indicates that the liver can conjugate bilirubin but cannot excrete it normally, as seen in intrahepatic cholestasis, hepatitis, cirrhosis, and extrahepatic biliary obstruction (e.g., gallstones, pancreatic head tumors). A direct fraction exceeding roughly 50% of total bilirubin is generally considered conjugated hyperbilirubinemia. It is used to evaluate jaundice, monitor liver and biliary disease, and assess hereditary disorders such as Dubin-Johnson and Rotor syndromes.</p>
<h2>Relationships</h2>
<h3>Measures</h3>
<p>MEASURES::<a href="/garden/e2euser3e26671d/biomarker/bilirubin-direct/" class="internal-link">Bilirubin Direct</a><br />
ASSOCIATED_WITH::<a href="/garden/e2euser3e26671d/condition/liver-disease/" class="internal-link">Liver Disease</a><br />
RELATED::<a href="/garden/e2euser3e26671d/labtest/total-bilirubin/" class="internal-link">total_bilirubin</a></p>
<h2>References</h2>
<ul>
<li>Roche-Bayard E, et al. <em>World J Gastroenterol.</em> 2009 -- review of bilirubin metabolism and diagnostic interpretation of jaundice (PMID: 19248189)</li>
<li>Fevery J. <em>Liver Int.</em> 2008 -- bilirubin in clinical practice (PMID: 18397235)</li>
</ul>

{% endraw %}