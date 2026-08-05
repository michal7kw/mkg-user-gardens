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
    localized_name: progesterone
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
    localized_name: progesteron
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
    localized_name: Progesterone
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
description: Progesterone is a steroid hormone measured in serum, produced mainly
  by the corpus luteum after ovulation and by the placenta in pregnancy. It is used
  to confirm ovulation, assess luteal function, and monitor early pregnancy.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: itest3c382b2f
id: labtest_progesterone
permalink: /garden/itest3c382b2f/labtest/progesterone/
provenance: curated
slug: progesterone
source: Manual
tags:
- labtest
- hormones
- reproductive
templateEngineOverride: njk
title: progesterone
type: labtest
updated: '2026-08-05T23:49:33.528863Z'
---

{% raw %}
<h1>Progesterone</h1>
<h2>Overview</h2>
<p>Progesterone is a C-21 steroid hormone synthesized primarily by the corpus luteum in the second half of the menstrual cycle, by the placenta during pregnancy, and in smaller amounts by the adrenal cortex. It prepares the endometrium for implantation and maintains early pregnancy. Serum progesterone is measured on a venous blood sample by immunoassay.</p>
<p>Because levels rise sharply after ovulation, timing is critical: a mid-luteal sample (around cycle day 21 in a 28-day cycle, or about 7 days before the expected next period) is used to confirm that ovulation occurred. Progesterone is also measured serially in early pregnancy to help assess viability and in the evaluation of luteal-phase adequacy.</p>
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
<td>Follicular phase (women)</td>
<td>&lt; 1 ng/mL</td>
</tr>
<tr>
<td>Mid-luteal phase (ovulatory)</td>
<td>&gt; 3-10 ng/mL</td>
</tr>
<tr>
<td>First trimester pregnancy</td>
<td>10-44 ng/mL</td>
</tr>
<tr>
<td>Men / postmenopausal</td>
<td>&lt; 1 ng/mL</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent; results are highly cycle-phase- and pregnancy-status-specific.)</p>
<h2>Clinical Significance</h2>
<p>A mid-luteal progesterone above roughly 3 ng/mL confirms ovulation, whereas low levels suggest anovulation or luteal-phase deficiency, relevant in infertility and irregular cycles. Persistently low or non-rising values in early pregnancy raise concern for non-viable or ectopic pregnancy. Anovulatory disorders such as polycystic ovary syndrome typically show low luteal progesterone. Elevated levels occur in pregnancy and, less commonly, with congenital adrenal hyperplasia or progesterone-secreting tumors.</p>
<h2>Relationships</h2>
<p>ASSOCIATED_WITH::<a href="/garden/itest3c382b2f/condition/polycystic-ovary-syndrome/" class="internal-link">Polycystic Ovary Syndrome</a><br />
ASSOCIATED_WITH::<a href="/garden/itest3c382b2f/condition/menopause/" class="internal-link">Menopause</a><br />
RELATED::<a href="/garden/itest3c382b2f/labtest/estradiol/" class="internal-link">estradiol</a></p>
<h2>References</h2>
<ul>
<li>Wathen NC et al. <em>J Clin Endocrinol Metab.</em> 1984 -- Serum progesterone in the assessment of ovulation and luteal function (PMID: 6480799)</li>
<li>Verhaegen J et al. <em>BMJ.</em> 2012 -- Accuracy of single progesterone test to predict early pregnancy outcome (PMID: 22989845)</li>
</ul>

{% endraw %}