---
confidence_score: 0.95
created: 2026-01-22T12:00:00+0000
description: AMP-activated protein kinase, the master cellular energy sensor that
  responds to a falling ATP:AMP ratio by activating catabolic, ATP-generating pathways
  (fatty acid oxidation, glucose uptake, autophagy, mitochondrial biogenesis) and
  inhibiting anabolic, ATP-consuming pathways (protein, lipid and glucose synthesis).
  A central metabolic regulator and a validated therapeutic target for type 2 diabetes,
  obesity and aging.
dg-home: false
dg-publish: true
gardenUsername: itestdc9a4769
id: ampk
permalink: /garden/itestdc9a4769/protein/ampk/
provenance: curated
slug: ampk
source: Manual
tags:
- protein
- kinase
- energy_sensor
- metabolism
- autophagy
- therapeutic_target
templateEngineOverride: njk
title: AMPK
type: protein
updated: '2026-08-19T04:20:52.437784Z'
---

{% raw %}
<h1>AMPK</h1>
<h2>Overview</h2>
<p>AMP-activated protein kinase (AMPK) is the master regulator of cellular and whole-body energy homeostasis. It functions as a highly sensitive fuel gauge: when energy demand outpaces supply, the intracellular concentrations of AMP and ADP rise relative to ATP, and AMPK detects this shift directly through its regulatory γ subunit. Once activated, AMPK works to restore energy balance by simultaneously switching off anabolic (ATP-consuming) processes such as protein synthesis, fatty acid synthesis, cholesterol synthesis and gluconeogenesis, while switching on catabolic (ATP-generating) processes such as glucose uptake, fatty acid oxidation, glycolysis, autophagy and mitochondrial biogenesis. Because almost every major metabolic pathway converges on AMPK, it is often described as the cell's central metabolic checkpoint.</p>
<p>Structurally, AMPK is an obligate αβγ heterotrimer. The catalytic α subunit (encoded in humans by PRKAA1 or PRKAA2) carries the activation loop residue Thr172; the β subunit acts as a scaffold and contains a carbohydrate-binding module that senses glycogen; and the γ subunit contains the nucleotide-binding (CBS/Bateman) domains that read the AMP:ADP:ATP ratio. Binding of AMP or ADP to the γ subunit promotes Thr172 phosphorylation by the upstream kinases LKB1 (the dominant input under energy stress) and CaMKKβ (a calcium-responsive input), allosterically activates the enzyme, and protects Thr172 from phosphatases — a three-tiered mechanism that gives AMPK steep, switch-like sensitivity to energy decline.</p>
<p>Clinically, AMPK is one of the most important drug targets in metabolic medicine. The first-line type 2 diabetes drug metformin and the plant alkaloid berberine both lower hepatic glucose output in part by indirectly activating AMPK, and AMPK activation underlies many of the metabolic benefits of exercise, caloric restriction and fasting. Dysregulated AMPK signaling is implicated in type 2 diabetes, obesity, metabolic syndrome, cardiovascular disease, inflammation and cancer, making AMPK both a biomarker of metabolic health and an actively pursued therapeutic target.</p>
<h2>Structure and Isoforms</h2>
<p>AMPK exists as twelve possible heterotrimeric combinations in humans, assembled from two α isoforms (α1/PRKAA1, α2/PRKAA2), two β isoforms (β1/PRKAB1, β2/PRKAB2) and three γ isoforms (γ1/PRKAG1, γ2/PRKAG2, γ3/PRKAG3). The α1-containing complexes are broadly expressed, whereas α2 predominates in skeletal muscle, heart and liver, where it drives much of the metabolic response to exercise and energy stress. The catalytic α subunit has a molecular mass of roughly 62–64 kDa. Mutations in the γ2 subunit (PRKAG2) cause an inherited cardiomyopathy with glycogen accumulation and Wolff–Parkinson–White syndrome, illustrating how disrupted energy sensing translates directly into disease.</p>
<h2>Mechanism of Action</h2>
<p>Activation is governed by the energy charge of the cell. As ATP is consumed, adenylate kinase converts two ADP into one ATP plus one AMP, amplifying the rise in AMP. AMP and ADP bind the CBS domains of the γ subunit and trigger three coordinated effects: (1) allosteric activation of the kinase, (2) promotion of Thr172 phosphorylation by LKB1 or CaMKKβ, and (3) inhibition of Thr172 dephosphorylation by protein phosphatases. ATP competes for the same sites and is inhibitory, so the enzyme integrates the AMP:ATP and ADP:ATP ratios rather than absolute nucleotide levels.</p>
<p>Once active, AMPK phosphorylates a large substrate network to rebalance metabolism. It phosphorylates and inhibits acetyl-CoA carboxylase (ACC1/ACC2), reducing malonyl-CoA, relieving inhibition of CPT-1 and thereby promoting mitochondrial fatty acid β-oxidation. It phosphorylates TSC2 and raptor to inhibit mTORC1, halting cap-dependent protein synthesis and cell growth. It phosphorylates ULK1 to initiate autophagy and mitophagy, and activates PGC-1α-driven mitochondrial biogenesis. In the liver it suppresses gluconeogenic gene expression, and in muscle it promotes GLUT4-mediated glucose uptake. This coordinated program both conserves ATP and increases ATP supply.</p>
<h2>Clinical Significance</h2>
<p>AMPK sits at the intersection of metabolic disease and longevity biology. Reduced AMPK activity is associated with insulin resistance, ectopic lipid accumulation, mitochondrial dysfunction and chronic low-grade inflammation — features common to type 2 diabetes, obesity and metabolic syndrome. Pharmacological or physiological AMPK activation improves insulin sensitivity, lowers hepatic glucose production, enhances fatty acid oxidation and reduces inflammatory signaling. Metformin's glucose-lowering action is mediated substantially through LKB1-dependent AMPK activation, and natural compounds such as berberine, resveratrol, quercetin, EGCG, curcumin and alpha-lipoic acid converge on this pathway.</p>
<p>The role of AMPK in cancer is dual. As a tumor suppressor downstream of LKB1, AMPK restrains mTORC1-driven growth and biosynthesis, which is protective; loss of LKB1–AMPK signaling is a common oncogenic event. However, in established tumors AMPK can also promote survival under the metabolic stress of the tumor microenvironment, so its therapeutic targeting in oncology is context-dependent. In aging, AMPK is one of the conserved nutrient-sensing nodes (alongside mTOR and the sirtuins SIRT1/SIRT3) whose activity declines with age; its activation by caloric restriction, fasting and exercise is thought to contribute to healthspan extension.</p>
<h2>Relationships</h2>
<h3>Activates</h3>
<p>ACTIVATES::<a href="/garden/itestdc9a4769/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a><br />
ACTIVATES::<a href="/garden/itestdc9a4769/pathway/autophagy/" class="internal-link">Autophagy</a><br />
ACTIVATES::<a href="/garden/itestdc9a4769/pathway/mitophagy/" class="internal-link">Mitophagy</a><br />
ACTIVATES::<a href="/garden/itestdc9a4769/pathway/glycolysis/" class="internal-link">Glycolysis</a><br />
ACTIVATES_PATHWAY::<a href="/garden/itestdc9a4769/pathway/mitochondrial-biogenesis/" class="internal-link">Mitochondrial Biogenesis</a><br />
ACTIVATES::<a href="/garden/itestdc9a4769/pathway/ampk-pathway/" class="internal-link">AMPK Pathway</a><br />
INCREASES_EXPRESSION::<a href="/garden/itestdc9a4769/protein/pgc-1alpha/" class="internal-link">PGC-1alpha</a></p>
<h3>Inhibits</h3>
<p>INHIBITS::<a href="/garden/itestdc9a4769/pathway/mtor-pathway/" class="internal-link">mTOR Pathway</a><br />
INHIBITS::<a href="/garden/itestdc9a4769/pathway/gluconeogenesis/" class="internal-link">Gluconeogenesis</a></p>
<h3>Regulated By</h3>
<p>REGULATED_BY::<a href="/garden/itestdc9a4769/metabolite/nad/" class="internal-link">NAD+</a></p>
<h3>Activated By</h3>
<p>ACTIVATED_BY::<a href="/garden/itestdc9a4769/drug/metformin/" class="internal-link">METFORMIN</a><br />
ACTIVATED_BY::<a href="/garden/itestdc9a4769/supplement/berberine/" class="internal-link">Berberine</a><br />
ACTIVATED_BY::<a href="/garden/itestdc9a4769/supplement/resveratrol/" class="internal-link">Resveratrol</a><br />
ACTIVATED_BY::<a href="/garden/itestdc9a4769/supplement/quercetin/" class="internal-link">Quercetin</a><br />
ACTIVATED_BY::<a href="/garden/itestdc9a4769/supplement/curcumin/" class="internal-link">Curcumin</a><br />
ACTIVATED_BY::<a href="/garden/itestdc9a4769/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a><br />
ACTIVATED_BY::<a href="/garden/itestdc9a4769/intervention/exercise/" class="internal-link">Exercise</a><br />
ACTIVATED_BY::<a href="/garden/itestdc9a4769/intervention/caloric-restriction/" class="internal-link">Caloric Restriction</a><br />
ACTIVATED_BY::<a href="/garden/itestdc9a4769/intervention/intermittent-fasting/" class="internal-link">Intermittent Fasting</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/itestdc9a4769/metabolite/atp/" class="internal-link">ATP</a><br />
RELATED::<a href="/garden/itestdc9a4769/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a><br />
RELATED::<a href="/garden/itestdc9a4769/protein/sirt1/" class="internal-link">SIRT1</a><br />
RELATED::<a href="/garden/itestdc9a4769/pathway/insulin-signaling/" class="internal-link">Insulin Signaling</a><br />
INTERACTS_WITH::<a href="/garden/itestdc9a4769/pathway/mtor-pathway/" class="internal-link">mTOR Pathway</a></p>
<h3>Clinical</h3>
<p>MAY_IMPROVE_CONDITION::<a href="/garden/itestdc9a4769/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a><br />
COMPONENT_OF::<a href="/garden/itestdc9a4769/clinicalpattern/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a><br />
ASSOCIATED_WITH::<a href="/garden/itestdc9a4769/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a><br />
ASSOCIATED_WITH::<a href="/garden/itestdc9a4769/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
ASSOCIATED_WITH::<a href="/garden/itestdc9a4769/condition/cancer/" class="internal-link">Cancer</a></p>
<h2>References</h2>
<ul>
<li>Hardie DG, Ross FA, Hawley SA. <em>Nature Reviews Molecular Cell Biology.</em> 2012;13(4):251-262 — Defining review of AMPK as a nutrient and energy sensor that maintains energy homeostasis (PMID: 22436748)</li>
<li>Herzig S, Shaw RJ. <em>Nature Reviews Molecular Cell Biology.</em> 2018;19(2):121-135 — AMPK as guardian of metabolism and mitochondrial homeostasis (PMID: 28974774)</li>
<li>Lin SC, Hardie DG. <em>Cell Metabolism.</em> 2018;27(2):299-313 — AMPK sensing glucose as well as cellular energy status via the AXIN/LKB1 mechanism (PMID: 29153408)</li>
<li>Zhou G, Myers R, Li Y, et al. <em>Journal of Clinical Investigation.</em> 2001;108(8):1167-1174 — Identification of AMPK as the mediator of metformin's glucose-lowering action (PMID: 11602624)</li>
<li>Gwinn DM, Shackelford DB, Egan DF, et al. <em>Molecular Cell.</em> 2008;30(2):214-226 — AMPK phosphorylation of raptor mediates a metabolic checkpoint that inhibits mTORC1 (PMID: 18439900)</li>
<li>Egan DF, Shackelford DB, Mihaylova MM, et al. <em>Science.</em> 2011;331(6016):456-461 — Phosphorylation of ULK1 by AMPK connects energy sensing to autophagy (PMID: 21205641)</li>
<li>Lizcano JM, Göransson O, Toth R, et al. <em>EMBO Journal.</em> 2004;23(4):833-843 — LKB1 is the master upstream kinase that activates AMPK and related kinases (PMID: 14976552)</li>
</ul>

{% endraw %}