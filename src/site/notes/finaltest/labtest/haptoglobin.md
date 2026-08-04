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
    localized_name: aptoglobina
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
    localized_name: haptoglobina
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
    localized_name: Haptoglobin
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
description: Haptoglobin is a plasma protein that binds free hemoglobin released during
  red cell breakdown. Serum haptoglobin is measured primarily to detect and assess
  intravascular hemolysis, where levels fall as the protein is consumed.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: finaltest
id: haptoglobin
permalink: /garden/finaltest/labtest/haptoglobin/
provenance: curated
slug: haptoglobin
source: Manual
tags:
- labtest
- hematology
- hemolysis
- acute_phase
templateEngineOverride: njk
title: haptoglobin
type: labtest
updated: '2026-08-04T00:51:01.725157Z'
---

{% raw %}
<h1>Haptoglobin</h1>
<h2>Overview</h2>
<p>Haptoglobin is an acute-phase glycoprotein synthesized mainly by the liver that binds free hemoglobin liberated when red blood cells lyse. The haptoglobin-hemoglobin complex is rapidly cleared by macrophages, conserving iron and limiting oxidative and renal injury from free hemoglobin. Serum or plasma haptoglobin is measured by immunoturbidimetric or nephelometric assays on a standard venous sample.</p>
<p>The test is ordered chiefly in the workup of suspected hemolytic anemia, typically alongside lactate dehydrogenase (LDH), indirect bilirubin, and the reticulocyte count. A low haptoglobin in the right clinical context is a sensitive indicator of red cell destruction, particularly intravascular hemolysis.</p>
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
<td>Adult</td>
<td>~30-200 mg/dL</td>
</tr>
<tr>
<td>Hemolysis (suggestive)</td>
<td>Markedly low / undetectable</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A decreased or undetectable haptoglobin indicates consumption by free hemoglobin and supports a diagnosis of hemolysis (intravascular more than extravascular), including autoimmune hemolytic anemia, transfusion reactions, microangiopathic hemolytic anemias, and sickle cell disease. Because haptoglobin is an acute-phase reactant, levels rise with inflammation, infection, or tissue injury, which can mask mild hemolysis; conversely, low levels also occur in severe liver disease (reduced synthesis) and in rare congenital ahaptoglobinemia. Interpretation is strongest when combined with elevated LDH and indirect bilirubin plus reticulocytosis, which together form the standard hemolysis panel.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/finaltest/condition/sickle-cell-disease/" class="internal-link">Sickle Cell Disease</a><br />
RELATED::<a href="/garden/finaltest/labtest/ldh/" class="internal-link">ldh</a><br />
RELATED::<a href="/garden/finaltest/labtest/total-bilirubin/" class="internal-link">total_bilirubin</a><br />
RELATED::<a href="/garden/finaltest/labtest/reticulocytes/" class="internal-link">reticulocytes</a></p>
<h2>References</h2>
<ul>
<li>Marchand A, Galen RS, Van Lente F. The predictive value of serum haptoglobin in hemolytic disease. <em>JAMA.</em> 1980;243(19):1909-1911 -- diagnostic performance of haptoglobin for hemolysis (PMID: 7365971)</li>
</ul>

{% endraw %}