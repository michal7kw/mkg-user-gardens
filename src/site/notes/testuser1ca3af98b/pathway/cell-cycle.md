---
aliases:
- Cell Cycle Pathway
- Cell Division Cycle
confidence_score: 0.9
created: '2026-08-19T04:21:08.823766Z'
description: The ordered sequence of events by which a cell duplicates its genome
  and divides into two daughter cells, progressing through G1, S (DNA synthesis),
  G2, and M (mitosis) phases under the control of cyclin-dependent kinases and checkpoints.
  Dysregulation that bypasses these checkpoints is a defining feature of cancer.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: testuser1ca3af98b
id: cell_cycle
permalink: /garden/testuser1ca3af98b/pathway/cell-cycle/
provenance: curated
slug: cell-cycle
source: Manual
tags:
- pathway
- biological_process
- cell_division
- cancer
- checkpoints
templateEngineOverride: njk
title: Cell Cycle
type: pathway
updated: '2026-08-19T04:21:08.823766Z'
---

{% raw %}
<h1>Cell Cycle</h1>
<h2>Overview</h2>
<p>The cell cycle is the highly regulated series of events through which a cell grows, replicates its DNA, and divides to produce two genetically identical daughter cells. It is divided into interphase — comprising G1 (growth and preparation), S (DNA synthesis), and G2 (growth and preparation for division) — and the mitotic (M) phase, in which the duplicated chromosomes are segregated and the cell physically divides (cytokinesis). Non-dividing cells exit into a quiescent G0 state.</p>
<p>Progression is driven by oscillating activity of cyclin-dependent kinases (CDKs) in complex with their regulatory cyclin partners, opposed by CDK inhibitors. Surveillance mechanisms called checkpoints (the G1/S restriction point, the intra-S and G2/M DNA-damage checkpoints, and the spindle-assembly checkpoint) halt progression until prior steps are completed correctly and any DNA damage is repaired, safeguarding genomic integrity.</p>
<h2>Key Regulators</h2>
<ul>
<li><strong>Cyclin-CDK complexes</strong>: Sequentially activated to drive each transition (cyclin D-CDK4/6, cyclin E-CDK2, cyclin A-CDK2, cyclin B-CDK1)</li>
<li><strong>Retinoblastoma protein (Rb)</strong>: Restrains entry into S phase until phosphorylated, releasing E2F transcription factors</li>
<li><strong>p53 (TP53)</strong>: The &quot;guardian of the genome&quot; — arrests the cycle or triggers apoptosis in response to DNA damage</li>
<li><strong>CDK inhibitors (p21, p16, p27)</strong>: Brake progression and enforce checkpoint arrest and senescence</li>
</ul>
<h2>Clinical Significance</h2>
<p>Loss of checkpoint control and unchecked proliferation are central to carcinogenesis: inactivation of tumor suppressors such as p53 and Rb and amplification of cyclins and CDKs allow cells to divide despite DNA damage. This makes the cell cycle a major therapeutic target — CDK4/6 inhibitors are now standard in certain breast cancers, and many chemotherapies act on cycling cells. Permanent cell-cycle exit (senescence) is also a hallmark of aging.</p>
<h2>Relationships</h2>
<h3>Regulated By</h3>
<p>REGULATED_BY::<a href="/garden/testuser1ca3af98b/protein/tp53/" class="internal-link">TP53</a></p>
<h3>Contributes To</h3>
<p>CONTRIBUTES_TO::<a href="/garden/testuser1ca3af98b/condition/cancer/" class="internal-link">Cancer</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/testuser1ca3af98b/pathway/apoptosis/" class="internal-link">Apoptosis</a><br />
RELATED::<a href="/garden/testuser1ca3af98b/cellularcomponent/telomere/" class="internal-link">Telomere</a><br />
RELATED::<a href="/garden/testuser1ca3af98b/cellularcomponent/chromatin/" class="internal-link">Chromatin</a></p>
<h2>References</h2>
<ul>
<li>Malumbres M, Barbacid M. Nat Rev Cancer. 2009;9(3):153-166. Cell cycle, CDKs and cancer: a changing paradigm (PMID: 19238148)</li>
<li>Alberts B, et al. Molecular Biology of the Cell. 6th ed. Garland Science; 2014 (textbook reference)</li>
</ul>

{% endraw %}