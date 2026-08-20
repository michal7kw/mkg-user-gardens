---
confidence_score: 0.8
created: '2026-05-03'
description: Direct-to-consumer (DTC) genetic test panel covering health-trait variants.
  The most prominent example is 23andMe's FDA-authorized Genetic Health Risk reports
  covering APOE (Alzheimer's risk), BRCA1/BRCA2 (founder variants — limited coverage),
  F2 + F5 (thrombophilia), G6PD, hereditary hemochromatosis (HFE), MUTYH (colon cancer),
  and others. NOT diagnostic — confirmatory testing required for clinical decisions.
dg-home: false
dg-publish: true
evidence_level: 3
gardenUsername: testuser162cda192
id: genetic_health_risk_panel
permalink: /garden/testuser162cda192/labtest/genetic-health-risk-panel/
provenance: curated
slug: genetic-health-risk-panel
source: Manual
tags:
- labtest
- genomics
- dtc
- screening
- panel
templateEngineOverride: njk
title: genetic_health_risk_panel
type: labtest
updated: '2026-08-20T06:57:50.808231Z'
---

{% raw %}
<h1>Genetic Health Risk Panel</h1>
<h2>Overview</h2>
<p>Direct-to-consumer (DTC) genetic test panel covering health-trait variants. The most prominent example is 23andMe's FDA-authorized Genetic Health Risk reports (2017+), which cover:</p>
<ul>
<li><strong>APOE</strong> (rs429358 + rs7412) — late-onset Alzheimer's risk</li>
<li><strong>BRCA1/BRCA2</strong> — three Ashkenazi-founder variants only (LIMITED — does NOT replace full BRCA sequencing for at-risk individuals)</li>
<li><strong>F2</strong> (Factor II prothrombin G20210A) and <strong>F5</strong> (Factor V Leiden, rs6025) — thrombophilia</li>
<li><strong>G6PD</strong> — glucose-6-phosphate dehydrogenase deficiency</li>
<li><strong>HFE</strong> (hereditary hemochromatosis)</li>
<li><strong>MUTYH</strong> (colon cancer susceptibility)</li>
<li><strong>Parkinson's disease</strong> (LRRK2, GBA — limited coverage)</li>
</ul>
<p><strong>Important clinical caveat:</strong> DTC panels typically genotype only the most common variants in each gene and miss many pathogenic variants. A negative DTC result does NOT rule out hereditary risk — confirmatory testing (panel sequencing or specific variant testing through a clinical genetics lab) is required for any clinical decision-making.</p>
<p>The 23andMe and AncestryDNA platforms also generate raw genotype data that can be reanalyzed by third-party services for additional variants — but the analytical accuracy of imputed or low-coverage variants in raw data is much lower than the FDA-cleared subset.</p>
<h2>Relationships</h2>
<p>TESTS::<a href="/garden/testuser162cda192/labtest/apoe-genotype/" class="internal-link">APOE Genotype</a><br />
TESTS::<a href="/garden/testuser162cda192/variant/rs429358-apoe-e4-defining/" class="internal-link">rs429358</a><br />
TESTS::<a href="/garden/testuser162cda192/variant/rs7412-apoe-e2-defining/" class="internal-link">rs7412</a><br />
TESTS::<a href="/garden/testuser162cda192/variant/rs6025-factor-v-leiden/" class="internal-link">rs6025</a></p>
<ul>
<li>ALTERNATIVE_TO <a class="internal-link is-unresolved" href="/404">Clinical Genetic Panel</a> (NOT equivalent — DTC has lower sensitivity)</li>
</ul>

{% endraw %}