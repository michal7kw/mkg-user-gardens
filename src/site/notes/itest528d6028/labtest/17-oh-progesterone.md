---
confidence_score: 0.75
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
    last_verified: 2026-06
    localized_name: 17-OH-progesterone
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
      - Not routinely orderable at POZ level
      - NFZ-funded via specialist (endokrynolog/ginekolog) referral
      - Otherwise order at a private lab and pay out-of-pocket
      type: private_walk_in
    coverage_tier: private_only_low_cost
    exemptions:
    - description: NFZ funding requires a specialist referral; widely available cheaply
        at private labs
      type: specialist_referral_required
    last_verified: 2026-06
    localized_name: 17-OH-progesteron
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
    last_verified: 2026-06
    localized_name: 17-Hydroxyprogesterone (17-OHP)
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
created: '2026-06-18T00:00:00+00:00'
description: 17-Hydroxyprogesterone (17-OHP) is an adrenal steroid intermediate measured
  in serum. It is the principal screening and diagnostic test for 21-hydroxylase deficiency,
  the most common form of congenital adrenal hyperplasia.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itest528d6028
id: 17_oh_progesterone
permalink: /garden/itest528d6028/labtest/17-oh-progesterone/
provenance: curated
slug: 17-oh-progesterone
source: Manual
tags:
- labtest
- hormones
- adrenal
templateEngineOverride: njk
title: 17_oh_progesterone
type: labtest
updated: '2026-08-05T23:30:32.040702Z'
---

{% raw %}
<h1>17-OH-Progesterone</h1>
<h2>Overview</h2>
<p>17-Hydroxyprogesterone (17-OHP) is a steroid intermediate in the adrenal and gonadal pathway that converts progesterone toward cortisol and androgens. It sits immediately upstream of the enzyme 21-hydroxylase, so it accumulates when that enzyme is deficient. Serum 17-OHP is measured on a venous blood sample, ideally drawn in the early morning when adrenal steroid output peaks, and in menstruating women during the follicular phase to avoid the luteal rise.</p>
<p>Its main use is screening and diagnosis of 21-hydroxylase deficiency, the predominant cause of congenital adrenal hyperplasia (CAH). A baseline level is followed by an ACTH (cosyntropin) stimulation test when results are borderline, since stimulated 17-OHP distinguishes classic and non-classic CAH from normal adrenal function.</p>
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
<td>Normal baseline (adults, follicular)</td>
<td>&lt; 200 ng/dL</td>
</tr>
<tr>
<td>Indeterminate / non-classic CAH likely</td>
<td>200-1000 ng/dL</td>
</tr>
<tr>
<td>Classic CAH (baseline)</td>
<td>&gt; 1000-2000 ng/dL</td>
</tr>
<tr>
<td>Post-ACTH stimulation, non-classic CAH</td>
<td>&gt; ~1000 ng/dL</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent; timing matters — draw in the morning and during the follicular phase in women.)</p>
<h2>Clinical Significance</h2>
<p>Markedly elevated baseline 17-OHP indicates classic congenital adrenal hyperplasia due to 21-hydroxylase deficiency, while intermediate values prompt ACTH-stimulation testing to identify non-classic CAH, a common cause of hirsutism, acne, and oligomenorrhea that can mimic polycystic ovary syndrome. Mild elevations also occur with stress, the luteal phase, or non-fasting morning sampling. Low or normal values effectively exclude 21-hydroxylase deficiency as a cause of androgen excess.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/itest528d6028/condition/congenital-adrenal-hyperplasia/" class="internal-link">Congenital Adrenal Hyperplasia</a><br />
ASSOCIATED_WITH::<a href="/garden/itest528d6028/condition/polycystic-ovary-syndrome/" class="internal-link">Polycystic Ovary Syndrome</a><br />
RELATED::<a href="/garden/itest528d6028/labtest/dhea-s/" class="internal-link">dhea_s</a><br />
RELATED::<a href="/garden/itest528d6028/hormone/cortisol/" class="internal-link">cortisol</a></p>
<h2>References</h2>
<ul>
<li>Speiser PW et al. <em>J Clin Endocrinol Metab.</em> 2018 -- Congenital adrenal hyperplasia due to steroid 21-hydroxylase deficiency: an Endocrine Society clinical practice guideline (PMID: 30272171)</li>
<li>New MI et al. <em>J Clin Endocrinol Metab.</em> 1983 -- Genotyping steroid 21-hydroxylase deficiency by hormonal phenotyping (PMID: 6306039)</li>
</ul>

{% endraw %}