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
    localized_name: tyreoglobulina (Tg)
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
description: Thyroglobulin (Tg) is a protein produced exclusively by thyroid follicular
  cells and measured in serum. It is used chiefly as a tumor marker to monitor patients
  treated for differentiated thyroid cancer for residual or recurrent disease.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itest261b687b
id: thyroglobulin
permalink: /garden/itest261b687b/labtest/thyroglobulin/
provenance: curated
slug: thyroglobulin
source: Manual
tags:
- labtest
- thyroid
- tumor_marker
templateEngineOverride: njk
title: thyroglobulin
type: labtest
updated: '2026-08-05T21:17:33.589742Z'
---

{% raw %}
<h1>Thyroglobulin</h1>
<h2>Overview</h2>
<p>Thyroglobulin (Tg) is a large glycoprotein synthesized only by thyroid follicular cells, where it serves as the scaffold for thyroid hormone synthesis. Serum Tg is measured on a venous blood sample, typically by immunometric assay or, increasingly, by liquid chromatography–tandem mass spectrometry to avoid interference.</p>
<p>Because Tg production is restricted to thyroid tissue, its primary clinical role is as a tumor marker. After total thyroidectomy and radioiodine ablation for differentiated (papillary or follicular) thyroid cancer, serum Tg should fall to very low or undetectable levels; a rising value signals residual or recurrent disease. Interpretation always requires a concurrent anti-thyroglobulin antibody measurement, since these antibodies falsely lower assay results.</p>
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
<td>Normal (intact thyroid)</td>
<td>~1.4-78 ng/mL</td>
</tr>
<tr>
<td>Post-thyroidectomy + ablation (athyrotic)</td>
<td>&lt; 0.1-0.2 ng/mL (undetectable)</td>
</tr>
<tr>
<td>Concurrent anti-Tg antibodies</td>
<td>Should be absent for valid result</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent; post-surgical targets differ from intact-gland reference ranges.)</p>
<h2>Clinical Significance</h2>
<p>In monitored thyroid cancer patients, a detectable or rising Tg after ablation indicates persistent or recurrent disease and prompts imaging or further therapy. Elevated Tg in an intact gland is non-specific and can reflect thyroiditis, Graves disease, goiter, or any condition causing thyroid tissue damage, so it is not used for cancer diagnosis. Anti-thyroglobulin antibodies, present in autoimmune thyroid disease, interfere with the assay and must be measured alongside Tg to validate the result.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itest261b687b/condition/thyroid-cancer/" class="internal-link">Thyroid Cancer</a><br />
ASSOCIATED_WITH::<a href="/garden/itest261b687b/condition/graves-disease/" class="internal-link">Graves Disease</a><br />
ASSOCIATED_WITH::<a href="/garden/itest261b687b/condition/hashimotos-thyroiditis/" class="internal-link">Hashimotos Thyroiditis</a><br />
RELATED::<a href="/garden/itest261b687b/labtest/tsh/" class="internal-link">tsh</a></p>
<h2>References</h2>
<ul>
<li>Spencer C. <em>J Clin Endocrinol Metab.</em> 2011 -- Clinical utility and limitations of serum thyroglobulin and anti-thyroglobulin antibody measurements (PMID: 21794123)</li>
<li>Haugen BR et al. <em>Thyroid.</em> 2016 -- 2015 American Thyroid Association management guidelines for differentiated thyroid cancer (PMID: 26462967)</li>
</ul>

{% endraw %}