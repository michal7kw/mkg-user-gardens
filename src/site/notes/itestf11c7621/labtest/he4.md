---
confidence_score: 0.75
country_availability:
  pl:
    access_pathway:
      identity_required: true
      steps:
      - Not on the routine NFZ basket
      - Order at a private lab and pay out-of-pocket
      type: private_walk_in
    coverage_tier: private_only_moderate
    exemptions: []
    last_verified: 2026-06
    localized_name: HE4
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
description: HE4 (Human Epididymis Protein 4) is a serum tumor marker measured by
  immunoassay on a venous blood sample. It is used together with CA 125 to assess
  the risk that a pelvic mass is malignant and to monitor epithelial ovarian cancer,
  not as a standalone screening or diagnostic test.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: itestf11c7621
id: he4
permalink: /garden/itestf11c7621/labtest/he4/
provenance: curated
slug: he4
source: Manual
tags:
- labtest
- tumor_marker
- ovarian
- oncology
templateEngineOverride: njk
title: he4
type: labtest
updated: '2026-08-19T21:06:58.989824Z'
---

{% raw %}
<h1>HE4 (Human Epididymis Protein 4)</h1>
<h2>Overview</h2>
<p>HE4 (Human Epididymis Protein 4, the product of the WFDC2 gene) is a small secreted glycoprotein that is overexpressed and shed into the blood by epithelial ovarian carcinomas. It is quantified in serum from a routine venipuncture sample using an automated immunoassay, with no fasting required.</p>
<p>HE4 is ordered primarily alongside CA 125 to evaluate the risk of malignancy in women presenting with a pelvic mass and to monitor patients with diagnosed epithelial ovarian cancer for treatment response and recurrence. A frequent advantage over CA 125 is that HE4 is less often elevated in endometriosis and other benign gynecologic conditions, improving specificity. As a tumor marker, however, it is a monitoring and adjunctive aid rather than a standalone diagnostic, and results must be combined with imaging, menopausal status, and clinical assessment.</p>
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
<td>Premenopausal (approx.)</td>
<td>&lt; 70 pmol/L</td>
</tr>
<tr>
<td>Postmenopausal (approx.)</td>
<td>&lt; 140 pmol/L</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent; cutoffs vary by assay platform and menopausal status.)</p>
<h2>Clinical Significance</h2>
<p>Elevated HE4 is associated with epithelial ovarian cancer (and to a lesser extent endometrial and lung cancers), and serial levels track tumor burden during therapy and follow-up. Levels rise with age and decline of renal function, and can be modestly elevated in renal impairment, pregnancy, and some benign lung/pelvic conditions, so an isolated value is not diagnostic. HE4 is most powerful when combined with CA 125 and menopausal status in the ROMA algorithm to stratify malignancy risk.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itestf11c7621/condition/ovarian-cancer/" class="internal-link">Ovarian Cancer</a><br />
USED_FOR::<a href="/garden/itestf11c7621/condition/ovarian-dysfunction/" class="internal-link">Ovarian Dysfunction</a><br />
RELATED::<a href="/garden/itestf11c7621/labtest/ca-125/" class="internal-link">ca_125</a></p>
<h2>References</h2>
<ul>
<li>Moore RG et al. <em>Gynecol Oncol.</em> 2009 -- The use of multiple novel tumor biomarkers for the detection of ovarian carcinoma in patients with a pelvic mass (PMID: 18851871)</li>
</ul>

{% endraw %}