---
confidence_score: 0.0
created: '2026-06-13T17:46:58.984383Z'
dg-home: false
dg-publish: true
gardenUsername: demo_admin
id: cortisol_am
permalink: /garden/demo_admin/biomarker/cortisol-am/
slug: cortisol-am
source: dev_seeder
tags:
- biomarker
templateEngineOverride: njk
title: Cortisol (AM)
type: biomarker
updated: '2026-06-13T17:46:58.984383Z'
---

{% raw %}
<h1>Cortisol (AM)</h1>
<h2>Overview</h2>
<p>No description available.</p>
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
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/demo_admin/organ/adrenal-glands/" class="internal-link">Adrenal Glands</a> (primary glucocorticoid reflecting HPA axis function and adrenal cortex output, Evidence Level 1a)</p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Cortisol (AM)]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}