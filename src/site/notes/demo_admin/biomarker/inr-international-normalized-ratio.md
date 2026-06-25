---
aliases:
- INR
confidence_score: 0.95
created: '2026-06-13T17:46:59.103970Z'
description: 'Standardized form of the prothrombin time. INR = (PT_patient / PT_mean_normal)
  raised to the power of the International Sensitivity Index (ISI) of the thromboplastin
  reagent. Allows comparable PT results across labs. Therapeutic range for most warfarin
  indications: 2.0-3.0.'
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: demo_admin
id: inr
permalink: /garden/demo_admin/biomarker/inr-international-normalized-ratio/
slug: inr-international-normalized-ratio
source: Manual
tags:
- biomarker
- coagulation
- hematology
- warfarin_monitoring
templateEngineOverride: njk
title: INR (International Normalized Ratio)
type: biomarker
updated: '2026-06-13T17:46:59.103970Z'
---

{% raw %}
<h1>INR (International Normalized Ratio)</h1>
<h2>Overview</h2>
<p>Standardized form of the prothrombin time. <code>INR = (PT_patient / PT_mean_normal)^ISI</code> where ISI is the International Sensitivity Index of the thromboplastin reagent used. Introduced by WHO (1983) to allow comparable PT results across labs using thromboplastins of different sensitivities. Therapeutic range for most warfarin indications is 2.0-3.0; for mechanical mitral valves 2.5-3.5.</p>
<p>INR &gt; 4-5 carries clinically significant bleeding risk; INR &gt; 9 is life-threatening and requires reversal (vitamin K ± 4-factor prothrombin complex concentrate).</p>
<h2>Relationships</h2>
<ul>
<li>DERIVED_FROM <a href="/garden/demo_admin/biomarker/prothrombin-time/" class="internal-link">Prothrombin Time</a></li>
<li>MEASURED_BY <a href="/garden/demo_admin/labtest/ptinr/" class="internal-link">PT/INR</a> (labtest)</li>
<li>AFFECTED_BY_DRUG <a class="internal-link is-unresolved" href="/404">Warfarin</a></li>
<li>INDICATES <a class="internal-link is-unresolved" href="/404">Anticoagulation Status</a></li>
</ul>

{% endraw %}