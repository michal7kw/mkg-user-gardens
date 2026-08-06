---
confidence_score: 0.9
created: 2026-04-01T00:00:00+0000
description: The metabolic pathway that converts glucose into pyruvate, generating
  2 ATP and 2 NADH per glucose molecule. Occurs in the cytoplasm and is the first
  stage of both aerobic and anaerobic cellular respiration. Rate-limiting enzymes
  include hexokinase, phosphofructokinase-1 (PFK-1), and pyruvate kinase.
dg-home: false
dg-publish: true
gardenUsername: testuser184884fdf
id: glycolysis
permalink: /garden/testuser184884fdf/pathway/glycolysis/
provenance: curated
slug: glycolysis
source: Manual
tags:
- pathway
- metabolism
- energy_production
- glucose
- cytoplasm
templateEngineOverride: njk
title: Glycolysis
type: pathway
updated: '2026-08-06T02:31:56.468488Z'
---

{% raw %}
<h1>Glycolysis</h1>
<h2>Description</h2>
<p>The metabolic pathway that converts glucose into pyruvate, generating 2 ATP and 2 NADH per glucose molecule. Occurs in the cytoplasm and is the first stage of both aerobic and anaerobic cellular respiration. Rate-limiting enzymes include hexokinase, phosphofructokinase-1 (PFK-1), and pyruvate kinase.</p>
<p>Under aerobic conditions, pyruvate enters the mitochondria via the pyruvate dehydrogenase complex to feed the TCA cycle. Under anaerobic conditions, pyruvate is converted to lactate by lactate dehydrogenase, regenerating NAD+ for continued glycolysis.</p>
<h2>Key Metabolites</h2>
<ul>
<li><strong><a href="/garden/testuser184884fdf/metabolite/glucose/" class="internal-link">Glucose</a></strong> -- starting substrate</li>
<li><strong><a href="/garden/testuser184884fdf/metabolite/glucose-6-phosphate/" class="internal-link">Glucose-6-Phosphate</a></strong> -- first committed step (hexokinase product)</li>
<li><strong><a href="/garden/testuser184884fdf/metabolite/fructose-6-phosphate/" class="internal-link">Fructose-6-Phosphate</a></strong> -- substrate of phosphofructokinase</li>
<li><strong><a href="/garden/testuser184884fdf/metabolite/fructose-16-bisphosphate/" class="internal-link">Fructose-1,6-Bisphosphate</a></strong> -- PFK-1 product (committed to glycolysis)</li>
<li><strong><a class="internal-link is-unresolved" href="/404">Glyceraldehyde-3-Phosphate</a></strong> -- triose marking the start of the payoff phase</li>
<li><strong><a href="/garden/testuser184884fdf/metabolite/pyruvate/" class="internal-link">Pyruvate</a></strong> -- end product</li>
<li><strong><a href="/garden/testuser184884fdf/metabolite/lactate/" class="internal-link">Lactate</a></strong> -- anaerobic end product</li>
</ul>
<h2>Mechanism / Step Sequence</h2>
<p>Glycolysis proceeds in two phases over ten enzymatic steps in the cytosol:</p>
<p><strong>Investment phase (consumes 2 ATP):</strong></p>
<ol>
<li><a href="/garden/testuser184884fdf/metabolite/glucose/" class="internal-link">Glucose</a> → <a href="/garden/testuser184884fdf/metabolite/glucose-6-phosphate/" class="internal-link">Glucose-6-Phosphate</a> — catalyzed by <a href="/garden/testuser184884fdf/protein/hexokinase/" class="internal-link">Hexokinase</a> (uses 1 <a href="/garden/testuser184884fdf/metabolite/atp/" class="internal-link">ATP</a>; requires <a href="/garden/testuser184884fdf/supplement/magnesium/" class="internal-link">Magnesium</a>).</li>
<li><a href="/garden/testuser184884fdf/metabolite/glucose-6-phosphate/" class="internal-link">Glucose-6-Phosphate</a> → <a href="/garden/testuser184884fdf/metabolite/fructose-6-phosphate/" class="internal-link">Fructose-6-Phosphate</a> — phosphoglucose isomerase.</li>
<li><a href="/garden/testuser184884fdf/metabolite/fructose-6-phosphate/" class="internal-link">Fructose-6-Phosphate</a> → <a href="/garden/testuser184884fdf/metabolite/fructose-16-bisphosphate/" class="internal-link">Fructose-1,6-Bisphosphate</a> — catalyzed by <a href="/garden/testuser184884fdf/protein/phosphofructokinase/" class="internal-link">Phosphofructokinase</a> (uses 1 <a href="/garden/testuser184884fdf/metabolite/atp/" class="internal-link">ATP</a>; <strong>rate-limiting, committed step</strong>).</li>
<li><a href="/garden/testuser184884fdf/metabolite/fructose-16-bisphosphate/" class="internal-link">Fructose-1,6-Bisphosphate</a> → two trioses (aldolase), interconverted to <a class="internal-link is-unresolved" href="/404">Glyceraldehyde-3-Phosphate</a>.</li>
</ol>
<p><strong>Payoff phase (produces 4 ATP + 2 NADH):</strong><br />
5. <a class="internal-link is-unresolved" href="/404">Glyceraldehyde-3-Phosphate</a> is oxidized by GAPDH, reducing <a href="/garden/testuser184884fdf/metabolite/nad/" class="internal-link">NAD+</a> → <a href="/garden/testuser184884fdf/metabolite/nadh/" class="internal-link">NADH</a> and forming 1,3-bisphosphoglycerate.<br />
6. Substrate-level phosphorylation yields <a href="/garden/testuser184884fdf/metabolite/atp/" class="internal-link">ATP</a> (phosphoglycerate kinase).<br />
7. Phosphoglycerate mutase and enolase convert the substrate to phosphoenolpyruvate.<br />
8. Phosphoenolpyruvate → <a href="/garden/testuser184884fdf/metabolite/pyruvate/" class="internal-link">Pyruvate</a> — catalyzed by <a href="/garden/testuser184884fdf/protein/pyruvate-kinase/" class="internal-link">Pyruvate Kinase</a>, yielding <a href="/garden/testuser184884fdf/metabolite/atp/" class="internal-link">ATP</a>.</p>
<p><strong>Net per glucose:</strong> 2 <a href="/garden/testuser184884fdf/metabolite/pyruvate/" class="internal-link">Pyruvate</a> + 2 <a href="/garden/testuser184884fdf/metabolite/atp/" class="internal-link">ATP</a> + 2 <a href="/garden/testuser184884fdf/metabolite/nadh/" class="internal-link">NADH</a>.</p>
<p>Under aerobic conditions, <a href="/garden/testuser184884fdf/metabolite/pyruvate/" class="internal-link">Pyruvate</a> enters the <a href="/garden/testuser184884fdf/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> and is oxidized by <a href="/garden/testuser184884fdf/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate Dehydrogenase</a> to acetyl-CoA, feeding the <a href="/garden/testuser184884fdf/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a>. Under anaerobic conditions, <a href="/garden/testuser184884fdf/metabolite/pyruvate/" class="internal-link">Pyruvate</a> → <a href="/garden/testuser184884fdf/metabolite/lactate/" class="internal-link">Lactate</a> regenerates <a href="/garden/testuser184884fdf/metabolite/nad/" class="internal-link">NAD+</a> to sustain flux.</p>
<h2>Regulation</h2>
<ul>
<li><strong><a href="/garden/testuser184884fdf/protein/phosphofructokinase/" class="internal-link">Phosphofructokinase</a> (PFK-1)</strong> is the principal rate-limiting and committed step. It is allosterically <strong>inhibited by <a href="/garden/testuser184884fdf/metabolite/atp/" class="internal-link">ATP</a> and <a href="/garden/testuser184884fdf/metabolite/citrate/" class="internal-link">Citrate</a></strong> (signals of energy/carbon sufficiency) and <strong>activated by ADP, AMP, and fructose-2,6-bisphosphate</strong>.</li>
<li><strong><a href="/garden/testuser184884fdf/protein/hexokinase/" class="internal-link">Hexokinase</a></strong> is feedback-inhibited by its product <a href="/garden/testuser184884fdf/metabolite/glucose-6-phosphate/" class="internal-link">Glucose-6-Phosphate</a>.</li>
<li><strong><a href="/garden/testuser184884fdf/protein/pyruvate-kinase/" class="internal-link">Pyruvate Kinase</a></strong> is activated by fructose-1,6-bisphosphate (feed-forward) and inhibited by <a href="/garden/testuser184884fdf/metabolite/atp/" class="internal-link">ATP</a>; the hepatic isoform is hormonally regulated.</li>
<li>All three regulatory kinases require <a href="/garden/testuser184884fdf/supplement/magnesium/" class="internal-link">Magnesium</a> as a cofactor for ATP handling.</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li>The <strong>Warburg effect</strong> describes the reliance of many tumors on aerobic glycolysis (producing <a href="/garden/testuser184884fdf/metabolite/lactate/" class="internal-link">Lactate</a> even with <a href="/garden/testuser184884fdf/metabolite/oxygen/" class="internal-link">Oxygen</a> available), a target of metabolic cancer therapeutics.</li>
<li>Inherited deficiencies of glycolytic enzymes (e.g., pyruvate kinase deficiency) cause hemolytic anemia, since erythrocytes depend entirely on glycolysis for <a href="/garden/testuser184884fdf/metabolite/atp/" class="internal-link">ATP</a>.</li>
<li>Glycolytic flux is central to insulin-stimulated glucose disposal; dysregulation contributes to hyperglycemia and metabolic disease.</li>
</ul>
<h2>Relationships</h2>
<h3>Enzymes</h3>
<p>HAS_ENZYME::<a href="/garden/testuser184884fdf/protein/hexokinase/" class="internal-link">Hexokinase</a><br />
HAS_ENZYME::<a href="/garden/testuser184884fdf/protein/phosphofructokinase/" class="internal-link">Phosphofructokinase</a><br />
HAS_ENZYME::<a href="/garden/testuser184884fdf/protein/pyruvate-kinase/" class="internal-link">Pyruvate Kinase</a></p>
<h3>Products</h3>
<p>PRODUCES::<a href="/garden/testuser184884fdf/metabolite/pyruvate/" class="internal-link">Pyruvate</a><br />
PRODUCES::<a href="/garden/testuser184884fdf/metabolite/atp/" class="internal-link">ATP</a><br />
PRODUCES::<a href="/garden/testuser184884fdf/metabolite/nadh/" class="internal-link">NADH</a></p>
<h3>Pathway Connections</h3>
<p>UPSTREAM_OF::<a href="/garden/testuser184884fdf/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a><br />
RELATED_TO::<a href="/garden/testuser184884fdf/pathway/gluconeogenesis/" class="internal-link">Gluconeogenesis</a><br />
RELATED_TO::<a href="/garden/testuser184884fdf/metabolite/lactate/" class="internal-link">Lactate</a><br />
RELATED_TO::<a href="/garden/testuser184884fdf/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate Dehydrogenase</a></p>
<h3>Regulation &amp; Cofactors</h3>
<p>REGULATED_BY::<a href="/garden/testuser184884fdf/protein/phosphofructokinase/" class="internal-link">Phosphofructokinase</a><br />
INHIBITED_BY::<a href="/garden/testuser184884fdf/metabolite/atp/" class="internal-link">ATP</a><br />
INHIBITED_BY::<a href="/garden/testuser184884fdf/metabolite/citrate/" class="internal-link">Citrate</a><br />
REQUIRES_COFACTOR::<a href="/garden/testuser184884fdf/supplement/magnesium/" class="internal-link">Magnesium</a></p>
<h2>References</h2>
<ul>
<li>Nelson DL, Cox MM. <em>Lehninger Principles of Biochemistry</em> — Glycolysis and its regulation.</li>
<li>Alberts B, et al. <em>Molecular Biology of the Cell</em> — energy conversion and central metabolism.</li>
</ul>

{% endraw %}