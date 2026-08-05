---
aliases:
- High-Sensitivity C-Reactive Protein
- hs-CRP
- high_sensitivity_c_reactive_protein_hs_crp
confidence_score: 0.9
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
    last_verified: 2026-05
    localized_name: PCR (Proteina C Reattiva)
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
    last_verified: 2026-05
    localized_name: CRP
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
    last_verified: 2026-05
    localized_name: CRP / hs-CRP
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
description: High-sensitivity C-reactive protein (hs-CRP) is a liver-derived acute-phase
  protein and the most widely used blood marker of low-grade systemic inflammation.
  Measured with an assay sensitive enough to resolve the sub-3 mg/L range, it independently
  predicts cardiovascular events and reflects residual inflammatory risk even when
  LDL cholesterol is well controlled.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: testuser1466a0179
id: test-hscrp-001
permalink: /garden/testuser1466a0179/labtest/hs-crp/
provenance: curated
slug: hs-crp
source: Manual
tags:
- labtest
templateEngineOverride: njk
title: hs_crp
type: labtest
updated: '2026-08-05T02:11:45.420328Z'
---

{% raw %}
<h1>hs-CRP (High-Sensitivity C-Reactive Protein)</h1>
<h2>Overview</h2>
<p>The high-sensitivity C-reactive protein test measures the acute-phase protein CRP with an assay calibrated to resolve the low concentrations (well below 1 mg/L) that grade <strong>chronic, low-grade systemic inflammation</strong> — the range relevant to cardiovascular risk. This is a different <em>assay</em>, not a different molecule, from the standard CRP used to detect the large elevations of acute infection (often 10–500 mg/L).</p>
<p>Hepatic CRP production is driven chiefly by the cytokine interleukin-6 (IL-6) released from visceral fat, atherosclerotic plaque, and other inflamed tissue, so hs-CRP is a convenient downstream readout of upstream inflammatory tone. It adds prognostic information beyond the lipid panel and identifies <strong>residual inflammatory risk</strong> in people whose LDL is already controlled. It is inexpensive, widely available, and reproducible — but non-specific, so interpretation requires excluding acute illness and usually confirming a high value on a repeat draw.</p>
<p><strong>Evidence Level:</strong> ⭐⭐⭐⭐⭐ (5/5)</p>
<h2>Test Information</h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Category</strong></td>
<td>Inflammation</td>
</tr>
<tr>
<td><strong>Subcategory</strong></td>
<td>Inflammation Markers</td>
</tr>
<tr>
<td><strong>Test Type</strong></td>
<td>Standard</td>
</tr>
<tr>
<td><strong>Sample Type</strong></td>
<td>Blood (serum or plasma)</td>
</tr>
<tr>
<td><strong>Collection Method</strong></td>
<td>Venipuncture</td>
</tr>
<tr>
<td><strong>Fasting Required</strong></td>
<td>No</td>
</tr>
<tr>
<td><strong>Turnaround Time</strong></td>
<td>1–3 days</td>
</tr>
<tr>
<td><strong>Price Range</strong></td>
<td>$25–$55 (PL ~27–52 zł private; standard CRP is NFZ-free but not sensitive enough)</td>
</tr>
<tr>
<td><strong>HSA / FSA Eligible</strong></td>
<td>✅ Yes</td>
</tr>
</tbody>
</table>
<h2>Biomarkers Measured</h2>
<p>This test measures the following biomarkers:</p>
<ul>
<li><a href="/garden/testuser1466a0179/labtest/hs-crp/" class="internal-link">Hs Crp</a></li>
</ul>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value (mg/L)</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Low cardiovascular risk (optimal)</td>
<td>&lt; 1.0</td>
<td>Favorable inflammatory profile</td>
</tr>
<tr>
<td>Average cardiovascular risk</td>
<td>1.0 – 3.0</td>
<td>Intermediate inflammatory burden</td>
</tr>
<tr>
<td>High cardiovascular risk</td>
<td>&gt; 3.0</td>
<td>Elevated residual inflammatory risk</td>
</tr>
<tr>
<td>Acute inflammation</td>
<td>&gt; 10.0</td>
<td>Suggests infection/injury; defer CV-risk interpretation and retest after resolution</td>
</tr>
</tbody>
</table>
<p>The <code>&lt;1 / 1–3 / &gt;3</code> mg/L tertiles are the AHA/CDC consensus thresholds and are independent of, and additive to, LDL cholesterol. Values above 10 mg/L generally reflect acute illness rather than chronic cardiovascular risk. Best practice is to average two readings ~2 weeks apart while metabolically stable and infection-free.</p>
<h2>Recommended For</h2>
<h3>Supplement Monitoring</h3>
<p>Track the response to anti-inflammatory levers by re-testing 8–12 weeks after a change:</p>
<ul>
<li><a href="/garden/testuser1466a0179/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> — EPA/DHA modestly lower hs-CRP when baseline inflammation is high</li>
<li><a href="/garden/testuser1466a0179/supplement/curcumin/" class="internal-link">Curcumin</a> — reduces CRP in inflammatory and metabolic conditions</li>
<li><a href="/garden/testuser1466a0179/supplement/vitamin-d/" class="internal-link">Vitamin D</a> — repleting deficiency modestly lowers inflammation</li>
<li><a href="/garden/testuser1466a0179/supplement/magnesium/" class="internal-link">Magnesium</a> — low magnesium status tracks with higher CRP</li>
<li><a href="/garden/testuser1466a0179/supplement/vitamin-c/" class="internal-link">Vitamin C</a> — lowers CRP in smokers and metabolically stressed adults</li>
</ul>
<h3>Conditions</h3>
<p>Cardiovascular risk stratification (primary prevention), residual inflammatory risk in statin-treated patients, and monitoring lifestyle change (weight loss, exercise, smoking cessation, diet).</p>
<h2>Relationships</h2>
<p>MEASURES::<a href="/garden/testuser1466a0179/labtest/hs-crp/" class="internal-link">Hs Crp</a><br />
INDICATES::<a href="/garden/testuser1466a0179/clinicalpattern/chronic-inflammation/" class="internal-link">Chronic Inflammation</a><br />
INDICATES::<a href="/garden/testuser1466a0179/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
ASSOCIATED_WITH::<a href="/garden/testuser1466a0179/clinicalpattern/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a><br />
ASSOCIATED_WITH::<a href="/garden/testuser1466a0179/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a><br />
PREDICTS_RISK::<a href="/garden/testuser1466a0179/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
PREDICTS_RISK::<a href="/garden/testuser1466a0179/condition/coronary-artery-disease/" class="internal-link">Coronary Artery Disease</a><br />
PREDICTS_RISK::<a href="/garden/testuser1466a0179/condition/stroke/" class="internal-link">Stroke</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/testuser1466a0179/labtest/hs-crp/" class="internal-link">Hs Crp</a><br />
RELATED::<a href="/garden/testuser1466a0179/labtest/interleukin-6/" class="internal-link">Interleukin 6</a></p>
<h2>Notes</h2>
<ul>
<li>Use the <strong>high-sensitivity</strong> assay, not standard CRP, for cardiovascular-risk work — standard CRP cannot resolve the sub-3 mg/L range.</li>
<li>Do not test during or shortly after acute infection, injury, surgery, vaccination, or intense unaccustomed exercise; recheck when well.</li>
<li>Levels are influenced by obesity, smoking, sex, and hormonal status; the same risk tertiles are applied broadly.</li>
<li>Results should be interpreted by a qualified healthcare provider.</li>
</ul>
<h2>References</h2>
<ul>
<li>Ridker PM, et al. <em>N Engl J Med.</em> 2002;347(20):1557–1565 — CRP vs LDL in predicting first cardiovascular events (PMID: 12432042)</li>
<li>Ridker PM, et al. <em>N Engl J Med.</em> 2008;359(21):2195–2207 — JUPITER: rosuvastatin in people with elevated CRP (PMID: 18997196)</li>
<li>Pearson TA, et al. <em>Circulation.</em> 2003;107(3):499–511 — AHA/CDC markers of inflammation in cardiovascular disease: application to clinical and public health practice (PMID: 12551878)</li>
<li>Kurt B, et al. <em>Eur Heart J.</em> 2025 — C-reactive protein and cardiovascular risk in the general population (PMID: 41378999)</li>
</ul>
<hr />
<p><em>Educational content — not medical advice. Reference ranges may vary by laboratory.</em></p>

{% endraw %}