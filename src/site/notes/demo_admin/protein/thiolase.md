---
confidence_score: 0.92
created: '2026-06-13T17:47:02.384458Z'
description: Enzyme catalyzing the final thiolytic cleavage step of each beta-oxidation
  cycle. Cleaves 3-ketoacyl-CoA with CoA to release acetyl-CoA and a shortened acyl-CoA,
  which re-enters the cycle.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: demo_admin
id: thiolase
permalink: /garden/demo_admin/protein/thiolase/
slug: thiolase
source: Manual
tags:
- protein
- enzyme
- beta-oxidation
- energy-metabolism
templateEngineOverride: njk
title: Thiolase
type: protein
updated: '2026-06-13T17:47:02.384458Z'
---

{% raw %}
<h1>Thiolase (3-Ketoacyl-CoA Thiolase)</h1>
<h2>Overview</h2>
<p>Thiolase catalyzes the final step of each <a href="/garden/demo_admin/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a> cycle, cleaving <a href="/garden/demo_admin/metabolite/3-ketoacyl-coa/" class="internal-link">3-Ketoacyl-CoA</a> to release <a href="/garden/demo_admin/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a> and a fatty acyl-CoA chain shortened by two carbons. This completes the cycle and allows the shortened chain to re-enter the next round.</p>
<h2>Mechanism of Action</h2>
<ul>
<li><strong>Thiolytic cleavage</strong>: 3-Ketoacyl-CoA + CoA → <a href="/garden/demo_admin/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a> + acyl-CoA(n-2)</li>
<li><strong>Cycle restart</strong>: The shortened acyl-CoA returns to step 1 (<a href="/garden/demo_admin/protein/acyl-coa-dehydrogenase/" class="internal-link">Acyl-CoA Dehydrogenase</a>)</li>
<li><strong>Complete palmitate oxidation</strong>: 7 thiolase cleavages produce 8 acetyl-CoA from 16-carbon palmitate</li>
<li><strong>Acetyl-CoA fate</strong>: Enters <a href="/garden/demo_admin/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a> for complete oxidation, or ketogenesis in liver</li>
</ul>
<h2>Isoforms</h2>
<ul>
<li><strong>Mitochondrial thiolase (ACAA2)</strong>: Beta-oxidation in the matrix</li>
<li><strong>Peroxisomal thiolase (ACAA1)</strong>: Very long-chain fatty acid oxidation</li>
<li><strong>Cytosolic thiolase (ACAT1)</strong>: Acetoacetyl-CoA thiolase for ketone body metabolism</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li>Beta-ketothiolase (ACAT1) deficiency causes episodic ketoacidosis</li>
<li>The reaction is thermodynamically favorable in the thiolytic direction during beta-oxidation</li>
<li>Also participates in the reverse direction in ketone body synthesis (ketogenesis)</li>
</ul>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/demo_admin/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a><br />
RELATED::<a href="/garden/demo_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h3>Catalyzes</h3>
<p>CATALYZES::<a href="/garden/demo_admin/metabolite/3-ketoacyl-coa/" class="internal-link">3-Ketoacyl-CoA</a><br />
CATALYZES::<a href="/garden/demo_admin/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a></p>
<h3>Participates In</h3>
<p>PARTICIPATES_IN::<a href="/garden/demo_admin/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a></p>

{% endraw %}