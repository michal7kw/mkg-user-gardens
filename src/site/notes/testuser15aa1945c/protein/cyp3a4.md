---
aliases:
- Cytochrome P450 3A4
- CYP3A
- Nifedipine oxidase
- P450-PCN1
confidence_score: 0.92
created: 2026-01-03T17:55:34+0000
description: Cytochrome P450 3A4 (EC 1.14.14.1), the single most abundant and clinically
  important drug-metabolizing enzyme in the human liver and intestine. It oxidizes
  roughly half of all marketed medications as well as endogenous steroids, and is
  the central enzyme in most clinically significant cytochrome P450 drug-drug interactions.
dg-home: false
dg-publish: true
gardenUsername: testuser15aa1945c
id: cyp3a4
permalink: /garden/testuser15aa1945c/protein/cyp3a4/
provenance: curated
slug: cyp3a4
source: Manual
tags:
- protein
- gene
- drug_metabolism
- liver
- cyp450
- pharmacogenomics
- xenobiotic_metabolism
templateEngineOverride: njk
title: CYP3A4
type: protein
updated: '2026-08-05T02:21:30.588804Z'
---

{% raw %}
<h1>CYP3A4</h1>
<h2>Overview</h2>
<p>CYP3A4 (Cytochrome P450 3A4) is the most abundant cytochrome P450 enzyme in the human liver and intestine and the single most important enzyme in drug metabolism. It is a heme-thiolate monooxygenase (EC 1.14.14.1) anchored in the endoplasmic reticulum membrane of hepatocytes and enterocytes, where it uses molecular oxygen and electrons donated by NADPH-cytochrome P450 reductase to oxidize an extraordinarily broad range of substrates. CYP3A4 alone is estimated to participate in the metabolism of roughly 50% of all marketed medications, a breadth made possible by its large, flexible active site that can accommodate small molecules and bulky structures alike.</p>
<p>Beyond xenobiotics, CYP3A4 metabolizes many endogenous compounds, including testosterone, estradiol, progesterone, cortisol, and bile acids, linking it to steroid homeostasis as well as pharmacology. Its dual expression in the gut wall and liver means that orally administered drugs encounter CYP3A4 twice — first during intestinal absorption and then during hepatic first-pass metabolism — which is a major determinant of oral bioavailability.</p>
<p>Clinically, CYP3A4 is the dominant enzyme behind most serious pharmacokinetic drug-drug interactions. Its activity varies more than tenfold between individuals due to a combination of genetic factors (notably the <em>CYP3A4*22</em> reduced-function allele), epigenetic regulation, and powerful environmental modulation by co-administered drugs, foods (e.g., grapefruit juice), and herbal products. Because so many co-prescribed medications act as inhibitors or inducers, CYP3A4 status is a recurring concern in polypharmacy, transplant medicine, oncology, and psychiatry.</p>
<h2>Function and Mechanism</h2>
<p>CYP3A4 catalyzes monooxygenation reactions in which one atom of molecular oxygen is inserted into the substrate and the other is reduced to water. The catalytic cycle proceeds through substrate binding, two sequential one-electron reductions of the heme iron supplied by NADPH-cytochrome P450 reductase (with cytochrome b5 often enhancing the second electron transfer), oxygen activation to a reactive ferryl-oxo (Compound I) species, and oxygen rebound onto the substrate. Typical reactions include aliphatic and aromatic hydroxylation, N- and O-dealkylation, and sulfoxidation. The enzyme exhibits notable homotropic and heterotropic cooperativity — its active site can bind more than one ligand simultaneously, producing non-Michaelis-Menten kinetics that complicate interaction prediction.</p>
<h2>Clinical Significance</h2>
<p>CYP3A4 is central to clinical pharmacology because of the scale and severity of its drug interactions:</p>
<ul>
<li><strong>Inhibition</strong> by strong agents (e.g., azole antifungals, macrolide antibiotics, protease inhibitors) or by furanocoumarins in grapefruit juice raises plasma levels of CYP3A4 substrates, risking toxicity. Mechanism-based (&quot;suicide&quot;) inhibition is particularly long-lasting because new enzyme must be synthesized to restore activity.</li>
<li><strong>Induction</strong> by agents such as rifampicin, carbamazepine, and St. John's Wort accelerates substrate clearance, potentially causing therapeutic failure — a well-known cause of transplant rejection and contraceptive failure.</li>
<li><strong>Narrow-therapeutic-index substrates</strong> such as calcium channel blockers, certain statins, immunosuppressants (cyclosporine, tacrolimus), and many kinase inhibitors require careful dose adjustment when CYP3A4 modulators are introduced.</li>
</ul>
<h2>Pharmacogenomics</h2>
<p>CYP3A4 is less polymorphic than CYP2D6 or CYP2C19, but clinically meaningful variation exists. The <em>CYP3A4*22</em> intronic variant reduces hepatic expression and is associated with lower dose requirements for statins, tacrolimus, and other substrates. Much of CYP3A4 phenotypic variability, however, arises from non-genetic factors and from the closely related, co-regulated enzyme CYP3A5, whose expression (driven by <em>CYP3A5*1</em>) contributes substantially to combined CYP3A activity in many individuals. Endogenous CYP3A4 activity can be probed non-invasively using markers such as the 4β-hydroxycholesterol/cholesterol ratio.</p>
<h2>Relationships</h2>
<h3>Expressed In</h3>
<p>EXPRESSED_IN::<a href="/garden/testuser15aa1945c/organ/liver/" class="internal-link">Liver</a><br />
EXPRESSED_IN::<a href="/garden/testuser15aa1945c/organ/intestines/" class="internal-link">Intestines</a></p>
<h3>Metabolizes</h3>
<p>METABOLIZES::<a href="/garden/testuser15aa1945c/drug/atorvastatin/" class="internal-link">Atorvastatin</a> - Major CYP3A4 substrate; statin levels rise with inhibitors<br />
METABOLIZES::<a href="/garden/testuser15aa1945c/drug/amlodipine/" class="internal-link">Amlodipine</a> - Dihydropyridine calcium channel blocker<br />
METABOLIZES::<a href="/garden/testuser15aa1945c/drug/quetiapine/" class="internal-link">Quetiapine</a> - Atypical antipsychotic, extensively CYP3A4-metabolized<br />
METABOLIZES::<a href="/garden/testuser15aa1945c/drug/carbamazepine/" class="internal-link">Carbamazepine</a> - CYP3A4 substrate and potent inducer<br />
METABOLIZES::<a href="/garden/testuser15aa1945c/drug/vilazodone/" class="internal-link">Vilazodone</a><br />
METABOLIZES::<a href="/garden/testuser15aa1945c/drug/citalopram/" class="internal-link">Citalopram</a><br />
METABOLIZES::<a href="/garden/testuser15aa1945c/drug/sertraline/" class="internal-link">Sertraline</a><br />
METABOLIZES::<a href="/garden/testuser15aa1945c/hormone/testosterone/" class="internal-link">Testosterone</a> - Endogenous steroid 6β-hydroxylation<br />
METABOLIZES::<a href="/garden/testuser15aa1945c/labtest/estradiol/" class="internal-link">Estradiol</a><br />
METABOLIZES::<a href="/garden/testuser15aa1945c/labtest/progesterone/" class="internal-link">Progesterone</a><br />
METABOLIZES::<a href="/garden/testuser15aa1945c/hormone/cortisol/" class="internal-link">Cortisol</a></p>
<h3>Interacts With</h3>
<p>INTERACTS_WITH::<a href="/garden/testuser15aa1945c/protein/cyp2d6/" class="internal-link">CYP2D6</a><br />
INTERACTS_WITH::<a href="/garden/testuser15aa1945c/protein/cyp2c9/" class="internal-link">CYP2C9</a><br />
INTERACTS_WITH::<a href="/garden/testuser15aa1945c/protein/cyp2c19/" class="internal-link">CYP2C19</a><br />
INTERACTS_WITH::<a href="/garden/testuser15aa1945c/protein/cyp1a2/" class="internal-link">CYP1A2</a></p>
<h3>Modulated By Supplement</h3>
<p>MODULATED_BY_SUPPLEMENT::<a href="/garden/testuser15aa1945c/supplement/curcumin/" class="internal-link">Curcumin</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/testuser15aa1945c/supplement/quercetin/" class="internal-link">Quercetin</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/testuser15aa1945c/supplement/resveratrol/" class="internal-link">Resveratrol</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/testuser15aa1945c/supplement/sulforaphane/" class="internal-link">Sulforaphane</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/testuser15aa1945c/supplement/vitamin-d/" class="internal-link">Vitamin D</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser15aa1945c/condition/liver-disease/" class="internal-link">Liver Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser15aa1945c/condition/nafld/" class="internal-link">NAFLD</a></p>
<h2>References</h2>
<ul>
<li>Zhou S, Chan E, Li X, Huang M. Clinical outcomes and management of mechanism-based inhibition of cytochrome P450 3A4. <em>Therapeutics and Clinical Risk Management.</em> 2005;1(1):3-13 -- Review of mechanism-based (irreversible) CYP3A4 inhibition and its clinical consequences (PMID: 18360537)</li>
<li>Dresser GK, Spence JD, Bailey DG. Pharmacokinetic-pharmacodynamic consequences and clinical relevance of cytochrome P450 3A4 inhibition. <em>Clinical Pharmacokinetics.</em> 2000;38(1):41-57 -- Foundational review of CYP3A4 inhibition including grapefruit juice and clinical relevance (PMID: 10668858)</li>
<li>Tsironi A, et al. Combined role of CYP3A4 and CYP3A5 genetic variants in tacrolimus dose-adjusted trough levels: a clinical retrospective study in kidney transplant patients. <em>The Pharmacogenomics Journal.</em> 2026;26(1):1 -- Demonstrates combined CYP3A4/CYP3A5 genotype impact on immunosuppressant dosing (PMID: 41491289)</li>
<li>Rodrigues D. Deconvoluting gut versus liver cytochrome P450 3A4 function: drug probes, biomarkers, and tissue biopsy. <em>Journal of Clinical Pharmacology.</em> 2026;66(2):e70165 -- Methods to separate intestinal and hepatic CYP3A4 contributions to first-pass metabolism (PMID: 41688868)</li>
<li>Passarelli MN, et al. Circulating 4β-hydroxycholesterol as a biomarker of CYP3A4 activity: beyond drug development. <em>Steroids.</em> 2026;6:109819 -- Endogenous biomarker approach to quantifying individual CYP3A4 activity (PMID: 42251959)</li>
</ul>

{% endraw %}