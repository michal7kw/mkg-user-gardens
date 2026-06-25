---
confidence_score: 0.0
created: '2026-06-15T07:14:43.935220Z'
description: Essential vitamin for neurological function and red blood cell formation
dg-home: false
dg-publish: true
evidence_level: 0
gardenUsername: k7w
id: vitamin_b12
permalink: /garden/k7w/biomarker/vitamin-b12/
pubchem_id: '5311498'
slug: vitamin-b12
source: dev_seeder
tags:
- biomarker
- supplement
- vitamin
- b_vitamin
- methylation
- neurological
- energy
templateEngineOverride: njk
title: Vitamin B12
type: biomarker
updated: '2026-06-15T07:14:43.935220Z'
---

{% raw %}
<h1>Vitamin B12</h1>
<h2>Overview</h2>
<p>Essential vitamin for neurological function and red blood cell formation</p>
<h2>Reference RangesReference ranges not available.</h2>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Not specified</li>
<li><strong>Sample Type</strong>: Not specified</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Not specified</li>
</ul>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/k7w/organ/blood/" class="internal-link">Blood</a><br />
INDICATES_ORGAN_HEALTH::<a href="/garden/k7w/organ/brain/" class="internal-link">Brain</a></p>
<h3>Interacts With</h3>
<p>INTERACTS_WITH::<a href="/garden/k7w/drug/metformin/" class="internal-link">METFORMIN</a></p>
<h3>May Improve Condition</h3>
<p>MAY_IMPROVE_CONDITION::<a href="/garden/k7w/condition/cognitive-dysfunction/" class="internal-link">Cognitive Dysfunction</a><br />
MAY_IMPROVE_CONDITION::<a href="/garden/k7w/condition/mthfr-gene-variants/" class="internal-link">MTHFR Gene Variants</a><br />
MAY_IMPROVE_CONDITION::<a href="/garden/k7w/condition/iron-deficiency-anemia/" class="internal-link">Iron Deficiency Anemia</a><br />
MAY_IMPROVE_CONDITION::<a href="/garden/k7w/condition/pernicious-anemia/" class="internal-link">Pernicious Anemia</a><br />
MAY_IMPROVE_CONDITION::<a href="/garden/k7w/condition/depression/" class="internal-link">Depression</a><br />
MAY_IMPROVE_CONDITION::<a href="/garden/k7w/condition/peripheral-neuropathy/" class="internal-link">Peripheral Neuropathy</a><br />
MAY_IMPROVE_CONDITION::<a href="/garden/k7w/condition/b-vitamin-deficiency/" class="internal-link">B Vitamin Deficiency</a></p>
<h3>Affects Biomarker</h3>
<p>AFFECTS_BIOMARKER::<a href="/garden/k7w/labtest/homocysteine/" class="internal-link">homocysteine</a><br />
AFFECTS_BIOMARKER::<a href="/garden/k7w/biomarker/mcv/" class="internal-link">Mcv</a><br />
AFFECTS_BIOMARKER::<a href="/garden/k7w/labtest/hemoglobin/" class="internal-link">hemoglobin</a></p>
<h3>Targets Biomarker</h3>
<p>TARGETS_BIOMARKER::<a href="/garden/k7w/labtest/homocysteine/" class="internal-link">homocysteine</a><br />
TARGETS_BIOMARKER::<a href="/garden/k7w/labtest/hemoglobin/" class="internal-link">hemoglobin</a></p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Vitamin B12]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}