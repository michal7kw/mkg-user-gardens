---
confidence_score: 0.9
created: 2026-02-07T00:00:00+0000
description: Procalcitonin (PCT) is the 116-amino-acid precursor peptide of the hormone
  calcitonin. Outside the thyroid it is released systemically by parenchymal tissues
  in response to bacterial endotoxin and pro-inflammatory cytokines, rising sharply
  in systemic bacterial infection and sepsis. It is used clinically to distinguish
  bacterial from viral infection, gauge sepsis severity, and guide antibiotic stewardship.
dg-home: false
dg-publish: true
gardenUsername: testuser150c66a0c
id: procalcitonin
last_modified: 2026-06-15T00:00:00+0000
permalink: /garden/testuser150c66a0c/biomarker/procalcitonin/
provenance: curated
slug: procalcitonin
source: Manual
tags:
- biomarker
- inflammation
- sepsis
- bacterial_infection
- antibiotic_stewardship
- critical_care
templateEngineOverride: njk
title: Procalcitonin
type: biomarker
updated: 2026-06-15T00:00:00+0000
---

{% raw %}
<h1>Procalcitonin</h1>
<h2>Overview</h2>
<p>Procalcitonin (PCT) is the 116-amino-acid precursor peptide of calcitonin, encoded by the <em>CALC-1</em> gene. Under normal physiology it is produced almost exclusively in the C-cells of the thyroid, cleaved intracellularly to mature calcitonin, and is virtually undetectable in the circulation of healthy people (&lt;0.05-0.1 ng/mL). During systemic bacterial infection, however, microbial toxins (notably lipopolysaccharide) and pro-inflammatory mediators such as interleukin-6, TNF-alpha, and interleukin-1 beta induce ubiquitous <em>CALC-1</em> transcription in parenchymal cells throughout the liver, lung, kidney, gut, and adipose tissue. This extrathyroidal procalcitonin is released intact into the bloodstream rather than being processed to calcitonin, so serum levels can rise several thousand-fold within 6-12 hours of a bacterial insult.</p>
<p>The kinetics of procalcitonin make it well suited to bedside decision-making. Levels begin to climb within 3-6 hours of bacterial challenge, peak at 12-24 hours, and have a circulating half-life of roughly 22-26 hours, so they fall predictably once the infection is controlled. Viral infections tend to suppress this response (interferon-gamma down-regulates <em>CALC-1</em> induction), which is why procalcitonin is markedly more specific for bacterial infection than C-reactive protein or white-cell count. Because it is cleared in part by the kidney, levels must be interpreted cautiously in renal impairment, and non-infectious massive inflammatory states (major trauma, surgery, burns, cardiogenic shock, and some malignancies) can produce moderate transient elevations.</p>
<p>Clinically, procalcitonin is used in three main ways: to support or refute a diagnosis of systemic bacterial infection and sepsis, to stratify severity and prognosis in critically ill patients, and to guide antibiotic stewardship by informing when antibiotics can be safely started or stopped. It is most valuable when interpreted serially and alongside the clinical picture rather than as a single isolated value, and large randomized trials and meta-analyses support its role in safely shortening antibiotic courses in respiratory infection and sepsis.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value (ng/mL)</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Healthy / low risk</td>
<td>&lt;0.1</td>
<td>Systemic bacterial infection very unlikely; antibiotics generally not indicated</td>
</tr>
<tr>
<td>Indeterminate</td>
<td>0.1 - 0.25</td>
<td>Local or early infection possible; low systemic risk; bacterial infection unlikely</td>
</tr>
<tr>
<td>Systemic infection likely</td>
<td>0.25 - 0.5</td>
<td>Systemic bacterial infection possible; consider antibiotics with clinical correlation</td>
</tr>
<tr>
<td>High likelihood of sepsis</td>
<td>0.5 - 2.0</td>
<td>Systemic bacterial infection/sepsis likely; antibiotics generally indicated</td>
</tr>
<tr>
<td>Severe sepsis / septic shock</td>
<td>&gt;2.0 (often &gt;10)</td>
<td>High risk of severe sepsis and organ dysfunction; supports aggressive therapy</td>
</tr>
</tbody>
</table>
<p><strong>Notes:</strong></p>
<ul>
<li>Thresholds differ by clinical setting: the 0.25 ng/mL cut-off is widely used for lower respiratory tract infection, whereas 0.5 ng/mL is more common for ICU sepsis algorithms.</li>
<li>Assays are not fully standardized across platforms; trend (relative change) over time is often more informative than an absolute single value.</li>
<li>A drop of approximately 80% or more from peak, or a value falling below 0.25-0.5 ng/mL, is commonly used to support antibiotic discontinuation.</li>
<li>Renal impairment, recent major surgery/trauma, severe burns, prolonged cardiogenic shock, and certain neuroendocrine tumors can elevate procalcitonin without bacterial infection.</li>
</ul>
<h2>Testing Information</h2>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Detail</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Measurement Unit</strong></td>
<td>ng/mL (equivalent to mcg/L)</td>
</tr>
<tr>
<td><strong>Sample Type</strong></td>
<td>Blood (serum or plasma)</td>
</tr>
<tr>
<td><strong>Fasting Required</strong></td>
<td>No</td>
</tr>
<tr>
<td><strong>Preferred Method</strong></td>
<td>Automated immunoassay (e.g., electrochemiluminescence / BRAHMS PCT-based assays)</td>
</tr>
<tr>
<td><strong>Test Frequency</strong></td>
<td>At presentation in suspected sepsis, then serially (often every 24-48 h) to track response and guide antibiotic duration</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<p><strong>Increase Procalcitonin:</strong></p>
<ul>
<li>Systemic bacterial infection and sepsis (primary driver, via cytokine-mediated <em>CALC-1</em> induction)</li>
<li>Fungal and severe parasitic (e.g., malaria) infections</li>
<li>Major surgery, multi-trauma, and extensive burns (transient, non-infectious)</li>
<li>Cardiogenic shock and prolonged severe hypoperfusion</li>
<li>Medullary thyroid carcinoma and some neuroendocrine tumors (constitutive production)</li>
<li>Newborn period (physiologic surge in the first 48 hours of life)</li>
<li>Reduced renal clearance in advanced kidney failure</li>
</ul>
<p><strong>Decrease Procalcitonin:</strong></p>
<ul>
<li>Resolution of bacterial infection with effective antibiotic therapy</li>
<li>Viral infections (interferon-gamma suppresses procalcitonin induction)</li>
<li>Localized infections without systemic involvement</li>
<li>Early/very recent infection (before the 6-12 hour rise)</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Elevated levels are associated with:</strong></p>
<ul>
<li><strong>Sepsis and septic shock</strong> -- procalcitonin rises in proportion to the systemic inflammatory burden and is one of the better-studied biomarkers for sepsis diagnosis and severity stratification.</li>
<li><strong>Bacterial pneumonia and lower respiratory tract infection</strong> -- helps distinguish bacterial from viral causes and supports decisions on starting/stopping antibiotics.</li>
<li><strong>Bacterial meningitis</strong> -- substantially higher than in viral (aseptic) meningitis, aiding differentiation.</li>
<li><strong>Complicated urinary tract infection / pyelonephritis</strong> -- elevation suggests systemic/upper-tract involvement rather than uncomplicated cystitis.</li>
<li><strong>Bloodstream infection (bacteremia)</strong> -- higher pretest probability of true bacteremia at elevated levels.</li>
</ul>
<p><strong>Reduced or low levels are associated with:</strong></p>
<ul>
<li><strong>Viral infections</strong> -- characteristically low procalcitonin despite clinical illness.</li>
<li><strong>Non-infectious inflammation</strong> -- many sterile inflammatory states raise CRP but not procalcitonin, improving specificity for bacterial infection.</li>
</ul>
<p><strong>Monitoring use cases:</strong></p>
<ul>
<li>Antibiotic stewardship: guiding initiation and, especially, duration of therapy (procalcitonin-guided protocols safely reduce antibiotic exposure).</li>
<li>Sepsis prognosis: persistently high or rising levels indicate inadequate source control or treatment failure.</li>
<li>De-escalation: a substantial decline supports stopping antibiotics in appropriate patients.</li>
</ul>
<h2>Strategies to Manage</h2>
<p>Procalcitonin reflects acute bacterial infection and systemic inflammation rather than a modifiable lifestyle parameter, so &quot;management&quot; centers on the underlying clinical situation rather than on lowering the number itself:</p>
<ol>
<li><strong>Treat the source</strong> -- prompt, appropriate antibiotic therapy and source control (drainage, device removal) are the primary means by which elevated procalcitonin resolves.</li>
<li><strong>Use procalcitonin-guided protocols</strong> -- validated algorithms use serial values and percentage drop from peak to inform safe antibiotic discontinuation, reducing unnecessary exposure.</li>
<li><strong>Interpret in context</strong> -- account for renal function, recent surgery/trauma, and time since symptom onset before acting on a single value.</li>
<li><strong>Trend serially</strong> -- repeat measurement every 24-48 hours during treatment to confirm response; a failure to fall warrants reassessment for inadequate source control or resistant organisms.</li>
<li><strong>Avoid over-reliance</strong> -- combine with culture data, clinical scores, and other markers (CRP, lactate, WBC) rather than treating procalcitonin as a stand-alone trigger.</li>
</ol>
<h2>Relationships</h2>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser150c66a0c/condition/sepsis/" class="internal-link">Sepsis</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser150c66a0c/condition/bacterial-infections/" class="internal-link">Bacterial Infections</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser150c66a0c/condition/meningitis/" class="internal-link">Meningitis</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser150c66a0c/condition/pneumonia/" class="internal-link">Pneumonia</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser150c66a0c/condition/urinary-tract-infection/" class="internal-link">Urinary Tract Infection</a></p>
<h3>Predicts Risk</h3>
<p>PREDICTS_RISK::<a href="/garden/testuser150c66a0c/condition/sepsis/" class="internal-link">Sepsis</a></p>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/testuser150c66a0c/organ/immune-system/" class="internal-link">Immune System</a><br />
INDICATES_ORGAN_HEALTH::<a href="/garden/testuser150c66a0c/organ/lungs/" class="internal-link">Lungs</a> (elevated in bacterial pneumonia/lower respiratory tract infection)</p>
<h3>Correlated With</h3>
<p>CORRELATED_WITH::<a href="/garden/testuser150c66a0c/labtest/hs-crp/" class="internal-link">Hs Crp</a><br />
CORRELATED_WITH::<a href="/garden/testuser150c66a0c/biomarker/wbc/" class="internal-link">Wbc</a><br />
CORRELATED_WITH::<a href="/garden/testuser150c66a0c/labtest/interleukin-6/" class="internal-link">Interleukin 6</a><br />
CORRELATED_WITH::<a href="/garden/testuser150c66a0c/labtest/tnf-alpha/" class="internal-link">TNF Alpha</a><br />
CORRELATED_WITH::<a href="/garden/testuser150c66a0c/labtest/esr/" class="internal-link">Esr</a></p>
<h3>Participates In Pathway</h3>
<p>PART_OF::<a href="/garden/testuser150c66a0c/pathway/inflammation-response/" class="internal-link">Inflammation Response</a></p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/garden/testuser150c66a0c/supplement/vitamin-d/" class="internal-link">Vitamin D</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/testuser150c66a0c/supplement/vitamin-c/" class="internal-link">Vitamin C</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/testuser150c66a0c/supplement/probiotics/" class="internal-link">Probiotics</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/testuser150c66a0c/supplement/selenium/" class="internal-link">Selenium</a></p>
<h2>References</h2>
<ul>
<li>Assicot M, Gendrel D, Carsin H, et al. <em>Lancet.</em> 1993;341(8844):515-518 -- Original description of high serum procalcitonin concentrations in patients with sepsis and infection (PMID: 8094770)</li>
<li>Wacker C, Prkno A, Brunkhorst FM, Schlattmann P. <em>Lancet Infect Dis.</em> 2013;13(5):426-435 -- Systematic review and meta-analysis of procalcitonin as a diagnostic marker for sepsis (PMID: 23375419)</li>
<li>de Jong E, van Oers JA, Beishuizen A, et al. <em>Lancet Infect Dis.</em> 2016;16(7):819-827 -- SAPS randomized trial: procalcitonin guidance safely reduces duration of antibiotic treatment in critically ill patients (PMID: 26947523)</li>
<li>Khilnani GC, Tiwari P, Zirpe KG, et al. <em>Indian J Crit Care Med.</em> 2022;26(Suppl 2):S77-S94 -- Guidelines for the use of procalcitonin for rational use of antibiotics (PMID: 36896360)</li>
<li>Ghatak T, Pal A, Rochwerg B, et al. <em>J Crit Care.</em> 2026;92:155402 -- Diagnostic accuracy of serum procalcitonin for sepsis in critically ill adults (PMID: 41421176)</li>
<li>Gupta S, Klompas M, Rhee C. <em>Clin Infect Dis.</em> 2026;82(3):453-458 -- Reassessing procalcitonin-guided antibiotic therapy in critically ill patients (PMID: 40579227)</li>
</ul>

{% endraw %}