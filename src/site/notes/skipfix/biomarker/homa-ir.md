---
aliases:
- Homa Ir
- HOMA IR
- Homa-Ir
confidence_score: 0.9
created: 2026-05-26T12:00:00+0000
description: HOMA-IR (Homeostatic Model Assessment of Insulin Resistance) is a calculated
  index of insulin resistance derived from paired fasting glucose and fasting insulin.
  It is the most widely used surrogate measure of hepatic insulin resistance in research
  and clinical practice, validated against the gold-standard hyperinsulinemic-euglycemic
  clamp.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: skipfix
id: homa_ir
last_modified: 2026-06-21T00:00:00+0000
permalink: /garden/skipfix/biomarker/homa-ir/
provenance: curated
slug: homa-ir
source: Manual
tags:
- biomarker
- metabolic
- insulin_resistance
- glucose_metabolic
- metabolic_health
- predictive_medicine
templateEngineOverride: njk
title: HOMA-IR
type: biomarker
updated: 2026-06-21T00:00:00+0000
---

{% raw %}
<h1>HOMA-IR</h1>
<h2>Overview</h2>
<p>HOMA-IR (Homeostatic Model Assessment of Insulin Resistance) is a simple, inexpensive index that estimates insulin resistance from a single fasting blood draw. Rather than being measured directly, it is <strong>calculated</strong> from paired fasting glucose and fasting insulin, making it derivative of <a href="/garden/skipfix/biomarker/glucose-fasting/" class="internal-link">Glucose Fasting</a> and <a href="/garden/skipfix/biomarker/insulin-fasting/" class="internal-link">Insulin Fasting</a>. Because the gold-standard hyperinsulinemic-euglycemic clamp is impractical for routine use, HOMA-IR has become the dominant surrogate for hepatic insulin resistance in epidemiology and clinical assessment.</p>
<p>The model rests on the physiological feedback loop between glucose and the pancreatic beta-cell: in insulin-resistant states, more insulin is required to maintain normoglycemia, so the product of fasting glucose and fasting insulin rises. HOMA-IR frequently elevates years before fasting glucose becomes abnormal, making it a valuable early marker in preventive medicine for individuals on the pathway to Type 2 Diabetes, Metabolic Syndrome, and non-alcoholic fatty liver disease (NAFLD).</p>
<h2>Calculation</h2>
<table>
<thead>
<tr>
<th>Unit system</th>
<th>Formula</th>
</tr>
</thead>
<tbody>
<tr>
<td>Conventional (US)</td>
<td>HOMA-IR = (fasting insulin [µIU/mL] × fasting glucose [mg/dL]) / 405</td>
</tr>
<tr>
<td>SI</td>
<td>HOMA-IR = (fasting insulin [µIU/mL] × fasting glucose [mmol/L]) / 22.5</td>
</tr>
</tbody>
</table>
<p>A normal-weight, fully insulin-sensitive young adult is defined by a value near 1.0.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>HOMA-IR</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Optimal</td>
<td>&lt; 1.0</td>
<td>Excellent insulin sensitivity</td>
</tr>
<tr>
<td>Normal</td>
<td>1.0 - 1.9</td>
<td>Within typical range</td>
</tr>
<tr>
<td>Early insulin resistance</td>
<td>2.0 - 2.9</td>
<td>Emerging metabolic dysfunction</td>
</tr>
<tr>
<td>Significant insulin resistance</td>
<td>≥ 3.0</td>
<td>Established insulin resistance; high cardiometabolic risk</td>
</tr>
</tbody>
</table>
<p><strong>Notes:</strong></p>
<ul>
<li>Cut-points vary by insulin assay, ethnicity, and pubertal/age status — interpret against a locally validated range. There is no globally standardized clinical cutoff; many studies use &gt; 2.5 as indicative of meaningful insulin resistance.</li>
<li>Not valid in type 1 diabetes, on exogenous insulin, or with significant beta-cell failure.</li>
<li>Best used as a trend over time and alongside <a href="/garden/skipfix/labtest/adiponectin/" class="internal-link">Adiponectin</a>, triglyceride/HDL ratio, and waist circumference.</li>
</ul>
<h2>Testing Information</h2>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Detail</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Sample Type</strong></td>
<td>Blood (fasting serum/plasma)</td>
</tr>
<tr>
<td><strong>Fasting Required</strong></td>
<td>Yes — 8-12 hours</td>
</tr>
<tr>
<td><strong>Inputs</strong></td>
<td>Fasting glucose + fasting insulin (drawn simultaneously)</td>
</tr>
<tr>
<td><strong>Test Frequency</strong></td>
<td>Periodic for metabolic risk monitoring; useful to track intervention response</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<h3>Factors that Increase HOMA-IR (Worsen Resistance)</h3>
<ul>
<li><strong>Central Adiposity / Obesity:</strong> Visceral fat accumulation increases inflammatory adipokines, directly promoting cellular insulin resistance.</li>
<li><strong>Sedentary Lifestyle:</strong> Lack of skeletal muscle contraction reduces glucose uptake mechanisms independent of insulin.</li>
<li><strong>High-Glycemic Diet &amp; Fructose:</strong> Diets high in refined carbohydrates and fructose promote hepatic de novo lipogenesis and systemic insulin resistance.</li>
<li><strong>Poor Sleep &amp; Stress:</strong> Chronic stress (elevated cortisol) and sleep deprivation rapidly induce temporary and chronic insulin resistance.</li>
</ul>
<h3>Factors that Decrease HOMA-IR (Improve Sensitivity)</h3>
<ul>
<li><strong>Exercise (Resistance and Aerobic):</strong> Muscle contraction translocates GLUT4 receptors to the cell surface, markedly improving sensitivity.</li>
<li><strong>Weight Loss:</strong> Reducing visceral and hepatic fat lowers metabolic inflammatory cascades.</li>
<li><strong>Intermittent Fasting / Caloric Restriction:</strong> Lowers fasting insulin baselines dynamically.</li>
</ul>
<h2>Interpretation Guidelines</h2>
<ul>
<li>Rising HOMA-IR precedes overt hyperglycemia by years and flags prediabetes risk earlier than fasting glucose alone.</li>
<li>A value ≥2.5-3.0 in a non-diabetic adult suggests clinically meaningful insulin resistance warranting lifestyle intervention.</li>
<li>Pair with C-peptide where endogenous insulin secretion is in question.</li>
</ul>
<h2>Clinical Significance</h2>
<p>HOMA-IR predicts incident <a href="/garden/skipfix/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a>, <a href="/garden/skipfix/clinicalpattern/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a>, non-alcoholic fatty liver disease, and cardiovascular events. Elevated levels are specifically associated with:</p>
<ul>
<li><strong><a href="/garden/skipfix/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a></strong> — a predictive vector for future diagnosis and onset of clinical diabetes.</li>
<li><strong><a href="/garden/skipfix/clinicalpattern/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a></strong> — the core unifying physiological mechanism driving the syndrome's criteria.</li>
<li><strong><a href="/garden/skipfix/condition/nafld/" class="internal-link">NAFLD</a></strong> — drives hepatic lipogenesis and the pathogenesis of fatty liver disease.</li>
<li><strong>Polycystic Ovary Syndrome (PCOS)</strong> — insulin resistance is a major driver of hyperandrogenemia.</li>
<li><strong>Cardiovascular Disease</strong> — an independent risk factor for endothelial dysfunction.</li>
</ul>
<p>It is widely used as a response marker for interventions targeting <a href="/garden/skipfix/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a> — including weight loss, <a href="/garden/skipfix/intervention/time-restricted-eating/" class="internal-link">Time-Restricted Eating</a>, <a href="/garden/skipfix/intervention/exercise/" class="internal-link">Exercise</a>, and insulin-sensitizing agents such as <a href="/garden/skipfix/supplement/berberine/" class="internal-link">Berberine</a>.</p>
<h2>Strategies to Improve</h2>
<ol>
<li><strong>Exercise Programming:</strong> Structured resistance training (3-4×/week) combined with Zone 2 aerobic training.</li>
<li><strong>Nutritional Interventions:</strong> Low-glycemic, Mediterranean, or ketogenic dietary approaches to minimize insulin spikes.</li>
<li><strong>Supplementation:</strong> Evidence supports <a href="/garden/skipfix/supplement/berberine/" class="internal-link">Berberine</a>, <a href="/garden/skipfix/supplement/inositol/" class="internal-link">Inositol</a>, and <a href="/garden/skipfix/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a> as insulin sensitizers (see <code>affected_by_supplements</code> for per-supplement effect, magnitude, and evidence level).</li>
<li><strong>Sleep Hygiene:</strong> 7-8 hours of high-quality sleep to mitigate cortisol-induced glucose derangement.</li>
</ol>
<h2>Relationships</h2>
<h3>Indicates</h3>
<p>INDICATES::<a href="/garden/skipfix/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a></p>
<h3>Calculated From</h3>
<p>RELATED_TO::<a href="/garden/skipfix/biomarker/insulin-fasting/" class="internal-link">Insulin Fasting</a><br />
RELATED_TO::<a href="/garden/skipfix/biomarker/glucose-fasting/" class="internal-link">Glucose Fasting</a><br />
CORRELATED_WITH::<a href="/garden/skipfix/biomarker/c-peptide/" class="internal-link">C-Peptide</a><br />
CORRELATED_WITH::<a href="/garden/skipfix/labtest/adiponectin/" class="internal-link">Adiponectin</a></p>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/skipfix/organ/pancreas/" class="internal-link">Pancreas</a></p>
<h3>Predicts Risk</h3>
<p>PREDICTS_RISK::<a href="/garden/skipfix/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a><br />
PREDICTS_RISK::<a href="/garden/skipfix/clinicalpattern/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/skipfix/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/skipfix/clinicalpattern/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/skipfix/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/skipfix/condition/nafld/" class="internal-link">NAFLD</a></p>
<h3>Improved By Intervention</h3>
<p>IMPROVED_BY_INTERVENTION::<a href="/garden/skipfix/intervention/time-restricted-eating/" class="internal-link">Time-Restricted Eating</a><br />
IMPROVED_BY_INTERVENTION::<a href="/garden/skipfix/intervention/exercise/" class="internal-link">Exercise</a></p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/garden/skipfix/supplement/berberine/" class="internal-link">Berberine</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/skipfix/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/skipfix/supplement/inositol/" class="internal-link">Inositol</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/skipfix/supplement/chromium/" class="internal-link">Chromium</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/skipfix/supplement/magnesium/" class="internal-link">Magnesium</a></p>
<blockquote>
<p>Per-supplement effect, magnitude, and evidence-level metadata for these five supplements is captured in the <code>affected_by_supplements</code> frontmatter above.</p>
</blockquote>
<h2>References</h2>
<ul>
<li>Wallace TM, Levy JC, Matthews DR. <em>Diabetes Care.</em> 2004;27(6):1487-1495 -- Use and abuse of HOMA modeling (PMID: 15161807)</li>
<li>Petersen MC, Shulman GI. <em>Physiol Rev.</em> 2018;98(4):2133-2223 -- Mechanisms of Insulin Action and Insulin Resistance (PMID: 30067154)</li>
<li>Salgado AL, et al. <em>Arq Bras Endocrinol Metabol.</em> 2010 -- Proposal for fasting insulin and HOMA-IR reference intervals based on an extensive Brazilian laboratory database (PMID: 20414343)</li>
<li>Kawada T. <em>J Clin Diagn Res.</em> 2014 -- Optimal reference interval for homeostasis model assessment of insulin resistance in a Japanese population (PMID: 24843516)</li>
<li>Gayoso-Diz P, et al. <em>BMC Endocr Disord.</em> 2013 -- Insulin resistance (HOMA-IR) cut-off values and the metabolic syndrome in a general adult population: effect of gender and age (PMID: 24131857)</li>
</ul>

{% endraw %}