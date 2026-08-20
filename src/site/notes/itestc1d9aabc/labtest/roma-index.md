---
confidence_score: 0.75
country_availability:
  pl:
    access_pathway:
      identity_required: true
      steps:
      - Not on the routine NFZ basket
      - Order at a private lab and pay out-of-pocket (combines CA-125 + HE4)
      type: private_walk_in
    coverage_tier: private_only_moderate
    exemptions: []
    last_verified: 2026-06
    localized_name: wskaźnik ROMA
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
created: '2026-06-18T00:00:00+00:00'
description: The ROMA Index (Risk of Ovarian Malignancy Algorithm) is a calculated
  risk score that combines serum CA 125 and HE4 with menopausal status to estimate
  the probability that a pelvic mass is malignant. It is a triage/stratification aid,
  not a standalone diagnostic test.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: itestc1d9aabc
id: roma_index
permalink: /garden/itestc1d9aabc/labtest/roma-index/
provenance: curated
slug: roma-index
source: Manual
tags:
- labtest
- tumor_marker
- ovarian
- risk_score
templateEngineOverride: njk
title: roma_index
type: labtest
updated: '2026-08-20T07:34:00.467270Z'
---

{% raw %}
<h1>ROMA Index</h1>
<h2>Overview</h2>
<p>The ROMA Index (Risk of Ovarian Malignancy Algorithm) is not a single analyte but a calculated score that combines two serum tumor markers — CA 125 and HE4 — together with the patient's menopausal status, using a logistic-regression formula to estimate the probability that an existing pelvic mass is malignant. Both markers are measured from a single routine venipuncture sample, and the index is computed automatically by the laboratory or analyzer.</p>
<p>ROMA is used to stratify women with an adnexal/pelvic mass into low-risk and high-risk groups, helping decide whether referral to a gynecologic oncology center is warranted before surgery. Because the menopausal cutoffs differ, the same marker values yield different risk classifications in pre- versus postmenopausal women. Like its component markers, ROMA is a triage and adjunctive aid rather than a standalone diagnostic, and a final diagnosis still requires imaging and histopathology.</p>
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
<td>Premenopausal low risk</td>
<td>ROMA &lt; ~11.4%</td>
</tr>
<tr>
<td>Premenopausal high risk</td>
<td>ROMA &gt;= ~11.4%</td>
</tr>
<tr>
<td>Postmenopausal low risk</td>
<td>ROMA &lt; ~29.9%</td>
</tr>
<tr>
<td>Postmenopausal high risk</td>
<td>ROMA &gt;= ~29.9%</td>
</tr>
</tbody>
</table>
<p>(Cutoffs are approximate and assay/method-dependent; specific thresholds are defined by the manufacturer and laboratory.)</p>
<h2>Clinical Significance</h2>
<p>A high ROMA score indicates an elevated probability that a pelvic mass is epithelial ovarian cancer and supports referral for specialist surgical management, whereas a low score suggests benign disease is more likely. Because ROMA inherits the limitations of CA 125 and HE4, false elevations can arise from renal impairment, age, and certain benign conditions, and a low score does not exclude malignancy. It is intended to refine risk assessment of an already-detected mass, not to screen asymptomatic women.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itestc1d9aabc/condition/ovarian-cancer/" class="internal-link">Ovarian Cancer</a><br />
RELATED::<a href="/garden/itestc1d9aabc/labtest/ca-125/" class="internal-link">ca_125</a><br />
RELATED::<a href="/garden/itestc1d9aabc/labtest/he4/" class="internal-link">he4</a><br />
USED_FOR::<a href="/garden/itestc1d9aabc/condition/ovarian-dysfunction/" class="internal-link">Ovarian Dysfunction</a></p>
<h2>References</h2>
<ul>
<li>Moore RG et al. <em>Gynecol Oncol.</em> 2009 -- A novel multiple marker bioassay utilizing HE4 and CA125 for the prediction of ovarian cancer in patients with a pelvic mass (PMID: 19135698)</li>
</ul>

{% endraw %}