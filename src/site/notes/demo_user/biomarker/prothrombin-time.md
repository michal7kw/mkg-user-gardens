---
confidence_score: 0.95
created: '2026-06-13T17:47:11.021659Z'
description: Coagulation test measuring the time (in seconds) for plasma to clot via
  the extrinsic and common pathways after addition of tissue factor and calcium. Reported
  alongside INR (International Normalized Ratio) which standardizes results across
  reagents and labs. Primary monitoring tool for warfarin therapy.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: demo_user
id: prothrombin_time
permalink: /garden/demo_user/biomarker/prothrombin-time/
slug: prothrombin-time
source: Manual
tags:
- biomarker
- coagulation
- hematology
- warfarin_monitoring
templateEngineOverride: njk
title: Prothrombin Time
type: biomarker
updated: '2026-06-13T17:47:11.021659Z'
---

{% raw %}
<h1>Prothrombin Time</h1>
<h2>Overview</h2>
<p>Coagulation test measuring the time (in seconds) for citrated plasma to clot via the extrinsic and common coagulation pathways after addition of tissue factor (thromboplastin) and calcium. Sensitive to deficiencies of factors II (prothrombin), V, VII, and X, and to fibrinogen. Reported alongside INR (International Normalized Ratio) — <code>INR = (PT_patient / PT_mean_normal)^ISI</code> — which standardizes results across thromboplastin reagents with different International Sensitivity Indices (ISI).</p>
<p>Primary monitoring tool for warfarin and other vitamin K antagonist therapy. Direct oral anticoagulants (DOACs — apixaban, rivaroxaban, dabigatran) generally do NOT require PT monitoring.</p>
<h2>Relationships</h2>
<ul>
<li>MEASURED_BY <a href="/garden/demo_user/labtest/ptinr/" class="internal-link">PT/INR</a> (labtest)</li>
<li>AFFECTED_BY_DRUG <a class="internal-link is-unresolved" href="/404">Warfarin</a></li>
<li>INDICATES <a class="internal-link is-unresolved" href="/404">Liver Function</a></li>
<li>INDICATES <a class="internal-link is-unresolved" href="/404">Vitamin K Status</a></li>
<li>COMPLEMENTS <a href="/garden/demo_user/biomarker/partial-thromboplastin-time/" class="internal-link">Partial Thromboplastin Time</a></li>
</ul>

{% endraw %}