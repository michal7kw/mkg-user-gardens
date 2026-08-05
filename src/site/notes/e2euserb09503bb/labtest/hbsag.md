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
    localized_name: HBsAg (antigene di superficie dell'epatite B)
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
    - description: Mandatory free HBsAg screening in pregnancy
      type: pregnancy
    last_verified: 2026-06
    localized_name: antygen HBs (HBsAg)
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
    localized_name: Hepatitis B Surface Antigen (HBsAg)
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
description: Hepatitis B surface antigen (HBsAg) is a blood test that detects a viral
  coat protein of the hepatitis B virus. A reactive result indicates active hepatitis
  B infection, either acute or chronic. It is the primary screening marker used to
  identify infectious individuals.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: e2euserb09503bb
id: hbsag
permalink: /garden/e2euserb09503bb/labtest/hbsag/
provenance: curated
slug: hbsag
source: Manual
tags:
- labtest
- serology
- infectious
- hepatitis_b
- viral
templateEngineOverride: njk
title: hbsag
type: labtest
updated: '2026-08-05T01:34:34.529580Z'
---

{% raw %}
<h1>Hepatitis B Surface Antigen (HBsAg)</h1>
<h2>Overview</h2>
<p>HBsAg is a structural envelope protein on the surface of the hepatitis B virus (HBV) particle. It is the earliest serological marker to appear in HBV infection, typically detectable in serum within 1-10 weeks of exposure and before the onset of symptoms or rise in liver enzymes. The test is performed on a venous blood sample using an immunoassay (chemiluminescence or ELISA) that reports a qualitative reactive/non-reactive result.</p>
<p>HBsAg is the cornerstone of hepatitis B screening and diagnosis. It is ordered to evaluate suspected acute or chronic hepatitis, to screen blood and organ donors, pregnant women, dialysis patients, and people at occupational or behavioural risk. Persistence of HBsAg beyond six months defines chronic hepatitis B infection.</p>
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
<td>Non-reactive (negative)</td>
<td>No detectable HBsAg; absence of active HBV infection (does not exclude window period or occult infection)</td>
</tr>
<tr>
<td>Reactive (positive)</td>
<td>Active HBV infection — patient is infectious; acute vs chronic distinguished by clinical course and other markers</td>
</tr>
</tbody>
</table>
<p>(Interpretation is assay-dependent; results are qualitative or reported as a signal-to-cutoff index that varies by platform.)</p>
<h2>Clinical Significance</h2>
<p>A positive HBsAg indicates the person carries replicating or persistent HBV and is potentially infectious. In acute infection HBsAg clears within several months as the patient recovers and develops anti-HBs; persistence beyond six months indicates chronic infection requiring monitoring for cirrhosis and hepatocellular carcinoma. A negative result generally indicates no active infection but cannot exclude the early window period or resolved infection — it must be interpreted alongside anti-HBs, anti-HBc, and HBV DNA.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/e2euserb09503bb/condition/hepatitis-b/" class="internal-link">Hepatitis B</a><br />
ASSOCIATED_WITH::<a href="/garden/e2euserb09503bb/organ/liver/" class="internal-link">Liver</a><br />
ASSOCIATED_WITH::<a href="/garden/e2euserb09503bb/condition/chronic-infection/" class="internal-link">Chronic Infection</a></p>
<h2>References</h2>
<ul>
<li>WHO. <em>Hepatitis B fact sheet and guidelines on testing for hepatitis B.</em> World Health Organization, 2024 -- HBsAg as primary diagnostic and screening marker.</li>
<li>Terrault NA et al. <em>Hepatology.</em> 2018 -- AASLD guidance on prevention, diagnosis, and treatment of chronic hepatitis B (PMID: 29405329)</li>
</ul>

{% endraw %}