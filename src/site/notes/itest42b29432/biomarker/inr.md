---
confidence_score: 0.95
created: 2026-05-03T00:00:00+0000
description: The International Normalized Ratio (INR) is the standardized form of
  the prothrombin time (PT), calculated as INR = (PT_patient / PT_mean_normal)^ISI
  where ISI is the International Sensitivity Index of the thromboplastin reagent.
  INR allows comparable PT results across labs using thromboplastins of different
  sensitivities. Introduced by the WHO in 1983. Therapeutic range for most warfarin
  indications is 2.0-3.0; for mechanical mitral valves 2.5-3.5. INR >4.5 carries significant
  bleeding risk; INR >9 requires urgent reversal.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: itest42b29432
id: inr
last_modified: 2026-06-21T00:00:00+0000
permalink: /garden/itest42b29432/biomarker/inr/
provenance: curated
slug: inr
source: Manual
tags:
- biomarker
- coagulation
- hematology
- warfarin_monitoring
- vitamin_k_antagonist
- bleeding_risk
- who_essential
templateEngineOverride: njk
title: INR
type: biomarker
updated: 2026-06-21T00:00:00+0000
---

{% raw %}
<h1>INR</h1>
<h2>Overview</h2>
<p>The International Normalized Ratio (INR) is the standardized, dimensionless form of the prothrombin time (PT). Introduced by the WHO in 1983, INR corrects for the substantial inter-laboratory variability in PT measurements caused by different sensitivities of thromboplastin reagents. Mathematically, INR = (PT_patient / PT_mean_normal)^ISI, where ISI is the International Sensitivity Index of the thromboplastin reagent used (ISI ~1.0 for human brain-derived reagents, ISI ~2.0 for some rabbit-derived reagents). A patient's INR is therefore comparable across labs -- a critical advance that enabled international anticoagulation management.</p>
<p>INR is the gold-standard monitoring biomarker for <strong>vitamin K antagonist (VKA) anticoagulants</strong> (warfarin, acenocoumarol, phenprocoumon, fluindione). It reflects the activity of the vitamin K-dependent clotting factors II, VII, IX, and X (plus endogenous anticoagulants protein C and S). Therapeutic range for most warfarin indications (atrial fibrillation, venous thromboembolism, mechanical aortic valve) is INR 2.0-3.0, with a target of 2.5. For mechanical <strong>mitral</strong> valves, the range is 2.5-3.5 (target 3.0) due to higher thrombogenicity.</p>
<p>The clinical use of INR has been transformed by direct oral anticoagulants (DOACs -- dabigatran, rivaroxaban, apixaban, edoxaban), which do not require routine INR monitoring and have displaced warfarin for many indications (non-valvular AFib, VTE). However, warfarin remains preferred for mechanical heart valves, severe renal impairment (eGFR &lt;30), antiphospholipid syndrome with triple positivity, and resource-limited settings -- ensuring INR's continued clinical relevance. The 2024 ACC/AHA AFib guideline still recommends warfarin for these specific populations.</p>
<p><strong>Evidence Level: 5/5</strong> (foundational hematology biomarker; universal clinical use).</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>INR Value</th>
<th>Clinical Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal (no anticoagulation)</td>
<td>0.8-1.2</td>
<td>Healthy adult baseline</td>
</tr>
<tr>
<td>Therapeutic (most indications)</td>
<td>2.0-3.0</td>
<td>AFib, VTE, mechanical aortic valve, cardiomyopathy</td>
</tr>
<tr>
<td>Therapeutic (high-risk)</td>
<td>2.5-3.5</td>
<td>Mechanical mitral valve, recurrent VTE on warfarin, some APS</td>
</tr>
<tr>
<td>Supratherapeutic (concerning)</td>
<td>3.5-4.5</td>
<td>Increased bleeding risk; investigate cause (interaction, dose error, hepatic dysfunction)</td>
</tr>
<tr>
<td>Critical bleeding risk</td>
<td>4.5-9.9</td>
<td>Hold warfarin; consider vitamin K (especially &gt;6)</td>
</tr>
<tr>
<td>Life-threatening</td>
<td>≥10</td>
<td>Urgent reversal: hold warfarin + vitamin K + 4-factor PCC</td>
</tr>
</tbody>
</table>
<p><strong>Caveats:</strong></p>
<ul>
<li>Always interpret with clinical context (indication, target range, bleeding/thrombosis history)</li>
<li>INR may be falsely elevated in lupus anticoagulant presence (lupus-sensitive thromboplastins)</li>
<li>INR may be unreliable in liver disease (alternative coagulation assays may be needed)</li>
<li>Point-of-care INR devices (CoaguChek) have ~0.3-0.5 INR bias vs lab</li>
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
<td>Dimensionless ratio</td>
</tr>
<tr>
<td>Sample Type</td>
<td>Blood (3.2% sodium citrate; citrated plasma)</td>
</tr>
<tr>
<td>Fasting Required</td>
<td>No</td>
</tr>
<tr>
<td>Preferred Method</td>
<td>Photo-optical clot detection (Stago, Siemens, Instrumentation Laboratory); point-of-care CoaguChek XS, i-STAT</td>
</tr>
<tr>
<td>Test Frequency</td>
<td>Daily during warfarin initiation; weekly to monthly once stable; per CHEST/ACCP guidelines</td>
</tr>
<tr>
<td>Turnaround</td>
<td>30-60 minutes (lab); 2 minutes (POC CoaguChek)</td>
</tr>
<tr>
<td>Stability</td>
<td>4 hours at room temperature; 24 h at 4C</td>
</tr>
<tr>
<td>Sample volume</td>
<td>2.7 mL citrate tube (or capillary POC)</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<p><strong>Increase INR (raise bleeding risk):</strong></p>
<ul>
<li>Warfarin / acenocoumarol / phenprocoumon / fluindione (intended effect)</li>
<li>Broad-spectrum antibiotics (gut bacteria vitamin K depletion; especially macrolides, metronidazole, fluoroquinolones -- also CYP2C9/3A4 inhibition)</li>
<li>Amiodarone, statins (CYP2C9 inhibition)</li>
<li>Acetaminophen (high dose; mechanism uncertain)</li>
<li>Alcohol (acute intoxication inhibits warfarin metabolism)</li>
<li>Hepatic dysfunction (impaired clotting factor synthesis)</li>
<li>Vitamin K deficiency (malnutrition, malabsorption, prolonged antibiotics)</li>
<li>Disseminated intravascular coagulation (DIC)</li>
<li>Hypothyroidism (slowed warfarin clearance)</li>
<li>Heart failure with hepatic congestion</li>
<li>Dietary deficiency of leafy greens (low vitamin K)</li>
</ul>
<p><strong>Decrease INR (raise clot risk, suggest subtherapeutic warfarin):</strong></p>
<ul>
<li>Vitamin K supplementation (including parenteral vitamin K in TPN)</li>
<li>High vitamin K diet (leafy greens -- natto, kale, spinach)</li>
<li>Rifampin, carbamazepine, phenytoin, barbiturates (CYP2C9/3A4 induction)</li>
<li>St. John's wort (CYP3A4 induction)</li>
<li>Hyperthyroidism (accelerated warfarin clearance)</li>
<li>Diarrhea / vomiting (reduced warfarin absorption)</li>
<li>Non-adherence (most common cause of subtherapeutic INR)</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Elevated INR is associated with:</strong></p>
<ul>
<li><strong>Therapeutic anticoagulation</strong> (intended): INR 2.0-3.0 (or 2.5-3.5 for high-risk valves) reduces stroke risk by ~67% in AFib and prevents VTE recurrence</li>
<li><strong>Supratherapeutic INR (&gt;4.5):</strong> major bleeding risk ~5-10% per year; risk rises sharply with INR &gt;5</li>
<li><strong>Critical INR (≥10):</strong> major bleeding event risk ~5-20% per 30 days; urgent reversal recommended</li>
<li><strong>Liver disease:</strong> INR is part of the Child-Pugh and MELD scores; elevated INR reflects hepatic synthetic dysfunction</li>
<li><strong>Vitamin K deficiency:</strong> dietary deficiency, malabsorption, prolonged antibiotic use, TPN without vitamin K supplementation</li>
<li><strong>DIC:</strong> INR rises with factor consumption</li>
<li><strong>Acute hemorrhage:</strong> INR rises with massive transfusion / dilutional coagulopathy</li>
</ul>
<p><strong>Reduced INR is associated with:</strong></p>
<ul>
<li><strong>Subtherapeutic warfarin:</strong> clot/stroke risk (especially AFib)</li>
<li><strong>Warfarin non-adherence</strong> (most common cause)</li>
<li><strong>Drug interactions causing CYP induction:</strong> rifampin, phenytoin, carbamazepine, St. John's wort</li>
<li><strong>High vitamin K intake</strong> (rarely clinically significant unless very large dietary shift)</li>
<li><strong>Thrombophilic states:</strong> rarely cause sub-normal INR</li>
</ul>
<p><strong>Monitoring use cases:</strong></p>
<ul>
<li>Warfarin dose titration (acute initiation, long-term maintenance)</li>
<li>Mechanical heart valve monitoring (target INR 2.5 or 3.0)</li>
<li>Liver disease severity (Child-Pugh, MELD)</li>
<li>DIC monitoring</li>
<li>Pre-procedural anticoagulation management (e.g., bridging for surgery)</li>
</ul>
<h2>Strategies to Manage</h2>
<p>INR is highly modifiable through dose adjustment, diet, and medications. Management principles:</p>
<ol>
<li><strong>Warfarin initiation:</strong> start 5 mg daily (2.5 mg in elderly, hepatic dysfunction, malnutrition, baseline INR &gt;1.1); check INR in 2-3 days; titrate per nomogram</li>
<li><strong>Stable maintenance:</strong> typical dose 2-10 mg daily (median 5 mg); pharmacogenomic-guided dosing (CYP2C9, VKORC1) improves initial dose accuracy</li>
<li><strong>Dietary consistency:</strong> more important than absolute vitamin K intake -- avoid large swings in leafy green consumption</li>
<li><strong>Avoid interacting medications where possible:</strong> especially macrolides, metronidazole, fluoroquinolones, amiodarone; if unavoidable, expect INR rise and adjust</li>
<li><strong>Patient self-testing:</strong> CoaguChek XS home INR monitoring improves time-in-therapeutic-range and is reimbursed for many indications</li>
<li><strong>Subtherapeutic INR:</strong> investigate cause (missed dose, interacting drug, dietary change); adjust dose; consider bridging if high thrombotic risk</li>
<li><strong>Supratherapeutic INR without bleeding:</strong> hold warfarin; consider vitamin K (1-2.5 mg PO for INR 5-9; 5-10 mg PO/IV for INR &gt;9); resume at lower dose when INR in range</li>
<li><strong>Supratherapeutic INR with serious bleeding:</strong> 4-factor prothrombin complex concentrate (Kcentra, 25-50 units/kg) + IV vitamin K 10 mg; consult hematology</li>
<li><strong>Pre-procedure bridging:</strong> hold warfarin 5 days pre-op; bridge with LMWH or heparin for high thrombotic risk (e.g., mechanical valve, recent VTE)</li>
<li><strong>Consider DOAC switch:</strong> for non-valvular AFib or VTE without antiphospholipid syndrome, DOACs eliminate INR monitoring</li>
</ol>
<h2>Relationships</h2>
<h3>AFFECTED_BY_DRUG</h3>
<p>AFFECTED_BY_DRUG::<a href="/garden/itest42b29432/biomarker/prothrombin-time/" class="internal-link">Prothrombin Time</a> - the underlying measurement; INR is derived from PT</p>
<h3>DERIVED_FROM</h3>
<p>DERIVED_FROM::<a href="/garden/itest42b29432/biomarker/prothrombin-time/" class="internal-link">Prothrombin Time</a></p>
<h3>INDICATES_ORGAN_HEALTH</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/itest42b29432/organ/liver/" class="internal-link">Liver</a> - elevated INR with normal warfarin dose suggests hepatic synthetic dysfunction<br />
INDICATES_ORGAN_HEALTH::<a href="/garden/itest42b29432/organ/heart/" class="internal-link">Heart</a> - target INR 2.0-3.0 for AFib; 2.5-3.5 for mechanical mitral valve</p>
<h3>PREDICTS_RISK</h3>
<p>PREDICTS_RISK::<a href="/garden/itest42b29432/condition/atrial-fibrillation/" class="internal-link">Atrial Fibrillation</a> - INR 2.0-3.0 reduces stroke risk by ~67%<br />
PREDICTS_RISK::<a href="/garden/itest42b29432/condition/venous-thromboembolism/" class="internal-link">Venous Thromboembolism</a> - INR 2.0-3.0 prevents VTE recurrence<br />
PREDICTS_RISK::<a href="/garden/itest42b29432/condition/gastrointestinal-bleeding/" class="internal-link">Gastrointestinal Bleeding</a> - supratherapeutic INR &gt;4.5 raises GI bleed risk<br />
PREDICTS_RISK::<a href="/garden/itest42b29432/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a></p>
<h3>CORRELATED_WITH</h3>
<p>CORRELATED_WITH::<a href="/garden/itest42b29432/biomarker/prothrombin-time/" class="internal-link">Prothrombin Time</a> - the raw measurement from which INR is calculated<br />
CORRELATED_WITH::<a href="/garden/itest42b29432/biomarker/partial-thromboplastin-time/" class="internal-link">Partial Thromboplastin Time</a> - alternative coagulation marker (aPTT measures intrinsic pathway; PTT-monitoring for heparin)</p>
<h3>MEASURED_BY_TEST</h3>
<p>MEASURED_BY_TEST::<a href="/garden/itest42b29432/biomarker/prothrombin-time/" class="internal-link">Prothrombin Time</a><br />
MEASURED_BY_TEST::<a href="/garden/itest42b29432/labtest/partial-thromboplastin-time-ptt/" class="internal-link">partial_thromboplastin_time_ptt</a></p>
<h3>INCLUDED_IN</h3>
<p>INCLUDED_IN::<a href="/garden/itest42b29432/condition/liver-disease/" class="internal-link">Liver Disease</a> - Child-Pugh and MELD scoring systems incorporate INR</p>
<h3>ASSOCIATED_WITH_CONDITION</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/itest42b29432/condition/atrial-fibrillation/" class="internal-link">Atrial Fibrillation</a> - INR 2.0-3.0 reduces stroke risk by 67%<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest42b29432/condition/venous-thromboembolism/" class="internal-link">Venous Thromboembolism</a> - INR 2.0-3.0 for VTE treatment and secondary prevention<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest42b29432/condition/gastrointestinal-bleeding/" class="internal-link">Gastrointestinal Bleeding</a> - supratherapeutic INR increases GI bleeding risk</p>
<h2>References</h2>
<ul>
<li>Hirsh J, Fuster V, Ansell J, Halperin JL. <em>J Am Coll Cardiol.</em> 2003;41(9):1633-1652. American Heart Association/American College of Cardiology Foundation guide to warfarin therapy (PMID: 12742309)</li>
<li>Holbrook A, Schulman S, Witt DM, et al. <em>Chest.</em> 2012;141(2 Suppl):e152S-e184S. Evidence-based management of anticoagulant therapy (ACCP 9th edition) (PMID: 22315269)</li>
<li>Ageno W, Gallus AS, Wittkowsky A, et al. <em>Chest.</em> 2012;141(2 Suppl):e44S-e88S. Oral anticoagulant therapy (ACCP 9th edition) (PMID: 22315265)</li>
<li>Ansell J, Hirsh J, Poller L, Bussey H, Jacobson A, Hylek E. <em>Chest.</em> 2004;126(3 Suppl):204S-233S. The pharmacology and management of the VKAs (PMID: 15397489)</li>
<li>January CT, Wann LS, Calkins H, et al. <em>J Am Coll Cardiol.</em> 2019;74(1):104-132. 2019 AHA/ACC/HRS Focused Update on AFib Guideline (PMID: 30703431)</li>
<li>Stevens CA, Yim K, Stevens GL, Hayes BD. <em>N Engl J Med.</em> 2022;387(9):834-836. Reversal of life-threatening bleeding with 4-factor prothrombin complex concentrate (PMID: 36053467)</li>
<li>Pisters R, Lane DA, Nieuwlaat R, de Vos CB, Crijns HJ, Lip GY. <em>Chest.</em> 2010;138(5):1093-1100. A novel user-friendly score (HAS-BLED) to assess 1-year risk of major bleeding in AFib patients on warfarin (PMID: 20299623)</li>
<li>Barnes GD, Erdman AG, Lutes CA, et al. <em>JAMA.</em> 2024;331(15):1281-1293. DOACs vs warfarin in 2024 clinical practice (PMID: 38630640)</li>
<li>Lubetsky A, Yonath H, Olchovsky D, Loebstein R, Halkin H, Ezra D. <em>Chest.</em> 2003;124(1):263-267. Comparison of oral vs intravenous phytonadione (vitamin K1) in patients with excessive anticoagulation (PMID: 12853543)</li>
<li>Johnson JA, Caudle KE, Gong L, et al. <em>Clin Pharmacol Ther.</em> 2017;102(3):397-404. CPIC guideline for pharmacogenomics-guided warfarin dosing (PMID: 28484122)</li>
<li>Debono M, Cacciola S, Piazza GA, et al. <em>Eur J Intern Med.</em> 2024;128:11-19. Warfarin in the era of DOACs (PMID: 38789998)</li>
</ul>

{% endraw %}