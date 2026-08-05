---
aliases:
- PDH
- PDHc
- Pyruvate Dehydrogenase Complex
- PDHA1
confidence_score: 0.92
created: 2026-03-06T12:00:00+0000
description: Large multi-enzyme complex that bridges glycolysis and the TCA cycle
  by irreversibly converting pyruvate to acetyl-CoA, CO2, and NADH. A critical metabolic
  gateway controlling the entry of carbohydrate-derived carbon into mitochondrial
  oxidative metabolism, and a key regulatory node in the choice between glucose oxidation
  and fatty-acid oxidation.
dg-home: false
dg-publish: true
gardenUsername: testuser14f761a46
id: pyruvate_dehydrogenase
permalink: /garden/testuser14f761a46/protein/pyruvate-dehydrogenase/
provenance: curated
slug: pyruvate-dehydrogenase
source: Manual
tags:
- protein
- enzyme
- tca_cycle
- mitochondrial
- glucose_metabolism
- metabolic_regulation
templateEngineOverride: njk
title: Pyruvate Dehydrogenase
type: protein
updated: '2026-08-05T15:24:13.002168Z'
---

{% raw %}
<h1>Pyruvate Dehydrogenase</h1>
<h2>Overview</h2>
<p>The pyruvate dehydrogenase complex (PDH or PDHc) is a giant multi-enzyme machine of the mitochondrial matrix that catalyzes the oxidative decarboxylation of pyruvate to acetyl-CoA, producing one molecule of CO2 and one of NADH per turn. This reaction is the committed, physiologically irreversible step that connects cytosolic glycolysis to the mitochondrial citric acid cycle and oxidative phosphorylation. Because the reaction cannot run in reverse, the carbon that PDH commits to acetyl-CoA can no longer be used to remake glucose, which makes the complex a decisive branch point governing whether glucose is fully oxidized for energy or carbon is conserved for biosynthesis.</p>
<p>Structurally, PDH is among the largest known soluble enzyme assemblies, reaching roughly 9 MDa in mammals. It is organized around a 60-subunit dodecahedral core formed by the dihydrolipoyl transacetylase (E2) and the E3-binding protein, to which the peripheral pyruvate dehydrogenase (E1, an alpha2-beta2 tetramer), dihydrolipoyl dehydrogenase (E3), and the dedicated regulatory kinases and phosphatase are bound. The catalytic E1 alpha subunit is encoded by the X-linked gene PDHA1 and carries the serine residues whose phosphorylation status switches the entire complex on or off. Five cofactors are required: thiamine pyrophosphate (TPP), lipoic acid, coenzyme A, FAD, and NAD+ — a dependency that explains why thiamine status has an outsized influence on glucose oxidation.</p>
<p>Clinically, PDH sits at the center of cellular fuel selection and is therefore relevant to thiamine (vitamin B1) deficiency, inherited PDH complex deficiency (a major cause of primary lactic acidosis and neurodevelopmental disease in children), cardiac ischemia, diabetes, and cancer metabolism, where suppression of PDH by PDH kinases helps drive the aerobic glycolysis of the Warburg effect.</p>
<h2>Mechanism of Action</h2>
<p>The complex executes five coordinated reactions across its three enzymes. E1 uses thiamine pyrophosphate (TPP) to decarboxylate pyruvate, releasing CO2 and forming a hydroxyethyl-TPP intermediate; this is the rate-determining and effectively irreversible step. The hydroxyethyl group is then oxidized and transferred onto the lipoamide arm of E2, forming an acetyl-dihydrolipoamide thioester. E2 (dihydrolipoyl transacetylase) transfers that acetyl group to coenzyme A, generating acetyl-CoA. The now-reduced dihydrolipoamide must be re-oxidized for the cycle to continue: E3 (dihydrolipoyl dehydrogenase) re-oxidizes lipoamide using its tightly bound FAD, and the resulting FADH2 is reoxidized by NAD+, yielding NADH. The swinging lipoyl-lysine arm physically shuttles substrate between the active sites, allowing substrate channeling without release of intermediates.</p>
<p>Overall reaction: pyruvate + CoA + NAD+ -&gt; acetyl-CoA + CO2 + NADH + H+.</p>
<h2>Regulation</h2>
<p>PDH is controlled by reversible phosphorylation of the E1 alpha subunit and by allosteric end-product inhibition, providing tight matching of glucose oxidation to energy demand. Four pyruvate dehydrogenase kinase isoenzymes (PDK1-4) phosphorylate and inactivate the complex, while two pyruvate dehydrogenase phosphatases (PDP1-2) dephosphorylate and reactivate it. The kinases are stimulated by high ratios of acetyl-CoA/CoA and NADH/NAD+ (signals of fuel abundance and active fatty-acid oxidation) and by high ATP/ADP, and are inhibited by pyruvate; the phosphatases are activated by Ca2+ and Mg2+, linking PDH flux to muscle contraction and insulin signaling. During fasting and on high-fat diets, transcriptional upregulation of PDK4 (driven by PPAR and FOXO signaling) suppresses PDH so that glucose and three-carbon units are spared for gluconeogenesis. This regulatory architecture is the molecular basis of the glucose-fatty acid (Randle) cycle.</p>
<h2>Clinical Significance</h2>
<p>Inherited PDH complex deficiency, most often caused by mutations in the X-linked PDHA1 gene, is one of the most common genetic causes of primary lactic acidosis. Because pyruvate cannot be oxidized, it is shunted to lactate, and the brain — heavily dependent on glucose oxidation — is particularly affected, producing developmental delay, hypotonia, seizures, and structural lesions resembling Leigh syndrome. A ketogenic diet is a mainstay of management because ketone bodies bypass PDH to supply acetyl-CoA directly, and high-dose thiamine benefits the subset of patients with TPP-binding mutations.</p>
<p>Acquired PDH dysfunction underlies thiamine-deficiency states (beriberi, Wernicke encephalopathy), where loss of the TPP cofactor impairs the complex and causes lactate accumulation and neurological injury. In oncology, tumor cells frequently overexpress PDK to keep PDH inhibited, diverting pyruvate to lactate even in oxygen — the Warburg effect — which has motivated PDK inhibitors such as dichloroacetate as candidate metabolic therapies. PDH reactivation is likewise being explored to improve cardiac efficiency in ischemia and heart failure.</p>
<h2>Relationships</h2>
<h3>Catalyzes Reaction With</h3>
<p>CONVERTS::<a href="/garden/testuser14f761a46/metabolite/pyruvate/" class="internal-link">Pyruvate</a> - Oxidatively decarboxylates pyruvate (substrate)<br />
PRODUCES::<a href="/garden/testuser14f761a46/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a> - Primary product feeding the TCA cycle<br />
REQUIRES_COFACTOR::<a href="/garden/testuser14f761a46/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a> - Acetyl acceptor<br />
REQUIRES_COFACTOR::<a href="/garden/testuser14f761a46/metabolite/nad/" class="internal-link">NAD+</a> - Terminal electron acceptor<br />
PRODUCES::<a href="/garden/testuser14f761a46/metabolite/nadh/" class="internal-link">NADH</a> - Reducing equivalents for the electron transport chain</p>
<h3>Participates In Pathway</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/testuser14f761a46/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a> - Supplies acetyl-CoA that enters the cycle<br />
PARTICIPATES_IN_PATHWAY::<a href="/garden/testuser14f761a46/pathway/glycolysis/" class="internal-link">Glycolysis</a> - Receives glycolytic end-product pyruvate<br />
PARTICIPATES_IN_PATHWAY::<a href="/garden/testuser14f761a46/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a> - NADH drives ATP synthesis downstream<br />
UPSTREAM_OF::<a href="/garden/testuser14f761a46/pathway/gluconeogenesis/" class="internal-link">Gluconeogenesis</a> - Its irreversibility prevents net glucose synthesis from acetyl-CoA<br />
RELATED_TO::<a href="/garden/testuser14f761a46/pathway/warburg-effect/" class="internal-link">Warburg Effect</a> - PDH suppression by PDK drives aerobic glycolysis in cancer</p>
<h3>Located In</h3>
<p>LOCATED_IN::<a href="/garden/testuser14f761a46/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> - Resides in the mitochondrial matrix</p>
<h3>Cofactor Dependencies</h3>
<p>REQUIRES_COFACTOR::<a href="/garden/testuser14f761a46/supplement/thiamine/" class="internal-link">Thiamine</a> - Source of thiamine pyrophosphate for E1<br />
REQUIRES_COFACTOR::<a href="/garden/testuser14f761a46/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a> - Lipoamide swinging arm of E2<br />
REQUIRES_COFACTOR::<a href="/garden/testuser14f761a46/supplement/riboflavin/" class="internal-link">Riboflavin</a> - Source of FAD for E3</p>
<h3>Related Enzymes</h3>
<p>INTERACTS_WITH::<a href="/garden/testuser14f761a46/protein/complex-i/" class="internal-link">Complex I</a> - NADH produced by PDH is oxidized by Complex I<br />
INTERACTS_WITH::<a href="/garden/testuser14f761a46/protein/citrate-synthase/" class="internal-link">Citrate Synthase</a> - Acetyl-CoA from PDH condenses with oxaloacetate downstream<br />
RELATED_TO::<a href="/garden/testuser14f761a46/protein/pyruvate-kinase/" class="internal-link">Pyruvate Kinase</a> - Generates the pyruvate that PDH consumes</p>
<h3>Metabolic Counterpoint</h3>
<p>RELATED_TO::<a href="/garden/testuser14f761a46/metabolite/lactate/" class="internal-link">Lactate</a> - Pyruvate is diverted to lactate when PDH is inhibited or deficient</p>
<h2>References</h2>
<ul>
<li>Patel MS, Roche TE. <em>FASEB J.</em> 1990;4(14):3224-3233 — Foundational review of the molecular biology and biochemistry of the pyruvate dehydrogenase complexes (PMID: 2227213)</li>
<li>Roche TE, Hiromasa Y. <em>Cell Mol Life Sci.</em> 2007;64(7-8):830-849 — PDH kinase regulatory mechanisms and inhibition in diabetes, heart ischemia, and cancer (PMID: 17310282)</li>
<li>Sugden MC, Holness MJ. <em>Arch Physiol Biochem.</em> 2006;112(3):139-149 — Mechanisms regulating expression and activity of the mammalian PDH kinases (PMID: 17132539)</li>
<li>Betesh-Abay B, Shany E, Staretz-Chacham O, et al. <em>Int J Mol Sci.</em> 2026;27(6):2732 — Pyruvate dehydrogenase complex deficiency: review of treatments and case series (PMID: 41898592)</li>
<li>Grentzmann A, Ketelhuth DFJ. <em>Cardiovasc Res.</em> 2026 — The immunometabolic role of the PDK/PDH axis in cardiovascular disease and beyond (PMID: 42019955)</li>
</ul>

{% endraw %}