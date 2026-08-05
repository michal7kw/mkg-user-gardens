---
confidence_score: 0.8
created: '2026-06-19T12:00:00+00:00'
description: Glycopeptide antibiotic active against Gram-positive bacteria. Given
  orally (non-absorbed) for Clostridioides difficile infection and intravenously for
  serious methicillin-resistant Staphylococcus aureus (MRSA) and other resistant Gram-positive
  infections. Requires therapeutic drug monitoring when used systemically.
dg-home: false
dg-publish: true
drugbank_id: DB00512
gardenUsername: testuser12c6fa382
id: vancomycin
permalink: /garden/testuser12c6fa382/drug/vancomycin/
provenance: curated
slug: vancomycin
source: Manual
tags:
- drug
- antibiotic
- glycopeptide
- prescription
- infectious_disease
- mrsa
templateEngineOverride: njk
title: Vancomycin
type: drug
updated: '2026-08-05T04:19:20.313690Z'
---

{% raw %}
<h1>Vancomycin</h1>
<h2>Overview</h2>
<p>Vancomycin is a glycopeptide antibiotic that has been a cornerstone of therapy for serious Gram-positive infections since the 1950s. Its two principal modern roles depend on the route of administration: oral vancomycin is poorly absorbed and stays in the gut lumen, making it a standard treatment for Clostridioides difficile infection, while intravenous vancomycin reaches systemic tissues and is a first-line agent for methicillin-resistant Staphylococcus aureus (MRSA) bacteremia, endocarditis, and other resistant Gram-positive disease.</p>
<p>Because the drug exhibits a narrow therapeutic window and concentration-dependent toxicity, systemic use requires therapeutic drug monitoring. Contemporary guidance recommends AUC-guided dosing (target AUC/MIC of 400-600 mg·h/L for serious MRSA infection) rather than trough-only monitoring to balance efficacy against nephrotoxicity.</p>
<h2>Pharmacological Information</h2>
<ul>
<li><strong>Class:</strong> Glycopeptide</li>
<li><strong>Routes:</strong> Intravenous (systemic infection) and oral (gut-localized for CDI)</li>
<li><strong>Oral absorption:</strong> Negligible — oral capsules/solution act locally in the colon</li>
<li><strong>Elimination:</strong> Primarily renal (IV); dose adjustment required in renal impairment</li>
<li><strong>Monitoring:</strong> AUC-guided dosing for serious MRSA infection (PMID: 32191793)</li>
</ul>
<h2>Mechanism of Action</h2>
<p>Vancomycin binds with high affinity to the terminal D-alanyl-D-alanine (D-Ala-D-Ala) residues of nascent peptidoglycan pentapeptide precursors. By sterically blocking these substrates, it prevents the transglycosylation and transpeptidation steps that cross-link and elongate the bacterial cell wall, leading to a weakened wall and cell lysis. Resistance (e.g., in VRE) arises when bacteria substitute D-Ala-D-lactate, drastically lowering binding affinity.</p>
<h2>Clinical Features</h2>
<ul>
<li><strong>MRSA / serious Gram-positive (IV):</strong> Weight-based loading and maintenance dosing with AUC-guided monitoring</li>
<li><strong>C. difficile infection (oral):</strong> 125 mg four times daily for 10 days; tapered/pulsed regimens for recurrence</li>
<li><strong>Guideline status:</strong> First-line for CDI alongside fidaxomicin (IDSA/SHEA 2021, PMID: 34492699); standard for invasive MRSA disease</li>
</ul>
<h2>Safety Information</h2>
<ul>
<li><strong>Nephrotoxicity:</strong> Dose- and exposure-dependent, increased with concomitant nephrotoxins</li>
<li><strong>Ototoxicity:</strong> Rare, more likely with high serum concentrations</li>
<li><strong>Infusion reaction:</strong> &quot;Vancomycin flushing syndrome&quot; (formerly &quot;red man syndrome&quot;) from rapid infusion-related histamine release</li>
<li><strong>Contraindications:</strong> Hypersensitivity to vancomycin</li>
</ul>
<h2>Relationships</h2>
<p>TREATS_CONDITION::<a href="/garden/testuser12c6fa382/microbe/clostridioides-difficile/" class="internal-link">Clostridioides difficile</a> - Oral therapy for CDI (PMID: 34492699)<br />
INHIBITS::<a href="/garden/testuser12c6fa382/microbe/clostridioides-difficile/" class="internal-link">Clostridioides difficile</a> - Cell-wall synthesis inhibition<br />
TREATS_CONDITION::<a href="/garden/testuser12c6fa382/condition/bacterial-endocarditis/" class="internal-link">Bacterial Endocarditis</a> - IV therapy for MRSA endocarditis<br />
TREATS_CONDITION::<a href="/garden/testuser12c6fa382/condition/sepsis/" class="internal-link">Sepsis</a> - Empiric/targeted coverage of resistant Gram-positives<br />
AFFECTS_ORGAN::<a href="/garden/testuser12c6fa382/organ/kidneys/" class="internal-link">Kidneys</a> - Renally eliminated; dose-dependent nephrotoxicity<br />
RELATED_TO::<a href="/garden/testuser12c6fa382/drug/fidaxomicin/" class="internal-link">Fidaxomicin</a> - Comparator and alternative oral therapy for CDI</p>
<h2>References</h2>
<ul>
<li>Rybak MJ, Le J, Lodise TP, et al. <em>Am J Health Syst Pharm.</em> 2020;77(11):835-864 - Therapeutic monitoring of vancomycin for serious MRSA infections (consensus guideline) (PMID: 32191793)</li>
<li>Johnson S, Lavergne V, Skinner AM, et al. <em>Clin Infect Dis.</em> 2021;73(5):e1029-e1044 - IDSA/SHEA 2021 clinical practice guideline update for CDI (PMID: 34492699)</li>
<li>Louie TJ, Miller MA, Mullane KM, et al. <em>N Engl J Med.</em> 2011;364(5):422-431 - Fidaxomicin versus vancomycin for C. difficile infection (PMID: 21288078)</li>
<li>Tseng WC, Chen KC, Chung CS, et al. <em>Medicine (Baltimore).</em> 2026 - Comparative effectiveness of vancomycin and fidaxomicin in CDI (PMID: 41995553)</li>
</ul>

{% endraw %}