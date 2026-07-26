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
    - description: NFZ funding requires a specialist referral; widely available cheaply
        at private labs
      type: specialist_referral_required
    last_verified: 2026-06
    localized_name: apolipoproteina A1 (Apo AI)
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
created: '2026-07-26T12:38:41.747670Z'
description: Apolipoprotein A1 (ApoA1) is the principal structural protein of HDL
  particles and reflects the number of anti-atherogenic HDL particles in circulation.
  It is measured to refine cardiovascular risk assessment, often as part of the ApoB/ApoA1
  ratio.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: e2euser82c06227
id: apolipoprotein_a1
permalink: /garden/e2euser82c06227/labtest/apolipoprotein-a1/
provenance: curated
slug: apolipoprotein-a1
source: Manual
tags:
- labtest
- lipids
- cardiovascular
- apolipoprotein
templateEngineOverride: njk
title: apolipoprotein_a1
type: labtest
updated: '2026-07-26T12:38:41.747670Z'
---

{% raw %}
<h1>Apolipoprotein A1 (ApoA1)</h1>
<h2>Overview</h2>
<p>Apolipoprotein A1 (ApoA1) is the major protein component of high-density lipoprotein (HDL) particles, with one ApoA1 molecule per HDL particle. It activates lecithin-cholesterol acyltransferase (LCAT) and promotes reverse cholesterol transport, the process by which cholesterol is removed from peripheral tissues and returned to the liver. Serum ApoA1 is measured by immunoturbidimetric or immunonephelometric assay, typically without a fasting requirement.</p>
<p>Because each HDL particle carries one ApoA1, the measurement provides a count of anti-atherogenic particles that complements HDL cholesterol mass. It is most informative when interpreted alongside Apolipoprotein B as the ApoB/ApoA1 ratio, which integrates atherogenic and protective particle burden into a single cardiovascular risk index.</p>
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
<td>Men (desirable)</td>
<td>&gt;120 mg/dL</td>
</tr>
<tr>
<td>Women (desirable)</td>
<td>&gt;140 mg/dL</td>
</tr>
<tr>
<td>Typical adult range</td>
<td>100-200 mg/dL</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Low ApoA1 is associated with reduced HDL function and an increased risk of atherosclerotic cardiovascular disease, and can be seen in metabolic syndrome, type 2 diabetes, and certain genetic dyslipidemias. Higher ApoA1 generally reflects greater HDL particle numbers and is considered cardioprotective. A high ApoB/ApoA1 ratio has been shown in large cohorts to predict myocardial infarction risk and is used to refine risk stratification beyond standard lipid panels.</p>
<h2>Relationships</h2>
<p>ASSOCIATED_WITH::<a href="/garden/e2euser82c06227/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
RELATED::<a href="/garden/e2euser82c06227/labtest/apolipoprotein-b/" class="internal-link">apolipoprotein_b</a></p>
<h2>References</h2>
<ul>
<li>Walldius G, Jungner I. <em>J Intern Med.</em> 2006 -- ApoB/ApoA1 ratio as a predictor of cardiovascular risk (PMID: 16958820)</li>
<li>McQueen MJ, et al. <em>Lancet.</em> 2008 -- INTERHEART: lipoproteins and risk of myocardial infarction (PMID: 18640459)</li>
</ul>

{% endraw %}