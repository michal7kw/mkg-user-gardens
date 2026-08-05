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
    localized_name: anticorpi anti-CMV
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
    - description: Free with a clinical referral (pregnancy/immunosuppression); otherwise
        private
      type: clinical_referral
    last_verified: 2026-06
    localized_name: przeciwciała przeciw CMV
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
    localized_name: Cytomegalovirus (CMV) Antibodies
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
description: CMV IgM and IgG serology, with IgG avidity testing, used to distinguish
  acute or recent primary cytomegalovirus infection from past infection. It is especially
  important in pregnancy and in immunocompromised patients, and CMV is a leading cause
  of heterophile-negative mononucleosis.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: testuser150c66a0c
id: test-cytomegalovirus-antibodies
permalink: /garden/testuser150c66a0c/labtest/cytomegalovirus-antibodies/
provenance: curated
slug: cytomegalovirus-antibodies
source: Manual
tags:
- labtest
- serology
- viral_infection
- infectious_disease
- immune
templateEngineOverride: njk
title: cytomegalovirus_antibodies
type: labtest
updated: '2026-08-05T05:38:18.246919Z'
---

{% raw %}
<h1>cytomegalovirus_antibodies</h1>
<h2>Overview</h2>
<p>Cytomegalovirus (CMV) serology measures IgM and IgG antibodies against CMV, a ubiquitous beta-herpesvirus that establishes lifelong latency after primary infection. CMV IgM typically indicates acute or recent infection, whereas CMV IgG indicates prior exposure and, in immunocompetent hosts, immunity. Because CMV IgM can persist for months and may be non-specifically positive, IgG avidity testing is the key adjunct: low avidity supports recent (within ~3-4 months) primary infection, while high avidity indicates infection acquired more remotely.</p>
<p>The clinical importance of CMV serology is greatest in two settings. In pregnancy, primary maternal CMV infection carries a meaningful risk of vertical transmission and congenital disease, so distinguishing primary infection (low-avidity IgG, IgM-positive) from past infection is decisive for counselling and management. In immunocompromised patients (transplant recipients, advanced HIV), CMV primary infection or reactivation can cause serious end-organ disease, and baseline serostatus informs prophylaxis and donor-recipient matching.</p>
<p>In immunocompetent adults, CMV is also a leading cause of a mononucleosis-like syndrome that is classically <strong>heterophile-negative</strong> — that is, the Monospot test is negative and EBV serology does not explain the illness. CMV serology (and, where needed, CMV PCR/antigenemia) is therefore part of the workup of unexplained fever, lymphocytosis, and hepatitis. The panel is run on serum collected by venipuncture, usually by chemiluminescent or enzyme immunoassay, with no fasting required.</p>
<h2>Interpretation</h2>
<table>
<thead>
<tr>
<th>CMV IgM</th>
<th>CMV IgG</th>
<th>IgG Avidity</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positive</td>
<td>Negative/Positive</td>
<td>Low</td>
<td>Acute / recent primary infection</td>
</tr>
<tr>
<td>Negative</td>
<td>Positive</td>
<td>High</td>
<td>Past infection (latent, seropositive)</td>
</tr>
<tr>
<td>Negative</td>
<td>Negative</td>
<td>--</td>
<td>Susceptible (seronegative)</td>
</tr>
<tr>
<td>Positive</td>
<td>Positive</td>
<td>High</td>
<td>Possible reactivation or persistent IgM; correlate clinically</td>
</tr>
</tbody>
</table>
<p>A single IgM-positive result does not by itself prove acute infection; avidity testing and, when available, paired sera or molecular testing improve specificity. In congenital workup, viral detection (urine/saliva PCR) within the first 3 weeks of life is required for diagnosis, as serology alone cannot establish congenital CMV.</p>
<h2>Clinical Significance</h2>
<p>Establishing CMV serostatus and stage guides pregnancy counselling and the assessment of suspected congenital infection, directs transplant prophylaxis and monitoring strategy, and identifies CMV as the cause of a heterophile-negative mononucleosis when EBV testing is unrevealing. Correct staging avoids both unwarranted anxiety (from a falsely-interpreted IgM) and missed primary infection.</p>
<h2>Reference Ranges</h2>
<p>Results are reported qualitatively (negative / equivocal / positive) or as index values, with avidity expressed as a percentage; cutoffs are assay- and laboratory-specific. Consult the performing laboratory's reference values.</p>
<h2>Relationships</h2>
<p>USED_FOR::<a href="/garden/testuser150c66a0c/condition/infectious-mononucleosis/" class="internal-link">Infectious Mononucleosis</a><br />
ASSOCIATED_WITH_BIOMARKER::<a href="/garden/testuser150c66a0c/labtest/lymphocytes/" class="internal-link">Lymphocytes</a></p>
<h2>References</h2>
<ul>
<li>Portet Sulla V, et al. <em>Microbiol Spectr.</em> 2025;13(8):e0045525 -- Reliability of CMV-IgG kinetics in the diagnosis of CMV primary infection: sensitivity, specificity, and clinical implications (PMID: 40525841)</li>
<li>Fourgeaud J, et al. <em>Clin Infect Dis.</em> 2025;81(5):e417-e423 -- Cytomegalovirus vertical transmission rate according to IgG avidity value and valacyclovir treatment of maternal primary infection in the first trimester of pregnancy (PMID: 40794647)</li>
<li>Manicklal S, et al. <em>Clin Microbiol Rev.</em> 2013;26(1):86-102 -- The &quot;silent&quot; global burden of congenital cytomegalovirus (PMID: 23297260)</li>
<li>Hui L, et al. <em>Aust Prescr.</em> 2026;49(2):61-67 -- Cytomegalovirus in pregnancy: prevention, maternal screening, and the role of antivirals (PMID: 42022261)</li>
</ul>
<hr />
<p><em>Last Updated: 2026-06-19</em></p>

{% endraw %}