---
confidence_score: 0.0
created: 2026-01-18T16:48:42+0000
description: A range of liver conditions affecting people who drink little to no alcohol,
  characterized by too much fat stored in liver cells.
dg-home: false
dg-publish: true
gardenUsername: testuser162cda192
id: non_alcoholic_fatty_liver_disease
permalink: /garden/testuser162cda192/condition/non-alcoholic-fatty-liver-disease/
provenance: curated
slug: non-alcoholic-fatty-liver-disease
source: Manual
tags:
- condition
- gastroenterology
- metabolic
- liver
templateEngineOverride: njk
title: Non-alcoholic Fatty Liver Disease
type: condition
updated: '2026-08-20T06:57:49.861760Z'
---

{% raw %}
<h1>Non-alcoholic Fatty Liver Disease</h1>
<h2>Overview</h2>
<p>A range of liver conditions affecting people who drink little to no alcohol, characterized by too much fat stored in liver cells.</p>
<h2>Clinical Presentation</h2>
<h3>Symptoms</h3>
<ul>
<li>Usually asymptomatic</li>
<li>Fatigue</li>
<li>Pain in upper right abdomen</li>
<li>Hepatomegaly (enlarged liver)</li>
</ul>
<h2>Diagnostic Information</h2>
<h2>Risk Factors- Obesity</h2>
<ul>
<li>Type 2 Diabetes</li>
<li>Metabolic Syndrome</li>
<li>High cholesterol/triglycerides</li>
<li>Sleep apnea</li>
</ul>
<h2>Management</h2>
<h3>Interventions</h3>
<pre><code class="language-dataview">TABLE
    effectiveness AS &quot;Effectiveness&quot;,
    confidence_score AS &quot;Confidence&quot;
FROM [[Non-alcoholic Fatty Liver Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/testuser162cda192/condition/non-alcoholic-fatty-liver-disease/" class="internal-link">Non-alcoholic Fatty Liver Disease</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Non-alcoholic Fatty Liver Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Non-alcoholic Fatty Liver Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>References</h2>
<p>No references available.</p>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/testuser162cda192/condition/nafld/" class="internal-link">NAFLD</a></p>
<h3>Improved By Supplement</h3>
<p>IMPROVED_BY_SUPPLEMENT::<a href="/garden/testuser162cda192/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/testuser162cda192/supplement/vitamin-e/" class="internal-link">Vitamin E</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/testuser162cda192/supplement/berberine/" class="internal-link">Berberine</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/testuser162cda192/supplement/milk-thistle/" class="internal-link">Milk Thistle</a></p>
<h3>Improved By Intervention</h3>
<p>IMPROVED_BY_INTERVENTION::<a href="/garden/testuser162cda192/intervention/exercise/" class="internal-link">Exercise</a><br />
IMPROVED_BY_INTERVENTION::<a href="/garden/testuser162cda192/intervention/mediterranean-diet/" class="internal-link">Mediterranean Diet</a></p>

{% endraw %}