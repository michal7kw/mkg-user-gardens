---
confidence_score: 0.85
created: 2026-01-19T08:29:57+0000
description: EGFR (Epidermal Growth Factor Receptor; HER1/ErbB1) status is a predictive
  pharmacogenomic biomarker measured in tumor tissue that determines eligibility for
  EGFR-targeted therapy. Assessment includes IHC for protein overexpression, FISH
  for gene amplification, and -- most clinically -- PCR/NGS for activating mutations
  in exons 18-21 (especially exon 19 deletion and L858R). Mutations predict response
  to first-generation EGFR tyrosine kinase inhibitors (gefitinib, erlotinib) and third-generation
  (osimertinib); T790M mutation is the canonical acquired-resistance mutation.
dg-home: false
dg-publish: true
gardenUsername: itest9fcc1e69
id: egfr_biomarker
last_modified: 2026-06-21T00:00:00+0000
permalink: /garden/itest9fcc1e69/biomarker/egfr-status/
provenance: curated
slug: egfr-status
source: Manual
tags:
- biomarker
- cancer
- predictive
- pharmacogenomics
- targeted_therapy
- oncology
- mutation
- imported
- primekg
templateEngineOverride: njk
title: EGFR Status
type: biomarker
updated: 2026-06-21T00:00:00+0000
---

{% raw %}
<h1>EGFR Status</h1>
<h2>Overview</h2>
<p>EGFR (Epidermal Growth Factor Receptor; also called HER1 or ErbB1) is a transmembrane receptor tyrosine kinase encoded by the EGFR gene on chromosome 7p11.2. Upon ligand binding (EGF, TGF-alpha), EGFR homodimerizes or heterodimerizes with other ErbB family members and activates downstream signaling cascades (RAS-RAF-MEK-ERK, PI3K-AKT-mTOR, JAK-STAT) that drive cellular proliferation, survival, and migration. EGFR is overexpressed or mutated in many epithelial cancers, particularly non-small cell lung cancer (NSCLC), colorectal cancer (CRC), head and neck squamous cell carcinoma (HNSCC), and glioblastoma (where EGFRvIII variant predominates).</p>
<p>EGFR status refers to the composite assessment of EGFR protein expression (IHC), gene copy number (FISH/CISH), and -- most clinically -- activating mutations in the tyrosine kinase domain (exons 18-21). Mutation testing is now standard of care at diagnosis of advanced non-small cell lung cancer (NSCLC) because the presence of sensitizing mutations (exon 19 deletion, L858R point mutation in exon 21) strongly predicts dramatic and durable response to EGFR tyrosine kinase inhibitors (TKIs: gefitinib, erlotinib, afatinib, dacomitinib, osimertinib). Conversely, the emergence of the T790M mutation in exon 20 is the canonical mechanism of acquired resistance to first- and second-generation EGFR TKIs, prompting switch to osimertinib (third-generation, mutant-selective).</p>
<p>In metastatic colorectal cancer, anti-EGFR monoclonal antibodies (cetuximab, panitumumab) are indicated only in patients with wild-type (non-mutant) RAS and BRAF; EGFR testing in CRC is therefore performed as part of an extended RAS/BRAF panel. EGFR mutation testing is included in all major oncology guidelines (NCCN, ESMO, ASCO/CAP/AMP/IASLC).</p>
<p><strong>Evidence Level: 5/5</strong> (foundational predictive biomarker; standard of care in NSCLC and CRC guidelines).</p>
<h2>Reference Ranges</h2>
<p>This is a qualitative/categorical biomarker. Results are reported as:</p>
<table>
<thead>
<tr>
<th>Result</th>
<th>Interpretation</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>Exon 19 deletion detected</td>
<td>Sensitizing mutation (~45% of EGFR-mutant NSCLC)</td>
<td>First-line osimertinib (FLAURA trial)</td>
</tr>
<tr>
<td>Exon 21 L858R detected</td>
<td>Sensitizing mutation (~40%)</td>
<td>First-line osimertinib</td>
</tr>
<tr>
<td>Exon 20 T790M detected</td>
<td>Acquired resistance to 1G/2G TKIs</td>
<td>Switch to osimertinib</td>
</tr>
<tr>
<td>Exon 20 insertion</td>
<td>Intrinsic resistance to 1G/2G TKIs</td>
<td>Amivantamab or chemotherapy; mobocertinib (withdrawn 2023)</td>
</tr>
<tr>
<td>Other rare sensitizing (G719X, L861Q, S768I)</td>
<td>Less common sensitizing</td>
<td>Afatinib (LUX-Lung trials)</td>
</tr>
<tr>
<td>Wild-type (no mutation)</td>
<td>Standard chemotherapy +/- immunotherapy</td>
<td>No EGFR TKI benefit</td>
</tr>
<tr>
<td>Variant of uncertain significance (VUS)</td>
<td>Insufficient evidence</td>
<td>Tumor board discussion; consider repeat testing</td>
</tr>
</tbody>
</table>
<p><strong>Caveats:</strong></p>
<ul>
<li>Tumor heterogeneity -- biopsy may not represent all clones (cf. plasma ctDNA &quot;liquid biopsy&quot; for comprehensive genomic profiling)</li>
<li>Pre-analytical factors: tissue ischemia time, fixation duration (over-fixation degrades DNA)</li>
<li>Assay sensitivity: Sanger sequencing detects mutations at ~15-20% allele frequency; NGS detects &lt;1%; ARMS-PCR is intermediate</li>
<li>Both sensitizing mutations and T790M (resistance) should be assessed at progression</li>
</ul>
<h2>Testing Information</h2>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Measurement Unit</td>
<td>Qualitative (mutation status / IHC score)</td>
</tr>
<tr>
<td>Sample Type</td>
<td>Tumor tissue (FFPE preferred) or ctDNA (liquid biopsy plasma)</td>
</tr>
<tr>
<td>Fasting Required</td>
<td>No</td>
</tr>
<tr>
<td>Preferred Method</td>
<td>NGS (comprehensive panel); Cobas EGFR Mutation Test v2 (FDA-approved); ARMS-PCR; Sanger (historical)</td>
</tr>
<tr>
<td>Test Frequency</td>
<td>At NSCLC diagnosis (mandatory for advanced disease); at progression on TKI (re-biopsy or liquid biopsy for T790M)</td>
</tr>
<tr>
<td>Turnaround</td>
<td>5-14 days (tissue); 3-7 days (liquid biopsy)</td>
</tr>
<tr>
<td>Stability</td>
<td>FFPE blocks stable for years; extracted DNA stable 1+ year at -20C</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<p>EGFR status is determined by somatic mutations in tumor DNA and is not affected by diet, supplements, or lifestyle. Factors affecting test result accuracy include:</p>
<p><strong>Increase likelihood of EGFR-mutant NSCLC: and therefore a &quot;positive&quot; test:</strong></p>
<ul>
<li>East Asian ethnicity (30-50% of East Asian NSCLC vs 10-15% of Western)</li>
<li>Female sex</li>
<li>Never-smoker / light smoker</li>
<li>Adenocarcinoma histology</li>
<li>Younger age at diagnosis</li>
</ul>
<p><strong>Decrease likelihood (favor squamous / KRAS-mutant / wild-type EGFR):</strong></p>
<ul>
<li>Heavy smoking history</li>
<li>Squamous cell histology (lower EGFR-mutation rate, but testing still recommended in never-smokers with squamous)</li>
</ul>
<p><strong>Pre-analytical factors that may yield false negatives:</strong></p>
<ul>
<li>Low tumor fraction in biopsy (&lt;5-10% tumor cells)</li>
<li>Over-fixation in formalin (&gt;48 h) -- DNA degradation</li>
<li>Long ischemia time (&gt;1 h) -- DNA fragmentation</li>
<li>Sampling from a clone that does not represent the dominant lesion (tumor heterogeneity)</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Sensitizing mutations predict response to:</strong></p>
<ul>
<li><strong>First-generation EGFR TKIs:</strong> erlotinib, gefitinib (PFS ~10-12 mo in EGFR-mutant NSCLC)</li>
<li><strong>Second-generation:</strong> afatinib, dacomitinib (broader ErbB blockade; modest PFS improvement)</li>
<li><strong>Third-generation:</strong> osimertinib (mutant-selective; first-line per FLAURA -- PFS 18.9 mo; OS 38.6 mo; also active against T790M)</li>
</ul>
<p><strong>Acquired resistance mutations:</strong></p>
<ul>
<li><strong>T790M (~50-60% of acquired resistance to 1G/2G):</strong> switch to osimertinib</li>
<li><strong>C797S (after osimertinib):</strong> investigational therapies</li>
<li><strong>MET amplification, HER2 amplification, small-cell transformation:</strong> alternative resistance mechanisms</li>
</ul>
<p><strong>Colorectal cancer:</strong> EGFR overexpression/amplification is common but does not predict anti-EGFR mAb response; only wild-type RAS/BRAF predicts response. EGFR testing in CRC is therefore part of an extended RAS/BRAF panel, not standalone.</p>
<p><strong>Monitoring use cases:</strong></p>
<ul>
<li>Mandatory at NSCLC diagnosis for advanced disease (NCCN, ESMO)</li>
<li>Re-biopsy or liquid biopsy at progression on EGFR TKI (to detect T790M and guide switch to osimertinib)</li>
<li>Serial ctDNA monitoring for molecular recurrence (research/emerging)</li>
</ul>
<h2>Strategies to Manage</h2>
<p>EGFR status is a tumor genomic characteristic and cannot be modified by lifestyle interventions. Management is entirely cancer-directed:</p>
<ol>
<li><strong>First-line osimertinib 80 mg daily</strong> for sensitizing EGFR mutations (exon 19 del, L858R) per FLAURA trial and NCCN guidelines (Category 1)</li>
<li><strong>Resistance monitoring:</strong> serial ctDNA (every 6-9 weeks) to detect T790M or C797S emergence</li>
<li><strong>At progression:</strong> re-biopsy (tissue or liquid) to characterize resistance mechanism</li>
<li><strong>T790M-positive progression:</strong> switch to osimertinib (if not already first-line)</li>
<li><strong>Osimertinib progression:</strong> consider amivantamab + lazertinib (MARIPOSA-2), chemotherapy + immunotherapy, or clinical trial</li>
<li><strong>Multi-disciplinary tumor board</strong> for all EGFR-mutant NSCLC patients</li>
</ol>
<p>For EGFR-overexpressing cancers without sensitizing mutations (e.g., wild-type RAS CRC), cetuximab or panitumumab may be used in combination with chemotherapy.</p>
<h2>Relationships</h2>
<h3>ASSOCIATED_WITH_CONDITION</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/itest9fcc1e69/condition/non-small-cell-lung-carcinoma/" class="internal-link">Non-Small Cell Lung Carcinoma</a> - primary clinical context; EGFR mutations found in 10-50% of NSCLC depending on population<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest9fcc1e69/condition/lung-neoplasms/" class="internal-link">Lung Neoplasms</a> - broad category; EGFR testing standard for advanced adenocarcinoma of the lung<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest9fcc1e69/condition/colorectal-neoplasms/" class="internal-link">Colorectal Neoplasms</a> - anti-EGFR mAbs only indicated in wild-type RAS/BRAF disease; EGFR expression itself does not predict response<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest9fcc1e69/condition/cancer/" class="internal-link">Cancer</a> - broad; EGFR overexpression common in many epithelial cancers</p>
<h3>INDICATES_ORGAN_HEALTH</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/itest9fcc1e69/condition/lung-neoplasms/" class="internal-link">Lung Neoplasms</a> - EGFR mutation testing is a molecular &quot;vital sign&quot; of advanced lung adenocarcinoma<br />
INDICATES_ORGAN_HEALTH::<a href="/garden/itest9fcc1e69/condition/cancer/" class="internal-link">Cancer</a></p>
<h3>PREDICTS_RISK</h3>
<p>PREDICTS_RISK::<a href="/garden/itest9fcc1e69/condition/non-small-cell-lung-carcinoma/" class="internal-link">Non-Small Cell Lung Carcinoma</a> - sensitizing EGFR mutations predict dramatic response to EGFR TKIs (median PFS 18.9 mo with osimertinib first-line)</p>
<h3>CORRELATED_WITH</h3>
<p>CORRELATED_WITH::<a href="/garden/itest9fcc1e69/biomarker/egfr/" class="internal-link">EGFR</a> - the protein product; EGFR status reports on the gene/protein's mutational landscape</p>
<h3>INCLUDED_IN</h3>
<p>INCLUDED_IN::<a href="/garden/itest9fcc1e69/condition/non-small-cell-lung-carcinoma/" class="internal-link">Non-Small Cell Lung Carcinoma</a> - included in standard molecular profiling panels<br />
INCLUDED_IN::<a href="/garden/itest9fcc1e69/condition/cancer/" class="internal-link">Cancer</a></p>
<h3>INDICATES_PHENOTYPE</h3>
<p>INDICATES_PHENOTYPE::<a href="/garden/itest9fcc1e69/condition/cancer/" class="internal-link">Cancer</a> - targeted-therapy-eligible oncotype</p>
<h2>References</h2>
<ul>
<li>Mok TS, et al. <em>N Engl J Med.</em> 2017;377(10):929-940. FLAURA trial: osimertinib vs erlotinib/gefitinib first-line (PMID: 27959700)</li>
<li>Soria JC, et al. <em>N Engl J Med.</em> 2018;378(2):113-125. FLAURA overall survival update (PMID: 28984706)</li>
<li>Rosell R, et al. <em>N Engl J Med.</em> 2012;366(25):2399-2406. Erlotinib vs chemotherapy in EGFR-mutant NSCLC (EURTAC) (PMID: 22285468)</li>
<li>Zhou C, et al. <em>Lancet Oncol.</em> 2011;12(8):735-742. Gefitinib vs carboplatin-paclitaxel in EGFR-mutant NSCLC (IPASS) (PMID: 21783411)</li>
<li>Sequist LV, et al. <em>J Clin Oncol.</em> 2013;31(26):3327-3334. Phase III LUX-Lung 3: afatinib vs pemetrexed-cisplatin (PMID: 23816960)</li>
<li>Oxnard GR, et al. <em>JAMA Oncol.</em> 2018;4(7):937-940. Fraction of EGFR-mutant NSCLC with acquired resistance mechanisms (PMID: 29710029)</li>
<li>Leonetti A, et al. <em>Br J Cancer.</em> 2019;121(9):725-734. EGFR-resistant NSCLC: mechanisms and therapeutic options (PMID: 31409558)</li>
<li>Karapetis CS, et al. <em>N Engl J Med.</em> 2008;359(17):1757-1765. KRAS mutations and response to cetuximab in CRC (PMID: 18946061)</li>
<li>Douillard JY, et al. <em>J Clin Oncol.</em> 2013;31(18):2232-2238. Panitumumab plus FOLFOX4 in wild-type RAS metastatic CRC (PMID: 23690483)</li>
<li>Lindeman NI, et al. <em>J Mol Diagn.</em> 2018;20(2):129-151. CAP/AMP/AMP/IASLC molecular testing guideline for selection of lung cancer patients for EGFR/ALK TKIs (PMID: 29398489)</li>
<li>National Comprehensive Cancer Network (NCCN). <em>NCCN Clinical Practice Guidelines in Oncology: Non-Small Cell Lung Cancer.</em> v.6.2024.</li>
</ul>

{% endraw %}