---
confidence_score: 0.9
created: 2026-04-01T00:00:00+0000
description: The metabolic process by which ATP is synthesized using the energy released
  from the electron transport chain. The proton gradient generated across the inner
  mitochondrial membrane drives ATP synthase (Complex V) to produce 30-38 ATP per
  glucose molecule. This is the primary source of cellular energy.
dg-home: false
dg-publish: true
gardenUsername: e2euserba73c50d
id: oxidative_phosphorylation
permalink: /garden/e2euserba73c50d/pathway/oxidative-phosphorylation/
provenance: curated
slug: oxidative-phosphorylation
source: Manual
tags:
- pathway
- mitochondria
- energy_production
- atp_synthesis
templateEngineOverride: njk
title: Oxidative Phosphorylation
type: pathway
updated: '2026-08-05T15:24:59.570267Z'
---

{% raw %}
<h1>Oxidative Phosphorylation</h1>
<h2>Description</h2>
<p>The metabolic process by which ATP is synthesized using the energy released from the electron transport chain. The proton gradient generated across the inner mitochondrial membrane drives ATP synthase (Complex V) to produce 30-38 ATP per glucose molecule. This is the primary source of cellular energy.</p>
<p>Oxidative phosphorylation is tightly coupled to the electron transport chain: electrons from NADH and FADH2 flow through Complexes I-IV, pumping protons into the intermembrane space. The resulting electrochemical gradient (proton motive force) drives protons back through ATP synthase, converting ADP + Pi to ATP.</p>
<h2>Key Components</h2>
<ul>
<li><strong><a href="/garden/e2euserba73c50d/protein/complex-i/" class="internal-link">Complex I</a></strong> (NADH dehydrogenase) -- accepts electrons from <a href="/garden/e2euserba73c50d/metabolite/nadh/" class="internal-link">NADH</a></li>
<li><strong><a href="/garden/e2euserba73c50d/protein/complex-ii/" class="internal-link">Complex II</a></strong> (Succinate dehydrogenase) -- accepts electrons from <a href="/garden/e2euserba73c50d/metabolite/fadh2/" class="internal-link">FADH2</a></li>
<li><strong><a href="/garden/e2euserba73c50d/protein/complex-iii/" class="internal-link">Complex III</a></strong> (Cytochrome bc1) -- transfers electrons to <a href="/garden/e2euserba73c50d/protein/cytochrome-c/" class="internal-link">Cytochrome C</a></li>
<li><strong><a href="/garden/e2euserba73c50d/protein/complex-iv/" class="internal-link">Complex IV</a></strong> (Cytochrome c oxidase) -- final electron transfer to <a href="/garden/e2euserba73c50d/metabolite/oxygen/" class="internal-link">Oxygen</a></li>
<li><strong><a href="/garden/e2euserba73c50d/protein/atp-synthase/" class="internal-link">ATP Synthase</a></strong> (Complex V) -- synthesizes <a href="/garden/e2euserba73c50d/metabolite/atp/" class="internal-link">ATP</a> from the proton gradient</li>
</ul>
<h2>Mechanism / Step Sequence</h2>
<p>Oxidative phosphorylation couples the <a href="/garden/e2euserba73c50d/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a> (ETC) to ATP synthesis across the inner <a href="/garden/e2euserba73c50d/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a>l membrane via chemiosmosis:</p>
<ol>
<li><strong>Electron entry</strong>: <a href="/garden/e2euserba73c50d/metabolite/nadh/" class="internal-link">NADH</a> donates electrons to <a href="/garden/e2euserba73c50d/protein/complex-i/" class="internal-link">Complex I</a>; <a href="/garden/e2euserba73c50d/metabolite/fadh2/" class="internal-link">FADH2</a> (from <a href="/garden/e2euserba73c50d/protein/complex-ii/" class="internal-link">Complex II</a>/succinate dehydrogenase) donates electrons at a lower energy level.</li>
<li><strong>Mobile carrier (coenzyme Q)</strong>: Electrons pass to ubiquinone (<a href="/garden/e2euserba73c50d/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a>), the lipid-soluble shuttle that ferries electrons from Complexes I and II to <a href="/garden/e2euserba73c50d/protein/complex-iii/" class="internal-link">Complex III</a>.</li>
<li><strong>Cytochrome c transfer</strong>: <a href="/garden/e2euserba73c50d/protein/complex-iii/" class="internal-link">Complex III</a> passes electrons to the mobile carrier <a href="/garden/e2euserba73c50d/protein/cytochrome-c/" class="internal-link">Cytochrome C</a>, which delivers them to <a href="/garden/e2euserba73c50d/protein/complex-iv/" class="internal-link">Complex IV</a>.</li>
<li><strong>Oxygen reduction</strong>: <a href="/garden/e2euserba73c50d/protein/complex-iv/" class="internal-link">Complex IV</a> transfers electrons to molecular <a href="/garden/e2euserba73c50d/metabolite/oxygen/" class="internal-link">Oxygen</a>, the terminal electron acceptor, reducing it to <a href="/garden/e2euserba73c50d/metabolite/water/" class="internal-link">Water</a>.</li>
<li><strong>Proton pumping</strong>: Complexes I, III, and IV pump protons into the intermembrane space, building an electrochemical <strong>proton-motive force</strong>.</li>
<li><strong>Chemiosmotic synthesis</strong>: Protons flow back through <a href="/garden/e2euserba73c50d/protein/atp-synthase/" class="internal-link">ATP Synthase</a>, whose rotary mechanism phosphorylates <a href="/garden/e2euserba73c50d/metabolite/adp/" class="internal-link">ADP</a> to <a href="/garden/e2euserba73c50d/metabolite/atp/" class="internal-link">ATP</a>.</li>
</ol>
<p>Approximately 2.5 <a href="/garden/e2euserba73c50d/metabolite/atp/" class="internal-link">ATP</a> are produced per <a href="/garden/e2euserba73c50d/metabolite/nadh/" class="internal-link">NADH</a> and 1.5 per <a href="/garden/e2euserba73c50d/metabolite/fadh2/" class="internal-link">FADH2</a>, yielding the bulk of cellular ATP (~30-34 per glucose when combined with <a href="/garden/e2euserba73c50d/pathway/glycolysis/" class="internal-link">Glycolysis</a> and the <a href="/garden/e2euserba73c50d/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a>).</p>
<h2>Regulation</h2>
<ul>
<li><strong>Respiratory control</strong>: The rate of oxidative phosphorylation is governed largely by the availability of <a href="/garden/e2euserba73c50d/metabolite/adp/" class="internal-link">ADP</a> (acceptor control) — high ADP/ATP ratios accelerate flux to meet energy demand.</li>
<li><strong>Substrate supply</strong>: Delivery of reducing equivalents (<a href="/garden/e2euserba73c50d/metabolite/nadh/" class="internal-link">NADH</a>, <a href="/garden/e2euserba73c50d/metabolite/fadh2/" class="internal-link">FADH2</a>) from the <a href="/garden/e2euserba73c50d/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a> and <a href="/garden/e2euserba73c50d/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a> sets the upper limit of electron flow.</li>
<li><strong>Oxygen dependence</strong>: Because <a href="/garden/e2euserba73c50d/metabolite/oxygen/" class="internal-link">Oxygen</a> is the obligate terminal electron acceptor, hypoxia halts the chain and forces a shift to anaerobic <a href="/garden/e2euserba73c50d/pathway/glycolysis/" class="internal-link">Glycolysis</a>.</li>
<li><strong>Uncoupling</strong>: Proton leak (e.g., via uncoupling proteins or chemical uncouplers) dissipates the gradient as heat, reducing ATP yield without stopping electron flow.</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Mitochondrial diseases</strong> (e.g., MELAS, Leigh syndrome) arise from mutations in OXPHOS complex subunits, impairing <a href="/garden/e2euserba73c50d/metabolite/atp/" class="internal-link">ATP</a> production in high-demand tissues (brain, muscle, heart).</li>
<li>Many drugs and toxins act here: cyanide and carbon monoxide inhibit <a href="/garden/e2euserba73c50d/protein/complex-iv/" class="internal-link">Complex IV</a>; rotenone blocks <a href="/garden/e2euserba73c50d/protein/complex-i/" class="internal-link">Complex I</a>; oligomycin blocks <a href="/garden/e2euserba73c50d/protein/atp-synthase/" class="internal-link">ATP Synthase</a>.</li>
<li><a href="/garden/e2euserba73c50d/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a> supplementation is used to support electron transport in primary CoQ10 deficiency and statin-associated myopathy.</li>
</ul>
<h2>Relationships</h2>
<h3>Enzymes / Complexes</h3>
<p>HAS_ENZYME::<a href="/garden/e2euserba73c50d/protein/complex-i/" class="internal-link">Complex I</a><br />
HAS_ENZYME::<a href="/garden/e2euserba73c50d/protein/complex-iii/" class="internal-link">Complex III</a><br />
HAS_ENZYME::<a href="/garden/e2euserba73c50d/protein/complex-iv/" class="internal-link">Complex IV</a><br />
HAS_ENZYME::<a href="/garden/e2euserba73c50d/protein/atp-synthase/" class="internal-link">ATP Synthase</a></p>
<h3>Products</h3>
<p>PRODUCES::<a href="/garden/e2euserba73c50d/metabolite/atp/" class="internal-link">ATP</a><br />
PRODUCES::<a href="/garden/e2euserba73c50d/metabolite/water/" class="internal-link">Water</a></p>
<h3>Pathway Connections</h3>
<p>DOWNSTREAM_OF::<a href="/garden/e2euserba73c50d/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a><br />
DOWNSTREAM_OF::<a href="/garden/e2euserba73c50d/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a><br />
LOCATED_IN::<a href="/garden/e2euserba73c50d/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h3>Substrates &amp; Cofactors</h3>
<p>REQUIRES_COFACTOR::<a href="/garden/e2euserba73c50d/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a><br />
RELATED_TO::<a href="/garden/e2euserba73c50d/metabolite/oxygen/" class="internal-link">Oxygen</a><br />
RELATED_TO::<a href="/garden/e2euserba73c50d/metabolite/nadh/" class="internal-link">NADH</a><br />
RELATED_TO::<a href="/garden/e2euserba73c50d/metabolite/fadh2/" class="internal-link">FADH2</a><br />
RELATED_TO::<a href="/garden/e2euserba73c50d/protein/cytochrome-c/" class="internal-link">Cytochrome C</a></p>
<h2>References</h2>
<ul>
<li>Nelson DL, Cox MM. <em>Lehninger Principles of Biochemistry</em> — Oxidative Phosphorylation and chemiosmotic coupling.</li>
<li>Alberts B, et al. <em>Molecular Biology of the Cell</em> — mitochondria and ATP generation.</li>
</ul>

{% endraw %}