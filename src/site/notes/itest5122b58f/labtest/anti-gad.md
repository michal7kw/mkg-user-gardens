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
    - description: NFZ funding requires a diabetology specialist referral; otherwise
        private
      type: specialist_referral_required
    last_verified: 2026-06
    localized_name: przeciwciała anty-GAD
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
description: Anti-GAD measures autoantibodies against glutamic acid decarboxylase
  65 (GAD65), an enzyme in pancreatic beta cells. These antibodies are a marker of
  autoimmune beta-cell destruction and are used to confirm type 1 diabetes and latent
  autoimmune diabetes in adults (LADA). It is a specialty serum immunoassay that does
  not require fasting.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itest5122b58f
id: anti_gad
permalink: /garden/itest5122b58f/labtest/anti-gad/
provenance: curated
slug: anti-gad
source: Manual
tags:
- labtest
- diabetes
- autoimmune
templateEngineOverride: njk
title: anti_gad
type: labtest
updated: '2026-08-20T07:39:41.542115Z'
---

{% raw %}
<h1>Anti-GAD Antibodies (GAD65)</h1>
<h2>Overview</h2>
<p>The anti-GAD test detects circulating autoantibodies directed against glutamic acid decarboxylase, specifically the 65-kDa isoform (GAD65) expressed in pancreatic islet beta cells. Their presence marks an autoimmune process targeting the insulin-producing cells. The test is an immunoassay (commonly radiobinding or ELISA) performed on a venous serum sample and does not require fasting.</p>
<p>Anti-GAD is ordered to distinguish autoimmune (type 1) diabetes from type 2 diabetes, to identify latent autoimmune diabetes in adults (LADA) in patients who present like type 2 but progress to insulin dependence, and as part of islet autoantibody panels for risk stratification in relatives of people with type 1 diabetes. GAD65 antibodies are also associated with stiff-person syndrome.</p>
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
<td>Negative (typical)</td>
<td>&lt; 5 IU/mL (assay-dependent)</td>
</tr>
<tr>
<td>Positive</td>
<td>&gt;= 5-10 IU/mL (assay-dependent cutoff)</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A positive anti-GAD result supports an autoimmune etiology of diabetes and predicts progression to insulin dependence, making it central to diagnosing type 1 diabetes and LADA. Higher titers and the presence of multiple islet autoantibodies confer greater risk of beta-cell failure. A negative result does not fully exclude autoimmune diabetes, so testing for additional autoantibodies (e.g., IA-2, ZnT8) may be warranted. Very high titers also occur in neurological conditions such as stiff-person syndrome.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itest5122b58f/condition/type-1-diabetes/" class="internal-link">Type 1 Diabetes</a><br />
ASSOCIATED_WITH::<a href="/garden/itest5122b58f/condition/diabetes/" class="internal-link">Diabetes</a><br />
RELATED::<a href="/garden/itest5122b58f/labtest/c-peptide/" class="internal-link">c_peptide</a></p>
<h2>References</h2>
<ul>
<li>American Diabetes Association. <em>Diabetes Care.</em> 2024 -- Standards of Care in Diabetes: Classification and Diagnosis of Diabetes (PMID: 38078589)</li>
<li>Ziegler AG et al. <em>JAMA.</em> 2013 -- Seroconversion to multiple islet autoantibodies and risk of progression to diabetes in children (PMID: 23780460)</li>
</ul>

{% endraw %}