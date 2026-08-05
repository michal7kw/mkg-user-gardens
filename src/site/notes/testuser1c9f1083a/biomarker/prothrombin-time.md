---
confidence_score: 0.95
created: 2026-05-03T00:00:00+0000
description: Prothrombin time (PT) is a coagulation test measuring the time (seconds)
  for citrated plasma to clot via the extrinsic and common coagulation pathways after
  addition of tissue factor (thromboplastin) and calcium. PT is sensitive to deficiencies
  of factors II, V, VII, X, and fibrinogen. Reported alongside INR (International
  Normalized Ratio), which standardizes PT across reagents and labs. Primary monitoring
  tool for warfarin and other vitamin K antagonist therapy; also reflects hepatic
  synthetic function and vitamin K status.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: testuser1c9f1083a
id: prothrombin_time
last_modified: 2026-06-21T00:00:00+0000
permalink: /garden/testuser1c9f1083a/biomarker/prothrombin-time/
provenance: curated
slug: prothrombin-time
source: Manual
tags:
- biomarker
- coagulation
- hematology
- warfarin_monitoring
- liver_function
- vitamin_k
- intrinsic_pathway
- who_essential
templateEngineOverride: njk
title: Prothrombin Time
type: biomarker
updated: 2026-06-21T00:00:00+0000
---

{% raw %}
<h1>Prothrombin Time</h1>
<h2>Overview</h2>
<p>Prothrombin time (PT) is one of the foundational coagulation tests, measuring the time (in seconds) for citrated plasma to clot after the addition of tissue factor (thromboplastin), phospholipid, and calcium. It assesses the integrity of the <strong>extrinsic and common coagulation pathways</strong> -- specifically the activity of clotting factors VII (extrinsic), X, V, II (prothrombin), and fibrinogen (factor I). PT is sensitive to vitamin K-dependent factor deficiencies (II, VII, X -- because factor VII has the shortest half-life at 4-6 hours, PT is the first coagulation test to prolong in early vitamin K deficiency or warfarin therapy).</p>
<p>The clinical uses of PT fall into three broad categories: (1) <strong>monitoring warfarin and other vitamin K antagonist therapy</strong> -- the most common use, with the INR-standardized form providing cross-lab comparability; (2) <strong>assessing hepatic synthetic function</strong> -- PT is one of the four components of the Child-Pugh score and the MELD-Na score for liver disease severity; and (3) <strong>diagnosing coagulopathies</strong> -- vitamin K deficiency, DIC, factor deficiencies, and the lupus anticoagulant (which can spuriously prolong PT depending on the thromboplastin reagent used).</p>
<p>The 1983 WHO introduction of the International Normalized Ratio (INR) was a landmark for anticoagulation management. INR = (PT_patient / PT_mean_normal)^ISI, where ISI is the International Sensitivity Index of the thromboplastin reagent. INR allows comparable PT results across labs using thromboplastins of different sensitivities, enabling international anticoagulation management. With the rise of direct oral anticoagulants (DOACs -- dabigatran, rivaroxaban, apixaban, edoxaban) that do not require routine PT/INR monitoring, PT use has declined for AFib/VTE management but remains essential for mechanical heart valve monitoring, severe renal impairment, antiphospholipid syndrome, and liver disease assessment.</p>
<p><strong>Evidence Level: 5/5</strong> (foundational hematology test; universal clinical use; WHO essential laboratory test).</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Normal Range</th>
<th>Clinical Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>PT (seconds)</td>
<td>11.0-13.5</td>
<td>Lab-dependent; check local reference</td>
</tr>
<tr>
<td>INR (no anticoagulation)</td>
<td>0.8-1.2</td>
<td>Healthy adult baseline</td>
</tr>
<tr>
<td>INR (most warfarin indications)</td>
<td>2.0-3.0</td>
<td>AFib, VTE, mechanical aortic valve</td>
</tr>
<tr>
<td>INR (high-risk)</td>
<td>2.5-3.5</td>
<td>Mechanical mitral valve, recurrent VTE on warfarin</td>
</tr>
<tr>
<td>INR (concerning supratherapeutic)</td>
<td>&gt;4.5</td>
<td>Investigate cause; bleeding risk rises sharply</td>
</tr>
<tr>
<td>INR (urgent reversal)</td>
<td>&gt;10</td>
<td>Hold warfarin + vitamin K + 4F-PCC if bleeding</td>
</tr>
</tbody>
</table>
<p><strong>Caveats:</strong></p>
<ul>
<li>Reference PT range is lab-specific (depends on thromboplastin reagent and analyzer)</li>
<li>INR standardizes across labs only when ISI is correctly applied</li>
<li>PT may be falsely prolonged in lupus anticoagulant presence (lupus-sensitive thromboplastins)</li>
<li>PT is unreliable in liver disease when combined with elevated D-dimer or low fibrinogen (consider TEG or ROTEM for comprehensive assessment)</li>
<li>DOACs (apixaban, rivaroxaban) variably prolong PT -- not a reliable DOAC monitoring test (use anti-Xa assay)</li>
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
<td>Seconds (plus dimensionless INR)</td>
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
<td>Photo-optical clot detection (Stago, Siemens, IL); point-of-care CoaguChek XS, i-STAT</td>
</tr>
<tr>
<td>Test Frequency</td>
<td>Daily during warfarin initiation; weekly to monthly once stable; per CHEST/ACCP guidelines</td>
</tr>
<tr>
<td>Turnaround</td>
<td>30-60 min (lab); 2 min (POC)</td>
</tr>
<tr>
<td>Stability</td>
<td>4 h at room temperature; 24 h at 4C</td>
</tr>
<tr>
<td>Sample volume</td>
<td>2.7 mL citrate tube (or capillary POC)</td>
</tr>
<tr>
<td>Pre-analytical</td>
<td>Fill citrate tube precisely (90% fill); mix gently; avoid heparin contamination from line draws</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<p><strong>Increase PT (prolong):</strong></p>
<ul>
<li>Warfarin, acenocoumarol, phenprocoumon (intended effect)</li>
<li>Vitamin K deficiency (dietary, malabsorption, prolonged antibiotics, TPN without vitamin K)</li>
<li>Liver disease (impaired factor synthesis; Child-Pugh, MELD components)</li>
<li>Disseminated intravascular coagulation (DIC)</li>
<li>Factor II, V, VII, X deficiencies (congenital or acquired)</li>
<li>Hypofibrinogenemia (factor I deficiency)</li>
<li>Lupus anticoagulant (reagent-dependent false prolongation)</li>
<li>Apixaban, rivaroxaban (DOACs -- variably; not for monitoring)</li>
<li>Broad-spectrum antibiotics (gut flora vitamin K depletion)</li>
<li>Amiodarone, statins, acetaminophen (high dose), alcohol (interaction with warfarin)</li>
<li>Hypothermia</li>
</ul>
<p><strong>Decrease PT (shorten):</strong></p>
<ul>
<li>Vitamin K supplementation</li>
<li>Factor VIII elevation (acute-phase reaction)</li>
<li>Thrombophilic states</li>
<li>Repleted factor VII in recovered liver disease</li>
<li>Lab artifact (heparin contamination, under-filled citrate tube)</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Prolonged PT is associated with:</strong></p>
<ul>
<li><strong>Therapeutic anticoagulation</strong> (intended): INR 2.0-3.0 reduces AFib stroke risk ~67%, prevents VTE recurrence</li>
<li><strong>Hepatic synthetic dysfunction:</strong> PT is part of Child-Pugh (chronic liver disease severity) and MELD-Na (transplant allocation) scores; prolonged PT indicates impaired hepatic factor synthesis</li>
<li><strong>Vitamin K deficiency:</strong> malnutrition, malabsorption, prolonged antibiotics, TPN without vitamin K supplementation, neonatal hemorrhagic disease (now prevented by vitamin K injection at birth)</li>
<li><strong>DIC:</strong> PT prolongs with consumption of clotting factors</li>
<li><strong>Warfarin non-adherence or supratherapeutic dose</strong> (subtherapeutic or therapeutic INR deviation)</li>
<li><strong>Acute hemorrhage:</strong> massive transfusion / dilutional coagulopathy</li>
</ul>
<p><strong>Reduced PT is associated with:</strong></p>
<ul>
<li>Thrombophilic states (rare; factor VIII elevation)</li>
<li>Vitamin K supplementation</li>
<li>Lab artifact (heparin-removed sample)</li>
</ul>
<p><strong>Monitoring use cases:</strong></p>
<ul>
<li>Warfarin dose titration (acute initiation, long-term maintenance)</li>
<li>Mechanical heart valve monitoring</li>
<li>Liver disease severity (Child-Pugh, MELD-Na)</li>
<li>DIC monitoring</li>
<li>Pre-procedural anticoagulation management (bridging for surgery)</li>
<li>Vitamin K deficiency diagnosis and treatment response</li>
</ul>
<h2>Strategies to Manage</h2>
<p>PT/INR is highly modifiable through dose adjustment, diet, and medications:</p>
<ol>
<li><strong>Warfarin initiation:</strong> start 5 mg daily (2.5 mg in elderly, hepatic dysfunction, malnutrition, baseline INR &gt;1.1); check INR in 2-3 days; titrate per nomogram</li>
<li><strong>Stable maintenance:</strong> typical 2-10 mg daily (median 5 mg); pharmacogenomic-guided dosing (CYP2C9, VKORC1) improves initial dose accuracy</li>
<li><strong>Dietary consistency:</strong> maintain stable vitamin K intake (avoid sudden large swings in leafy green consumption)</li>
<li><strong>Avoid interacting medications where possible:</strong> macrolides, metronidazole, fluoroquinolones, amiodarone</li>
<li><strong>Patient self-testing:</strong> CoaguChek XS home INR monitoring improves time-in-therapeutic-range</li>
<li><strong>Subtherapeutic INR:</strong> investigate cause (missed dose, interacting drug, dietary change); adjust dose; consider bridging if high thrombotic risk</li>
<li><strong>Supratherapeutic INR without bleeding:</strong> hold warfarin; consider vitamin K (1-2.5 mg PO for INR 5-9; 5-10 mg PO/IV for INR &gt;9)</li>
<li><strong>Supratherapeutic INR with serious bleeding:</strong> 4-factor prothrombin complex concentrate (Kcentra, 25-50 units/kg) + IV vitamin K 10 mg; consult hematology</li>
<li><strong>Pre-procedure bridging:</strong> hold warfarin 5 days pre-op; bridge with LMWH/heparin for high thrombotic risk</li>
<li><strong>Consider DOAC switch:</strong> for non-valvular AFib or VTE without antiphospholipid syndrome, DOACs eliminate PT/INR monitoring</li>
<li><strong>Vitamin K deficiency treatment:</strong> phytonadione (vitamin K1) 10 mg IV/PO daily x 3 days; address underlying cause</li>
<li><strong>Liver disease management:</strong> hepatology referral; fresh frozen plasma or PCC for active bleeding with prolonged PT</li>
</ol>
<h2>Relationships</h2>
<h3>AFFECTED_BY_DRUG</h3>
<p>AFFECTED_BY_DRUG::<a href="/garden/testuser1c9f1083a/biomarker/prothrombin-time/" class="internal-link">Prothrombin Time</a> - PT is the underlying measurement for INR; warfarin and other vitamin K antagonists prolong PT<br />
AFFECTED_BY_DRUG::<a href="/garden/testuser1c9f1083a/biomarker/partial-thromboplastin-time/" class="internal-link">Partial Thromboplastin Time</a> - alternative anticoagulation monitoring (heparin)</p>
<h3>INDICATES_ORGAN_HEALTH</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/testuser1c9f1083a/organ/liver/" class="internal-link">Liver</a> - PT is part of Child-Pugh and MELD-Na scoring systems for liver disease; prolonged PT indicates hepatic synthetic dysfunction<br />
INDICATES_ORGAN_HEALTH::<a href="/garden/testuser1c9f1083a/organ/heart/" class="internal-link">Heart</a> - PT/INR 2.0-3.0 monitors warfarin therapy for AFib, VTE, mechanical valves</p>
<h3>ASSOCIATED_WITH_CONDITION</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser1c9f1083a/condition/atrial-fibrillation/" class="internal-link">Atrial Fibrillation</a> - PT/INR 2.0-3.0 reduces stroke risk ~67%<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser1c9f1083a/condition/venous-thromboembolism/" class="internal-link">Venous Thromboembolism</a> - PT/INR 2.0-3.0 for VTE treatment and secondary prevention<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser1c9f1083a/condition/gastrointestinal-bleeding/" class="internal-link">Gastrointestinal Bleeding</a> - supratherapeutic PT/INR increases GI bleeding risk<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/testuser1c9f1083a/condition/liver-disease/" class="internal-link">Liver Disease</a> - PT prolongation reflects hepatic synthetic dysfunction; component of Child-Pugh and MELD-Na</p>
<h3>PREDICTS_RISK</h3>
<p>PREDICTS_RISK::<a href="/garden/testuser1c9f1083a/condition/atrial-fibrillation/" class="internal-link">Atrial Fibrillation</a> - subtherapeutic PT/INR raises clot/stroke risk<br />
PREDICTS_RISK::<a href="/garden/testuser1c9f1083a/condition/venous-thromboembolism/" class="internal-link">Venous Thromboembolism</a> - subtherapeutic PT/INR raises VTE recurrence risk<br />
PREDICTS_RISK::<a href="/garden/testuser1c9f1083a/condition/gastrointestinal-bleeding/" class="internal-link">Gastrointestinal Bleeding</a> - supratherapeutic PT/INR &gt;4.5 raises bleeding risk</p>
<h3>CORRELATED_WITH</h3>
<p>CORRELATED_WITH::<a href="/garden/testuser1c9f1083a/biomarker/inr/" class="internal-link">INR</a> - INR is the standardized form derived from PT<br />
CORRELATED_WITH::<a href="/garden/testuser1c9f1083a/biomarker/partial-thromboplastin-time/" class="internal-link">Partial Thromboplastin Time</a> - complementary coagulation marker (aPTT measures intrinsic pathway; PT measures extrinsic pathway)</p>
<h3>MEASURED_BY_TEST</h3>
<p>MEASURED_BY_TEST::<a href="/garden/testuser1c9f1083a/labtest/prothrombin-time-pt-inr/" class="internal-link">prothrombin_time_pt_inr</a></p>
<h2>References</h2>
<ul>
<li>Hirsh J, Fuster V, Ansell J, Halperin JL. <em>J Am Coll Cardiol.</em> 2003;41(9):1633-1652. American Heart Association/American College of Cardiology Foundation guide to warfarin therapy (PMID: 12742309)</li>
<li>Holbrook A, Schulman S, Witt DM, et al. <em>Chest.</em> 2012;141(2 Suppl):e152S-e184S. Evidence-based management of anticoagulant therapy (ACCP 9th edition) (PMID: 22315269)</li>
<li>Ageno W, Gallus AS, Wittkowsky A, et al. <em>Chest.</em> 2012;141(2 Suppl):e44S-e88S. Oral anticoagulant therapy (ACCP 9th edition) (PMID: 22315265)</li>
<li>Ansell J, Hirsh J, Poller L, Bussey H, Jacobson A, Hylek E. <em>Chest.</em> 2004;126(3 Suppl):204S-233S. The pharmacology and management of VKAs (PMID: 15397489)</li>
<li>January CT, Wann LS, Calkins H, et al. <em>J Am Coll Cardiol.</em> 2019;74(1):104-132. 2019 AHA/ACC/HRS Focused Update on AFib Guideline (PMID: 30703431)</li>
<li>Tripodi A, Mannucci PM. <em>N Engl J Med.</em> 2011;365(15):1473-1474. The coagulopathy of chronic liver disease (PMID: 21991953)</li>
<li>Pugh RN, Murray-Lyon IM, Dawson JL, Pietroni MC, Williams R. <em>Br J Surg.</em> 1973;60(8):646-649. Transection of the oesophagus for bleeding oesophageal varices (introduces Child-Pugh score) (PMID: 4541913)</li>
<li>Kim WR, Biggins SW, Kremers WK, et al. <em>Hepatology.</em> 2008;47(4):1223-1230. Hyponatremia and serum sodium refinements to MELD score (PMID: 18306215)</li>
<li>Stevens CA, Yim K, Stevens GL, Hayes BD. <em>N Engl J Med.</em> 2022;387(9):834-836. Reversal of life-threatening bleeding with 4-factor prothrombin complex concentrate (PMID: 36053467)</li>
<li>Lubetsky A, Yonath H, Olchovsky D, Loebstein R, Halkin H, Ezra D. <em>Chest.</em> 2003;124(1):263-267. Comparison of oral vs intravenous phytonadione (vitamin K1) in patients with excessive anticoagulation (PMID: 12853543)</li>
<li>Barnes GD, Erdman AG, Lutes CA, et al. <em>JAMA.</em> 2024;331(15):1281-1293. DOACs vs warfarin in 2024 clinical practice (PMID: 38630640)</li>
<li>Johnson JA, Caudle KE, Gong L, et al. <em>Clin Pharmacol Ther.</em> 2017;102(3):397-404. CPIC guideline for pharmacogenomics-guided warfarin dosing (PMID: 28484122)</li>
</ul>

{% endraw %}