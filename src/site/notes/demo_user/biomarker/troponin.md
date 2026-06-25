---
confidence_score: 0.0
created: '2026-06-13T17:47:11.061961Z'
description: Cardiac troponin (I and T) is the gold standard biomarker for detecting
  myocardial injury and diagnosing acute myocardial infarction.
dg-home: false
dg-publish: true
gardenUsername: demo_user
id: troponin
permalink: /garden/demo_user/biomarker/troponin/
slug: troponin
source: Manual
tags:
- biomarker
templateEngineOverride: njk
title: Troponin
type: biomarker
updated: '2026-06-13T17:47:11.061961Z'
---

{% raw %}
<h1>Troponin</h1>
<h2>Overview</h2>
<p>Cardiac troponin (I and T) is the gold standard biomarker for detecting myocardial injury and diagnosing acute myocardial infarction.</p>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/demo_user/organ/heart/" class="internal-link">Heart</a></p>
<h3>Activates</h3>
<p>ACTIVATES::<a href="/garden/demo_user/labtest/bnp/" class="internal-link">bnp</a><br />
ACTIVATES::<a href="/garden/demo_user/biomarker/creatine-kinase/" class="internal-link">Creatine Kinase</a></p>
<h3>Correlated With</h3>
<p>CORRELATED_WITH::<a href="/garden/demo_user/biomarker/creatine-kinase/" class="internal-link">Creatine Kinase</a><br />
CORRELATED_WITH::<a href="/garden/demo_user/labtest/bnp/" class="internal-link">bnp</a><br />
CORRELATED_WITH::<a href="/garden/demo_user/labtest/hs-crp/" class="internal-link">Hs Crp</a></p>
<h3>Increases Risk For</h3>
<p>INCREASES_RISK_FOR::<a href="/garden/demo_user/condition/myocardial-infarction/" class="internal-link">Myocardial Infarction</a> (when elevated, Evidence Level 1a)</p>

{% endraw %}