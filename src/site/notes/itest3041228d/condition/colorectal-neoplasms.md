---
confidence_score: 0.9
created: 2026-01-18T16:48:42+0000
description: Cancer that starts in the colon or rectum, typically arising from benign
  adenomatous polyps through the adenoma-carcinoma sequence (over 10-15 years). The
  third most common cancer worldwide and second leading cause of cancer death. Screening
  via colonoscopy can prevent up to 90% of cases by removing precancerous polyps.
  Molecular subtypes include MSI-H/dMMR (Lynch syndrome; responsive to immunotherapy)
  and MSS/pMMR (majority; standard chemotherapy).
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: itest3041228d
id: colorectal_neoplasms
last_modified: 2026-06-21T00:00:00+0000
permalink: /garden/itest3041228d/condition/colorectal-neoplasms/
provenance: curated
slug: colorectal-neoplasms
source: Manual
tags:
- condition
- oncology
- gastroenterology
- cancer
- colorectal
templateEngineOverride: njk
title: Colorectal Neoplasms
type: condition
updated: 2026-06-21T00:00:00+0000
---

{% raw %}
<h1>Colorectal Neoplasms</h1>
<h2>Overview</h2>
<p>Colorectal cancer (CRC) is the <strong>third most common cancer</strong> worldwide (~1.9 million new cases annually) and the <strong>second leading cause of cancer death</strong> (~935,000 deaths annually). Most CRCs arise from benign <strong>adenomatous polyps</strong> through the <strong>adenoma-carcinoma sequence</strong>, a process that takes <strong>10-15 years</strong> -- providing a critical window for screening and prevention.</p>
<p><strong>Molecular pathogenesis:</strong></p>
<ol>
<li><strong>Chromosomal instability (CIN) pathway (~70-80%):</strong> APC mutation -&gt; KRAS mutation -&gt; TP53 mutation -&gt; carcinoma (Vogelstein model)</li>
<li><strong>Microsatellite instability (MSI) pathway (~15%):</strong> defective DNA mismatch repair (dMMH; MLH1, MSH2, MSH6, PMS2) -&gt; accumulation of mutations in microsatellite repeats. Lynch syndrome is the hereditary form (~3% of all CRC). MSI-H tumors are responsive to <strong>immunotherapy</strong> (pembrolizumab).</li>
<li><strong>CpG island methylator phenotype (CIMP; ~15%):</strong> epigenetic silencing of genes, especially MHL1 -&gt; BRAF V600E mutation</li>
</ol>
<p><strong>Screening (USPSTF 2021):</strong></p>
<ul>
<li><strong>Ages 45-75:</strong> colonoscopy every 10 years (gold standard); or annual fecal immunochemical test (FIT); or multitargeted stool DNA (sDNA) every 1-3 years; or flexible sigmoidoscopy every 5 years; or CT colonography every 5 years</li>
<li><strong>Ages 76-85:</strong> individualized decision</li>
<li><strong>High-risk:</strong> earlier and more frequent (family history, IBD, Lynch, FAP, prior polyps)</li>
</ul>
<p>The screening age was lowered from 50 to <strong>45 years</strong> in 2021 due to rising incidence of early-onset CRC (before age 50), which has increased by <strong>~2% per year</strong> since the 1990s for unclear reasons.</p>
<p><strong>Staging (AJCC 8th edition):</strong></p>
<ul>
<li><strong>Stage I (T1-2 N0):</strong> confined to bowel wall</li>
<li><strong>Stage II (T3-4 N0):</strong> through bowel wall; no nodes</li>
<li><strong>Stage III (Tany N1-2):</strong> lymph node involvement</li>
<li><strong>Stage IV (M1):</strong> distant metastasis (liver most common; lung, peritoneum)</li>
</ul>
<p>5-year survival: Stage I ~90%; Stage II ~70-85%; Stage III ~55-70%; Stage IV ~15-20%.</p>
<h2>Management</h2>
<p><strong>Non-metastatic CRC:</strong></p>
<p><strong>Colon cancer:</strong></p>
<ul>
<li><strong>Stage I:</strong> surgical resection alone (segmental colectomy with lymphadenectomy)</li>
<li><strong>Stage II:</strong> surgery; adjuvant chemotherapy for high-risk features (T4, &lt;12 nodes examined, perforation, obstruction, poorly differentiated, lymphovascular invasion)</li>
<li><strong>Stage III:</strong> surgery + adjuvant chemotherapy (FOLFOX or CAPOX x 3-6 months; IDEA collaboration)</li>
</ul>
<p><strong>Rectal cancer (different approach due to higher local recurrence):</strong></p>
<ul>
<li><strong>Stage I:</strong> transanal endoscopic microsurgery (TEM) or total neoadjuvant therapy (TNT) + surgery</li>
<li><strong>Stage II-III:</strong> <strong>total neoadjuvant therapy (TNT)</strong> is the new standard: chemotherapy (FOLFOX/CAPOX) + chemoradiation BEFORE surgery; then total mesorectal excision (TME)
<ul>
<li>TNT allows: complete response -&gt; &quot;watch and wait&quot; (non-operative management); better compliance; earlier systemic therapy</li>
</ul>
</li>
</ul>
<p><strong>Metastatic CRC (stage IV):</strong></p>
<ul>
<li><strong>Resectable liver/lung metastases:</strong> surgical resection (curative intent; 5-year survival ~30-50%)</li>
<li><strong>Unresectable metastatic disease:</strong>
<ul>
<li><strong>First-line:</strong> chemotherapy doublet (FOLFOX or FOLFIRI) + targeted therapy
<ul>
<li><strong>Anti-VEGF</strong> (bevacizumab) for RAS-mutated or right-sided tumors</li>
<li><strong>Anti-EGFR</strong> (cetuximab or panitumumab) for RAS/BRAF wild-type, left-sided tumors</li>
</ul>
</li>
<li><strong>MSI-H/dMMR tumors:</strong> <strong>pembrolizumab</strong> (anti-PD-1; first-line; KEYNOTE-177; dramatically better than chemotherapy)</li>
<li><strong>Second-line:</strong> switch chemotherapy backbone + targeted therapy</li>
<li><strong>Third-line:</strong> regorafenib, trifluridine/tipiracil (TAS-102), fruquintinib</li>
<li><strong>BRAF V600E:</strong> encorafenib + cetuximab (BEACON CRC)</li>
</ul>
</li>
</ul>
<p><strong>Follow-up:</strong> CEA every 3-6 months x 2 years; CT chest/abdomen/pelvis annually; colonoscopy at 1 year, then every 3-5 years</p>
<h2>Relationships</h2>
<h3>Risk Biomarkers</h3>
<p>ASSOCIATED_WITH::<a href="/garden/itest3041228d/labtest/cea/" class="internal-link">cea</a><br />
ASSOCIATED_WITH::<a href="/garden/itest3041228d/labtest/hs-crp/" class="internal-link">Hs Crp</a><br />
ASSOCIATED_WITH::<a href="/garden/itest3041228d/biomarker/calprotectin/" class="internal-link">Calprotectin</a><br />
ASSOCIATED_WITH::<a href="/garden/itest3041228d/labtest/ferritin/" class="internal-link">ferritin</a><br />
ASSOCIATED_WITH::<a href="/garden/itest3041228d/labtest/hemoglobin/" class="internal-link">hemoglobin</a></p>
<h3>Improved By Supplement</h3>
<p>IMPROVED_BY_SUPPLEMENT::<a href="/garden/itest3041228d/supplement/vitamin-d/" class="internal-link">Vitamin D</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/itest3041228d/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/itest3041228d/supplement/curcumin/" class="internal-link">Curcumin</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/itest3041228d/supplement/sulforaphane/" class="internal-link">Sulforaphane</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/itest3041228d/supplement/probiotics/" class="internal-link">Probiotics</a></p>
<h2>References</h2>
<ul>
<li>Sung H, Ferlay J, Siegel RL, et al. <em>CA Cancer J Clin.</em> 2021;71(3):209-249. Global cancer statistics 2020 (PMID: 33538338)</li>
<li>US Preventive Services Task Force. <em>JAMA.</em> 2021;325(19):1965-1977. Screening for colorectal cancer: USPSTF recommendation statement (PMID: 34003218)</li>
<li>Andre T, Meyerhardt J, Iversen LH, et al. <em>J Clin Oncol.</em> 2020;38(15_suppl):4004. Effect of duration of adjuvant chemotherapy for colon cancer (IDEA collaboration; updated)</li>
<li>Andre T, Shiu KK, Kim TW, et al. <em>N Engl J Med.</em> 2020;383(23):2207-2218. Pembrolizumab in microsatellite-instability-high advanced colorectal cancer (KEYNOTE-177) (PMID: 32865981)</li>
<li>Venook AP, Niedzwiecki D, Lenz HJ, et al. <em>N Engl J Med.</em> 2017;377(23):2229-2242. Effect of first-line chemotherapy combined with cetuximab or bevacizumab on overall survival (CALGB/SWOG 80405) (PMID: 29141184)</li>
<li>Benson AB, Venook AP, Al-Hawary MM, et al. <em>J Natl Compr Canc Netw.</em> 2022;20(11):1219-1249. NCCN Guidelines: Colon Cancer (version 4.2022) (PMID: 36368689)</li>
<li>Garcia-Figueiras R, Baleato-Gonzalez S, Padrón M. <em>Radiographics.</em> 2019;39(6):1617-1635. Synchronous colorectal liver metastases</li>
<li>Conroy ME, Patel K. <em>J Clin Oncol.</em> 2020;38(15_suppl):4000. Colorectal cancer in young adults: epidemiology</li>
<li>Fearon ER, Vogelstein B. <em>Cell.</em> 1990;61(5):759-767. A genetic model for colorectal tumorigenesis (the original Vogelstein model) (PMID: 2188735)</li>
</ul>

{% endraw %}