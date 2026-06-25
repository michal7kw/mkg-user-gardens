---
confidence_score: 0.0
created: '2026-06-15T07:14:43.883378Z'
description: Intracellular magnesium — more accurate than serum magnesium
dg-home: false
dg-publish: true
gardenUsername: k7w
id: b0bf2d5c-0714-45aa-965b-7da3ecade7f2
permalink: /garden/k7w/biomarker/rbc-magnesium/
slug: rbc-magnesium
source: dev_seeder
tags:
- biomarker
templateEngineOverride: njk
title: RBC Magnesium
type: biomarker
updated: '2026-06-15T07:14:43.883378Z'
---

{% raw %}
<h1>RBC Magnesium</h1>
<h2>Overview</h2>
<p>Intracellular magnesium — more accurate than serum magnesium</p>
<h2>Reference RangesReference ranges not available.</h2>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Not specified</li>
<li><strong>Sample Type</strong>: Not specified</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Not specified</li>
</ul>
<h2>Relationships</h2>
<p>No relationships found.</p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[RBC Magnesium]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}