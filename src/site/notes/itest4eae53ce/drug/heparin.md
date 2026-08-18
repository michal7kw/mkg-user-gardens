---
confidence_score: 0.8
created: '2026-06-19T12:00:00+00:00'
description: Heparin is a naturally occurring sulfated glycosaminoglycan anticoagulant
  that potentiates antithrombin III to inhibit thrombin (factor IIa) and factor Xa.
  It is available as unfractionated heparin (UFH), monitored by aPTT, and as low-molecular-weight
  heparin (LMWH, e.g. enoxaparin) with more predictable anti-Xa pharmacokinetics.
dg-home: false
dg-publish: true
drugbank_id: DB01109
gardenUsername: itest4eae53ce
id: heparin
permalink: /garden/itest4eae53ce/drug/heparin/
provenance: curated
slug: heparin
source: Manual
tags:
- drug
- anticoagulant
- cardiovascular
- hematology
- prescription
- thrombosis
templateEngineOverride: njk
title: Heparin
type: drug
updated: '2026-08-18T20:51:43.635548Z'
---

{% raw %}
<h1>Heparin</h1>
<h2>Overview</h2>
<p>Heparin is one of the oldest and most widely used parenteral anticoagulants in clinical medicine. It exists as <strong>unfractionated heparin (UFH)</strong> — a heterogeneous mixture of polysaccharide chains (3,000–30,000 Da) — and as <strong>low-molecular-weight heparins (LMWH)</strong> such as enoxaparin and dalteparin, which are depolymerized fragments with a more predictable dose-response, longer half-life, and primarily anti-factor Xa activity. Heparin does not dissolve existing clots; rather, it prevents propagation of thrombus and the formation of new clots while endogenous fibrinolysis proceeds.</p>
<p>Clinically, UFH is favored when rapid onset, short duration, and full reversibility (with protamine) are required — for example in acute coronary syndromes, cardiopulmonary bypass, and patients with renal failure. LMWH is preferred for outpatient venous thromboembolism (VTE) treatment and prophylaxis because of its predictable weight-based dosing that usually requires no routine monitoring. UFH dosing is titrated to the <strong>activated partial thromboplastin time (aPTT)</strong> or anti-Xa level, whereas LMWH, when monitored (e.g. in pregnancy, renal impairment, or extremes of body weight), is followed by anti-Xa activity rather than aPTT.</p>
<h2>Pharmacological Information</h2>
<p>Heparin is highly polar and is not absorbed orally, requiring intravenous or subcutaneous administration. UFH binds plasma proteins and endothelial cells, giving it nonlinear, dose-dependent clearance, while LMWH has reduced protein binding and predominantly renal clearance — necessitating dose reduction in renal impairment. Protamine sulfate fully reverses UFH and partially reverses LMWH.</p>
<h2>Mechanism of Action</h2>
<p>Heparin's anticoagulant activity depends on a unique pentasaccharide sequence that binds <strong>antithrombin III (AT)</strong>. This binding produces a conformational change in antithrombin that accelerates its inhibition of activated clotting factors by approximately 1000-fold. Inhibition of <strong>thrombin (factor IIa)</strong> requires that heparin bind both antithrombin and thrombin simultaneously, a &quot;ternary complex&quot; achievable only by chains of at least 18 saccharides — present in UFH but largely absent in LMWH. In contrast, inhibition of <strong>factor Xa</strong> requires only that heparin bind antithrombin, so LMWH retains strong anti-Xa activity while having proportionally less anti-IIa activity.</p>
<h2>Clinical Features</h2>
<ul>
<li><strong>Monitoring (UFH):</strong> aPTT targeted to 1.5–2.5× control, or anti-Xa 0.3–0.7 IU/mL.</li>
<li><strong>Monitoring (LMWH):</strong> Routine monitoring not required; anti-Xa in special populations.</li>
<li><strong>Onset:</strong> Immediate (IV UFH); 1–2 hours (subcutaneous).</li>
<li><strong>Reversal:</strong> Protamine sulfate.</li>
</ul>
<h2>Safety Information</h2>
<p>The principal adverse effect is bleeding. <strong>Heparin-induced thrombocytopenia (HIT)</strong> is a serious immune-mediated complication in which antibodies against the heparin–platelet factor 4 complex cause a paradoxical prothrombotic state with falling platelet counts, typically 5–10 days after exposure; it requires immediate heparin cessation and a non-heparin anticoagulant. Long-term use can cause osteoporosis and hyperkalemia (via aldosterone suppression).</p>
<h2>Relationships</h2>
<h3>Treats / Prevents</h3>
<p>TREATS_CONDITION::<a href="/garden/itest4eae53ce/condition/venous-thromboembolism/" class="internal-link">Venous Thromboembolism</a> - First-line parenteral anticoagulant (Garcia 2012, PMID: 22315264)<br />
PREVENTS_CONDITION::<a href="/garden/itest4eae53ce/condition/stroke/" class="internal-link">Stroke</a> - Cardioembolic stroke prevention in atrial fibrillation<br />
TREATS_CONDITION::<a href="/garden/itest4eae53ce/condition/atrial-fibrillation/" class="internal-link">Atrial Fibrillation</a> - Bridging/acute anticoagulation<br />
TREATS_CONDITION::<a href="/garden/itest4eae53ce/condition/coronary-artery-disease/" class="internal-link">Coronary Artery Disease</a> - Adjunct in acute coronary syndromes</p>
<h3>Affects Biomarker / Monitoring</h3>
<p>AFFECTS_BIOMARKER::<a href="/garden/itest4eae53ce/biomarker/partial-thromboplastin-time/" class="internal-link">Partial Thromboplastin Time</a> - aPTT prolongation guides UFH dosing<br />
MONITORED_BY::<a href="/garden/itest4eae53ce/labtest/partial-thromboplastin-time-ptt/" class="internal-link">partial_thromboplastin_time_ptt</a> - aPTT is the standard UFH monitoring assay<br />
AFFECTS_BIOMARKER::<a href="/garden/itest4eae53ce/biomarker/platelets/" class="internal-link">Platelets</a> - Heparin-induced thrombocytopenia lowers platelet count</p>
<h3>Gene / Protein</h3>
<p>INTERACTS_WITH::<a class="internal-link is-unresolved" href="/404">F5</a> - Heparin used in management of factor V Leiden-associated thrombophilia</p>
<h3>Affects Organ</h3>
<p>AFFECTS_ORGAN::<a href="/garden/itest4eae53ce/organ/heart/" class="internal-link">Heart</a> - Anticoagulation in cardiac indications</p>
<h2>References</h2>
<ul>
<li>Garcia DA, Baglin TP, Weitz JI, Samama MM. Parenteral Anticoagulants: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. <em>Chest.</em> 2012;141(2 Suppl):e24S-e43S (PMID: 22315264)</li>
<li>Yusuf S, et al. Effects of clopidogrel in addition to aspirin in patients with acute coronary syndromes without ST-segment elevation. <em>N Engl J Med.</em> 2001;345(7):494-502 — context on adjunct antithrombotic therapy (PMID: 11519503)</li>
</ul>

{% endraw %}