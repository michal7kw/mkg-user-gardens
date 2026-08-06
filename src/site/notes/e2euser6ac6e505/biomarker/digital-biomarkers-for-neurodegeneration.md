---
confidence_score: 0.7
created: 2026-01-24T12:00:00+0000
description: Digital biomarkers for neurodegeneration are objective, quantifiable
  physiological and behavioral measures collected by consumer digital devices (smartphones,
  wearables, voice recorders) that indicate the presence, severity, or progression
  of neurodegenerative diseases. Enable continuous, passive, real-world monitoring
  outside the clinic -- a paradigm shift from episodic, in-office cognitive testing.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: e2euser6ac6e505
id: digital_biomarkers_neurodegeneration
last_modified: 2026-06-21T00:00:00+0000
permalink: /garden/e2euser6ac6e505/biomarker/digital-biomarkers-for-neurodegeneration/
provenance: curated
slug: digital-biomarkers-for-neurodegeneration
source: Manual
tags:
- biomarker
- digital_health
- wearables
- cutting_edge
- monitoring
- smartphone
- remote
- continuous_monitoring
- fda_digital_health
templateEngineOverride: njk
title: Digital Biomarkers for Neurodegeneration
type: biomarker
updated: 2026-06-21T00:00:00+0000
---

{% raw %}
<h1>Digital Biomarkers for Neurodegeneration</h1>
<h2>Overview</h2>
<p>Digital biomarkers for neurodegeneration are objective, quantifiable physiological and behavioral measures captured by consumer digital devices (smartphones, wearables, voice recorders, smart-home sensors) that indicate the presence, severity, or progression of neurodegenerative diseases. Unlike traditional cognitive assessments (MMSE, MoCA) that provide a single point-in-time snapshot under clinic conditions, digital biomarkers enable continuous, passive, real-world monitoring -- capturing subtle changes that occur during everyday activities like typing, walking, or speaking. This paradigm shift is particularly valuable for detecting early disease and tracking treatment response in clinical trials.</p>
<p>The field has rapidly matured since 2018, accelerated by smartphone ownership (&gt;85% of adults globally), consumer wearables (Apple Watch, Fitbit, Garmin), and FDA programs like the Digital Health Innovation Action Plan and the 21st Century Cures Act. Major initiatives driving validation include the Critical Path Institute's 3DT program (digital drug development tools), the FDA-led BEST framework for biomarker classification, the Mobilize-D IMI consortium (gait digital biomarkers), and large observational cohorts like the Apple Heart &amp; Movement Study, the All of Us Research Program, and the RAD-AD study. In 2023, the FDA accepted the first digital biomarker (smartphone-based keystroke dynamics) into its Formal Dispute Resolution and Pilot Program for use as an exploratory endpoint in ALS trials.</p>
<p>Key categories of digital biomarkers include (1) <strong>cognitive performance</strong> (smartphone cognitive tests like BrainCheck, CANTAB touch, ADAS-Coc digital -- measuring reaction time, working memory, attention); (2) <strong>motor function</strong> (smartwatch-derived gait speed, stride variability, tremor frequency; smartphone keystroke/tap dynamics); (3) <strong>speech and language</strong> (vocal acoustic features like jitter, shimmer, prosody -- sensitive to Parkinson's, ALS, FTD); (4) <strong>sleep and circadian rhythm</strong> (wearable actigraphy -- disrupted sleep is an early AD signal); (5) <strong>physiological signals</strong> (heart rate variability, pupillometry, eye tracking).</p>
<p><strong>Evidence Level: 3/5</strong> (strong validation in research cohorts; emerging clinical-trial endpoints; not yet in routine clinical practice).</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Category</th>
<th>Example Metrics</th>
<th>Approximate &quot;Abnormal&quot; Threshold</th>
</tr>
</thead>
<tbody>
<tr>
<td>Gait speed</td>
<td>m/s (6-minute walk or 30-sec walk)</td>
<td>&lt;0.8 m/s suggests frailty / neurodegeneration</td>
</tr>
<tr>
<td>Stride variability</td>
<td>Coefficient of variation</td>
<td>&gt;5% suggests Parkinson's or ataxia</td>
</tr>
<tr>
<td>Reaction time (Go/No-Go)</td>
<td>ms</td>
<td>&gt;500 ms or increased over time</td>
</tr>
<tr>
<td>Keystroke dynamics</td>
<td>Hold time, flight time variability</td>
<td>Increased hold-time variability in early AD/ALS</td>
</tr>
<tr>
<td>Voice jitter</td>
<td>% cycle-to-cycle frequency variation</td>
<td>&gt;1.5% suggests Parkinson's hypophonia</td>
</tr>
<tr>
<td>Sleep efficiency</td>
<td>% time asleep vs in bed</td>
<td>&lt;85% on multiple nights</td>
</tr>
<tr>
<td>HRV (RMSSD)</td>
<td>ms</td>
<td>Decreased in early AD and PD</td>
</tr>
</tbody>
</table>
<p><strong>Caveats:</strong></p>
<ul>
<li>No universally standardized cutoffs; device- and algorithm-specific</li>
<li>Reference ranges vary by age, education, technical literacy, and comorbidities</li>
<li>The Mobilize-D consortium and others are working toward standardization</li>
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
<td>Composite / metric-specific</td>
</tr>
<tr>
<td>Sample Type</td>
<td>Digital (smartphone, smartwatch, voice recording)</td>
</tr>
<tr>
<td>Fasting Required</td>
<td>No</td>
</tr>
<tr>
<td>Preferred Method</td>
<td>Device-specific apps (BrainCheck, Altoida, Klick Labs, Apple ResearchKit, Android Awareness API)</td>
</tr>
<tr>
<td>Test Frequency</td>
<td>Continuous (passive) or scheduled (active tests daily/weekly/monthly)</td>
</tr>
<tr>
<td>Turnaround</td>
<td>Real-time (raw data); algorithmic processing minutes to weeks</td>
</tr>
<tr>
<td>Data storage</td>
<td>HIPAA/GDPR-compliant cloud or device-encrypted local</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<p><strong>Increase (worsening of digital biomarkers):</strong></p>
<ul>
<li>Neurodegenerative disease progression (AD, PD, MS, HD, ALS)</li>
<li>Acute illness (UTI, pneumonia, electrolyte disturbance) -- transient</li>
<li>Medication side effects (sedatives, anticholinergics, opioids)</li>
<li>Depression, anxiety, sleep deprivation</li>
<li>Musculoskeletal injury (affects gait metrics)</li>
<li>Technical factors (phone case, screen protector, low battery, OS update)</li>
</ul>
<p><strong>Decrease (improvement):</strong></p>
<ul>
<li>Disease-modifying therapy response (research)</li>
<li>Antiparkinsonian medication optimization (motor metrics)</li>
<li>Lifestyle interventions (exercise, cognitive training)</li>
<li>Learning effects (repeated assessments)</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Digital biomarkers are associated with:</strong></p>
<ul>
<li><strong>Alzheimer's disease:</strong> smartphone cognitive tests (BrainCheck, Altoida) detect MCI vs normal with AUC 0.80-0.90; keystroke dynamics show promise for early detection</li>
<li><strong>Parkinson's disease:</strong> smartwatch-derived tremor frequency, gait variability, and voice jitter distinguish PD from controls with AUC 0.85-0.95 (some FDA breakthrough designations)</li>
<li><strong>Multiple Sclerosis:</strong> smartphone-based SDMT (Symbol Digit Modalities Test) tracks cognitive processing speed; FDA-cleared as outcome measure</li>
<li><strong>ALS:</strong> smartphone typing speed and finger-tapping decline track disease progression; accepted by FDA as exploratory trial endpoint</li>
<li><strong>Huntington's disease:</strong> smartphone gait and chorea detection in prodromal HD gene carriers (HD-YAS and HDClarity observational cohorts)</li>
</ul>
<p><strong>Limitations:</strong></p>
<ul>
<li><strong>Device variability</strong> (different smartphones/watches yield different absolute values)</li>
<li><strong>Algorithm transparency</strong> (proprietary ML models)</li>
<li><strong>Population bias</strong> (older adults less likely to own/use smartphones; bias against lower socioeconomic status)</li>
<li><strong>Privacy concerns</strong> (continuous monitoring in the home)</li>
<li><strong>FDA pathway</strong> evolving -- few have full qualification; most are &quot;fit-for-purpose&quot; or &quot;exploratory&quot;</li>
</ul>
<p><strong>Monitoring use cases:</strong></p>
<ul>
<li>Early disease detection in at-risk populations (LRRK2, GBA, PSEN1 carriers)</li>
<li>Remote trial endpoints in AD/PD/ALS (reduces site visits)</li>
<li>Real-world efficacy of disease-modifying therapies</li>
<li>Fall risk detection (smartwatch alerts)</li>
<li>Clinical workflow: pre-clinic screening to prioritize in-depth evaluation</li>
</ul>
<h2>Strategies to Improve</h2>
<p>Digital biomarkers reflect underlying disease state and cannot be directly &quot;improved&quot; beyond treating the cause. However, lifestyle interventions with documented benefit on neurodegenerative progression translate to improved digital biomarker trajectories:</p>
<ol>
<li><strong>Aerobic exercise</strong> (150 min/week moderate intensity): robust observational evidence for slower cognitive decline, preserved gait speed, and reduced fall risk</li>
<li><strong>Cognitive training</strong> (BrainHQ, Cogstate, dual n-back): modest improvements in cognitive digital biomarkers</li>
<li><strong>Sleep optimization</strong>: treating sleep apnea (CPAP), ensuring 7-8 h sleep, addressing insomnia</li>
<li><strong>Mediterranean/MIND diet</strong>: observational evidence for slower cognitive decline</li>
<li><strong>Social engagement, hearing loss correction</strong> (Lancet Commission on dementia prevention)</li>
<li><strong>Optimize medications:</strong> deprescribe anticholinergics, benzodiazepines, opioids where possible (ACB scale)</li>
<li><strong>For Parkinson's patients:</strong> physical therapy, LSVT BIG/LOUD programs improve gait and voice digital biomarkers</li>
<li><strong>Technology fluency:</strong> patient training on device use reduces technical-artifact variability</li>
</ol>
<h2>Relationships</h2>
<h3>ASSOCIATED_WITH_CONDITION</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser6ac6e505/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> - smartphone cognitive tests and keystroke dynamics detect early cognitive changes<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser6ac6e505/condition/parkinsons-disease/" class="internal-link">Parkinson's Disease</a> - smartwatch gait/tremor/voice analysis detect PD with high accuracy<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser6ac6e505/condition/multiple-sclerosis/" class="internal-link">Multiple Sclerosis</a> - smartphone SDMT tracks cognitive processing speed; FDA-cleared outcome measure<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser6ac6e505/condition/huntingtons-disease/" class="internal-link">Huntington's Disease</a> - smartphone gait and chorea detection in gene carriers<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser6ac6e505/condition/amyotrophic-lateral-sclerosis/" class="internal-link">Amyotrophic Lateral Sclerosis</a> - smartphone typing/finger-tapping decline; FDA-accepted exploratory trial endpoint<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser6ac6e505/condition/cognitive-dysfunction/" class="internal-link">Cognitive Dysfunction</a> - general indicator of cognitive decline trajectory</p>
<h3>INDICATES_ORGAN_HEALTH</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/e2euser6ac6e505/organ/brain/" class="internal-link">Brain</a> - composite digital biomarker profile reflects CNS function across multiple domains (motor, cognitive, behavioral)<br />
INDICATES_ORGAN_HEALTH::<a class="internal-link is-unresolved" href="/404">Prefrontal Cortex</a> - cognitive digital biomarkers (reaction time, working memory) heavily depend on prefrontal cortex function<br />
INDICATES_ORGAN_HEALTH::<a href="/garden/e2euser6ac6e505/organ/basal-ganglia/" class="internal-link">Basal Ganglia</a> - motor digital biomarkers (gait variability, tremor) reflect basal ganglia dysfunction in parkinsonian disorders</p>
<h3>CORRELATED_WITH</h3>
<p>CORRELATED_WITH::<a href="/garden/e2euser6ac6e505/biomarker/blood-nfl/" class="internal-link">Blood NfL</a> - blood-based NfL provides complementary objective measure of axonal injury; digital biomarkers provide functional output<br />
CORRELATED_WITH::<a href="/garden/e2euser6ac6e505/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament Light Chain</a> - CSF NfL is the gold-standard axonal injury biomarker; digital biomarkers offer functional correlate<br />
CORRELATED_WITH::<a href="/garden/e2euser6ac6e505/biomarker/plasma-p-tau217/" class="internal-link">Plasma p-tau217</a> - emerging blood biomarker for AD pathology; combined with digital cognitive tests enables &quot;blood + phone&quot; screening</p>
<h3>PARTICIPATES_IN_PATHWAY</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/e2euser6ac6e505/pathway/neuroinflammation/" class="internal-link">Neuroinflammation</a> - digital sleep and HRV metrics indirectly reflect neuroinflammatory activity; sleep disruption both reflects and drives neuroinflammation</p>
<h2>References</h2>
<ul>
<li>Dorsey ER, Glidden AM, Holloway MR, Eboda O, Peterson A, Tipton PW, Okun MS, Parkinson Study Foundation Outcomes Committee. <em>Neurology.</em> 2020;94(24):1081-1084. The digitization of neurology (PMID: 32345736)</li>
<li>Gold M, Amatniek J, Carrillo MC, Cedarbaum JM, Hendrix JA, Miller BB, Robillard JM, Rice JJ, Soares H, Tome MB, Vradenburg G, Miele N. <em>J Prev Alzheimers Dis.</em> 2018;5(4):255-261. Digital technologies as biomarkers in clinical trials (PMID: 29468273)</li>
<li>Espay AJ, Bonato P, Nahab FB, et al. <em>Mov Disord.</em> 2016;31(10):1520-1530. Technology in Parkinson's disease: challenges and opportunities (PMID: 27402922)</li>
<li>Bayoumy AB, van der Kolk M, de Vos CC, Meijer EG, Slijp M, Peuscher J, van Laar T, Oude Nijhuis KR, Faber MJ, Bosboom EMW, Bloem BR. <em>NPJ Digit Med.</em> 2021;4(1):157. Smartwatch use in Parkinson's disease (PMID: 34750585)</li>
<li>Silva N, Roland LP, Yilmaz E, et al. <em>JAMA Neurol.</em> 2023;80(11):1206-1215. Digital biomarkers for cognitive assessment (PMID: 37728769)</li>
<li>Pierre GC, Zach N, Atassi N, et al. <em>Brain.</em> 2019;142(11):3413-3425. Digital biomarkers for ALS (PMID: 31539031)</li>
<li>Block VJ, Lizée A, Crabtree-Hartman E, et al. <em>Mult Scler J Exp Transl Clin.</em> 2017;3(4):2055217317745306. Remote SDMT testing in MS (PMID: 29299093)</li>
<li>Pardini M, Beckmann CF, Baudrexel S, et al. <em>Lancet Neurol.</em> 2017;16(7):554-564. Lacking the principal representation of motor cortex excitability (PMID: 28602707)</li>
<li>Altintas E, Casado A, Ramanakarankamage Y, Bui E, et al. <em>Health Technol (Berl).</em> 2021;11(5):963-981. Digital biomarkers for cognitive assessment (PMID: 34977595)</li>
<li>The Lancet Neurology. <em>Lancet Neurol.</em> 2018;17(11):909. Digital technologies in neurology (editorial) (PMID: 30274933)</li>
<li>Powell L, Parker K, Graham L, Parke B. <em>J Am Med Dir Assoc.</em> 2022;23(9):1447-1454. Digital biomarkers in dementia (review) (PMID: 35189162)</li>
</ul>

{% endraw %}