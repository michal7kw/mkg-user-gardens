---
confidence_score: 0.92
created: 2026-05-27T12:00:00+0000
description: Ketogenesis is the hepatic synthesis of ketone bodies (beta-hydroxybutyrate,
  acetoacetate, acetone) from acetyl-CoA derived from fatty-acid oxidation. Activated
  by fasting, prolonged exercise, and low-carbohydrate states, it supplies an alternative
  fuel for the brain and heart and generates beta-hydroxybutyrate, a signaling metabolite.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: itest8e669025
id: ketogenesis
permalink: /garden/itest8e669025/pathway/ketogenesis/
provenance: curated
slug: ketogenesis
source: PubMed
tags:
- pathway
- metabolic
- ketones
- energy_metabolism
- fasting
templateEngineOverride: njk
title: Ketogenesis
type: pathway
updated: '2026-08-05T21:35:00.900889Z'
---

{% raw %}
<h1>Ketogenesis</h1>
<h2>Overview</h2>
<p>Ketogenesis is the metabolic pathway by which the liver converts fat-derived <a href="/garden/itest8e669025/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a> into ketone bodies — primarily <a href="/garden/itest8e669025/metabolite/beta-hydroxybutyrate/" class="internal-link">Beta-Hydroxybutyrate</a> and acetoacetate (with acetone as a minor byproduct). When carbohydrate is scarce (fasting, prolonged exercise, ketogenic diets) and insulin is low, accelerated <a href="/garden/itest8e669025/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a> floods hepatic mitochondria with acetyl-CoA beyond the capacity of the TCA cycle; the excess is diverted into ketogenesis. The resulting ketones are exported as a water-soluble, brain-permeable fuel that spares glucose and supports the brain and heart during energy scarcity.</p>
<p>Beyond fuel, the principal product beta-hydroxybutyrate is a signaling molecule (HDAC inhibitor, NLRP3 inhibitor), linking the pathway to the <a href="/garden/itest8e669025/metabolite/ketone-bodies/" class="internal-link">Ketone Bodies</a> and to neuroprotective and anti-inflammatory effects.</p>
<h2>Key Steps</h2>
<ol>
<li><strong>Beta-oxidation</strong> of fatty acids yields abundant <a href="/garden/itest8e669025/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a>.</li>
<li>Two acetyl-CoA → acetoacetyl-CoA (thiolase).</li>
<li>Acetoacetyl-CoA + acetyl-CoA → HMG-CoA (HMGCS2, <strong>rate-limiting</strong>).</li>
<li>HMG-CoA → acetoacetate (HMG-CoA lyase).</li>
<li>Acetoacetate ⇌ <a href="/garden/itest8e669025/metabolite/beta-hydroxybutyrate/" class="internal-link">Beta-Hydroxybutyrate</a> (BDH1, NADH-dependent); minor spontaneous decarboxylation → acetone.</li>
</ol>
<h2>Regulation</h2>
<p>HMGCS2 is the controlled step, induced by fasting (low insulin/high glucagon, FOXO and PPAR-alpha signaling) and suppressed by feeding. Ketogenesis is essentially hepatic; extrahepatic tissues lack the capacity and instead oxidize ketones.</p>
<h2>Physiological and Clinical Role</h2>
<p>Physiological ketosis (1-3 mM) is a normal fasting adaptation; pathological, uncontrolled ketogenesis in insulin deficiency causes diabetic ketoacidosis. The pathway is central to the <a href="/garden/itest8e669025/intervention/keto-diet/" class="internal-link">Keto Diet</a> and <a href="/garden/itest8e669025/intervention/intermittent-fasting/" class="internal-link">Intermittent Fasting</a> and is being explored for metabolic and neurological therapeutics.</p>
<h2>Relationships</h2>
<h3>Consumes Substrate</h3>
<p>METABOLIZES::<a href="/garden/itest8e669025/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a></p>
<h3>Produces</h3>
<p>PRODUCES::<a href="/garden/itest8e669025/metabolite/beta-hydroxybutyrate/" class="internal-link">Beta-Hydroxybutyrate</a><br />
PRODUCES::<a href="/garden/itest8e669025/metabolite/ketone-bodies/" class="internal-link">Ketone Bodies</a></p>
<h3>Upstream Pathway</h3>
<p>RELATED_TO::<a href="/garden/itest8e669025/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a></p>
<h3>Occurs In Organ</h3>
<p>AFFECTS_ORGAN::<a href="/garden/itest8e669025/organ/liver/" class="internal-link">Liver</a></p>
<h3>Activated By Intervention</h3>
<p>RELATED_TO::<a href="/garden/itest8e669025/intervention/keto-diet/" class="internal-link">Keto Diet</a><br />
RELATED_TO::<a href="/garden/itest8e669025/intervention/intermittent-fasting/" class="internal-link">Intermittent Fasting</a><br />
RELATED_TO::<a href="/garden/itest8e669025/intervention/caloric-restriction/" class="internal-link">Caloric Restriction</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/itest8e669025/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest8e669025/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a></p>
<h2>References</h2>
<ul>
<li>Puchalska P, Crawford PA. <em>Cell Metab.</em> 2017;25(2):262-284 -- Multi-dimensional Roles of Ketone Bodies in Fuel Metabolism, Signaling, and Therapeutics (PMID: 28178565)</li>
<li>Longo VD, Mattson MP. <em>Cell Metab.</em> 2014;19(2):181-192 -- Fasting: molecular mechanisms and clinical applications (PMID: 24440038)</li>
<li>Newman JC, Verdin E. <em>Trends Endocrinol Metab.</em> 2014;25(1):42-52 -- Ketone bodies as signaling metabolites (PMID: 24140022)</li>
</ul>

{% endraw %}