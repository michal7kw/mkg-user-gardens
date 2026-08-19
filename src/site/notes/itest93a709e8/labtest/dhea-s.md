---
aliases:
- dhea_sulfate
- DHEA-Sulfate
- DHEA-S
- DHEA Sulfate
confidence_score: 0.85
country_availability:
  it:
    access_pathway:
      identity_required: true
      steps:
      - Endocrinology (endocrinologo) issues a ricetta with NRE code
      - Book via CUP or an accredited SSN lab, or order privately
      type: specialist_referral
    coverage_tier: public_co_pay
    exemptions:
    - description: E-code exemption for recognised chronic conditions
      type: chronic_condition
    - description: Income-based SSN co-pay exemption
      type: low_income
    last_verified: 2026-07
    localized_name: DHEA-S (Deidroepiandrosterone solfato)
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
  pl:
    access_pathway:
      identity_required: false
      steps:
      - Order online (no POZ e-skierowanie — not on the routine POZ basket)
      - Pay, receive an SMS/email code (kod)
      - Walk in to any collection point for a venous draw
      type: direct_order
    coverage_tier: private_only
    exemptions: []
    last_verified: 2026-07
    localized_name: DHEA-SO4 (Siarczan dehydroepiandrosteronu)
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
      - GP refers to endocrinology for an androgen/adrenal workup
      - NHS pathology runs DHEA-S in secondary care, or order privately without referral
      type: specialist_referral
    coverage_tier: public_specialist_referral
    exemptions: []
    last_verified: 2026-07
    localized_name: DHEA Sulphate (DHEAS)
    typical_providers:
    - coverage_area: UK national
      name: NHS Pathology (via endocrinology)
      type: public_lab
      url: https://www.england.nhs.uk
    - coverage_area: London
      name: TDL (The Doctors Laboratory)
      type: private_walk_in
      url: https://www.tdlpathology.com
    - coverage_area: UK national
      name: Medichecks
      type: home_collection
      url: https://www.medichecks.com
created: 2025-12-10T09:07:56+0000
description: DHEA-S (dehydroepiandrosterone sulfate) is the sulfated, long-half-life
  form of DHEA and the most abundant circulating steroid. Produced almost entirely
  by the adrenal cortex, it is the principal biomarker of adrenal androgen production
  and a widely tracked marker of biological aging ("adrenopause"). Because it is adrenal-specific,
  an elevated DHEA-S points to an adrenal (rather than ovarian) source of androgen
  excess.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itest93a709e8
id: test-dhea-s-001
permalink: /garden/itest93a709e8/labtest/dhea-s/
provenance: curated
slug: dhea-s
source: Manual
tags:
- labtest
templateEngineOverride: njk
title: dhea_s
type: labtest
updated: '2026-08-19T05:21:19.084949Z'
---

{% raw %}
<h1>DHEA-S (Dehydroepiandrosterone Sulfate)</h1>
<h2>Overview</h2>
<p>DHEA-S is the sulfated, long-half-life (7–10 h) reservoir form of DHEA, synthesized almost entirely by the <strong>zona reticularis of the adrenal cortex</strong>. Peripheral tissues convert it locally into androgens and estrogens, so it acts as an inactive circulating precursor rather than a directly bioactive hormone. Levels peak in the mid-20s and decline ~2–3%/year (&quot;adrenopause&quot;), which is why DHEA-S is tracked both as a marker of <strong>adrenal reserve</strong> and of <strong>biological aging</strong>.</p>
<p>Because production is adrenal-specific, DHEA-S is the test that localizes androgen excess: an elevated value points to an <strong>adrenal</strong> source (helping distinguish from ovarian causes such as PCOS), while a low value supports adrenal insufficiency. It is a standard component of the female androgen-excess workup, adrenal-tumor screening (markedly elevated &gt;700 mcg/dL), congenital adrenal hyperplasia screening, and functional-medicine/longevity panels.</p>
<p><strong>Evidence Level:</strong> ⭐⭐⭐⭐ (4/5)</p>
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
<td>Hormones (adrenal)</td>
</tr>
<tr>
<td><strong>Subcategory</strong></td>
<td>Adrenal</td>
</tr>
<tr>
<td><strong>Test Type</strong></td>
<td>Standard</td>
</tr>
<tr>
<td><strong>Sample Type</strong></td>
<td>Blood (serum)</td>
</tr>
<tr>
<td><strong>Collection Method</strong></td>
<td>Venipuncture</td>
</tr>
<tr>
<td><strong>Fasting Required</strong></td>
<td>No (morning preferred)</td>
</tr>
<tr>
<td><strong>Turnaround Time</strong></td>
<td>1–3 days</td>
</tr>
<tr>
<td><strong>Price Range</strong></td>
<td>$35–$75 (PL ~40–80 zł private)</td>
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
<li><a href="/garden/itest93a709e8/labtest/dhea-s/" class="internal-link">Dhea S</a></li>
</ul>
<h2>Reference Ranges</h2>
<p>DHEA-S is <strong>strongly age- and sex-dependent</strong> — always interpret against an age-specific range. Representative adult ranges (mcg/dL):</p>
<table>
<thead>
<tr>
<th>Group</th>
<th>Range (mcg/dL)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Males 18–29 yr</td>
<td>280–640</td>
</tr>
<tr>
<td>Males 40–49 yr</td>
<td>95–530</td>
</tr>
<tr>
<td>Males 60+ yr</td>
<td>28–175</td>
</tr>
<tr>
<td>Females 18–29 yr</td>
<td>65–380</td>
</tr>
<tr>
<td>Females 40–49 yr</td>
<td>32–240</td>
</tr>
<tr>
<td>Females 60+ yr</td>
<td>13–130</td>
</tr>
</tbody>
</table>
<p>Conversion: 1 mcg/dL = 0.0271 μmol/L. The structured optimal band (150–400 mcg/dL) reflects a mid-range adult target; older adults are interpreted against their age band, where lower values are physiological rather than pathological.</p>
<h2>Recommended For</h2>
<h3>Supplement Monitoring</h3>
<ul>
<li><a href="/garden/itest93a709e8/supplement/dhea/" class="internal-link">DHEA</a> — supplementation (25–100 mg/day, where legal) raises DHEA-S proportionally; monitor at baseline and ~3 months to stay within an age-appropriate range and avoid androgenization.</li>
</ul>
<h3>Conditions</h3>
<p>Androgen-excess workup (with total/free testosterone, LH, FSH, SHBG), PCOS evaluation, congenital adrenal hyperplasia screening, adrenal-insufficiency workup (with morning cortisol), and functional-medicine/anti-aging monitoring.</p>
<h2>Relationships</h2>
<p>MEASURES::<a href="/garden/itest93a709e8/labtest/dhea-s/" class="internal-link">Dhea S</a><br />
INDICATES::<a href="/garden/itest93a709e8/condition/adrenal-disease/" class="internal-link">Adrenal Disease</a><br />
ASSOCIATED_WITH::<a href="/garden/itest93a709e8/condition/polycystic-ovary-syndrome/" class="internal-link">Polycystic Ovary Syndrome</a><br />
ASSOCIATED_WITH::<a href="/garden/itest93a709e8/condition/congenital-adrenal-hyperplasia/" class="internal-link">Congenital Adrenal Hyperplasia</a><br />
PREDICTS_RISK::<a href="/garden/itest93a709e8/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/itest93a709e8/labtest/dhea-s/" class="internal-link">Dhea S</a><br />
RELATED::<a href="/garden/itest93a709e8/supplement/dhea/" class="internal-link">DHEA</a><br />
RELATED::<a href="/garden/itest93a709e8/biomarker/cortisol-am/" class="internal-link">Cortisol (AM)</a></p>
<h2>Notes</h2>
<ul>
<li>Pairs with <strong>morning cortisol</strong> for the cortisol:DHEA ratio used in stress/adrenal-reserve assessment.</li>
<li>Markedly elevated DHEA-S (&gt;700 mcg/dL) warrants adrenal imaging (CT/MRI) to rule out a virilizing tumor.</li>
<li>Modest diurnal variation (less than cortisol); morning draw preferred but not strictly required.</li>
<li>Results should be interpreted by a qualified healthcare provider against an age-specific reference range.</li>
</ul>
<h2>References</h2>
<ul>
<li>Barrett-Connor E, Khaw KT, Yen SS. <em>N Engl J Med.</em> 1986;315(24):1519–1524 — prospective study of DHEA-S and mortality (PMID: 3534575)</li>
<li>Arlt W. <em>Mol Cell Endocrinol.</em> 2004;215(1-2):89–95 — dehydroepiandrosterone and ageing (PMID: 15026175)</li>
<li>Bornstein SR, et al. <em>J Clin Endocrinol Metab.</em> 2016;101(2):364–389 — diagnosis and treatment of primary adrenal insufficiency (PMID: 26760044)</li>
<li>Azziz R, et al. <em>J Clin Endocrinol Metab.</em> 2009;94(11):4543–4554 — Androgen Excess and PCOS Society criteria (PMID: 19786026)</li>
</ul>
<hr />
<p><em>Educational content — not medical advice. Reference ranges vary by laboratory and are strongly age-dependent.</em></p>

{% endraw %}