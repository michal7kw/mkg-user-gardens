---
confidence_score: 0.8
created: '2026-06-19T12:00:00+00:00'
description: Clopidogrel is a thienopyridine P2Y12 receptor antagonist that inhibits
  ADP-mediated platelet activation and aggregation. It is a prodrug requiring two-step
  hepatic CYP450 activation (notably CYP2C19), so loss-of-function CYP2C19 variants
  reduce its antiplatelet effect and increase cardiovascular event risk.
dg-home: false
dg-publish: true
drugbank_id: DB00758
gardenUsername: e2euserd85164e5
id: clopidogrel
permalink: /garden/e2euserd85164e5/drug/clopidogrel/
provenance: curated
slug: clopidogrel
source: Manual
tags:
- drug
- antiplatelet
- cardiovascular
- pharmacogenomics
- prescription
- thrombosis
templateEngineOverride: njk
title: Clopidogrel
type: drug
updated: '2026-08-05T03:21:30.260812Z'
---

{% raw %}
<h1>Clopidogrel</h1>
<h2>Overview</h2>
<p>Clopidogrel is a cornerstone antiplatelet agent used to prevent arterial thrombotic events in patients with coronary, cerebrovascular, and peripheral arterial disease. By irreversibly blocking the platelet <strong>P2Y12 ADP receptor</strong>, it reduces platelet aggregation and is most commonly given together with aspirin as <strong>dual antiplatelet therapy (DAPT)</strong> following percutaneous coronary intervention (PCI) and stent placement, where it markedly lowers the risk of stent thrombosis.</p>
<p>A defining clinical feature of clopidogrel is its <strong>pharmacogenomic variability</strong>. Clopidogrel is an inactive prodrug that must undergo two sequential oxidation steps by hepatic cytochrome P450 enzymes — with <strong>CYP2C19</strong> being rate-limiting — to form the active thiol metabolite. Patients carrying CYP2C19 loss-of-function alleles (most importantly <strong>CYP2C19*2</strong>, defined by the rs4244285 variant) generate less active metabolite, exhibit reduced platelet inhibition, and have an increased risk of major adverse cardiovascular events. This has led to formal Clinical Pharmacogenetics Implementation Consortium (CPIC) guidance recommending alternative agents (e.g. prasugrel or ticagrelor) for intermediate and poor metabolizers in high-risk settings.</p>
<h2>Pharmacological Information</h2>
<p>After oral absorption, about 85% of clopidogrel is hydrolyzed by esterases to an inactive carboxylic acid; the remaining ~15% undergoes CYP-mediated activation (CYP2C19, CYP3A4, CYP1A2, CYP2B6). The active metabolite binds covalently to P2Y12, so the antiplatelet effect persists for the platelet lifespan despite the drug's short plasma half-life. A loading dose (300–600 mg) achieves rapid platelet inhibition.</p>
<h2>Mechanism of Action</h2>
<p>The active thiol metabolite forms a disulfide bridge with cysteine residues of the <strong>P2Y12 receptor</strong>, irreversibly inactivating it. Because P2Y12 amplifies platelet activation and stabilizes the GPIIb/IIIa-fibrinogen bond, its blockade attenuates ADP-induced aggregation. The effect is additive to aspirin, which blocks the thromboxane A2 pathway — the rationale for dual antiplatelet therapy.</p>
<h2>Clinical Features</h2>
<ul>
<li><strong>DAPT with aspirin:</strong> Standard after acute coronary syndrome and PCI.</li>
<li><strong>Loading dose:</strong> 300–600 mg; maintenance 75 mg daily.</li>
<li><strong>Pharmacogenomics:</strong> Test CYP2C19 in high-risk PCI; avoid in poor metabolizers.</li>
</ul>
<h2>Safety Information</h2>
<p>Bleeding is the principal risk, amplified by concomitant anticoagulants or aspirin. Proton-pump inhibitors that strongly inhibit CYP2C19 (e.g. omeprazole) may modestly reduce active-metabolite formation. Rarely, clopidogrel causes thrombotic thrombocytopenic purpura.</p>
<h2>Relationships</h2>
<h3>Treats / Prevents</h3>
<p>TREATS_CONDITION::<a href="/garden/e2euserd85164e5/condition/coronary-artery-disease/" class="internal-link">Coronary Artery Disease</a> - Antiplatelet therapy after ACS/PCI (CURE, PMID: 11519503)<br />
PREVENTS_CONDITION::<a href="/garden/e2euserd85164e5/condition/stroke/" class="internal-link">Stroke</a> - Secondary prevention of ischemic stroke<br />
TREATS_CONDITION::<a href="/garden/e2euserd85164e5/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a> - Reduces atherothrombotic events</p>
<h3>Pharmacogenomics (Gene / Variant)</h3>
<p>METABOLIZED_BY::<a href="/garden/e2euserd85164e5/protein/cyp2c19/" class="internal-link">CYP2C19</a> - Rate-limiting activation enzyme; LOF alleles reduce efficacy (PMID: 19106084)<br />
AFFECTED_BY_VARIANT::<a href="/garden/e2euserd85164e5/variant/rs4244285-cyp2c192/" class="internal-link">rs4244285</a> - CYP2C19*2 loss-of-function allele defining reduced response</p>
<h3>Drug Interactions</h3>
<p>SYNERGISTIC_WITH::<a href="/garden/e2euserd85164e5/drug/aspirin/" class="internal-link">Aspirin</a> - Dual antiplatelet therapy (additive mechanisms)</p>
<h3>Affects Biomarker</h3>
<p>AFFECTS_BIOMARKER::<a href="/garden/e2euserd85164e5/biomarker/platelets/" class="internal-link">Platelets</a> - Inhibits platelet aggregation (function, not count)</p>
<h2>References</h2>
<ul>
<li>Mega JL, et al. Cytochrome P-450 polymorphisms and response to clopidogrel. <em>N Engl J Med.</em> 2009;360(4):354-362 (PMID: 19106084)</li>
<li>Scott SA, et al. Clinical Pharmacogenetics Implementation Consortium Guideline for CYP2C19 Genotype and Clopidogrel Therapy: 2022 Update. <em>Clin Pharmacol Ther.</em> 2022;112(5):959-967 (PMID: 35034351)</li>
<li>Scott SA, et al. Clinical Pharmacogenetics Implementation Consortium guidelines for CYP2C19 genotype and clopidogrel therapy: 2013 update. <em>Clin Pharmacol Ther.</em> 2013;94(3):317-323 (PMID: 23698643)</li>
<li>Yusuf S, et al. Effects of clopidogrel in addition to aspirin in patients with acute coronary syndromes without ST-segment elevation (CURE). <em>N Engl J Med.</em> 2001;345(7):494-502 (PMID: 11519503)</li>
</ul>

{% endraw %}