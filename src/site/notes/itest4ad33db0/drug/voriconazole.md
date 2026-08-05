---
confidence_score: 0.8
created: '2026-06-19T12:00:00+00:00'
description: Second-generation triazole antifungal and first-line therapy for invasive
  aspergillosis. It inhibits fungal ergosterol synthesis and is primarily metabolized
  by the polymorphic enzyme CYP2C19, so plasma exposure and dosing are strongly influenced
  by CYP2C19 genotype and benefit from therapeutic drug monitoring.
dg-home: false
dg-publish: true
drugbank_id: DB00582
gardenUsername: itest4ad33db0
id: voriconazole
permalink: /garden/itest4ad33db0/drug/voriconazole/
provenance: curated
slug: voriconazole
source: Manual
tags:
- drug
- antifungal
- triazole
- prescription
- infectious_disease
- pharmacogenomics
templateEngineOverride: njk
title: Voriconazole
type: drug
updated: '2026-08-05T21:42:39.264466Z'
---

{% raw %}
<h1>Voriconazole</h1>
<h2>Overview</h2>
<p>Voriconazole is a second-generation triazole antifungal that is the recommended first-line treatment for invasive aspergillosis, where it demonstrated superior survival and response compared with conventional amphotericin B in a landmark randomized trial (Herbrecht, PMID: 12167683). It also treats serious infections caused by Scedosporium, Fusarium, and fluconazole-resistant Candida, and is available in both oral and intravenous formulations.</p>
<p>A defining feature of voriconazole is its highly variable, non-linear pharmacokinetics driven by metabolism through hepatic cytochrome P450 enzymes, especially the genetically polymorphic CYP2C19. Poor metabolizers accumulate high concentrations (raising the risk of hepatotoxicity and neurotoxicity), while rapid/ultrarapid metabolizers may have subtherapeutic levels and treatment failure. For this reason, CPIC genotype-guided dosing and therapeutic drug monitoring are recommended (PMID: 27981572).</p>
<h2>Pharmacological Information</h2>
<ul>
<li><strong>Class:</strong> Triazole antifungal</li>
<li><strong>Routes:</strong> Oral (high bioavailability ~96%) and intravenous</li>
<li><strong>Metabolism:</strong> Hepatic via CYP2C19 (major), CYP3A4 and CYP2C9 (minor); non-linear kinetics</li>
<li><strong>Pharmacogenetics:</strong> CYP2C19 genotype strongly affects exposure; TDM recommended (target trough ~1-5.5 mg/L)</li>
</ul>
<h2>Mechanism of Action</h2>
<p>Voriconazole inhibits the fungal cytochrome P450 enzyme 14-alpha-sterol demethylase (CYP51 / lanosterol demethylase). This blocks the demethylation of lanosterol to ergosterol, the principal sterol of the fungal cell membrane. Depletion of ergosterol and accumulation of toxic methylated sterol precursors disrupts membrane structure and function, producing a fungistatic effect against yeasts and fungicidal activity against many molds including Aspergillus.</p>
<h2>Clinical Features</h2>
<ul>
<li><strong>Invasive aspergillosis:</strong> First-line; loading dose followed by maintenance (oral or IV)</li>
<li><strong>Therapeutic drug monitoring:</strong> Improves efficacy and limits toxicity given wide interpatient variability (PMID: 39712496)</li>
<li><strong>Genotype-guided dosing:</strong> CYP2C19 poor metabolizers may require dose reduction; ultrarapid metabolizers may need alternatives (PMID: 27981572)</li>
</ul>
<h2>Safety Information</h2>
<ul>
<li><strong>Common side effects:</strong> Transient visual disturbances (photopsia, altered color perception), photosensitivity, hepatotoxicity, elevated liver enzymes</li>
<li><strong>Serious effects:</strong> QT prolongation, neurotoxicity (encephalopathy at high levels), periostitis and skin cancer with prolonged use</li>
<li><strong>Interactions:</strong> Extensive — strong CYP3A4/CYP2C19 substrate and inhibitor; contraindicated with many CYP3A4 substrates and inducers (e.g., rifampin, carbamazepine)</li>
<li><strong>Contraindications:</strong> Coadministration with drugs that may have prolonged QT or be strongly affected by CYP inhibition</li>
</ul>
<h2>Relationships</h2>
<p>METABOLIZED_BY::<a href="/garden/itest4ad33db0/protein/cyp2c19/" class="internal-link">CYP2C19</a> - Primary metabolizing enzyme; genotype drives exposure (PMID: 27981572)<br />
INTERACTS_WITH::<a href="/garden/itest4ad33db0/protein/cyp3a4/" class="internal-link">CYP3A4</a> - Substrate and inhibitor, basis of many drug interactions<br />
TREATS_CONDITION::<a href="/garden/itest4ad33db0/condition/candidiasis/" class="internal-link">Candidiasis</a> - Active against fluconazole-resistant Candida<br />
AFFECTS_ORGAN::<a href="/garden/itest4ad33db0/organ/liver/" class="internal-link">Liver</a> - Site of metabolism; dose-dependent hepatotoxicity<br />
CAUSES::<a href="/garden/itest4ad33db0/sideeffect/qt-prolongation/" class="internal-link">QT Prolongation</a> - Class effect requiring ECG monitoring</p>
<h2>References</h2>
<ul>
<li>Herbrecht R, Denning DW, Patterson TF, et al. <em>N Engl J Med.</em> 2002;347(6):408-415 - Voriconazole versus amphotericin B for primary therapy of invasive aspergillosis (PMID: 12167683)</li>
<li>Moriyama B, Obeng AO, Barbarino J, et al. <em>Clin Pharmacol Ther.</em> 2017;102(1):45-51 - CPIC guideline for CYP2C19 and voriconazole therapy (PMID: 27981572)</li>
<li>Jiang L, Lin Z. <em>Front Pharmacol.</em> 2024 - Voriconazole: review of dose adjustment guided by therapeutic drug monitoring (PMID: 39712496)</li>
</ul>

{% endraw %}