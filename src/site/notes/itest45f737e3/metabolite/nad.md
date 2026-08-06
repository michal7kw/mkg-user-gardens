---
confidence_score: 0.95
created: 2026-05-26T12:00:00+0000
description: Nicotinamide adenine dinucleotide (NAD+) is a central redox cofactor
  and signaling substrate that carries electrons in catabolism and serves as the obligate
  co-substrate for sirtuins, PARPs, and CD38. Cellular NAD+ declines with age, linking
  its metabolism to longevity, mitochondrial function, metabolic health, and neurodegeneration.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: itest45f737e3
id: nad_plus_metabolite
permalink: /garden/itest45f737e3/metabolite/nad/
provenance: curated
pubchem_id: '5892'
slug: nad
source: PubMed
tags:
- metabolite
- nad_metabolism
- redox
- longevity
- energy_metabolism
- mitochondria
templateEngineOverride: njk
title: NAD+
type: metabolite
updated: '2026-08-06T02:14:21.361375Z'
---

{% raw %}
<h1>NAD+</h1>
<h2>Overview</h2>
<p>Nicotinamide adenine dinucleotide (NAD+) is one of the most fundamental small molecules in cellular biochemistry. In its oxidized form (NAD+) it accepts a hydride to become the reduced form (NADH), shuttling electrons through <a href="/garden/itest45f737e3/pathway/glycolysis/" class="internal-link">Glycolysis</a>, the <a href="/garden/itest45f737e3/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a>, and <a href="/garden/itest45f737e3/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a> to power ATP synthesis. Beyond this classical redox role, NAD+ is consumed as a substrate by three major enzyme families — sirtuins, poly(ADP-ribose) polymerases (PARPs), and the NADases CD38/CD157 — coupling the cell's energy state to gene expression, DNA repair, and immune signaling.</p>
<p>A defining feature of NAD+ biology is that total cellular and tissue NAD+ <strong>declines with age</strong> across multiple organisms and human tissues. This decline is driven both by reduced synthesis and by increased consumption (notably rising CD38 expression in aged tissue), and it contributes to mitochondrial dysfunction, impaired DNA repair, and metabolic decline. Restoring NAD+ with precursors (NMN, nicotinamide riboside) is one of the most actively studied longevity interventions.</p>
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
<td>C21H27N7O14P2</td>
</tr>
<tr>
<td>Molecular Weight</td>
<td>663.43 g/mol</td>
</tr>
<tr>
<td>PubChem CID</td>
<td>5892</td>
</tr>
<tr>
<td>HMDB ID</td>
<td>HMDB0000902</td>
</tr>
<tr>
<td>Redox partner</td>
<td>NADH (reduced form)</td>
</tr>
<tr>
<td>Phosphorylated forms</td>
<td>NADP+ / NADPH (anabolic reductant)</td>
</tr>
</tbody>
</table>
<h2>Biochemical Role</h2>
<p>NAD+ operates in two conceptually distinct modes:</p>
<ol>
<li><strong>Redox carrier (recycled, not consumed):</strong> NAD+ ⇌ NADH cycling transfers electrons during fuel oxidation. The cytosolic and mitochondrial NAD+/NADH ratios are key indicators of metabolic state — a high NAD+/NADH ratio signals an oxidized, energy-demanding state.</li>
<li><strong>Signaling substrate (consumed, cleaved at the glycosidic bond):</strong> Sirtuins use NAD+ to deacylate proteins, releasing nicotinamide; PARPs use it for DNA-damage repair; CD38 hydrolyzes it to generate calcium-mobilizing second messengers. Because these reactions destroy NAD+, they create constant demand that must be met by resynthesis.</li>
</ol>
<h2>Metabolism</h2>
<p>NAD+ is produced by three routes that converge on the same pool:</p>
<ul>
<li><strong>Salvage pathway</strong> (~85% of supply): recycles nicotinamide released by NAD+-consuming enzymes via NAMPT (rate-limiting) and NMNAT — see <a href="/garden/itest45f737e3/pathway/nad-salvage-pathway/" class="internal-link">NAD+ Salvage Pathway</a>.</li>
<li><strong>De novo synthesis from tryptophan:</strong> the terminal branch of the <a href="/garden/itest45f737e3/pathway/kynurenine-pathway/" class="internal-link">Kynurenine Pathway</a> converts tryptophan-derived quinolinic acid to NAD+ via QPRT — see <a href="/garden/itest45f737e3/pathway/de-novo-nad-synthesis-pathway/" class="internal-link">De Novo NAD+ Synthesis Pathway</a>.</li>
<li><strong>Preiss-Handler pathway:</strong> from dietary nicotinic acid (niacin).</li>
</ul>
<p>Dietary precursors NMN and nicotinamide riboside feed the salvage route to elevate NAD+.</p>
<h2>Age-Related Decline and Therapeutics</h2>
<p>NAD+ levels fall substantially with age. Mechanistically this reflects (a) increased consumption by CD38 and PARP activation (chronic DNA damage and inflammation), and (b) reduced NAMPT-driven salvage capacity. The consequences — sirtuin hypofunction, mitochondrial decline, and impaired stress resistance — overlap strongly with hallmarks of aging. Precursor supplementation (NMN, NR) reliably raises blood NAD+ in humans, though translation to robust clinical outcomes remains an active area of study.</p>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Longevity &amp; metabolism:</strong> NAD+ availability gates <a href="/garden/itest45f737e3/pathway/sirtuin-signaling-pathway/" class="internal-link">Sirtuin Signaling Pathway</a> activity, which regulates mitochondrial biogenesis, lipid metabolism, and insulin sensitivity.</li>
<li><strong>Neurodegeneration:</strong> NAD+ depletion impairs neuronal energy metabolism and is implicated in <a href="/garden/itest45f737e3/condition/cognitive-dysfunction/" class="internal-link">Cognitive Dysfunction</a> and <a href="/garden/itest45f737e3/condition/mild-cognitive-impairment/" class="internal-link">Mild Cognitive Impairment</a>; axonal NAD+ loss drives degeneration.</li>
<li><strong>DNA repair &amp; genomic stability:</strong> PARP-mediated NAD+ consumption couples genotoxic stress to NAD+ economy.</li>
</ul>
<h2>Relationships</h2>
<h3>Participates In Pathway</h3>
<p>PARTICIPATES_IN::<a href="/garden/itest45f737e3/pathway/nad-salvage-pathway/" class="internal-link">NAD+ Salvage Pathway</a><br />
PARTICIPATES_IN::<a href="/garden/itest45f737e3/pathway/de-novo-nad-synthesis-pathway/" class="internal-link">De Novo NAD+ Synthesis Pathway</a><br />
PARTICIPATES_IN::<a href="/garden/itest45f737e3/pathway/kynurenine-pathway/" class="internal-link">Kynurenine Pathway</a><br />
PARTICIPATES_IN::<a href="/garden/itest45f737e3/pathway/glycolysis/" class="internal-link">Glycolysis</a><br />
PARTICIPATES_IN::<a href="/garden/itest45f737e3/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a><br />
PARTICIPATES_IN::<a href="/garden/itest45f737e3/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a></p>
<h3>Redox Partner</h3>
<p>CONVERTS_TO::<a href="/garden/itest45f737e3/metabolite/nadh/" class="internal-link">NADH</a></p>
<h3>Activates</h3>
<p>ACTIVATES::<a href="/garden/itest45f737e3/pathway/sirtuin-signaling-pathway/" class="internal-link">Sirtuin Signaling Pathway</a></p>
<h3>Modulated By Supplement</h3>
<p>MODULATED_BY_SUPPLEMENT::<a href="/garden/itest45f737e3/supplement/nmn/" class="internal-link">NMN</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/itest45f737e3/supplement/niacin/" class="internal-link">Niacin</a></p>
<h3>Related Metabolites</h3>
<p>RELATED_TO::<a href="/garden/itest45f737e3/supplement/nicotinamide-riboside/" class="internal-link">Nicotinamide Riboside</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/itest45f737e3/condition/cognitive-dysfunction/" class="internal-link">Cognitive Dysfunction</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest45f737e3/condition/mild-cognitive-impairment/" class="internal-link">Mild Cognitive Impairment</a></p>
<h2>References</h2>
<ul>
<li>Covarrubias AJ, Perrone R, Grozio A, Verdin E. <em>Nat Rev Mol Cell Biol.</em> 2021;22(2):119-141 -- NAD+ metabolism and its roles in cellular processes during ageing (PMID: 33353981)</li>
<li>Cantó C, Menzies KJ, Auwerx J. <em>Cell Metab.</em> 2015;22(1):31-53 -- NAD+ Metabolism and the Control of Energy Homeostasis: A Balancing Act between Mitochondria and the Nucleus (PMID: 26118927)</li>
<li>Vinten KT, et al. <em>Nat Metab.</em> 2025 -- NAD+ precursor supplementation in human ageing: clinical evidence and challenges (PMID: 41083806)</li>
</ul>

{% endraw %}