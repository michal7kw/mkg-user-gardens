---
confidence_score: 0.9
created: 2026-01-03T17:55:38+0000
description: GrimAge is a second-generation epigenetic clock that uses DNA methylation
  patterns at 1,030 CpG sites to estimate biological age and predict mortality and
  healthspan. Developed by Steve Horvath's laboratory, it incorporates surrogate biomarkers
  for plasma proteins and smoking pack-years, making it one of the strongest predictors
  of time-to-death among all epigenetic aging biomarkers. GrimAge acceleration (GrimAge
  minus chronological age) quantifies the deviation between biological and chronological
  aging.
dg-home: false
dg-publish: true
gardenUsername: itest2683f3ff
id: grimage
permalink: /garden/itest2683f3ff/biomarker/grimage/
provenance: curated
slug: grimage
source: Manual
tags:
- biomarker
- biological_aging
- epigenetics
- longevity
- dna_methylation
- mortality_prediction
templateEngineOverride: njk
title: GrimAge
type: biomarker
updated: '2026-08-18T19:59:20.689321Z'
---

{% raw %}
<h1>GrimAge</h1>
<h2>Overview</h2>
<p>GrimAge is a second-generation epigenetic clock developed by Steve Horvath's laboratory at UCLA, first published in 2019. Unlike first-generation clocks (Horvath, Hannum) that were trained to predict chronological age, GrimAge was specifically trained to predict time-to-death and time-to-cancer, making it a mortality-predictive rather than age-predictive biomarker. It analyzes DNA methylation patterns at 1,030 CpG sites and incorporates surrogate biomarkers for seven plasma proteins (including GDF15, leptin, CRP, PAI-1) and a methylation-based estimator of smoking pack-years ( pack-years).</p>
<p>GrimAge version 2 (GrimAge2), published in 2022, improved prediction accuracy by incorporating additional CpG sites and surrogate markers including DNA methylation-based estimates of telomere length. In validation cohorts, GrimAge2 outperforms all other epigenetic clocks in predicting all-cause mortality, cancer onset, cardiovascular disease, and time-to-congestive-heart-failure. A GrimAge acceleration (GrimAge minus chronological age) of +5 years is associated with approximately 21% increased risk of all-cause mortality, independent of chronological age and traditional risk factors.</p>
<p>Unlike <a href="/garden/itest2683f3ff/biomarker/glycanage/" class="internal-link">GlycanAge</a>, which responds to lifestyle changes within months, GrimAge changes more slowly and is best assessed at 12-24 month intervals. This makes it more suitable for evaluating long-term interventions rather than short-term lifestyle modifications. GrimAge is available through commercial testing platforms including <a href="/garden/itest2683f3ff/labtest/truage-complete/" class="internal-link">truage complete</a> and <a href="/garden/itest2683f3ff/labtest/truage-pace/" class="internal-link">truage pace</a>.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>GrimAge Acceleration &lt; -5 years</td>
<td>Strong decelerated aging; significantly reduced mortality risk</td>
</tr>
<tr>
<td>GrimAge Acceleration -5 to 0</td>
<td>Slower biological aging; favorable longevity trajectory</td>
</tr>
<tr>
<td>GrimAge Acceleration 0 to +5</td>
<td>Mildly accelerated aging; lifestyle optimization recommended</td>
</tr>
<tr>
<td>GrimAge Acceleration +5 to +10</td>
<td>Moderately accelerated aging; ~21% increased mortality risk per 5-year increment</td>
</tr>
<tr>
<td>GrimAge Acceleration &gt; +10 years</td>
<td>Significantly accelerated aging; comprehensive medical evaluation warranted</td>
</tr>
</tbody>
</table>
<p><strong>Notes:</strong></p>
<ul>
<li>GrimAge acceleration = GrimAge minus chronological age</li>
<li>In the original validation (n~2,000), GrimAge outperformed chronological age and all other epigenetic clocks for mortality prediction</li>
<li>The clock was developed and validated in the Framingham Heart Study and Women's Health Initiative cohorts</li>
<li>Changes in GrimAge following caloric restriction have been documented in the CALERIE trial</li>
<li>Technical variability between assays is approximately 1-2 years</li>
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
<td>Years (epigenetic age estimate)</td>
</tr>
<tr>
<td><strong>Sample Type</strong></td>
<td>Blood (or any tissue with extractable DNA; saliva acceptable)</td>
</tr>
<tr>
<td><strong>Fasting Required</strong></td>
<td>No</td>
</tr>
<tr>
<td><strong>Preferred Method</strong></td>
<td>Illumina methylation arrays (EPIC or 450K) or targeted pyrosequencing</td>
</tr>
<tr>
<td><strong>Test Frequency</strong></td>
<td>Baseline + repeat at 12-24 months to assess intervention effects</td>
</tr>
<tr>
<td><strong>Availability</strong></td>
<td>Commercial DTC testing (TruAge); research laboratories</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<h3>Increase GrimAge (Accelerate Epigenetic Aging)</h3>
<ul>
<li><strong>Smoking</strong> (each pack-year of smoking adds approximately 0.7 years to GrimAge; one of the strongest modifiable drivers)</li>
<li><strong>Obesity</strong> (BMI &gt;30 associated with 3-5 years GrimAge acceleration; visceral adiposity is particularly deleterious)</li>
<li><strong>Chronic inflammation</strong> (elevated CRP, IL-6, and TNF-alpha drive epigenetic aging)</li>
<li><strong>Heavy alcohol consumption</strong> (dose-dependent GrimAge acceleration)</li>
<li><strong>Sedentary lifestyle</strong> (physical inactivity adds ~2-3 years to epigenetic age)</li>
<li><strong>Chronic psychological stress</strong> (sustained cortisol and catecholamine exposure alters DNA methylation)</li>
<li><strong>Poor sleep quality</strong> (sleep apnea and chronic insomnia accelerate epigenetic aging)</li>
<li><strong>Environmental toxin exposure</strong> (air pollution, heavy metals, endocrine disruptors)</li>
</ul>
<h3>Decrease GrimAge (Decelerate Epigenetic Aging)</h3>
<ul>
<li><strong>Caloric restriction</strong> (the CALERIE trial demonstrated ~2.2 years GrimAge reduction over 2 years with 12% caloric restriction)</li>
<li><strong>Regular vigorous exercise</strong> (associated with 3-5 years GrimAge deceleration in cross-sectional studies)</li>
<li><strong>Mediterranean diet</strong> (anti-inflammatory dietary patterns slow epigenetic aging)</li>
<li><strong>Smoking cessation</strong> (partial reversal of smoking-induced epigenetic changes within 5-10 years)</li>
<li><strong>Weight loss</strong> (bariatric surgery patients show GrimAge deceleration within 6-12 months)</li>
<li><strong>Adequate sleep</strong> (7-9 hours; optimized circadian rhythm supports healthy methylation patterns)</li>
<li><strong>Stress management</strong> (meditation and mindfulness practices associated with slower epigenetic aging)</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Elevated GrimAge Acceleration is Associated With:</h3>
<ul>
<li>
<p><strong>All-Cause Mortality</strong>: GrimAge is the strongest epigenetic predictor of mortality. Each 5-year acceleration is associated with 21% increased risk of death from any cause, independent of chronological age, smoking, BMI, and other traditional risk factors. This predictive power exceeds that of first-generation epigenetic clocks.</p>
</li>
<li>
<p><strong>Cancer Incidence and Mortality</strong>: GrimAge acceleration independently predicts time-to-cancer diagnosis and cancer mortality. The incorporation of GDF15 and other cancer-associated protein surrogates may explain this predictive capacity.</p>
</li>
<li>
<p><strong>Cardiovascular Disease</strong>: Elevated GrimAge is associated with increased risk of coronary heart disease, heart failure, and stroke. GrimAge2 further improved cardiovascular prediction by incorporating methylation-based telomere length estimates.</p>
</li>
<li>
<p><strong>Cognitive Decline and Dementia</strong>: GrimAge acceleration is associated with accelerated brain aging, reduced cognitive performance, and increased risk of Alzheimer's disease in prospective cohort studies.</p>
</li>
<li>
<p><strong>Sarcopenia and Physical Frailty</strong>: Higher GrimAge correlates with reduced grip strength, slower gait speed, and increased frailty index scores, reflecting systemic biological aging.</p>
</li>
</ul>
<h3>Monitoring use cases:</h3>
<ul>
<li>Quantifying biological aging rate for longevity interventions</li>
<li>Assessing response to caloric restriction or dietary interventions</li>
<li>Monitoring epigenetic effects of smoking cessation</li>
<li>Evaluating exercise and lifestyle intervention effectiveness</li>
<li>Research endpoint in anti-aging clinical trials</li>
</ul>
<h2>Strategies to Improve</h2>
<ol>
<li><strong>Caloric restriction (12% reduction)</strong> — the CALERIE trial demonstrated 2.2 years GrimAge reduction over 2 years; this is the strongest human evidence for epigenetic age reversal</li>
<li><strong>Smoking cessation</strong> — the single most impactful modifiable factor; partial reversal occurs within 5-10 years of quitting</li>
<li><strong>Regular vigorous exercise</strong> — 150+ minutes/week of moderate-to-vigorous activity; cross-sectional studies show 3-5 years GrimAge deceleration</li>
<li><strong>Achieve healthy body weight</strong> — weight loss in obese individuals produces measurable GrimAge deceleration within 6-12 months</li>
<li><strong>Mediterranean or anti-inflammatory diet</strong> — high in vegetables, omega-3s, polyphenols; low in processed foods and refined sugars</li>
<li><strong>Optimize sleep</strong> — 7-9 hours/night; treat sleep apnea; maintain consistent circadian rhythms</li>
<li><strong>Targeted supplementation</strong> — <a href="/garden/itest2683f3ff/supplement/nmn/" class="internal-link">NMN</a> (NAD+ precursor, preclinical evidence for epigenetic age reversal), <a href="/garden/itest2683f3ff/supplement/spermidine/" class="internal-link">Spermidine</a> (autophagy activator), <a href="/garden/itest2683f3ff/supplement/resveratrol/" class="internal-link">Resveratrol</a> (sirtuin activator), <a href="/garden/itest2683f3ff/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> (anti-inflammatory), and <a href="/garden/itest2683f3ff/supplement/vitamin-d/" class="internal-link">Vitamin D</a> (if deficient); evidence levels are currently limited to preclinical or small human studies</li>
</ol>
<h2>Relationships</h2>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/itest2683f3ff/healthstack/longevity/" class="internal-link">Longevity</a></p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/garden/itest2683f3ff/supplement/nmn/" class="internal-link">NMN</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/itest2683f3ff/supplement/resveratrol/" class="internal-link">Resveratrol</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/itest2683f3ff/supplement/spermidine/" class="internal-link">Spermidine</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/itest2683f3ff/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/itest2683f3ff/supplement/vitamin-d/" class="internal-link">Vitamin D</a></p>
<h3>Measured By Test</h3>
<p>MEASURED_BY_TEST::<a href="/garden/itest2683f3ff/labtest/truage-complete/" class="internal-link">truage complete</a><br />
MEASURED_BY_TEST::<a href="/garden/itest2683f3ff/labtest/truage-pace/" class="internal-link">truage pace</a></p>
<h2>References</h2>
<ul>
<li>Lu AT, Quach A, Wilson JG, et al. <em>Aging (Albany NY).</em> 2019;11(2):671-693 -- DNA methylation GrimAge strongly predicts lifespan and healthspan (PMID: 30669119)</li>
<li>Lu AT, Binder AM, Zhang J, et al. <em>Aging (Albany NY).</em> 2022;14(23):9444-9459 -- DNA methylation GrimAge version 2 (PMID: 36516495)</li>
<li>Duan R, Fu Q, Sun Y, et al. <em>Ageing Res Rev.</em> 2022;82:101765 -- Epigenetic clock: a promising biomarker and practical tool in aging (PMID: 36206857)</li>
<li>Declerck K, Vanden Berghe W. <em>Mech Ageing Dev.</em> 2018;174:42-49 -- Back to the future: epigenetic clock plasticity towards healthy aging (PMID: 29337038)</li>
</ul>

{% endraw %}