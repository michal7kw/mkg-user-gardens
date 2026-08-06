---
confidence_score: 0.9
created: 2026-05-26T12:00:00+0000
description: L-Kynurenine is the central branch-point metabolite of the kynurenine
  pathway, formed from tryptophan by TDO2/IDO1. It is the common precursor of both
  neuroprotective kynurenic acid and the neurotoxic quinolinic acid / NAD+ branch,
  crosses the blood-brain barrier, and its ratio to tryptophan is a widely used index
  of inflammatory pathway activation.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: testuser1cfc030c9
id: kynurenine
permalink: /garden/testuser1cfc030c9/metabolite/kynurenine/
provenance: curated
pubchem_id: '161166'
slug: kynurenine
source: PubMed
tags:
- metabolite
- tryptophan_metabolism
- neuroinflammation
- mental_health
- nad_metabolism
templateEngineOverride: njk
title: Kynurenine
type: metabolite
updated: '2026-08-06T01:37:55.271991Z'
---

{% raw %}
<h1>Kynurenine</h1>
<h2>Overview</h2>
<p>L-Kynurenine (KYN) is the first stable metabolite of the <a href="/garden/testuser1cfc030c9/pathway/kynurenine-pathway/" class="internal-link">Kynurenine Pathway</a> and its principal regulatory hub. It is generated when tryptophan is oxidized by tryptophan 2,3-dioxygenase (TDO2, hepatic, cortisol-induced) or indoleamine 2,3-dioxygenase (IDO1/IDO2, extrahepatic, cytokine-induced) and then deformylated. From kynurenine the pathway diverges into two functionally opposed branches — one yielding neuroprotective <a href="/garden/testuser1cfc030c9/metabolite/kynurenic-acid/" class="internal-link">Kynurenic Acid</a>, the other yielding neurotoxic <a href="/garden/testuser1cfc030c9/metabolite/quinolinic-acid/" class="internal-link">Quinolinic Acid</a> and, ultimately, de novo <a href="/garden/testuser1cfc030c9/metabolite/nad/" class="internal-link">NAD+</a>.</p>
<p>Because kynurenine readily crosses the blood-brain barrier (via the large neutral amino acid transporter), peripheral inflammation that raises systemic kynurenine directly influences central neurochemistry. The kynurenine-to-tryptophan (KYN/TRP) ratio is therefore a standard surrogate marker of IDO activity and immune activation.</p>
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
<td>C10H12N2O3</td>
</tr>
<tr>
<td>Molecular Weight</td>
<td>208.21 g/mol</td>
</tr>
<tr>
<td>PubChem CID</td>
<td>161166</td>
</tr>
<tr>
<td>IUPAC Name</td>
<td>(2S)-2-amino-4-(2-aminophenyl)-4-oxobutanoic acid</td>
</tr>
<tr>
<td>Transport</td>
<td>Crosses BBB via LAT1</td>
</tr>
</tbody>
</table>
<h2>Formation and Metabolism</h2>
<ol>
<li><strong>Synthesis:</strong> Tryptophan → N-formyl-kynurenine (TDO2/IDO1) → kynurenine (formamidase).</li>
<li><strong>Branch fates of kynurenine:</strong>
<ul>
<li><strong>Kynurenine aminotransferases (KAT I-IV, astrocytic)</strong> → <a href="/garden/testuser1cfc030c9/metabolite/kynurenic-acid/" class="internal-link">Kynurenic Acid</a> (neuroprotective).</li>
<li><strong>Kynurenine 3-monooxygenase (KMO, microglial)</strong> → 3-hydroxykynurenine → ... → <a href="/garden/testuser1cfc030c9/metabolite/quinolinic-acid/" class="internal-link">Quinolinic Acid</a> → <a href="/garden/testuser1cfc030c9/metabolite/nad/" class="internal-link">NAD+</a> (neurotoxic / NAD+ branch).</li>
</ul>
</li>
</ol>
<p>The relative activity of KAT versus KMO determines whether kynurenine flux is neuroprotective or neurotoxic, and this balance shifts toward neurotoxicity under inflammation.</p>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Mood disorders:</strong> an elevated KYN/TRP ratio and a neurotoxic shift (higher quinolinic acid, lower kynurenic acid) are reported in <a href="/garden/testuser1cfc030c9/condition/depression/" class="internal-link">Depression</a> and <a href="/garden/testuser1cfc030c9/condition/treatment-resistant-depression/" class="internal-link">Treatment-Resistant Depression</a>.</li>
<li><strong>Immunometabolism:</strong> kynurenine is an endogenous aryl hydrocarbon receptor (AhR) ligand, contributing to immune tolerance and the metabolic consequences of chronic inflammation.</li>
<li><strong>Biomarker:</strong> KYN/TRP ratio indexes IDO1 activation in inflammation, aging, and cancer.</li>
</ul>
<h2>Relationships</h2>
<h3>Participates In Pathway</h3>
<p>PARTICIPATES_IN::<a href="/garden/testuser1cfc030c9/pathway/kynurenine-pathway/" class="internal-link">Kynurenine Pathway</a><br />
PARTICIPATES_IN::<a href="/garden/testuser1cfc030c9/pathway/de-novo-nad-synthesis-pathway/" class="internal-link">De Novo NAD+ Synthesis Pathway</a></p>
<h3>Derived From</h3>
<p>RELATED_TO::<a href="/garden/testuser1cfc030c9/supplement/l-tryptophan/" class="internal-link">L-Tryptophan</a></p>
<h3>Converts To</h3>
<p>CONVERTS_TO::<a href="/garden/testuser1cfc030c9/metabolite/kynurenic-acid/" class="internal-link">Kynurenic Acid</a><br />
CONVERTS_TO::<a href="/garden/testuser1cfc030c9/metabolite/quinolinic-acid/" class="internal-link">Quinolinic Acid</a></p>
<h3>Driven By Inflammation</h3>
<p>ASSOCIATED_WITH::<a href="/garden/testuser1cfc030c9/pathway/neuroinflammation/" class="internal-link">Neuroinflammation</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser1cfc030c9/condition/depression/" class="internal-link">Depression</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser1cfc030c9/condition/treatment-resistant-depression/" class="internal-link">Treatment-Resistant Depression</a></p>
<h2>References</h2>
<ul>
<li>Schwarcz R, Bruno JP, Muchowski PJ, Wu HQ. <em>Nat Rev Neurosci.</em> 2012;13(7):465-477 -- Kynurenines in the mammalian brain: when physiology meets pathology (PMID: 22678511)</li>
<li>Savitz J. <em>Mol Psychiatry.</em> 2020;25(1):131-147 -- The kynurenine pathway: a finger in every pie (PMID: 30980044)</li>
<li>Chen Y, Guillemin GJ. <em>Int J Tryptophan Res.</em> 2009;2:1-19 -- Kynurenine pathway metabolites in humans: disease and healthy states (PMID: 22084578)</li>
</ul>

{% endraw %}