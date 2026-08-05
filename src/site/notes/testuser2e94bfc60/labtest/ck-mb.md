---
confidence_score: 0.75
country_availability:
  pl:
    access_pathway:
      identity_required: true
      steps:
      - Not routinely orderable at POZ level
      - NFZ-funded via specialist (endokrynolog/ginekolog) referral
      - Otherwise order at a private lab and pay out-of-pocket
      type: private_walk_in
    coverage_tier: private_only_low_cost
    exemptions:
    - description: Primarily an acute-care/hospital marker; not a routine outpatient
        screen
      type: acute_care_test
    last_verified: 2026-06
    localized_name: CK-MB (kinaza kreatynowa, frakcja sercowa)
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
created: '2026-06-18T00:00:00+00:00'
description: Creatine Kinase-MB (CK-MB) is the cardiac-enriched isoenzyme of creatine
  kinase that rises after myocardial injury. It is measured to help detect and monitor
  myocardial infarction, particularly for estimating reinfarction in the early days
  after an event.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: testuser2e94bfc60
id: ck_mb
permalink: /garden/testuser2e94bfc60/labtest/ck-mb/
provenance: curated
slug: ck-mb
source: Manual
tags:
- labtest
- cardiac
- enzymes
- biochemistry
templateEngineOverride: njk
title: ck_mb
type: labtest
updated: '2026-08-05T02:13:08.898283Z'
---

{% raw %}
<h1>Creatine Kinase-MB (CK-MB)</h1>
<h2>Overview</h2>
<p>Creatine kinase-MB (CK-MB) is one of three isoenzymes of creatine kinase and is relatively enriched in cardiac muscle. It is measured in serum by immunoassay (CK-MB mass) and reported either as an absolute mass concentration or as the CK-MB relative index (the ratio of CK-MB to total CK). Levels rise within 3-6 hours of myocardial injury, peak at about 24 hours, and return to baseline by 48-72 hours.</p>
<p>Historically CK-MB was a primary biomarker for diagnosing acute myocardial infarction. It has been largely superseded by cardiac troponin, which is more sensitive and specific, but CK-MB remains useful because its faster clearance makes it informative for detecting early reinfarction or peri-procedural myocardial injury.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>CK-MB mass (normal)</td>
<td>&lt;5-6 ng/mL</td>
</tr>
<tr>
<td>Relative index (CK-MB/total CK)</td>
<td>&lt;2.5-3%</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Elevated CK-MB with a relative index above roughly 2.5-3% suggests myocardial rather than skeletal muscle origin and supports the diagnosis of acute myocardial infarction or other myocardial injury (myocarditis, cardiac surgery, defibrillation). Because skeletal muscle also contains some CK-MB, elevations can occur with rhabdomyolysis, strenuous exercise, and muscular dystrophy, which is why the relative index and comparison with troponin are important. A secondary rise after an initial decline is a classic indicator of reinfarction.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/testuser2e94bfc60/condition/myocardial-infarction/" class="internal-link">Myocardial Infarction</a><br />
RELATED::<a href="/garden/testuser2e94bfc60/labtest/creatine-kinase/" class="internal-link">creatine_kinase</a><br />
RELATED::<a href="/garden/testuser2e94bfc60/labtest/troponin-i/" class="internal-link">troponin_i</a></p>
<h2>References</h2>
<ul>
<li>Thygesen K, et al. <em>Circulation.</em> 2018 -- Fourth Universal Definition of Myocardial Infarction (PMID: 30571511)</li>
<li>Saenger AK, Jaffe AS. <em>Circulation.</em> 2008 -- requiem for a heavyweight: the demise of CK-MB (PMID: 19064692)</li>
</ul>

{% endraw %}