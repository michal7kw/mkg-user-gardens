---
confidence_score: 0.92
created: 2026-03-28T12:00:00+0000
description: Family of FAD-dependent enzymes catalyzing the first step of each beta-oxidation
  cycle. Introduces a trans double bond in the fatty acyl-CoA chain, producing enoyl-CoA
  and transferring electrons to the ETC via ETF/ETFQO.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: testuser104c536ad
id: acyl_coa_dehydrogenase
last_modified: 2026-06-23T00:00:00+0000
permalink: /garden/testuser104c536ad/protein/acyl-coa-dehydrogenase/
provenance: curated
slug: acyl-coa-dehydrogenase
source: Manual
tags:
- protein
- enzyme
- beta-oxidation
- energy-metabolism
templateEngineOverride: njk
title: Acyl-CoA Dehydrogenase
type: protein
updated: 2026-06-23T00:00:00+0000
---

{% raw %}
<h1>Acyl-CoA Dehydrogenase</h1>
<h2>Overview</h2>
<p>Acyl-CoA dehydrogenases (ACADs) catalyze the first reaction of each <a href="/garden/testuser104c536ad/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a> cycle, oxidizing <a href="/garden/testuser104c536ad/metabolite/fatty-acyl-coa/" class="internal-link">Fatty Acyl-CoA</a> to <a href="/garden/testuser104c536ad/metabolite/enoyl-coa/" class="internal-link">Enoyl-CoA</a> while producing <a href="/garden/testuser104c536ad/metabolite/fadh2/" class="internal-link">FADH2</a>. Multiple chain-length-specific isoforms ensure efficient processing of fatty acids of all lengths.</p>
<h2>Isoforms</h2>
<table>
<thead>
<tr>
<th>Isoform</th>
<th>Gene</th>
<th>Chain Length</th>
<th>Disease</th>
</tr>
</thead>
<tbody>
<tr>
<td>VLCAD</td>
<td>ACADVL</td>
<td>C14-C20</td>
<td>VLCAD deficiency</td>
</tr>
<tr>
<td>LCAD</td>
<td>ACADL</td>
<td>C12-C18</td>
<td>Rare</td>
</tr>
<tr>
<td>MCAD</td>
<td>ACADM</td>
<td>C6-C12</td>
<td>MCAD deficiency (most common FAOD)</td>
</tr>
<tr>
<td>SCAD</td>
<td>ACADS</td>
<td>C4-C6</td>
<td>SCAD deficiency</td>
</tr>
</tbody>
</table>
<h2>Mechanism of Action</h2>
<ul>
<li><strong>Oxidation</strong>: Fatty acyl-CoA → trans-Δ2-<a href="/garden/testuser104c536ad/metabolite/enoyl-coa/" class="internal-link">Enoyl-CoA</a> (introduces C2=C3 double bond)</li>
<li><strong>Electron transfer</strong>: FAD → FADH2 → ETF → ETFQO → ubiquinone pool → <a href="/garden/testuser104c536ad/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a></li>
<li><strong>Each cycle</strong>: Produces 1 FADH2 (≈1.5 ATP via ETC)</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>MCAD deficiency</strong> is the most common fatty acid oxidation disorder (1:10,000-20,000), presenting with hypoketotic hypoglycemia during fasting</li>
<li>Newborn screening detects MCAD deficiency via acylcarnitine profiling (elevated C8)</li>
<li><a href="/garden/testuser104c536ad/supplement/l-carnitine/" class="internal-link">L-Carnitine</a> and avoidance of fasting are mainstays of treatment</li>
</ul>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/testuser104c536ad/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h3>Catalyzes</h3>
<p>CATALYZES::<a href="/garden/testuser104c536ad/metabolite/fatty-acyl-coa/" class="internal-link">Fatty Acyl-CoA</a><br />
CATALYZES::<a href="/garden/testuser104c536ad/metabolite/enoyl-coa/" class="internal-link">Enoyl-CoA</a></p>
<h3>Participates In Pathway</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/testuser104c536ad/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a></p>
<h3>Participates In</h3>
<p>PARTICIPATES_IN::<a href="/garden/testuser104c536ad/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a></p>
<h3>Produces</h3>
<p>PRODUCES::<a href="/garden/testuser104c536ad/metabolite/fadh2/" class="internal-link">FADH2</a></p>
<h2>References</h2>
<ul>
<li>UniProt Consortium. Nucleic Acids Res. 2023;51(D1):D523-D531. UniProt (PMID: 36408955)</li>
<li>Uhlén M, et al. Science. 2015;347(6220):1260419. The Human Protein Atlas (PMID: 25613900)</li>
</ul>

{% endraw %}