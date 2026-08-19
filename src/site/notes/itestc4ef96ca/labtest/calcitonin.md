---
confidence_score: 0.75
country_availability:
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
    - description: NFZ funding via endocrinology/oncology specialist referral; otherwise
        private
      type: specialist_referral_required
    last_verified: 2026-06
    localized_name: kalcytonina
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
description: Calcitonin is a peptide hormone secreted by thyroid parafollicular (C)
  cells and measured in serum. It is used principally as a tumor marker for medullary
  thyroid carcinoma and to monitor treated patients for recurrence.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itestc4ef96ca
id: calcitonin
permalink: /garden/itestc4ef96ca/labtest/calcitonin/
provenance: curated
slug: calcitonin
source: Manual
tags:
- labtest
- thyroid
- tumor_marker
templateEngineOverride: njk
title: calcitonin
type: labtest
updated: '2026-08-19T20:36:03.359765Z'
---

{% raw %}
<h1>Calcitonin</h1>
<h2>Overview</h2>
<p>Calcitonin is a 32-amino-acid peptide hormone produced by the parafollicular (C) cells of the thyroid gland; physiologically it modestly opposes parathyroid hormone in calcium regulation. Serum calcitonin is measured on a venous blood sample using sensitive immunoassays, sometimes with a calcium- or pentagastrin-stimulation protocol to unmask borderline elevations.</p>
<p>Its main clinical role is as a tumor marker for medullary thyroid carcinoma (MTC), a malignancy of the C cells. Basal and stimulated calcitonin levels are used to evaluate thyroid nodules suspicious for MTC, to assess disease burden, and to monitor for biochemical recurrence after thyroidectomy. Because of assay variability, mild elevations require careful interpretation and often repeat or stimulated testing.</p>
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
<td>Normal (men)</td>
<td>&lt; 8.4 pg/mL</td>
</tr>
<tr>
<td>Normal (women)</td>
<td>&lt; 5.0 pg/mL</td>
</tr>
<tr>
<td>Strongly suggestive of MTC</td>
<td>&gt; 100 pg/mL</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method- and sex-dependent; men generally have higher reference values than women.)</p>
<h2>Clinical Significance</h2>
<p>Markedly elevated calcitonin strongly suggests medullary thyroid carcinoma or C-cell hyperplasia, and the degree of elevation correlates with tumor burden. Persistent or rising levels after thyroidectomy indicate residual or recurrent MTC. Mild elevations are non-specific and can occur with renal insufficiency, chronic autoimmune thyroiditis, neuroendocrine tumors, proton-pump inhibitor use, or heterophile-antibody interference, so context and confirmatory testing are essential.</p>
<h2>Relationships</h2>
<p>ASSOCIATED_WITH::<a href="/garden/itestc4ef96ca/condition/thyroid-cancer/" class="internal-link">Thyroid Cancer</a><br />
ASSOCIATED_WITH::<a href="/garden/itestc4ef96ca/condition/hashimotos-thyroiditis/" class="internal-link">Hashimotos Thyroiditis</a><br />
RELATED::<a href="/garden/itestc4ef96ca/labtest/tsh/" class="internal-link">tsh</a></p>
<h2>References</h2>
<ul>
<li>Costante G et al. <em>J Clin Endocrinol Metab.</em> 2007 -- Predictive value of serum calcitonin levels for preoperative diagnosis of medullary thyroid carcinoma (PMID: 17284629)</li>
<li>Wells SA Jr et al. <em>Thyroid.</em> 2015 -- Revised American Thyroid Association guidelines for the management of medullary thyroid carcinoma (PMID: 25810047)</li>
</ul>

{% endraw %}