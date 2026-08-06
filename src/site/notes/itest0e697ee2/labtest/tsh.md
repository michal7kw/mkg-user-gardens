---
aliases:
- Thyroid-Stimulating Hormone
- TSH
- thyroid_stimulating_hormone_tsh
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
    localized_name: TSH (e fT3/fT4/anti-TPO/anti-TG)
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
    exemptions:
    - description: fT3/fT4 panels need specialist referral; TSH alone available at
        POZ level
      type: specialist_referral_required_for_full_panel
    last_verified: 2026-04
    localized_name: TSH
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
    localized_name: Thyroid Function Tests (TFTs)
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
created: 2025-12-10T09:07:56+0000
description: Thyroid-stimulating hormone (TSH) is the primary first-line screening
  test for thyroid function. It rises in primary hypothyroidism and falls in hyperthyroidism,
  and its log-linear relationship with free T4 makes it the most sensitive single
  marker of thyroid status.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: itest0e697ee2
id: test-tsh-001
permalink: /garden/itest0e697ee2/labtest/tsh/
provenance: curated
slug: tsh
source: Manual
tags:
- labtest
- endocrine
- thyroid
- hormone
- screening
templateEngineOverride: njk
title: tsh
type: labtest
updated: '2026-08-06T01:41:55.370159Z'
---

{% raw %}
<h1>tsh</h1>
<h2>Overview</h2>
<p>Thyroid-stimulating hormone (thyrotropin, TSH) is a glycoprotein hormone secreted by the anterior pituitary that stimulates the thyroid gland to produce thyroxine (T4) and triiodothyronine (T3). Thyroid hormones feed back negatively on the pituitary, so TSH and free thyroid hormone move in opposite directions. Crucially, this relationship is <strong>log-linear</strong>: a small change in free T4 produces a large, amplified change in TSH. This amplification makes serum TSH the single most sensitive indicator of thyroid status and the recommended first-line test for screening and case-finding in non-acute outpatients.</p>
<p>In <strong>primary hypothyroidism</strong> the failing thyroid produces insufficient hormone, the pituitary compensates, and TSH rises (with low or low-normal free T4). In <strong>hyperthyroidism</strong> excess thyroid hormone suppresses the pituitary and TSH falls, often to undetectable levels. An abnormal TSH is therefore the trigger to add free T4 (and free T3 for suspected hyperthyroidism) and, where autoimmune disease is suspected, thyroid antibodies (anti-TPO, anti-thyroglobulin, TSI). The test is performed on a serum sample by immunoassay, requires no fasting, and is highly standardised.</p>
<p>TSH is also central to monitoring. In treated hypothyroidism, levothyroxine is titrated to a target TSH (commonly within the reference range, individualised by age and pregnancy status), and TSH is the principal follow-up metric. A key caveat is that TSH lags behind acute changes in thyroid hormone by several weeks, so it should not be rechecked sooner than ~6 weeks after a dose change, and it is unreliable in acute illness (non-thyroidal illness / euthyroid sick syndrome) and in central (pituitary/hypothalamic) thyroid disease, where TSH may be normal or low despite hypothyroidism.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Category</th>
<th>TSH (mIU/L)</th>
<th>Free T4</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal (adult)</td>
<td>~0.4-4.0</td>
<td>Normal</td>
</tr>
<tr>
<td>Subclinical hypothyroidism</td>
<td>&gt; upper limit (e.g. 4-10)</td>
<td>Normal</td>
</tr>
<tr>
<td>Overt hypothyroidism</td>
<td>Elevated (often &gt; 10)</td>
<td>Low</td>
</tr>
<tr>
<td>Subclinical hyperthyroidism</td>
<td>Low/suppressed</td>
<td>Normal</td>
</tr>
<tr>
<td>Overt hyperthyroidism</td>
<td>Suppressed (&lt; 0.1)</td>
<td>High</td>
</tr>
</tbody>
</table>
<p>Reference intervals are assay- and population-specific, shift upward with age, and are narrower and trimester-specific in pregnancy. Always interpret against the performing laboratory's range.</p>
<h2>Interpretation</h2>
<p>Because TSH responds to small thyroid-hormone changes, an isolated abnormal TSH with normal free T4 defines <strong>subclinical</strong> thyroid dysfunction, which is common and often warrants repeat testing before treatment. Causes of a discordant or misleading TSH include recent dose changes, non-thyroidal illness, certain drugs (biotin supplements interfere with many immunoassays; amiodarone, glucocorticoids, dopamine alter TSH), heterophile antibodies, and central hypothyroidism. When the clinical picture and TSH disagree, free T4 and the clinical context take precedence.</p>
<h2>Clinical Significance</h2>
<p>TSH screening identifies the large population of people with unrecognised thyroid dysfunction, including subclinical disease that is associated with adverse cardiovascular outcomes. Persistently elevated TSH in subclinical hypothyroidism has been linked to increased risk of coronary heart disease events at higher TSH ranges, informing decisions about levothyroxine therapy. As the gateway test, TSH determines whether further thyroid evaluation is needed and anchors the long-term management of both hypo- and hyperthyroidism.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itest0e697ee2/condition/subclinical-hypothyroidism/" class="internal-link">Subclinical Hypothyroidism</a><br />
USED_FOR::<a href="/garden/itest0e697ee2/condition/hyperthyroidism/" class="internal-link">Hyperthyroidism</a><br />
ASSOCIATED_WITH::<a href="/garden/itest0e697ee2/organ/thyroid/" class="internal-link">Thyroid</a><br />
MEASURES::<a href="/garden/itest0e697ee2/labtest/tsh/" class="internal-link">Tsh</a><br />
RELATED::<a href="/garden/itest0e697ee2/labtest/thyroid-panel-basic/" class="internal-link">thyroid_panel_basic</a><br />
RELATED::<a href="/garden/itest0e697ee2/labtest/thyroid-panel-complete/" class="internal-link">thyroid_panel_complete</a></p>
<h2>References</h2>
<ul>
<li>Rodondi N, et al. <em>JAMA.</em> 2010;304(12):1365-1374 -- Subclinical hypothyroidism and the risk of coronary heart disease and mortality (PMID: 20858880)</li>
<li>Nguyen TT, et al. <em>BMC Endocr Disord.</em> 2026;26(1):153 -- Age-specific TSH reference limits and early levothyroxine effects in postmenopausal women with subclinical hypothyroidism (PMID: 41943022)</li>
<li>Sloth E, et al. <em>Scand J Prim Health Care.</em> 2026;44(1):2675694 -- Indications of over- and undertreatment of hypothyroidism in primary care: a scoping review and evidence mapping (PMID: 42249773)</li>
<li>Shapoo N, et al. <em>Cureus.</em> 2026;18(4):e106544 -- Thyroid function testing in hospitalized patients: a practical framework for clinicians (PMID: 42099317)</li>
</ul>
<hr />
<p><em>Last Updated: 2026-06-19</em></p>

{% endraw %}