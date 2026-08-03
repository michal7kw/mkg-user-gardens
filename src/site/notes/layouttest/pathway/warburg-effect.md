---
confidence_score: 0.9
created: 2026-05-27T12:00:00+0000
description: The Warburg effect (aerobic glycolysis) is the preferential conversion
  of glucose to lactate even in the presence of oxygen, characteristic of proliferating
  cells and most cancers. Rather than maximizing ATP yield, it provides rapid ATP
  and abundant biosynthetic precursors and redox cofactors to support cell growth.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: layouttest
id: warburg_effect
permalink: /garden/layouttest/pathway/warburg-effect/
provenance: curated
slug: warburg-effect
source: PubMed
tags:
- pathway
- metabolic
- cancer_metabolism
- glycolysis
- energy_metabolism
templateEngineOverride: njk
title: Warburg Effect
type: pathway
updated: '2026-08-03T23:57:23.112464Z'
---

{% raw %}
<h1>Warburg Effect</h1>
<h2>Overview</h2>
<p>The Warburg effect — also called aerobic glycolysis — describes the observation, first made by Otto Warburg in the 1920s, that cancer cells and other rapidly proliferating cells convert most of their <a href="/garden/layouttest/metabolite/glucose/" class="internal-link">Glucose</a> to <a href="/garden/layouttest/metabolite/lactate/" class="internal-link">Lactate</a> through <a href="/garden/layouttest/pathway/glycolysis/" class="internal-link">Glycolysis</a> even when oxygen is plentiful, rather than fully oxidizing it via <a href="/garden/layouttest/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a>. This is metabolically &quot;wasteful&quot; in ATP terms (2 ATP per glucose vs ~30+), which made it puzzling for decades.</p>
<p>The modern resolution is that proliferating cells are not optimizing for ATP yield but for <strong>biomass</strong>: high glycolytic flux supplies carbon for nucleotides, amino acids, and lipids, regenerates NADPH for redox balance, and produces ATP quickly. The effect is now recognized as a hallmark of cancer metabolism and is also engaged by activated immune cells.</p>
<h2>Key Features</h2>
<ul>
<li><strong>Upregulated glycolytic machinery:</strong> high expression of <a href="/garden/layouttest/protein/hexokinase/" class="internal-link">Hexokinase</a> 2, the M2 isoform of <a href="/garden/layouttest/protein/pyruvate-kinase/" class="internal-link">Pyruvate Kinase</a> (PKM2), and LDHA.</li>
<li><strong>Lactate export:</strong> <a href="/garden/layouttest/metabolite/pyruvate/" class="internal-link">Pyruvate</a> is reduced to lactate (regenerating NAD+ for continued glycolysis) and exported via MCT transporters, acidifying the microenvironment.</li>
<li><strong>Biosynthetic diversion:</strong> glycolytic intermediates feed the pentose phosphate pathway and serine/one-carbon metabolism.</li>
</ul>
<h2>Regulation</h2>
<p>Driven by oncogenic signaling (PI3K/Akt, MYC, HIF-1alpha) and a high-growth state; PKM2 acts as a regulated bottleneck that lets intermediates accumulate for biosynthesis. It is the metabolic counterpoint to the energy-efficient oxidative metabolism favored by quiescent, differentiated cells.</p>
<h2>Clinical Relevance</h2>
<p>The Warburg effect underlies FDG-PET imaging (tumors avidly take up labeled glucose) and is an active target for cancer therapeutics. Aberrant aerobic glycolysis is a feature of most <a href="/garden/layouttest/condition/cancer/" class="internal-link">Cancer</a> types.</p>
<h2>Relationships</h2>
<h3>Related Pathway</h3>
<p>RELATED_TO::<a href="/garden/layouttest/pathway/glycolysis/" class="internal-link">Glycolysis</a><br />
RELATED_TO::<a href="/garden/layouttest/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a></p>
<h3>Consumes / Produces</h3>
<p>METABOLIZES::<a href="/garden/layouttest/metabolite/glucose/" class="internal-link">Glucose</a><br />
PRODUCES::<a href="/garden/layouttest/metabolite/lactate/" class="internal-link">Lactate</a><br />
RELATED_TO::<a href="/garden/layouttest/metabolite/pyruvate/" class="internal-link">Pyruvate</a></p>
<h3>Key Enzymes</h3>
<p>ASSOCIATED_WITH::<a href="/garden/layouttest/protein/hexokinase/" class="internal-link">Hexokinase</a><br />
ASSOCIATED_WITH::<a href="/garden/layouttest/protein/pyruvate-kinase/" class="internal-link">Pyruvate Kinase</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/layouttest/condition/cancer/" class="internal-link">Cancer</a></p>
<h2>References</h2>
<ul>
<li>Vander Heiden MG, Cantley LC, Thompson CB. <em>Science.</em> 2009;324(5930):1029-1033 -- Understanding the Warburg effect: the metabolic requirements of cell proliferation (PMID: 19460998)</li>
<li>Liberti MV, Locasale JW. <em>Trends Biochem Sci.</em> 2016;41(3):211-218 -- The Warburg Effect: How Does it Benefit Cancer Cells? (PMID: 26778478)</li>
<li>Koppenol WH, Bounds PL, Dang CV. <em>Nat Rev Cancer.</em> 2011;11(5):325-337 -- Otto Warburg's contributions to current concepts of cancer metabolism (PMID: 21508971)</li>
</ul>

{% endraw %}