---
confidence_score: 0.85
created: '2026-06-21T16:03:52.281885Z'
description: Cortisol (AM) is the primary glucocorticoid hormone measured on a morning
  blood sample, reflecting hypothalamic-pituitary-adrenal (HPA) axis function and
  adrenal cortex output. It is central to the diagnosis of adrenal insufficiency and
  Cushing's syndrome and is interpreted against the marked diurnal rhythm that peaks
  shortly after waking.
dg-home: false
dg-publish: true
gardenUsername: siwy2
id: cortisol_am
permalink: /garden/siwy2/biomarker/cortisol-am/
slug: cortisol-am
source: dev_seeder
tags:
- biomarker
- endocrine
- hormones
- adrenal
- hpa_axis
- cortisol
templateEngineOverride: njk
title: Cortisol (AM)
type: biomarker
updated: '2026-06-21T16:03:52.281885Z'
---

{% raw %}
<h1>Cortisol (AM)</h1>
<h2>Overview</h2>
<p>Cortisol is the principal glucocorticoid hormone in humans, synthesized in the zona fasciculata of the adrenal cortex under the control of pituitary adrenocorticotropic hormone (ACTH), which is in turn driven by hypothalamic corticotropin-releasing hormone (CRH). This hypothalamic-pituitary-adrenal (HPA) axis governs the body's response to physiological and psychological stress, regulates gluconeogenesis, modulates immune and inflammatory activity, supports cardiovascular tone, and influences protein and fat metabolism.</p>
<p>Cortisol secretion follows a robust circadian rhythm, with concentrations peaking within the first 30-60 minutes after awakening and declining to a nadir around midnight. Because of this diurnal variation, a morning (AM) sample collected between approximately 6 and 8 AM provides the most clinically interpretable snapshot of basal adrenal reserve. A clearly normal or high AM cortisol effectively argues against adrenal insufficiency, whereas a low or borderline value typically prompts dynamic testing such as the ACTH (Synacthen) stimulation test.</p>
<p>Clinically, AM cortisol anchors the workup of two opposing disorders: glucocorticoid deficiency (primary Addison's disease, secondary hypopituitarism) and glucocorticoid excess (Cushing's syndrome from a pituitary adenoma, ectopic ACTH, or exogenous steroids). Interpretation must account for assay generation, concurrent estrogen or corticosteroid-binding globulin effects, acute illness, and the timing of the draw.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Population / Condition</th>
<th>Range</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal AM (6-8 AM)</td>
<td>6-23 mcg/dL</td>
<td>Reassuring basal adrenal reserve</td>
</tr>
<tr>
<td>Low</td>
<td>&lt;6 mcg/dL</td>
<td>Suggests adrenal insufficiency; confirm with stimulation test</td>
</tr>
<tr>
<td>High</td>
<td>&gt;23 mcg/dL</td>
<td>Suggests Cushing's syndrome or acute stress; confirm with 24-h or dynamic testing</td>
</tr>
</tbody>
</table>
<p>Note: ranges are assay- and laboratory-dependent. Evening cortisol is much lower than the AM value because of the diurnal rhythm, so timing of collection is essential for correct interpretation.</p>
<h2>Testing Information</h2>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Detail</th>
</tr>
</thead>
<tbody>
<tr>
<td>Measurement unit</td>
<td>mcg/dL (µg/dL)</td>
</tr>
<tr>
<td>Sample type</td>
<td>Blood (serum)</td>
</tr>
<tr>
<td>Collection timing</td>
<td><strong>Morning collection required (6-8 AM)</strong> to capture the diurnal peak</td>
</tr>
<tr>
<td>Fasting required</td>
<td>No</td>
</tr>
<tr>
<td>Confounders</td>
<td>Acute illness/stress, estrogen/oral contraceptives (raise binding globulin), exogenous steroids, shift work</td>
</tr>
<tr>
<td>Confirmatory testing</td>
<td>ACTH (Synacthen) stimulation, late-night salivary cortisol, 24-h urinary free cortisol, dexamethasone suppression</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<ul>
<li><strong>Increase</strong>: acute physical or psychological stress, critical illness, Cushing's syndrome, exogenous corticosteroids, estrogen/oral contraceptives (via raised binding globulin), pregnancy.</li>
<li><strong>Decrease</strong>: primary adrenal insufficiency (Addison's disease), secondary/tertiary adrenal insufficiency (hypopituitarism, suppressive long-term steroid use), adrenal hemorrhage, and sampling later in the day.</li>
</ul>
<h2>Clinical Significance</h2>
<p>A low AM cortisol with compatible symptoms (fatigue, weight loss, hypotension, hyponatremia, hyperpigmentation in primary disease) warrants urgent evaluation for adrenal insufficiency, as undiagnosed deficiency carries a risk of life-threatening adrenal crisis. Conversely, a persistently elevated cortisol that fails to suppress points toward Cushing's syndrome and its metabolic complications (central obesity, hypertension, glucose intolerance, osteoporosis). Because morning cortisol is HPA-axis dependent, it is frequently paired with ACTH measurement to localize the defect to the adrenal versus the pituitary level.</p>
<h2>Strategies to Improve</h2>
<p>When cortisol abnormalities reflect HPA-axis dysregulation rather than structural disease, evidence-supported lifestyle measures include consistent sleep-wake timing, stress-reduction practices, and avoidance of unnecessary exogenous steroids. Adaptogenic interventions have been studied in the context of stress-related cortisol elevation, though pathological deficiency or excess requires medical management (glucocorticoid replacement for insufficiency; targeted treatment of the underlying tumor or source for excess). Any suspected adrenal insufficiency should be evaluated by a clinician before intervention.</p>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/siwy2/organ/adrenal-glands/" class="internal-link">Adrenal Glands</a> (primary glucocorticoid reflecting HPA axis function and adrenal cortex output, Evidence Level 1a)</p>
<h2>References</h2>
<ul>
<li>PMID 41619159 — Morning cortisol and central adrenal insufficiency: new thresholds from low-dose ACTH test and second-generation assay.</li>
<li>PMID 41975776 — New Cortisol Thresholds for the Diagnosis of Adrenal Insufficiency Using the Low-Dose Synacthen Test in Children on Long-Term Corticosteroids: A North African Pilot Study.</li>
<li>PMID 42109738 — HPA axis function during adjunctive high-dose dexamethasone use in chemotherapy: a prospective pilot study.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Cortisol (AM)]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}