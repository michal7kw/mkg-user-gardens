---
confidence_score: 0.95
created: 2026-01-22T12:00:00+0000
description: The central metabolic hub that oxidizes acetyl-CoA to CO2, generating
  NADH, FADH2, and GTP for ATP production. Also known as the TCA cycle or Krebs cycle,
  it connects carbohydrate, fat, and protein metabolism and provides biosynthetic
  precursors.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: testuser187d7f497
id: citric_acid_cycle
permalink: /garden/testuser187d7f497/pathway/citric-acid-cycle/
provenance: curated
slug: citric-acid-cycle
source: Manual
tags:
- pathway
- metabolic
- energy_metabolism
- central_metabolism
- mitochondrial
- catabolic
templateEngineOverride: njk
title: Citric Acid Cycle
type: pathway
updated: '2026-08-05T02:09:49.383702Z'
---

{% raw %}
<h1>Citric Acid Cycle</h1>
<h2>Overview</h2>
<p>The citric acid cycle — also called the tricarboxylic acid (TCA) cycle or Krebs cycle — is the central hub of aerobic energy metabolism. Operating in the mitochondrial matrix, it accepts the two-carbon acetyl unit of <a href="/garden/testuser187d7f497/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a> (derived from carbohydrate, fat, and amino-acid breakdown) and oxidizes it completely to two molecules of CO₂. Across one turn the cycle captures the released reducing power as three <a href="/garden/testuser187d7f497/metabolite/nadh/" class="internal-link">NADH</a> and one <a href="/garden/testuser187d7f497/metabolite/fadh2/" class="internal-link">FADH2</a>, and conserves a small amount of energy directly as GTP (readily interconverted to ATP). The NADH and FADH₂ then feed the <a href="/garden/testuser187d7f497/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a>, where the bulk of cellular ATP is produced via <a href="/garden/testuser187d7f497/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a>.</p>
<p>Beyond its bioenergetic role, the cycle is an <strong>amphibolic</strong> crossroads: its intermediates are continuously withdrawn (cataplerosis) for biosynthesis — oxaloacetate and alpha-ketoglutarate for amino acids and <a href="/garden/testuser187d7f497/pathway/gluconeogenesis/" class="internal-link">Gluconeogenesis</a>, succinyl-CoA for heme, and citrate exported to the cytosol for fatty-acid and cholesterol synthesis — and replenished (anaplerosis) from pyruvate, glutamine, and other sources. This dual function makes the cycle the meeting point of essentially all fuel-handling pathways and a key determinant of redox balance.</p>
<p>Clinically, TCA-cycle integrity underpins the high energy demands of heart, brain, and skeletal muscle. Inherited or acquired defects in cycle enzymes cause severe mitochondrial disease, and several intermediates have emerged as <strong>signaling metabolites and oncometabolites</strong>: succinate and fumarate stabilize hypoxia-inducible factor and reshape inflammation, while mutations in isocitrate dehydrogenase, succinate dehydrogenase, and fumarate hydratase drive specific cancers. The cycle is therefore both a foundational textbook pathway and an active target of contemporary metabolic medicine.</p>
<h2>Mechanism / Reaction Sequence</h2>
<p>The cycle is a closed loop of eight enzyme-catalyzed reactions; the carrier oxaloacetate is regenerated at each turn:</p>
<ol>
<li><strong>Citrate synthase</strong> condenses <a href="/garden/testuser187d7f497/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a> with <a href="/garden/testuser187d7f497/metabolite/oxaloacetate/" class="internal-link">Oxaloacetate</a> to form <a href="/garden/testuser187d7f497/metabolite/citrate/" class="internal-link">Citrate</a> (the committed, highly exergonic step).</li>
<li><strong>Aconitase</strong> isomerizes citrate to <a class="internal-link is-unresolved" href="/404">Isocitrate</a> via cis-aconitate.</li>
<li><strong>Isocitrate dehydrogenase</strong> (<a href="/garden/testuser187d7f497/protein/isocitrate-dehydrogenase/" class="internal-link">Isocitrate Dehydrogenase</a>) oxidatively decarboxylates isocitrate to <a href="/garden/testuser187d7f497/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a>, releasing CO₂ and the first NADH (a key regulatory step).</li>
<li><strong>Alpha-ketoglutarate dehydrogenase</strong> converts alpha-ketoglutarate to <a class="internal-link is-unresolved" href="/404">Succinyl-CoA</a>, releasing the second CO₂ and second NADH.</li>
<li><strong>Succinyl-CoA synthetase</strong> converts succinyl-CoA to <a href="/garden/testuser187d7f497/metabolite/succinate/" class="internal-link">Succinate</a> with substrate-level phosphorylation of GDP to GTP.</li>
<li><strong>Succinate dehydrogenase</strong> (Complex II, membrane-bound) oxidizes succinate to <a href="/garden/testuser187d7f497/metabolite/fumarate/" class="internal-link">Fumarate</a>, reducing FAD to <a href="/garden/testuser187d7f497/metabolite/fadh2/" class="internal-link">FADH2</a> and linking directly to the <a href="/garden/testuser187d7f497/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a>.</li>
<li><strong>Fumarase</strong> hydrates fumarate to <a href="/garden/testuser187d7f497/metabolite/malate/" class="internal-link">Malate</a>.</li>
<li><strong>Malate dehydrogenase</strong> oxidizes malate back to <a href="/garden/testuser187d7f497/metabolite/oxaloacetate/" class="internal-link">Oxaloacetate</a>, generating the third NADH and closing the loop.</li>
</ol>
<p><strong>Net per turn:</strong> Acetyl-CoA + 3 NAD⁺ + FAD + GDP + Pᵢ + 2 H₂O → 2 CO₂ + 3 NADH + FADH₂ + GTP + CoA.</p>
<h2>Regulation</h2>
<p>The cycle is regulated chiefly at three irreversible steps — citrate synthase, isocitrate dehydrogenase, and alpha-ketoglutarate dehydrogenase — by <strong>energy charge and redox state</strong>. High ATP and NADH (signaling abundant energy) inhibit flux; rising ADP, Ca²⁺ (during muscle contraction), and NAD⁺ activate it. Substrate availability (acetyl-CoA and oxaloacetate) sets the ceiling on flux, while accumulating downstream products such as succinyl-CoA and citrate provide feedback inhibition. Because four of the dehydrogenase steps depend on NAD⁺ recycling, the cycle is tightly coupled to the <a href="/garden/testuser187d7f497/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a>: if oxygen or respiratory-chain capacity is limiting, NADH accumulates and the cycle slows.</p>
<h2>Cofactor Requirements</h2>
<p>TCA flux is critically dependent on B-vitamin–derived cofactors, explaining why deficiencies impair energy metabolism: thiamine pyrophosphate (from <a href="/garden/testuser187d7f497/supplement/thiamine/" class="internal-link">Thiamine</a>) for alpha-ketoglutarate dehydrogenase; FAD (from <a href="/garden/testuser187d7f497/supplement/riboflavin/" class="internal-link">Riboflavin</a>) for succinate dehydrogenase; NAD⁺ (from <a href="/garden/testuser187d7f497/supplement/niacin/" class="internal-link">Niacin</a>) for three dehydrogenases; coenzyme A (from pantothenate, see <a href="/garden/testuser187d7f497/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a>); lipoic acid; and magnesium as a general enzymatic cofactor. <a href="/garden/testuser187d7f497/supplement/iron/" class="internal-link">Iron</a>-sulfur clusters are essential for aconitase and succinate dehydrogenase activity.</p>
<h2>Clinical Significance</h2>
<p>Defects in TCA enzymes produce serious disease. Loss-of-function mutations in succinate dehydrogenase (SDH) and fumarate hydratase (FH) cause hereditary paraganglioma/pheochromocytoma and leiomyomatosis/renal cancer, in which accumulating succinate and fumarate act as <strong>oncometabolites</strong> that inhibit alpha-ketoglutarate–dependent dioxygenases and stabilize HIF, promoting a pseudohypoxic, pro-tumorigenic state. Gain-of-function IDH1/IDH2 mutations generate the oncometabolite 2-hydroxyglutarate in gliomas and acute myeloid leukemia. More broadly, impaired TCA flux contributes to <a href="/garden/testuser187d7f497/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a>, the bioenergetic deficits of neurodegeneration are well documented in Alzheimer's disease, and the metabolic reprogramming (the Warburg effect and glutamine-fueled anaplerosis) characteristic of <a href="/garden/testuser187d7f497/condition/cancer/" class="internal-link">Cancer</a>. In metabolic disease, altered cycle flux and intermediate pools are linked to <a href="/garden/testuser187d7f497/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a> and <a href="/garden/testuser187d7f497/condition/diabetes/" class="internal-link">Diabetes</a>. These insights have made TCA enzymes and intermediates active therapeutic targets.</p>
<h2>Relationships</h2>
<h3>Participates In Pathway</h3>
<p>UPSTREAM_OF::<a href="/garden/testuser187d7f497/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a> - Supplies NADH and FADH2 to the respiratory chain<br />
UPSTREAM_OF::<a href="/garden/testuser187d7f497/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a> - Reducing equivalents drive ATP synthesis<br />
DOWNSTREAM_OF::<a href="/garden/testuser187d7f497/pathway/glycolysis/" class="internal-link">Glycolysis</a> - Pyruvate is oxidized to acetyl-CoA feeding the cycle<br />
DOWNSTREAM_OF::<a href="/garden/testuser187d7f497/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a> - Fatty-acid oxidation supplies acetyl-CoA<br />
RELATED::<a href="/garden/testuser187d7f497/pathway/gluconeogenesis/" class="internal-link">Gluconeogenesis</a> - Oxaloacetate links the cycle to glucose synthesis<br />
RELATED::<a href="/garden/testuser187d7f497/pathway/ketogenesis/" class="internal-link">Ketogenesis</a> - Competes for acetyl-CoA when oxaloacetate is depleted</p>
<h3>Key Enzymes</h3>
<p>HAS_ENZYME::<a href="/garden/testuser187d7f497/protein/citrate-synthase/" class="internal-link">Citrate Synthase</a><br />
HAS_ENZYME::<a href="/garden/testuser187d7f497/protein/isocitrate-dehydrogenase/" class="internal-link">Isocitrate Dehydrogenase</a><br />
RELATED::<a href="/garden/testuser187d7f497/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate Dehydrogenase</a> - Bridges glycolysis to the cycle by forming acetyl-CoA</p>
<h3>Key Metabolites</h3>
<p>INVOLVES::<a href="/garden/testuser187d7f497/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
INVOLVES::<a href="/garden/testuser187d7f497/metabolite/citrate/" class="internal-link">Citrate</a><br />
INVOLVES::<a class="internal-link is-unresolved" href="/404">Isocitrate</a><br />
INVOLVES::<a href="/garden/testuser187d7f497/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a><br />
INVOLVES::<a class="internal-link is-unresolved" href="/404">Succinyl-CoA</a><br />
INVOLVES::<a href="/garden/testuser187d7f497/metabolite/succinate/" class="internal-link">Succinate</a><br />
INVOLVES::<a href="/garden/testuser187d7f497/metabolite/fumarate/" class="internal-link">Fumarate</a><br />
INVOLVES::<a href="/garden/testuser187d7f497/metabolite/malate/" class="internal-link">Malate</a><br />
INVOLVES::<a href="/garden/testuser187d7f497/metabolite/oxaloacetate/" class="internal-link">Oxaloacetate</a><br />
INVOLVES::<a href="/garden/testuser187d7f497/metabolite/pyruvate/" class="internal-link">Pyruvate</a><br />
INVOLVES::<a href="/garden/testuser187d7f497/metabolite/nadh/" class="internal-link">NADH</a><br />
INVOLVES::<a href="/garden/testuser187d7f497/metabolite/fadh2/" class="internal-link">FADH2</a><br />
INVOLVES::<a href="/garden/testuser187d7f497/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a></p>
<h3>Modulated By Supplement</h3>
<p>MODULATED_BY_SUPPLEMENT::<a href="/garden/testuser187d7f497/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/testuser187d7f497/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/testuser187d7f497/supplement/b-complex-vitamins/" class="internal-link">B-Complex Vitamins</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/testuser187d7f497/supplement/l-carnitine/" class="internal-link">L-Carnitine</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/testuser187d7f497/supplement/magnesium/" class="internal-link">Magnesium</a></p>
<h3>Requires Cofactor</h3>
<p>REQUIRES_COFACTOR::<a href="/garden/testuser187d7f497/supplement/thiamine/" class="internal-link">Thiamine</a><br />
REQUIRES_COFACTOR::<a href="/garden/testuser187d7f497/supplement/riboflavin/" class="internal-link">Riboflavin</a><br />
REQUIRES_COFACTOR::<a href="/garden/testuser187d7f497/supplement/niacin/" class="internal-link">Niacin</a><br />
REQUIRES_COFACTOR::<a href="/garden/testuser187d7f497/supplement/iron/" class="internal-link">Iron</a></p>
<h3>Associated Biomarker</h3>
<p>ASSOCIATED_WITH::<a href="/garden/testuser187d7f497/metabolite/nad/" class="internal-link">NAD+</a><br />
ASSOCIATED_WITH::<a href="/garden/testuser187d7f497/biomarker/glucose-fasting/" class="internal-link">Glucose Fasting</a><br />
ASSOCIATED_WITH::<a href="/garden/testuser187d7f497/biomarker/8-ohdg/" class="internal-link">8-OHdG</a></p>
<h3>Occurs In</h3>
<p>OCCURS_IN::<a href="/garden/testuser187d7f497/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a><br />
RELATED::<a href="/garden/testuser187d7f497/metabolite/atp/" class="internal-link">ATP</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser187d7f497/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser187d7f497/condition/cancer/" class="internal-link">Cancer</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser187d7f497/condition/diabetes/" class="internal-link">Diabetes</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser187d7f497/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser187d7f497/condition/oxidative-stress/" class="internal-link">Oxidative Stress</a></p>
<h2>References</h2>
<ul>
<li>Han Y, et al. <em>Biochemical Pharmacology.</em> 2026;249:117888 — Therapeutic targeting of the tricarboxylic acid cycle and oxidative phosphorylation: a critical analysis of metabolic interventions in cancer treatment (PMID: 41831789)</li>
<li>Bernabe-Yepes B, et al. <em>International Journal of Molecular Sciences.</em> 2026;27(10):4328 — Mechanisms involved in pathological succinate-mediated signaling (PMID: 42196310)</li>
<li>Asadi Anar M, et al. <em>Metabolic Brain Disease.</em> 2026;41(1):132 — Mitochondrial enzyme dysfunction in Alzheimer's disease: a systematic review of human metabolic evidence (PMID: 42268484)</li>
<li>Sánchez-García FJ, et al. <em>Frontiers in Cellular and Infection Microbiology.</em> 2021;11:725043 — The role of tricarboxylic acid cycle metabolites in viral infections (PMID: 34595133)</li>
<li>Punnasseril JMJ, et al. <em>Cancer Medicine.</em> 2025;14(18):e71244 — Metabolic reprogramming of cancer cells and therapeutics targeting cancer metabolism (PMID: 40956032)</li>
<li>Fanchon E, et al. <em>Cancers (Basel).</em> 2024;16(13):2415 — Is cancer metabolism an atavism? (PMID: 39001477)</li>
</ul>

{% endraw %}