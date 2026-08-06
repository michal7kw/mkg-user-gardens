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
    localized_name: IgE specifiche (singolo allergene)
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
      - NFZ funding requires an allergology specialist referral
      - Otherwise order per-allergen at a private lab and pay out-of-pocket
      type: private_walk_in
    coverage_tier: private_only_low_cost
    exemptions:
    - description: NFZ allergy testing requires an allergology specialist referral;
        widely bought privately walk-in
      type: specialist_referral_required
    last_verified: 2026-06
    localized_name: swoiste IgE — pojedynczy alergen
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
    localized_name: Specific IgE (single allergen)
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
description: Measures allergen-specific immunoglobulin E (sIgE) antibodies in serum
  against a single defined allergen. A positive result indicates sensitization to
  that allergen and supports the diagnosis of IgE-mediated (Type I) allergic disease
  when paired with a compatible clinical history.
dg-home: false
dg-publish: true
evidence_level: 4
gardenUsername: e2euser60df684a
id: specific_ige
permalink: /garden/e2euser60df684a/labtest/specific-ige/
provenance: curated
slug: specific-ige
source: Manual
tags:
- labtest
- allergy
- ige
- immunology
templateEngineOverride: njk
title: specific_ige
type: labtest
updated: '2026-08-06T00:21:53.997433Z'
---

{% raw %}
<h1>Specific IgE (Single Allergen)</h1>
<h2>Overview</h2>
<p>The specific IgE (sIgE) test quantifies immunoglobulin E antibodies directed against a single, defined allergen (for example a particular pollen, food protein, or animal dander). Serum is collected by venipuncture and analyzed using fluorescence enzyme immunoassay (e.g., ImmunoCAP) or comparable solid-phase platforms that report results in kU/L. It is an in vitro alternative to skin-prick testing and is useful when antihistamines, extensive dermatitis, or risk of anaphylaxis make skin testing impractical.</p>
<p>The test is ordered when the clinical history suggests an IgE-mediated allergy to a specific trigger. A detectable sIgE result confirms sensitization but does not by itself prove clinical allergy — interpretation always requires correlation with symptom history and, where relevant, oral or environmental challenge.</p>
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
<td>Undetectable / Class 0</td>
<td>&lt; 0.10 kU/L</td>
</tr>
<tr>
<td>Low (Class 1)</td>
<td>0.10 - 0.34 kU/L</td>
</tr>
<tr>
<td>Moderate (Class 2-3)</td>
<td>0.35 - 17.4 kU/L</td>
</tr>
<tr>
<td>High (Class 4-6)</td>
<td>&gt;= 17.5 kU/L</td>
</tr>
</tbody>
</table>
<p>(Ranges are approximate adult values and are lab/method-dependent.)</p>
<h2>Clinical Significance</h2>
<p>Elevated allergen-specific IgE indicates sensitization to the tested allergen and increases the likelihood of an IgE-mediated allergic reaction on exposure. Higher class values (and higher kU/L) generally correlate with a greater probability of clinical reactivity, though thresholds vary by allergen and patient age. Specific IgE is used to confirm suspected allergies, guide allergen avoidance and immunotherapy decisions, and complement total IgE measurement. A negative result makes IgE-mediated allergy to that allergen unlikely but does not exclude non-IgE-mediated reactions.</p>
<h2>Relationships</h2>
<p>ASSOCIATED_WITH::<a href="/garden/e2euser60df684a/condition/allergic-rhinitis/" class="internal-link">Allergic Rhinitis</a><br />
RELATED::<a href="/garden/e2euser60df684a/labtest/total-ige/" class="internal-link">total_ige</a><br />
USED_FOR::<a href="/garden/e2euser60df684a/condition/allergy/" class="internal-link">Allergy</a><br />
ASSOCIATED_WITH::<a href="/garden/e2euser60df684a/condition/asthma/" class="internal-link">Asthma</a></p>
<h2>References</h2>
<ul>
<li>Hamilton RG, Williams PB. Human IgE antibody serology: a primer for the practicing North American allergist/immunologist. <em>J Allergy Clin Immunol.</em> 2010 -- review of serum specific IgE testing methods and interpretation (PMID: 20146882)</li>
<li>Sicherer SH, Sampson HA. Food allergy: A review and update on epidemiology, pathogenesis, diagnosis, prevention, and management. <em>J Allergy Clin Immunol.</em> 2018 -- role of specific IgE in allergy diagnosis (PMID: 29242177)</li>
</ul>

{% endraw %}