---
confidence_score: 0.8
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
    localized_name: anticorpi anti-EBV
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
    - description: Free with a clinical referral; otherwise private for self-requested
        checks
      type: clinical_referral
    last_verified: 2026-06
    localized_name: przeciwciała przeciw EBV
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
    localized_name: Epstein-Barr Virus (EBV) Antibodies
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
created: 2026-06-17T00:00:00+0000
description: EBV antibody panel (VCA IgM, VCA IgG, EBNA-1 IgG) used to stage Epstein-Barr
  virus infection as acute primary, past, or reactivated. It is the serologic confirmation
  test for infectious mononucleosis, especially when the heterophile (Monospot) test
  is negative.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: testuser18635b57e
id: test-epstein-barr-virus-antibodies
permalink: /garden/testuser18635b57e/labtest/epstein-barr-virus-antibodies/
provenance: curated
slug: epstein-barr-virus-antibodies
source: Manual
tags:
- labtest
- serology
- viral_infection
- infectious_disease
- immune
templateEngineOverride: njk
title: epstein_barr_virus_antibodies
type: labtest
updated: '2026-08-19T21:07:34.968097Z'
---

{% raw %}
<h1>epstein_barr_virus_antibodies</h1>
<h2>Overview</h2>
<p>The Epstein-Barr virus (EBV) antibody panel measures host antibodies against specific EBV antigens to determine the stage of infection. The standard panel comprises viral capsid antigen (VCA) IgM, VCA IgG, and Epstein-Barr nuclear antigen-1 (EBNA-1) IgG; some panels also include early antigen (EA-D) IgG. Because more than 90% of adults are EBV-seropositive by midlife, the diagnostic value lies not in a single positive result but in the <em>pattern</em> across the three antibodies, which separates acute primary infection from remote past infection and from reactivation.</p>
<p>EBV is the principal cause of infectious mononucleosis. Diagnosis is often made clinically and supported by a positive heterophile (Monospot) test, but the heterophile test is insensitive early in illness and in young children, and a substantial fraction of mononucleosis is heterophile-negative. EBV-specific serology is the confirmatory test in these situations, and it can also clarify atypical presentations where the timing or stage of infection is clinically important.</p>
<p>The panel is performed on a serum sample collected by venipuncture, typically by enzyme immunoassay (EIA/ELISA) or chemiluminescent immunoassay. It requires no fasting or special preparation. Results are usually available within a few days.</p>
<h2>Interpretation</h2>
<table>
<thead>
<tr>
<th>VCA IgM</th>
<th>VCA IgG</th>
<th>EBNA-1 IgG</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positive</td>
<td>Positive</td>
<td>Negative</td>
<td>Acute / recent primary infection</td>
</tr>
<tr>
<td>Negative</td>
<td>Positive</td>
<td>Positive</td>
<td>Past infection (immune)</td>
</tr>
<tr>
<td>Negative</td>
<td>Negative</td>
<td>Negative</td>
<td>Susceptible (no prior exposure)</td>
</tr>
<tr>
<td>+/-</td>
<td>Positive</td>
<td>Positive</td>
<td>Possible reactivation (correlate with EA-IgG and clinical picture)</td>
</tr>
</tbody>
</table>
<p>EBNA-1 IgG typically appears only 6-12 weeks after symptom onset, so its absence in the presence of VCA IgM and VCA IgG is a key discriminator of acute primary infection. VCA IgM may persist for several months and can occasionally be falsely positive due to cross-reactivity (e.g., with acute cytomegalovirus infection), so results should always be interpreted in clinical context.</p>
<h2>Clinical Significance</h2>
<p>Confirming EBV as the cause of a mononucleosis syndrome avoids unnecessary antibiotics (notably amoxicillin/ampicillin, which can trigger a characteristic rash in acute EBV) and guides counselling on the typically self-limited but sometimes prolonged course. Distinguishing acute from past infection is also relevant in pregnancy, in the differential diagnosis of unexplained lymphadenopathy or hepatitis, and in research linking EBV to conditions such as multiple sclerosis and certain lymphomas.</p>
<h2>Reference Ranges</h2>
<p>Reference ranges and cutoffs are assay- and laboratory-dependent and are reported qualitatively (negative / equivocal / positive) or as an index value. Consult the performing laboratory's reference values for interpretation.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/testuser18635b57e/condition/infectious-mononucleosis/" class="internal-link">Infectious Mononucleosis</a><br />
ASSOCIATED_WITH_BIOMARKER::<a href="/garden/testuser18635b57e/labtest/lymphocytes/" class="internal-link">Lymphocytes</a></p>
<h2>References</h2>
<ul>
<li>Dunmire SK, Verghese PS, Balfour HH. <em>J Clin Virol.</em> 2018;102:84-92 -- Primary Epstein-Barr virus infection (PMID: 29525635)</li>
<li>De Paschale M, Clerici P. <em>World J Virol.</em> 2012;1(1):31-43 -- Serological diagnosis of Epstein-Barr virus infection: problems and solutions (PMID: 24175209)</li>
<li>Odumade OA, Hogquist KA, Balfour HH. <em>Clin Microbiol Rev.</em> 2011;24(1):193-209 -- Progress and problems in understanding and managing primary Epstein-Barr virus infections (PMID: 21233512)</li>
<li>Fugl A, Andersen CL. <em>BMC Fam Pract.</em> 2019;20(1):62 -- Epstein-Barr virus and its association with disease: a review of relevance to general practice (PMID: 31088382)</li>
</ul>
<hr />
<p><em>Last Updated: 2026-06-19</em></p>

{% endraw %}