---
aliases:
- cardiac biomarker panel
confidence_score: 0.65
created: 2026-02-07T00:00:00+0000
description: Evaluates cardiac injury and heart failure through key biomarkers including
  troponins for myocardial damage and natriuretic peptides for ventricular stress.
  Essential for emergency chest pain evaluation and heart failure monitoring.
dg-home: false
dg-publish: true
gardenUsername: e2euserb09503bb
id: fhp-cardiac-biomarker
permalink: /garden/e2euserb09503bb/labtestpanel/cardiac-biomarker-panel/
provenance: curated
slug: cardiac-biomarker-panel
source: Manual
tags:
- labtestpanel
templateEngineOverride: njk
title: cardiac_biomarker_panel
type: labtestpanel
updated: '2026-08-05T01:34:49.431031Z'
---

{% raw %}
<h1>cardiac_biomarker_panel</h1>
<h2>Overview</h2>
<p>The Cardiac Biomarker Panel evaluates myocardial injury and heart failure through a combination of structural damage markers and hemodynamic stress indicators. High-sensitivity troponins (T and I) detect even minor cardiomyocyte necrosis, while natriuretic peptides (BNP and NT-proBNP) reflect ventricular wall stress and volume overload. Creatine kinase provides additional context for muscle and cardiac tissue damage.</p>
<p>This panel is essential in emergency settings for ruling in or ruling out acute myocardial infarction (heart attack), as well as for chronic heart failure staging and monitoring. Serial troponin measurements with a rising or falling pattern are the cornerstone of acute coronary syndrome diagnosis. NT-proBNP and BNP levels guide heart failure management and help distinguish cardiac from pulmonary causes of dyspnea.</p>
<h2>Included Tests</h2>
<ul>
<li><a href="/garden/e2euserb09503bb/labtest/nt-probnp/" class="internal-link">nt probnp</a> -- N-terminal pro-B-type natriuretic peptide for heart failure assessment</li>
<li><a href="/garden/e2euserb09503bb/labtest/bnp/" class="internal-link">bnp</a> -- B-type natriuretic peptide for ventricular stress evaluation</li>
<li><a href="/garden/e2euserb09503bb/labtest/creatine-kinase/" class="internal-link">Creatine Kinase</a> -- Enzyme released during muscle and cardiac tissue damage</li>
<li><a href="/garden/e2euserb09503bb/labtest/troponin-t-high-sensitivity/" class="internal-link">troponin t high sensitivity</a> -- High-sensitivity marker of myocardial injury</li>
<li><a href="/garden/e2euserb09503bb/labtest/troponin-i/" class="internal-link">troponin i</a> -- Cardiac-specific marker of myocardial necrosis</li>
</ul>
<h2>Clinical Indications</h2>
<ul>
<li>Acute chest pain evaluation and myocardial infarction rule-out</li>
<li>Heart failure diagnosis, staging, and treatment monitoring</li>
<li>Differentiating cardiac vs pulmonary causes of shortness of breath</li>
<li>Pre-operative cardiac risk assessment for major surgery</li>
<li>Monitoring cardiotoxicity from chemotherapy agents</li>
</ul>
<h2>Relationships</h2>
<p>INCLUDES_TEST::<a href="/garden/e2euserb09503bb/labtest/nt-probnp/" class="internal-link">nt_probnp</a><br />
INCLUDES_TEST::<a href="/garden/e2euserb09503bb/labtest/bnp/" class="internal-link">bnp</a><br />
INCLUDES_TEST::<a href="/garden/e2euserb09503bb/labtest/creatine-kinase/" class="internal-link">creatine_kinase</a><br />
INCLUDES_TEST::<a href="/garden/e2euserb09503bb/labtest/troponin-t-high-sensitivity/" class="internal-link">troponin_t_high_sensitivity</a><br />
INCLUDES_TEST::<a href="/garden/e2euserb09503bb/labtest/troponin-i/" class="internal-link">troponin_i</a><br />
USED_FOR::<a href="/garden/e2euserb09503bb/condition/heart-failure/" class="internal-link">Heart Failure</a><br />
USED_FOR::<a href="/garden/e2euserb09503bb/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
ASSOCIATED_WITH::<a href="/garden/e2euserb09503bb/organ/heart/" class="internal-link">Heart</a></p>

{% endraw %}