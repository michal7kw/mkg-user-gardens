---
aliases:
- IDH
- IDH1
- IDH2
- IDH3
confidence_score: 0.9
created: 2026-03-06T12:00:00+0000
description: Key regulatory enzyme of the TCA cycle that catalyzes the oxidative decarboxylation
  of isocitrate to alpha-ketoglutarate, producing NADH (IDH3) or NADPH (IDH1, IDH2)
  and CO2. Gain-of-function mutations in IDH1/IDH2 produce the oncometabolite 2-hydroxyglutarate
  in gliomas and AML.
dg-home: false
dg-publish: true
gardenUsername: testuser16cba4daa
id: isocitrate_dehydrogenase
permalink: /garden/testuser16cba4daa/protein/isocitrate-dehydrogenase/
provenance: curated
slug: isocitrate-dehydrogenase
source: Manual
tags:
- protein
- enzyme
- tca_cycle
- mitochondrial
templateEngineOverride: njk
title: Isocitrate Dehydrogenase
type: protein
updated: '2026-08-20T07:35:24.357310Z'
---

{% raw %}
<h1>Isocitrate Dehydrogenase</h1>
<h2>Overview</h2>
<p>Isocitrate dehydrogenase (IDH) is a key regulatory enzyme of the <a href="/garden/testuser16cba4daa/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a> that catalyzes the oxidative decarboxylation of <a class="internal-link is-unresolved" href="/404">Isocitrate</a> to <a href="/garden/testuser16cba4daa/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a>, releasing CO2 and reducing a nicotinamide cofactor. Three isoforms exist: the mitochondrial <strong>IDH3</strong> uses <a href="/garden/testuser16cba4daa/metabolite/nad/" class="internal-link">NAD+</a> (producing <a href="/garden/testuser16cba4daa/metabolite/nadh/" class="internal-link">NADH</a>) and is the dedicated TCA-cycle enzyme; <strong>IDH1</strong> (cytosolic/peroxisomal) and <strong>IDH2</strong> (mitochondrial) use NADP+ (producing <a href="/garden/testuser16cba4daa/metabolite/nadph/" class="internal-link">NADPH</a>). This is one of the principal flux-control points of the cycle, situated between <a href="/garden/testuser16cba4daa/protein/citrate-synthase/" class="internal-link">Citrate Synthase</a> upstream and the alpha-ketoglutarate dehydrogenase complex downstream.</p>
<h2>Mechanism of Action</h2>
<p>IDH3 catalyzes a two-step irreversible reaction. First, <a class="internal-link is-unresolved" href="/404">Isocitrate</a> is oxidized to the unstable intermediate oxalosuccinate, with reduction of <a href="/garden/testuser16cba4daa/metabolite/nad/" class="internal-link">NAD+</a> to <a href="/garden/testuser16cba4daa/metabolite/nadh/" class="internal-link">NADH</a>. Second, oxalosuccinate undergoes Mn²⁺/Mg²⁺-dependent β-decarboxylation, losing CO2 to yield <a href="/garden/testuser16cba4daa/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a>. The release of CO2 makes the overall reaction strongly exergonic and effectively irreversible, committing carbon to the oxidative arm of the cycle.</p>
<p>The NADP+-dependent isoforms (IDH1, IDH2) run a chemically analogous but reversible reaction, providing cytosolic and mitochondrial <a href="/garden/testuser16cba4daa/metabolite/nadph/" class="internal-link">NADPH</a> for biosynthesis and antioxidant defense (glutathione regeneration). As a control point, the TCA enzyme is allosterically <strong>activated</strong> by <a href="/garden/testuser16cba4daa/metabolite/adp/" class="internal-link">ADP</a> (and Ca²⁺), signalling a low-energy state and the need for more flux, and feedback-<strong>inhibited</strong> by <a href="/garden/testuser16cba4daa/metabolite/atp/" class="internal-link">ATP</a> and <a href="/garden/testuser16cba4daa/metabolite/nadh/" class="internal-link">NADH</a>, which report energy sufficiency.</p>
<h2>Role in Metabolism</h2>
<p>By producing <a href="/garden/testuser16cba4daa/metabolite/nadh/" class="internal-link">NADH</a> in the <a href="/garden/testuser16cba4daa/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a>l matrix, IDH3 feeds reducing equivalents into <a href="/garden/testuser16cba4daa/protein/complex-i/" class="internal-link">Complex I</a> of the <a href="/garden/testuser16cba4daa/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a>, driving <a href="/garden/testuser16cba4daa/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a> and ultimately <a href="/garden/testuser16cba4daa/metabolite/atp/" class="internal-link">ATP</a> synthesis at <a href="/garden/testuser16cba4daa/protein/atp-synthase/" class="internal-link">ATP Synthase</a>. The <a href="/garden/testuser16cba4daa/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a> it generates is both the next cycle intermediate and a major metabolic hub — a nitrogen acceptor in transamination, a substrate for dioxygenase enzymes (including epigenetic demethylases and HIF prolyl hydroxylases), and a node linking carbon and amino-acid metabolism. The NADPH-producing IDH1/IDH2 isoforms additionally sustain reductive biosynthesis and redox balance.</p>
<h2>Clinical Significance</h2>
<p>Gain-of-function (neomorphic) mutations in <strong>IDH1</strong> (commonly R132) and <strong>IDH2</strong> (R140/R172) confer a novel activity that reduces <a href="/garden/testuser16cba4daa/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a> to the <strong>oncometabolite 2-hydroxyglutarate (2-HG)</strong>. 2-HG competitively inhibits alpha-ketoglutarate-dependent dioxygenases, causing aberrant DNA and histone hypermethylation and blocking cellular differentiation. These mutations are recurrent drivers in gliomas, acute myeloid leukemia (AML), chondrosarcoma, and cholangiocarcinoma, and are important diagnostic and prognostic markers. Targeted mutant-IDH inhibitors (e.g., ivosidenib for IDH1, enasidenib for IDH2) are approved therapies that lower 2-HG and restore differentiation, making IDH a landmark example of precision metabolic oncology.</p>
<h2>Relationships</h2>
<h3>Catalyzes / Consumes / Produces</h3>
<p>CATALYZES::<a href="/garden/testuser16cba4daa/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a><br />
CONSUMES::<a class="internal-link is-unresolved" href="/404">Isocitrate</a><br />
PRODUCES::<a href="/garden/testuser16cba4daa/metabolite/nadh/" class="internal-link">NADH</a></p>
<h3>Participates In Pathway</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/testuser16cba4daa/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a></p>
<h3>Regulation</h3>
<p>ACTIVATED_BY::<a href="/garden/testuser16cba4daa/metabolite/adp/" class="internal-link">ADP</a><br />
INHIBITED_BY::<a href="/garden/testuser16cba4daa/metabolite/atp/" class="internal-link">ATP</a><br />
INHIBITED_BY::<a href="/garden/testuser16cba4daa/metabolite/nadh/" class="internal-link">NADH</a></p>
<h3>Localization / Related</h3>
<p>LOCATED_IN::<a href="/garden/testuser16cba4daa/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a><br />
RELATED_TO::<a href="/garden/testuser16cba4daa/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a><br />
INTERACTS_WITH::<a href="/garden/testuser16cba4daa/protein/complex-i/" class="internal-link">Complex I</a></p>
<h2>References</h2>
<ul>
<li>Nelson DL, Cox MM. <em>Lehninger Principles of Biochemistry</em> — The Citric Acid Cycle and its regulation.</li>
<li>Berg JM, Tymoczko JL, Stryer L. <em>Biochemistry</em> — Isocitrate dehydrogenase and oxidative decarboxylation.</li>
</ul>

{% endraw %}