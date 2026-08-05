---
confidence_score: 0.88
created: 2026-05-27T12:00:00+0000
description: Malonyl-CoA is the central regulatory metabolite of lipid metabolism.
  Produced from acetyl-CoA by acetyl-CoA carboxylase (ACC), it is the building block
  of fatty-acid synthesis and a potent inhibitor of CPT-1, the gatekeeper of mitochondrial
  fatty-acid oxidation. Because ACC is switched off by AMPK, malonyl-CoA acts as a
  sensor that reciprocally toggles fat storage versus fat burning.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: testuser1051e449f
id: malonyl_coa
permalink: /garden/testuser1051e449f/metabolite/malonyl-coa/
provenance: curated
pubchem_id: '644066'
slug: malonyl-coa
source: PubMed
tags:
- metabolite
- lipid_metabolism
- energy_metabolism
- fatty_acid_oxidation
templateEngineOverride: njk
title: Malonyl-CoA
type: metabolite
updated: '2026-08-05T02:31:28.792780Z'
---

{% raw %}
<h1>Malonyl-CoA</h1>
<h2>Overview</h2>
<p>Malonyl-CoA sits at the crossroads of fat synthesis and fat oxidation, making it one of the most important regulatory nodes in energy metabolism. It is generated when acetyl-CoA carboxylase (ACC) carboxylates <a href="/garden/testuser1051e449f/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a> — the committed, rate-limiting step of fatty-acid synthesis. But malonyl-CoA's regulatory power comes from a second role: it is a potent allosteric <strong>inhibitor of carnitine palmitoyltransferase 1 (<a href="/garden/testuser1051e449f/protein/cpt-i/" class="internal-link">CPT-I</a>)</strong>, the enzyme that imports long-chain fatty acids into mitochondria for oxidation.</p>
<p>This dual role creates an elegant reciprocal switch. When energy is abundant, ACC is active, malonyl-CoA rises, fatty acids are synthesized and stored, and CPT-1 is blocked (no fat burning). When energy is scarce, <a href="/garden/testuser1051e449f/pathway/ampk-pathway/" class="internal-link">AMPK Pathway</a> signaling phosphorylates and inactivates ACC, malonyl-CoA falls, CPT-1 is released, and mitochondrial <a href="/garden/testuser1051e449f/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a> proceeds. Malonyl-CoA is therefore the molecular embodiment of the storage-versus-burning decision.</p>
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
<td>C24H38N7O19P3S</td>
</tr>
<tr>
<td>Molecular Weight</td>
<td>853.6 g/mol</td>
</tr>
<tr>
<td>PubChem CID</td>
<td>644066</td>
</tr>
</tbody>
</table>
<h2>Biochemical Role</h2>
<ul>
<li><strong>Fatty-acid synthesis:</strong> the two-carbon donor extended onto growing fatty-acid chains by fatty-acid synthase.</li>
<li><strong>Oxidation gatekeeping:</strong> inhibits CPT-1, preventing simultaneous synthesis and oxidation (a futile cycle).</li>
<li><strong>Energy sensing:</strong> its level is set by the ACC ⟷ AMPK balance, integrating cellular energy state into lipid-handling decisions.</li>
</ul>
<h2>Clinical Significance</h2>
<p>Chronically elevated malonyl-CoA (overnutrition, low AMPK activity) suppresses fat oxidation and promotes ectopic lipid accumulation, contributing to <a href="/garden/testuser1051e449f/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a> and lipotoxicity. ACC inhibitors that lower malonyl-CoA are being studied for fatty liver disease and metabolic disease.</p>
<h2>Relationships</h2>
<h3>Synthesized From</h3>
<p>RELATED_TO::<a href="/garden/testuser1051e449f/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a></p>
<h3>Inhibits (Gates Fat Oxidation)</h3>
<p>INHIBITS::<a href="/garden/testuser1051e449f/protein/cpt-i/" class="internal-link">CPT-I</a><br />
INHIBITS::<a href="/garden/testuser1051e449f/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a></p>
<h3>Regulated By Pathway</h3>
<p>ASSOCIATED_WITH::<a href="/garden/testuser1051e449f/pathway/ampk-pathway/" class="internal-link">AMPK Pathway</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser1051e449f/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser1051e449f/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a></p>
<h2>References</h2>
<ul>
<li>Hardie DG, Ross FA, Hawley SA. <em>Nat Rev Mol Cell Biol.</em> 2012;13(4):251-262 -- AMPK: a nutrient and energy sensor that maintains energy homeostasis (PMID: 22436748)</li>
<li>Currie E, Schulze A, Zechner R, Walther TC, Farese RV. <em>Cell Metab.</em> 2013;18(2):153-161 -- Cellular fatty acid metabolism and cancer (PMID: 23791484)</li>
</ul>

{% endraw %}