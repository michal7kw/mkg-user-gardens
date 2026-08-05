---
confidence_score: 0.9
created: 2026-05-27T12:00:00+0000
description: NADPH (reduced nicotinamide adenine dinucleotide phosphate) is the cell's
  principal electron donor for reductive biosynthesis and antioxidant defense. Produced
  mainly by the pentose phosphate pathway, it regenerates reduced glutathione and
  thioredoxin and supplies reducing power for fatty-acid and nucleotide synthesis.
  It is functionally distinct from the catabolic carrier NADH.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: testuser1dad5a885
id: nadph
permalink: /garden/testuser1dad5a885/metabolite/nadph/
provenance: curated
pubchem_id: '5884'
slug: nadph
source: PubMed
tags:
- metabolite
- redox
- antioxidant
- energy_metabolism
- biosynthesis
templateEngineOverride: njk
title: NADPH
type: metabolite
updated: '2026-08-05T02:10:28.209355Z'
---

{% raw %}
<h1>NADPH</h1>
<h2>Overview</h2>
<p>NADPH is the reduced, phosphorylated form of nicotinamide adenine dinucleotide phosphate — the cell's dedicated currency of <strong>reductive power</strong>. Although chemically almost identical to <a href="/garden/testuser1dad5a885/metabolite/nadh/" class="internal-link">NADH</a>, the extra 2'-phosphate lets enzymes distinguish the two pools and keep them functionally separate: NADH drives catabolic ATP production through the <a href="/garden/testuser1dad5a885/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a>, whereas NADPH drives <em>anabolism and protection</em>. Cells maintain NADPH in a highly reduced state (high NADPH/NADP+ ratio) precisely so it can donate electrons to biosynthesis and antioxidant systems.</p>
<p>Its two great jobs are reductive biosynthesis (fatty acids, cholesterol, nucleotides) and antioxidant defense — NADPH is the ultimate electron source that regenerates reduced <a href="/garden/testuser1dad5a885/supplement/glutathione/" class="internal-link">Glutathione</a> and thioredoxin, the systems that neutralize <a href="/garden/testuser1dad5a885/metabolite/reactive-oxygen-species/" class="internal-link">Reactive Oxygen Species</a>. Paradoxically, NADPH also fuels NADPH oxidases that <em>generate</em> ROS for signaling, placing it at the center of redox balance.</p>
<h2>Chemical Properties</h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Molecular Formula</td>
<td>C21H30N7O17P3</td>
</tr>
<tr>
<td>Molecular Weight</td>
<td>745.4 g/mol</td>
</tr>
<tr>
<td>PubChem CID</td>
<td>5884</td>
</tr>
<tr>
<td>Oxidized form</td>
<td>NADP+</td>
</tr>
</tbody>
</table>
<h2>Biochemical Role</h2>
<ul>
<li><strong>Main source:</strong> the oxidative branch of the <a href="/garden/testuser1dad5a885/pathway/pentose-phosphate-pathway/" class="internal-link">Pentose Phosphate Pathway</a> (G6PD, the rate-limiting and most important NADPH-producing enzyme); also malic enzyme and isocitrate dehydrogenase.</li>
<li><strong>Antioxidant regeneration:</strong> reduces oxidized glutathione (GSSG → 2 GSH) via glutathione reductase, sustaining the cell's primary ROS-detoxifying buffer (see <a href="/garden/testuser1dad5a885/pathway/glutathione-metabolism/" class="internal-link">Glutathione Metabolism</a>).</li>
<li><strong>Reductive biosynthesis:</strong> supplies electrons for fatty-acid and cholesterol synthesis.</li>
</ul>
<h2>Clinical Significance</h2>
<p>G6PD deficiency — the most common human enzyme defect — limits NADPH supply in red cells, causing hemolysis under oxidative stress. More broadly, NADPH availability sets the ceiling on antioxidant capacity, linking it directly to <a href="/garden/testuser1dad5a885/condition/oxidative-stress/" class="internal-link">Oxidative Stress</a> and to redox-driven disease.</p>
<h2>Relationships</h2>
<h3>Produced By Pathway</h3>
<p>PARTICIPATES_IN::<a href="/garden/testuser1dad5a885/pathway/pentose-phosphate-pathway/" class="internal-link">Pentose Phosphate Pathway</a><br />
PARTICIPATES_IN::<a href="/garden/testuser1dad5a885/pathway/glutathione-metabolism/" class="internal-link">Glutathione Metabolism</a></p>
<h3>Regenerates Antioxidant</h3>
<p>RELATED_TO::<a href="/garden/testuser1dad5a885/supplement/glutathione/" class="internal-link">Glutathione</a></p>
<h3>Redox Cofactor</h3>
<p>RELATED_TO::<a href="/garden/testuser1dad5a885/metabolite/nadh/" class="internal-link">NADH</a><br />
RELATED_TO::<a href="/garden/testuser1dad5a885/metabolite/nad/" class="internal-link">NAD+</a></p>
<h3>Counters / Generates</h3>
<p>ASSOCIATED_WITH::<a href="/garden/testuser1dad5a885/metabolite/reactive-oxygen-species/" class="internal-link">Reactive Oxygen Species</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser1dad5a885/condition/oxidative-stress/" class="internal-link">Oxidative Stress</a></p>
<h2>References</h2>
<ul>
<li>Schieber M, Chandel NS. <em>Curr Biol.</em> 2014;24(10):R453-R462 -- ROS function in redox signaling and oxidative stress (PMID: 24845678)</li>
<li>Sies H, Jones DP. <em>Nat Rev Mol Cell Biol.</em> 2020;21(7):363-383 -- Reactive oxygen species (ROS) as pleiotropic physiological signalling agents (PMID: 32231263)</li>
</ul>

{% endraw %}