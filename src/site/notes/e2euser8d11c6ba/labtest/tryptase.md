---
confidence_score: 0.75
country_availability:
  pl:
    access_pathway:
      identity_required: true
      steps:
      - NFZ funding requires an allergology/hematology specialist referral
      - Otherwise order at a private lab and pay out-of-pocket
      type: private_walk_in
    coverage_tier: private_only_moderate
    exemptions:
    - description: NFZ funding via an allergology/hematology specialist referral;
        mostly bought privately
      type: specialist_referral_required
    last_verified: 2026-06
    localized_name: tryptaza
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
description: Measures serum tryptase, a protease released by mast cells during degranulation.
  Acutely elevated levels support a diagnosis of anaphylaxis, while persistently elevated
  baseline levels suggest mast cell disorders such as systemic mastocytosis or hereditary
  alpha-tryptasemia.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: e2euser8d11c6ba
id: tryptase
permalink: /garden/e2euser8d11c6ba/labtest/tryptase/
provenance: curated
slug: tryptase
source: Manual
tags:
- labtest
- allergy
- mast_cell
- anaphylaxis
templateEngineOverride: njk
title: tryptase
type: labtest
updated: '2026-08-05T03:36:10.689099Z'
---

{% raw %}
<h1>Tryptase</h1>
<h2>Overview</h2>
<p>Tryptase is a serine protease stored in the secretory granules of mast cells and, to a lesser degree, basophils. The serum tryptase test measures total tryptase by immunoassay (commonly fluorescence enzyme immunoassay) on a venous blood sample. Because tryptase is released when mast cells degranulate, the test serves as a quantitative marker of mast cell activation.</p>
<p>Clinically, tryptase is ordered in two settings: acutely, to help confirm anaphylaxis (ideally drawn within 15 minutes to 3 hours of symptom onset and compared to a later baseline), and at baseline, to screen for mast cell disorders. A persistently elevated baseline level is a minor criterion for systemic mastocytosis and is also seen in hereditary alpha-tryptasemia.</p>
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
<td>Normal baseline (adult)</td>
<td>&lt; 11.4 ng/mL</td>
</tr>
<tr>
<td>Suggestive of mast cell disorder</td>
<td>&gt; 20 ng/mL (baseline)</td>
</tr>
<tr>
<td>Acute anaphylaxis (dynamic)</td>
<td>rise of &gt;= 20% + 2 ng/mL over baseline</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>A transient acute rise in tryptase supports a diagnosis of anaphylaxis and helps distinguish it from other causes of acute collapse. A persistently elevated baseline tryptase (&gt; 20 ng/mL) is a World Health Organization minor diagnostic criterion for systemic mastocytosis and warrants further workup including KIT D816V mutation testing and bone marrow evaluation. Mildly elevated baseline values may reflect hereditary alpha-tryptasemia (driven by extra copies of the TPSAB1 gene) or renal impairment. Serial paired sampling (acute plus 24-hour baseline) is the most informative way to interpret results.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/e2euser8d11c6ba/condition/anaphylaxis/" class="internal-link">Anaphylaxis</a><br />
USED_FOR::<a href="/garden/e2euser8d11c6ba/condition/mastocytosis/" class="internal-link">Mastocytosis</a><br />
ASSOCIATED_WITH::<a href="/garden/e2euser8d11c6ba/condition/allergy/" class="internal-link">Allergy</a></p>
<h2>References</h2>
<ul>
<li>Schwartz LB. Diagnostic value of tryptase in anaphylaxis and mastocytosis. <em>Immunol Allergy Clin North Am.</em> 2006 -- review of tryptase as a mast cell activation marker (PMID: 16931288)</li>
<li>Lyons JJ, Yu X, Hughes JD, et al. Elevated basal serum tryptase identifies a multisystem disorder associated with increased TPSAB1 copy number. <em>Nat Genet.</em> 2016 -- hereditary alpha-tryptasemia (PMID: 27695161)</li>
</ul>

{% endraw %}