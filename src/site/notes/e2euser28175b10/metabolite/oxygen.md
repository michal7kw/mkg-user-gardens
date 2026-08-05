---
confidence_score: 0.95
created: 2026-06-17T12:00:00+0000
description: Molecular oxygen (O2) is the terminal electron acceptor of the mitochondrial
  electron transport chain. At Complex IV (cytochrome c oxidase) it undergoes a four-electron
  reduction to water, the final step of aerobic respiration that makes sustained oxidative
  phosphorylation and high-yield ATP production possible.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: e2euser28175b10
id: oxygen
permalink: /garden/e2euser28175b10/metabolite/oxygen/
provenance: curated
pubchem_id: '977'
slug: oxygen
source: Manual
tags:
- metabolite
- electron_acceptor
- respiration
- mitochondrial
- energy_metabolism
templateEngineOverride: njk
title: Oxygen
type: metabolite
updated: '2026-08-05T03:39:08.928000Z'
---

{% raw %}
<h1>Oxygen</h1>
<h2>Overview</h2>
<p>Molecular oxygen (O2) is the terminal electron acceptor of the mitochondrial <a href="/garden/e2euser28175b10/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a> and the defining requirement of aerobic metabolism. After electrons have passed through Complexes I–IV, they are ultimately handed to O2 at <a href="/garden/e2euser28175b10/protein/complex-iv/" class="internal-link">Complex IV</a> (cytochrome c oxidase), which reduces it to <a href="/garden/e2euser28175b10/metabolite/water/" class="internal-link">Water</a>. This final step keeps the entire chain oxidized and &quot;pulling,&quot; enabling the proton pumping that powers <a href="/garden/e2euser28175b10/protein/atp-synthase/" class="internal-link">ATP Synthase</a> during <a href="/garden/e2euser28175b10/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a>.</p>
<p>Because O2 is the obligate final acceptor, oxygen availability sets a hard ceiling on oxidative ATP production. When O2 is limiting, electron flow stalls, NADH and FADH2 accumulate, and cells shift toward anaerobic glycolysis and <a href="/garden/e2euser28175b10/metabolite/lactate/" class="internal-link">Lactate</a> generation.</p>
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
<td>O2</td>
</tr>
<tr>
<td>Molecular Weight</td>
<td>31.998 g/mol</td>
</tr>
<tr>
<td>PubChem CID</td>
<td>977</td>
</tr>
<tr>
<td>Standard reduction (O2/H2O)</td>
<td>+0.82 V</td>
</tr>
<tr>
<td>Role</td>
<td>Terminal electron acceptor</td>
</tr>
</tbody>
</table>
<p>The strongly positive reduction potential of the O2/H2O couple is what makes oxygen such an effective final acceptor: it sits at the bottom of the respiratory electron &quot;waterfall,&quot; maximizing the free energy released across the chain.</p>
<h2>Role in Cellular Respiration</h2>
<h3>Four-Electron Reduction at Complex IV</h3>
<p>O2 binds at the binuclear center (heme a3–CuB) of <a href="/garden/e2euser28175b10/protein/complex-iv/" class="internal-link">Complex IV</a>. Four electrons, delivered one at a time from <a href="/garden/e2euser28175b10/protein/cytochrome-c/" class="internal-link">Cytochrome C</a>, combine with four protons taken from the matrix to convert one O2 into two H2O. Complex IV performs this reduction without releasing the partially reduced, reactive intermediates (superoxide, peroxide) that would otherwise damage the cell.</p>
<h3>Coupling to ATP Synthesis</h3>
<p>By continually consuming electrons at the end of the chain, O2 reduction sustains proton pumping at Complexes I, III and IV. The resulting proton-motive force drives <a href="/garden/e2euser28175b10/protein/atp-synthase/" class="internal-link">ATP Synthase</a>, so oxygen consumption and ATP production are tightly coupled — the basis of clinical and research measures of mitochondrial respiration (oxygen consumption rate).</p>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Hypoxia / ischemia:</strong> Insufficient O2 delivery halts oxidative phosphorylation, depletes ATP, and drives lactic acidosis — central to ischemic injury in heart, brain, and muscle.</li>
<li><strong>Reactive oxygen species:</strong> A small fraction of O2 is incompletely reduced at Complexes I and III to superoxide, the precursor of <a href="/garden/e2euser28175b10/metabolite/reactive-oxygen-species/" class="internal-link">Reactive Oxygen Species</a>. This links oxygen metabolism to oxidative stress and mitochondrial damage.</li>
<li><strong>Mitochondrial disease:</strong> Defects in Complex IV reduce the cell's capacity to use oxygen even when delivery is adequate, producing exercise intolerance and elevated lactate.</li>
</ul>
<h2>Relationships</h2>
<h3>Participates In</h3>
<p>PARTICIPATES_IN::<a href="/garden/e2euser28175b10/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a><br />
PARTICIPATES_IN::<a href="/garden/e2euser28175b10/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a></p>
<h3>Converted To</h3>
<p>CONVERTED_TO::<a href="/garden/e2euser28175b10/metabolite/water/" class="internal-link">Water</a></p>
<h3>Consumed By</h3>
<p>CONSUMED_BY::<a href="/garden/e2euser28175b10/protein/complex-iv/" class="internal-link">Complex IV</a></p>
<h3>Related To</h3>
<p>RELATED_TO::<a href="/garden/e2euser28175b10/protein/cytochrome-c/" class="internal-link">Cytochrome C</a><br />
RELATED_TO::<a href="/garden/e2euser28175b10/metabolite/atp/" class="internal-link">ATP</a><br />
RELATED_TO::<a href="/garden/e2euser28175b10/metabolite/reactive-oxygen-species/" class="internal-link">Reactive Oxygen Species</a><br />
RELATED_TO::<a href="/garden/e2euser28175b10/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h2>References</h2>
<ul>
<li>Alberts B, et al. <em>Molecular Biology of the Cell</em> — Electron-Transport Chains and Their Proton Pumps (oxygen as terminal electron acceptor).</li>
<li>Nelson DL, Cox MM. <em>Lehninger Principles of Biochemistry</em> — Oxidative Phosphorylation; reduction of O2 to water at cytochrome c oxidase.</li>
</ul>

{% endraw %}