---
confidence_score: 0.85
created: 2026-01-24T12:00:00+0000
description: Plasma amyloid-beta 42/40 ratio (pAβ42/40) is a blood-based biomarker
  of brain amyloid pathology measured by immunoaffinity mass spectrometry (IP-MS)
  or automated immunoassay (Roche Elecsys, C2N Diagnostics PrecivityAD2). A decreased
  ratio reflects amyloid plaque deposition (brain amyloid-beta clearance shifts from
  CSF/plasma to plaque sequestration). Enables non-invasive, low-cost screening for
  Alzheimer's pathology, with diagnostic accuracy ~85-90% vs amyloid PET in 2022-2024
  cohort studies.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: e2euser9ab17014
id: plasma_amyloid_ratio
last_modified: 2026-06-21T00:00:00+0000
permalink: /garden/e2euser9ab17014/biomarker/plasma-amyloid-beta-ratio/
provenance: curated
slug: plasma-amyloid-beta-ratio
source: Manual
tags:
- biomarker
- blood_test
- alzheimers
- amyloid
- screening
- plasma
- non_invasive
- precision_medicine
templateEngineOverride: njk
title: Plasma Amyloid-Beta Ratio
type: biomarker
updated: 2026-06-21T00:00:00+0000
---

{% raw %}
<h1>Plasma Amyloid-Beta Ratio</h1>
<h2>Overview</h2>
<p>The plasma amyloid-beta 42/40 ratio (pAβ42/40) is a blood-based biomarker that reflects brain amyloid pathology with sufficient accuracy to enable large-scale, non-invasive screening for Alzheimer's disease. The biomarker exploits a fundamental property of AD pathophysiology: in healthy brain, amyloid-beta 42 (Aβ42) and amyloid-beta 40 (Aβ40) circulate in a relatively constant ratio (~0.10-0.12). When amyloid plaques begin depositing in brain parenchyma (the initiating event of AD pathogenesis), Aβ42 is selectively sequestered into plaques, lowering its relative concentration in CSF and blood. The plasma Aβ42/40 ratio therefore <em>decreases</em> with brain amyloid deposition.</p>
<p>The plasma ratio became clinically actionable with the development of high-precision immunoaffinity mass spectrometry by Randall Bateman's group at Washington University (Nakamura et al., <em>Nature</em> 2018), which achieved ~90% concordance with amyloid PET. Since then, automated immunoassays (Roche Elecsys) and commercial clinical tests (C2N Diagnostics PrecivityAD2) have brought pAβ42/40 into routine clinical practice for early Alzheimer's detection. Combined with plasma p-tau217, plasma Aβ42/40 enables &quot;blood-first&quot; Alzheimer's screening -- a transformative shift from the previous reliance on amyloid PET (~$3,000-$7,000) or CSF biomarkers (invasive lumbar puncture).</p>
<p>The clinical impact is most pronounced in primary care and memory clinic triage: a patient with low plasma Aβ42/40 (and elevated plasma p-tau217) is referred for confirmatory amyloid PET or CSF testing; those with normal plasma biomarkers avoid these expensive/invasive procedures. Multiple guideline bodies (NIA-AA 2024 update, EMA, AAIC 2024) are incorporating plasma biomarkers as a first-line triage step before PET/CSF.</p>
<p><strong>Evidence Level: 4/5</strong> (well-validated; FDA-cleared commercial assays; not yet universally reimbursed).</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Group</th>
<th>pAβ42/40 (IP-MS)</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Amyloid-negative adults</td>
<td>&gt;0.092</td>
<td>Normal -- low probability of brain amyloid</td>
</tr>
<tr>
<td>Indeterminate / gray zone</td>
<td>0.085-0.092</td>
<td>Borderline; consider age, ApoE, p-tau217</td>
</tr>
<tr>
<td>Amyloid-positive (AD pathology)</td>
<td>&lt;0.085</td>
<td>High probability of brain amyloid deposition</td>
</tr>
</tbody>
</table>
<p><strong>Caveats:</strong></p>
<ul>
<li>Cutoffs are assay-specific (IP-MS vs Elecsys vs Lumipulse -- not interchangeable)</li>
<li>Combined with age and ApoE4 status, AUC improves to ~0.93 (C2N PrecivityAD2 algorithm)</li>
<li>Combined with p-tau217, AUC approaches 0.95+ for detecting brain amyloid</li>
<li>Renal impairment affects plasma Aβ concentrations; interpret with caution in CKD</li>
<li>Reference range does not constitute diagnosis -- must be confirmed with PET or CSF in clinical decision-making</li>
</ul>
<h2>Testing Information</h2>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Measurement Unit</td>
<td>Dimensionless ratio (Aβ42 / Aβ40)</td>
</tr>
<tr>
<td>Sample Type</td>
<td>Blood (plasma, EDTA)</td>
</tr>
<tr>
<td>Fasting Required</td>
<td>No</td>
</tr>
<tr>
<td>Preferred Method</td>
<td>IP-LC-MS/MS (C2N PrecivityAD2); Roche Elecsys plasma Aβ42/40; Fujirebio Lumipulse</td>
</tr>
<tr>
<td>Test Frequency</td>
<td>Once in cognitive evaluation; repeat only in longitudinal monitoring / clinical trials</td>
</tr>
<tr>
<td>Turnaround</td>
<td>1-2 weeks (commercial C2N test)</td>
</tr>
<tr>
<td>Stability</td>
<td>Polypropylene; process within 4 h; -80C long-term</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<p><strong>Decrease pAβ42/40 (suggestive of brain amyloid):</strong></p>
<ul>
<li>Brain amyloid plaque deposition (Alzheimer's pathology)</li>
<li>ApoE4 carrier status (accelerates amyloid deposition)</li>
<li>Age (cumulative amyloid burden)</li>
<li>Cerebral amyloid angiopathy (often co-occurs with AD amyloid)</li>
</ul>
<p><strong>Increase pAβ42/40 (relative sparing of brain amyloid):</strong></p>
<ul>
<li>Younger age</li>
<li>ApoE ε2 carrier status (protective)</li>
<li>Successful anti-amyloid therapy (lecanemab, donanemab) -- late effect, months-years</li>
</ul>
<p><strong>Pre-analytical and confounders:</strong></p>
<ul>
<li>Renal impairment (altered clearance)</li>
<li>Sample handling: delayed centrifugation or room-temperature storage degrades Aβ42 preferentially</li>
<li>Hemolysis may interfere</li>
<li>Diurnal variation minimal but standardize collection time</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Decreased pAβ42/40 is associated with:</strong></p>
<ul>
<li><strong>Brain amyloid pathology (AD continuum)</strong>: sensitivity ~80-90% and specificity ~85-90% vs amyloid PET in well-designed studies</li>
<li><strong>Cerebral amyloid angiopathy</strong>: plasma Aβ42/40 is decreased, similar to AD</li>
<li><strong>Preclinical AD</strong>: abnormal pAβ42/40 detected 10-15 years before symptom onset (in autosomal-dominant AD and Down syndrome cohorts)</li>
<li><strong>Mild cognitive impairment due to AD</strong>: ratio tracks with cognitive decline</li>
</ul>
<p><strong>Limitations:</strong></p>
<ul>
<li><strong>Indeterminate range (~10-15% of patients)</strong>: requires p-tau217 confirmation or CSF/PET</li>
<li><strong>Not diagnostic of AD dementia</strong>: AD requires both amyloid AND tau pathology; pAβ42/40 alone reflects only the amyloid component</li>
<li><strong>Renal impairment</strong>: alters kinetics; adjust interpretation</li>
<li><strong>Not yet reimbursed</strong> by most insurers (Medicare 2024: in progress for some clinical scenarios)</li>
</ul>
<p><strong>Monitoring use cases:</strong></p>
<ul>
<li>Triage before amyloid PET (reduce PET scans by 50-70% in memory clinics)</li>
<li>Pre-screen for anti-amyloid therapy eligibility (lecanemab, donanemab)</li>
<li>Longitudinal tracking of amyloid therapy response (research)</li>
<li>Population-level risk stratification (research)</li>
</ul>
<h2>Strategies to Manage</h2>
<p>pAβ42/40 reflects brain tissue state and is not directly modifiable by lifestyle in the short term. Long-term strategies:</p>
<ol>
<li><strong>If abnormal (low pAβ42/40):</strong> confirm with amyloid PET or CSF biomarkers; if amyloid confirmed, evaluate for tau pathology (tau PET or CSF p-tau217); consider early intervention</li>
<li><strong>Lecanemab (Leqembi)</strong> or <strong>donanemab (Kisunla)</strong> for early-stage amyloid-confirmed AD with MCI or mild dementia (FDA-approved; ARIA monitoring required)</li>
<li><strong>Cardiovascular risk factor management</strong> (BP, lipids, diabetes, physical exercise): observational evidence suggests lower lifetime amyloid burden in midlife exercisers (Lazarov et al.)</li>
<li><strong>Mediterranean / MIND diet</strong>: observational evidence for reduced amyloid burden</li>
<li><strong>Cognitive engagement, sleep optimization</strong>: emerging evidence links sleep-disordered breathing and reduced slow-wave sleep to greater amyloid burden</li>
<li><strong>Treat modifiable risk factors:</strong> midlife hearing loss, depression, social isolation (Lancet Commission on dementia prevention)</li>
</ol>
<h2>Relationships</h2>
<h3>ASSOCIATED_WITH_CONDITION</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser9ab17014/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> - principal clinical use; pAβ42/40 is a non-invasive screening biomarker for brain amyloid pathology<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser9ab17014/condition/mild-cognitive-impairment/" class="internal-link">Mild Cognitive Impairment</a> - abnormal pAβ42/40 in MCI predicts progression to AD dementia</p>
<h3>INDICATES_ORGAN_HEALTH</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/e2euser9ab17014/organ/brain/" class="internal-link">Brain</a> - reflects brain amyloid pathology non-invasively</p>
<h3>PREDICTS_RISK</h3>
<p>PREDICTS_RISK::<a href="/garden/e2euser9ab17014/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> - abnormal pAβ42/40 detected 10-15 years before symptoms</p>
<h3>CORRELATED_WITH</h3>
<p>CORRELATED_WITH::<a href="/garden/e2euser9ab17014/biomarker/plasma-p-tau217/" class="internal-link">Plasma p-tau217</a> - complementary blood biomarker; combining Aβ42/40 + p-tau217 yields AUC ~0.95 for brain amyloid detection<br />
CORRELATED_WITH::<a href="/garden/e2euser9ab17014/biomarker/total-tau/" class="internal-link">Total Tau</a> - CSF t-tau remains the &quot;neurodegeneration&quot; marker in the AT(N) framework; plasma Aβ42/40 measures the &quot;A&quot;<br />
CORRELATED_WITH::<a href="/garden/e2euser9ab17014/biomarker/gfap/" class="internal-link">GFAP</a> - astrocyte activation marker; co-elevated with low pAβ42/40 in amyloid-positive individuals<br />
CORRELATED_WITH::<a href="/garden/e2euser9ab17014/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament Light Chain</a> - axonal injury marker; complementary for staging<br />
CORRELATED_WITH::<a href="/garden/e2euser9ab17014/biomarker/blood-nfl/" class="internal-link">Blood NfL</a> - blood-based NfL; complementary</p>
<h3>PARTICIPATES_IN_PATHWAY</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/e2euser9ab17014/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a> - amyloid pathology is associated with mitochondrial dysfunction; amyloid-beta disrupts ETC and increases ROS</p>
<h2>References</h2>
<ul>
<li>Nakamura A, Kaneko N, Villemagne VL, et al. <em>Nature.</em> 2018;554(7691):249-254. High performance plasma amyloid-beta biomarkers for Alzheimer's disease (the seminal IP-MS plasma Aβ42/40 paper) (PMID: 29466337)</li>
<li>Palmqvist S, Janelidze S, Quiroz YT, et al. <em>JAMA Neurol.</em> 2020;77(9):1071-1080. Discriminative accuracy of plasma Aβ42/40 vs amyloid PET status (PMID: 32672318)</li>
<li>Schindler SE, Bollinger JG, Ovod V, et al. <em>Neurology.</em> 2019;93(17):e1647-e1659. High-precision plasma Aβ42/40 predicts amyloid PET (PMID: 31467437)</li>
<li>Teunissen CE, Verberk IMW, Thijsssen EH, et al. <em>Lancet Neurol.</em> 2022;21(1):66-77. Blood-based biomarkers for Alzheimer's disease (PMID: 35305371)</li>
<li>Ovod V, Ramsey KN, Mawuenyega KG, et al. <em>Invest Ophthalmol Vis Sci.</em> 2017;58(8):2611. Amyloid beta concentrations in CSF and plasma (PMID: 28678509)</li>
<li>Cullen NC, Janelidze S, Mattsson-Carlgren N, et al. <em>Nat Med.</em> 2021;27(3):500-505. Plasma Aβ42/40 and p-tau217 for AD detection (PMID: 33649620)</li>
<li>Thijsessen EH, La Joie R, Wolf A, et al. <em>Nat Med.</em> 2020;26(11):1750-1757. Diagnostic value of plasma Aβ42/40 in ADNI (PMID: 32989311)</li>
<li>Brickman AM, Manly JJ, Honig LS, et al. <em>Alzheimers Dement (NY).</em> 2021;7(1):e12192. Plasma p-tau181 and Aβ42/40 in a racially and ethnically diverse cohort (PMID: 33937650)</li>
<li>Jack CR Jr, Bennett DA, Blennow K, et al. <em>Lancet Neurol.</em> 2018;17(7):565-567. NIA-AA Research Framework (AT(N)) (PMID: 28555989)</li>
<li>Hansson O. <em>Nat Med.</em> 2021;27(6):954-963. Biomarkers for neurodegenerative diseases in clinical practice (review) (PMID: 34135333)</li>
<li>Brum WS, Cullen NC, Janelidze S, et al. <em>Nat Commun.</em> 2023;14(1):7432. A two-step workflow for plasma Aβ42/40 + p-tau217 in clinical practice (PMID: 38040759)</li>
</ul>

{% endraw %}