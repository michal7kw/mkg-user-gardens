---
aliases:
- Cytochrome bc1
- Ubiquinol:Cytochrome c Oxidoreductase
confidence_score: 0.9
created: 2026-03-06T12:00:00+0000
description: Cytochrome bc1 complex, the third complex of the electron transport chain.
  Transfers electrons from ubiquinol to cytochrome c via the Q-cycle mechanism, pumping
  4 protons per pair of electrons across the inner mitochondrial membrane.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: e2eusere2cb41c4
id: complex_iii
last_modified: 2026-06-23T00:00:00+0000
permalink: /garden/e2eusere2cb41c4/protein/complex-iii/
provenance: curated
slug: complex-iii
source: Manual
tags:
- protein
- enzyme
- etc
- mitochondrial
templateEngineOverride: njk
title: Complex III
type: protein
updated: 2026-06-23T00:00:00+0000
---

{% raw %}
<h1>Complex III</h1>
<h2>Overview</h2>
<p>The cytochrome bc1 complex (ubiquinol:cytochrome c oxidoreductase), the third complex of the <a href="/garden/e2eusere2cb41c4/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a>. It transfers electrons from ubiquinol (reduced <a href="/garden/e2eusere2cb41c4/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a>) to <a href="/garden/e2eusere2cb41c4/protein/cytochrome-c/" class="internal-link">Cytochrome C</a> via the Q-cycle mechanism, pumping protons across the inner mitochondrial membrane in the process. Located in the inner membrane of the <a href="/garden/e2eusere2cb41c4/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a>, Complex III is the convergence hub that collects electrons delivered to the ubiquinone pool by both <a href="/garden/e2eusere2cb41c4/protein/complex-i/" class="internal-link">Complex I</a> and <a href="/garden/e2eusere2cb41c4/protein/complex-ii/" class="internal-link">Complex II</a> and routes them onward to <a href="/garden/e2eusere2cb41c4/protein/complex-iv/" class="internal-link">Complex IV</a> as part of <a href="/garden/e2eusere2cb41c4/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a>.</p>
<h2>Mechanism of Action</h2>
<p>Complex III operates via the <strong>Q-cycle</strong>, an elegant mechanism that bifurcates each electron pair and effectively doubles the protons translocated:</p>
<ol>
<li><strong>Qo site oxidation.</strong> Ubiquinol (reduced <a href="/garden/e2eusere2cb41c4/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a>) binds at the Qo site near the intermembrane space and is oxidized, releasing 2 protons to the intermembrane space.</li>
<li><strong>High-potential branch.</strong> One electron passes to the Rieske iron-sulfur protein, then to cytochrome c1, and finally to <a href="/garden/e2eusere2cb41c4/protein/cytochrome-c/" class="internal-link">Cytochrome C</a>.</li>
<li><strong>Low-potential branch.</strong> The second electron passes through cytochromes bL and bH back to the matrix-facing Qi site, where it partially reduces a ubiquinone.</li>
<li><strong>Qi site reduction.</strong> After two turns of the cycle, a ubiquinone at the Qi site is fully reduced back to ubiquinol, taking up 2 protons from the matrix.</li>
</ol>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Electron donor</td>
<td>Ubiquinol (<a href="/garden/e2eusere2cb41c4/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a>)</td>
</tr>
<tr>
<td>Electron acceptor</td>
<td><a href="/garden/e2eusere2cb41c4/protein/cytochrome-c/" class="internal-link">Cytochrome C</a></td>
</tr>
<tr>
<td>Protons pumped</td>
<td>~4 H⁺ per pair of electrons</td>
</tr>
<tr>
<td>Redox cofactors</td>
<td>Rieske 2Fe-2S, cyt c1, cyt bL, cyt bH</td>
</tr>
</tbody>
</table>
<p>Over two rounds the Q-cycle oxidizes 2 ubiquinol, regenerates 1 ubiquinol, reduces 2 molecules of <a href="/garden/e2eusere2cb41c4/protein/cytochrome-c/" class="internal-link">Cytochrome C</a>, and translocates ~4 H⁺ to the intermembrane space.</p>
<h2>Role in the Electron Transport Chain</h2>
<p>Complex III is the central node linking the lipid-soluble carrier (<a href="/garden/e2eusere2cb41c4/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a>) to the water-soluble carrier (<a href="/garden/e2eusere2cb41c4/protein/cytochrome-c/" class="internal-link">Cytochrome C</a>). It receives the merged electron flux from <a href="/garden/e2eusere2cb41c4/protein/complex-i/" class="internal-link">Complex I</a> (originating from <a href="/garden/e2eusere2cb41c4/metabolite/nadh/" class="internal-link">NADH</a>) and <a href="/garden/e2eusere2cb41c4/protein/complex-ii/" class="internal-link">Complex II</a> (originating from <a href="/garden/e2eusere2cb41c4/metabolite/fadh2/" class="internal-link">FADH2</a>) and hands single electrons to <a href="/garden/e2eusere2cb41c4/protein/cytochrome-c/" class="internal-link">Cytochrome C</a>, which shuttles them to the terminal <a href="/garden/e2eusere2cb41c4/protein/complex-iv/" class="internal-link">Complex IV</a>. Its proton pumping adds to the gradient that drives <a href="/garden/e2eusere2cb41c4/protein/atp-synthase/" class="internal-link">ATP Synthase</a>.</p>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Mitochondrial disease.</strong> Complex III deficiency (e.g., BCS1L or MT-CYB mutations) causes encephalopathy, lactic acidosis, myopathy, and GRACILE syndrome.</li>
<li><strong>ROS generation.</strong> The Qo site is a major source of superoxide; electron leak here produces <a href="/garden/e2eusere2cb41c4/metabolite/reactive-oxygen-species/" class="internal-link">Reactive Oxygen Species</a> relevant to oxidative stress and aging.</li>
<li><strong>Pharmacology.</strong> Complex III is the target of antimalarial atovaquone and several agricultural strobilurin fungicides, which block the Qo site. Antimycin A blocks the Qi site.</li>
<li><strong>CoQ10 dependence.</strong> Because its substrate is ubiquinol, <a href="/garden/e2eusere2cb41c4/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a> status directly affects Complex III flux.</li>
</ul>
<h2>Relationships</h2>
<h3>Participates In</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/e2eusere2cb41c4/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a><br />
PARTICIPATES_IN_PATHWAY::<a href="/garden/e2eusere2cb41c4/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a></p>
<h3>Interacts With</h3>
<p>INTERACTS_WITH::<a href="/garden/e2eusere2cb41c4/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a><br />
INTERACTS_WITH::<a href="/garden/e2eusere2cb41c4/protein/cytochrome-c/" class="internal-link">Cytochrome C</a><br />
INTERACTS_WITH::<a href="/garden/e2eusere2cb41c4/protein/complex-i/" class="internal-link">Complex I</a><br />
INTERACTS_WITH::<a href="/garden/e2eusere2cb41c4/protein/complex-ii/" class="internal-link">Complex II</a><br />
INTERACTS_WITH::<a href="/garden/e2eusere2cb41c4/protein/complex-iv/" class="internal-link">Complex IV</a></p>
<h3>Located In</h3>
<p>LOCATED_IN::<a href="/garden/e2eusere2cb41c4/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h3>Related To</h3>
<p>RELATED_TO::<a href="/garden/e2eusere2cb41c4/metabolite/reactive-oxygen-species/" class="internal-link">Reactive Oxygen Species</a><br />
RELATED_TO::<a href="/garden/e2eusere2cb41c4/protein/atp-synthase/" class="internal-link">ATP Synthase</a></p>
<h2>References</h2>
<ul>
<li>UniProt Consortium. Nucleic Acids Res. 2023;51(D1):D523-D531. UniProt (PMID: 36408955)</li>
<li>Uhlén M, et al. Science. 2015;347(6220):1260419. The Human Protein Atlas (PMID: 25613900)</li>
</ul>

{% endraw %}