---
confidence_score: 0.9
country_availability:
  it:
    access_pathway:
      identity_required: true
      steps:
      - Receive an invitation from your ASL (women aged 30-64, every 5 years)
      - Book the free appointment at the designated screening centre
      - Attend — no ricetta and no ticket required; reflex Pap done if HPV-positive
      type: population_screening
    coverage_tier: public_free
    exemptions: []
    last_verified: 2026-05
    localized_name: test HPV-DNA (ricerca del DNA del papillomavirus)
    typical_providers:
    - coverage_area: regional (invited cohort)
      name: Programma di screening cervicale (ASL)
      type: public_lab
    - coverage_area: 8 Italian regions
      name: SYNLAB Italia
      type: private_walk_in
      url: https://synlab.it
  pl:
    access_pathway:
      identity_required: true
      steps:
      - Covered free under the NFZ cervical screening programme (HPV-based, ages 25-64)
      - Book at a participating gynaecology clinic
      - Attend — free under NFZ
      type: population_screening
    coverage_tier: public_free
    exemptions: []
    last_verified: 2026-05
    localized_name: test HPV-DNA (test molekularny w kierunku HPV)
    typical_providers:
    - coverage_area: national
      name: Program profilaktyki raka szyjki macicy (NFZ)
      type: public_lab
  uk:
    access_pathway:
      identity_required: true
      steps:
      - Receive an invitation from the NHS Cervical Screening Programme (ages 25-64)
      - Book at your GP practice or local clinic
      - Attend — free; cytology done as reflex if HPV-positive
      type: population_screening
    coverage_tier: public_free
    exemptions: []
    last_verified: 2026-05
    localized_name: HPV primary screening
    typical_providers:
    - coverage_area: UK national
      name: NHS Cervical Screening Programme
      type: public_lab
      url: https://www.nhs.uk/conditions/cervical-screening/
created: '2026-06-21T16:03:53.369069Z'
description: Molecular test detecting high-risk human papillomavirus (HPV) DNA in
  a cervical sample — the primary screening method for cervical cancer in women aged
  30-64. More sensitive than cytology; a negative result allows a 5-year screening
  interval. In Italy it is the free organized SSN cervical screening test from age
  30.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: siwy2
id: hpv_dna_test
permalink: /garden/siwy2/examination/hpv-dna-test/
slug: hpv-dna-test
source: Manual
tags:
- examination
- gynecology
- molecular
- cancer_screening
templateEngineOverride: njk
title: HPV-DNA Test
type: examination
updated: '2026-06-21T16:03:53.369069Z'
---

{% raw %}
<h1>HPV-DNA Test</h1>
<h2>Overview</h2>
<p>The HPV-DNA test detects the genetic material of <strong>high-risk human papillomavirus</strong> types (the cause of nearly all cervical cancers) in a sample of cervical cells. Because it is more sensitive than cytology, a negative HPV result safely allows a longer (5-year) screening interval.</p>
<p>In <strong>Italy</strong>, primary HPV-DNA testing is the free organized SSN cervical-screening method for women aged <strong>30-64</strong>, repeated every <strong>5 years</strong>; a Pap test is performed as a reflex/triage step only when the HPV test is positive. Invitations come from the local <strong>ASL</strong> — no prescription or <em>ticket</em> is required.</p>
<h2>Relationships</h2>
<p>DIAGNOSES::<a href="/garden/siwy2/condition/cervical-cancer/" class="internal-link">Cervical Cancer</a><br />
DIAGNOSES::<a href="/garden/siwy2/condition/cervical-dysplasia/" class="internal-link">Cervical Dysplasia</a><br />
EXAMINES::<a href="/garden/siwy2/organ/cervix/" class="internal-link">Cervix</a><br />
RELATED_TO::<a href="/garden/siwy2/examination/pap-test/" class="internal-link">Pap Test</a></p>

{% endraw %}