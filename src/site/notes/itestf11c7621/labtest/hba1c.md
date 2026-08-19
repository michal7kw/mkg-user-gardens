---
aliases:
- Hemoglobin A1c
- HbA1c
- hemoglobin_a1c_hba1c
confidence_score: 0.85
country_availability:
  it:
    access_pathway:
      identity_required: true
      steps:
      - Visit medico di base
      - Receive ricetta (e-prescription) with NRE code via SMS
      - Book via CUP or accredited SSN lab
      type: primary_care_referral
    coverage_tier: public_co_pay
    exemptions:
    - description: E-code exemption for 59 chronic conditions
      type: chronic_condition
    - description: Full exemption for prenatal monitoring
      type: pregnancy
    - description: Income < €8,263.31/year individual
      type: low_income
    last_verified: 2026-04
    localized_name: emoglobina glicata (HbA1c)
    typical_providers:
    - coverage_area: 13 Italian regions
      name: Bianalisi
      type: private_walk_in
      url: https://bianalisi.it
    - coverage_area: 8 Italian regions
      name: SYNLAB Italia
      type: private_walk_in
      url: https://synlab.it
    - coverage_area: Lombardy
      name: CDI (Centro Diagnostico Italiano)
      type: private_walk_in
      url: https://www.cdi.it
    - coverage_area: Italy nationwide
      name: Medelit
      type: home_collection
      url: https://medelit.com
  pl:
    access_pathway:
      identity_required: true
      steps:
      - Visit POZ (lekarz POZ)
      - Get e-skierowanie (e-referral)
      - Go to the designated lab specified by your POZ
      type: primary_care_referral
    coverage_tier: public_free_with_referral
    exemptions: []
    last_verified: 2026-04
    localized_name: HbA1c (hemoglobina glikowana)
    typical_providers:
    - coverage_area: national
      name: Diagnostyka
      type: private_walk_in
      url: https://diag.pl
    - coverage_area: national
      name: ALAB Laboratoria
      type: private_walk_in
      url: https://alab.pl
    - coverage_area: 70 cities
      name: Synevo
      type: private_walk_in
      url: https://store.synevo.pl/en
    - coverage_area: major Polish cities
      name: uPacjenta
      type: home_collection
      url: https://upacjenta.pl
  uk:
    access_pathway:
      identity_required: true
      steps:
      - Visit your GP
      - Request the test
      - Sample sent to NHS pathology lab via your GP practice
      type: primary_care_referral
    coverage_tier: public_free_with_referral
    exemptions: []
    last_verified: 2026-04
    localized_name: HbA1c (Glycated Haemoglobin)
    typical_providers:
    - coverage_area: UK national
      name: NHS Pathology
      type: public_lab
      url: https://www.england.nhs.uk
    - coverage_area: London
      name: TDL (The Doctors Laboratory)
      type: private_walk_in
      url: https://www.tdlpathology.com
    - coverage_area: UK national
      name: Nuffield Health
      type: private_walk_in
      url: https://www.nuffieldhealth.com
created: 2025-12-10T09:07:57+0000
description: Glycated haemoglobin (HbA1c) reflects average blood glucose over the
  preceding ~8-12 weeks and is a gold-standard test for diagnosing and monitoring
  diabetes. It is reported in mmol/mol (IFCC) and percent (NGSP/DCCT) and, unlike
  fasting glucose, requires no fasting.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: itestf11c7621
id: test-hba1c-001
permalink: /garden/itestf11c7621/labtest/hba1c/
provenance: curated
slug: hba1c
source: Manual
tags:
- labtest
- glucose_metabolism
- metabolic
- diabetes
- cardiovascular_risk
templateEngineOverride: njk
title: hba1c
type: labtest
updated: '2026-08-19T21:06:58.975196Z'
---

{% raw %}
<h1>hba1c</h1>
<h2>Overview</h2>
<p>Glycated haemoglobin (HbA1c) is formed by the non-enzymatic, irreversible binding of glucose to the N-terminal valine of the haemoglobin beta-chain. Because the reaction rate is proportional to the ambient glucose concentration over the lifespan of the red blood cell, the HbA1c level integrates average glycaemia over the preceding 8-12 weeks, weighted toward the most recent 4 weeks. This makes it a stable, retrospective index of glucose control that is not perturbed by short-term factors such as a recent meal, acute stress, or the time of day — a major practical advantage over fasting glucose and the oral glucose tolerance test (OGTT).</p>
<p>HbA1c is a gold-standard test for both the diagnosis and the long-term monitoring of diabetes. The International Expert Committee (2009) and subsequent American Diabetes Association (ADA) and WHO recommendations endorse HbA1c &gt;= 6.5% (48 mmol/mol) as a diagnostic threshold for diabetes, with 5.7-6.4% (39-46 mmol/mol) defining increased risk (prediabetes). It is reported in two interconvertible units: percent on the NGSP/DCCT scale and mmol/mol on the IFCC scale. The test is performed on a whole-blood sample collected by venipuncture, requires no fasting, and is widely standardised.</p>
<p>In established diabetes, HbA1c is the primary metric for assessing the adequacy of glycaemic control and titrating therapy, typically measured every 3-6 months. Each ~1% absolute reduction is associated with substantial reductions in microvascular complications, which underpins individualised glycaemic targets (commonly &lt; 7% / 53 mmol/mol for many adults, relaxed in the elderly or those with hypoglycaemia risk).</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Category</th>
<th>HbA1c (%, NGSP)</th>
<th>HbA1c (mmol/mol, IFCC)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal</td>
<td>&lt; 5.7%</td>
<td>&lt; 39</td>
</tr>
<tr>
<td>Prediabetes (increased risk)</td>
<td>5.7-6.4%</td>
<td>39-46</td>
</tr>
<tr>
<td>Diabetes</td>
<td>&gt;= 6.5%</td>
<td>&gt;= 48</td>
</tr>
</tbody>
</table>
<p>Diagnostic thresholds follow ADA/WHO criteria; a diagnosis based on HbA1c should be confirmed on a repeat test unless the patient is symptomatic with unequivocal hyperglycaemia.</p>
<h2>Interpretation and Limitations</h2>
<p>HbA1c can be misleading whenever red-cell turnover or haemoglobin structure is altered. It is <strong>falsely low</strong> in conditions that shorten erythrocyte survival or increase turnover (haemolytic anaemia, recent blood loss, recent transfusion, pregnancy, treatment of iron/B12 deficiency, erythropoietin therapy). It is <strong>falsely high</strong> in conditions that prolong red-cell survival (iron-deficiency anaemia, splenectomy, B12/folate deficiency) and may be unreliable in chronic kidney disease. Haemoglobin variants (e.g., HbS, HbC, HbE) and elevated HbF can interfere assay-dependently, so a method robust to the relevant variant must be used. In these settings, fasting glucose, OGTT, or fructosamine may be preferred.</p>
<h2>Clinical Significance</h2>
<p>Beyond diagnosis, elevated HbA1c is a graded, independent predictor of cardiovascular disease and all-cause mortality, and it is a core component of cardiometabolic risk assessment. It is the standard endpoint in diabetes outcome trials and a key target for lifestyle, pharmacologic, and supplement interventions aimed at improving glycaemic control.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itestf11c7621/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a><br />
USED_FOR::<a href="/garden/itestf11c7621/condition/prediabetes/" class="internal-link">Prediabetes</a><br />
ASSOCIATED_WITH::<a href="/garden/itestf11c7621/condition/diabetes/" class="internal-link">Diabetes</a><br />
INDICATES::<a href="/garden/itestf11c7621/clinicalpattern/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a><br />
MEASURES::<a href="/garden/itestf11c7621/biomarker/hemoglobin-a1c/" class="internal-link">Hemoglobin A1c</a><br />
ASSOCIATED_WITH_BIOMARKER::<a href="/garden/itestf11c7621/biomarker/glucose-fasting/" class="internal-link">Glucose Fasting</a></p>
<h2>References</h2>
<ul>
<li>International Expert Committee report on the role of the A1C assay in the diagnosis of diabetes -- response and commentary in Kilpatrick ES, et al. <em>Diabetes Care.</em> 2009;32(12):e159-e160 (PMID: 19940222)</li>
<li>Gillett MJ. <em>Clin Biochem Rev.</em> 2009;30(4):197-200 -- International Expert Committee report on the role of the A1c assay in the diagnosis of diabetes (PMID: 20011212)</li>
<li>American Diabetes Association. <em>Diabetes Care.</em> 2013;36(Suppl 1):S11-66 -- Standards of medical care in diabetes (PMID: 23264422)</li>
<li>Zhou C, et al. <em>BMC Geriatr.</em> 2026;26(1):758 -- Diagnostic accuracy of glycated hemoglobin and glycated albumin for detecting dysglycemia among community-dwelling older adults (PMID: 42067817)</li>
</ul>
<hr />
<p><em>Last Updated: 2026-06-19</em></p>

{% endraw %}