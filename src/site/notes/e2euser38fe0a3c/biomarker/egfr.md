---
confidence_score: 0.88
created: 2026-01-03T17:55:37+0000
description: Epidermal growth factor receptor (EGFR/HER1/ErbB1), a transmembrane receptor
  tyrosine kinase whose overexpression, amplification, or activating mutation drives
  tumor growth. As an oncology biomarker, EGFR protein expression and mutation status
  guide targeted therapy selection and prognosis in lung, colorectal, and head-and-neck
  cancers.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: e2euser38fe0a3c
id: egfr
last_modified: 2026-06-15T00:00:00+0000
permalink: /garden/e2euser38fe0a3c/biomarker/egfr/
provenance: curated
slug: egfr
source: Manual
tags:
- biomarker
- oncology
- receptor_tyrosine_kinase
- targeted_therapy
- lung_cancer
- tumor_marker
templateEngineOverride: njk
title: EGFR
type: biomarker
updated: 2026-06-15T00:00:00+0000
---

{% raw %}
<h1>EGFR</h1>
<h2>Overview</h2>
<p>The epidermal growth factor receptor (EGFR), also known as HER1 or ErbB1, is a 134 kDa transmembrane receptor tyrosine kinase encoded by the <em>EGFR</em> gene (UniProt P00533) and located on chromosome 7p11.2. It belongs to the ErbB family alongside HER2, HER3, and HER4. Binding of ligands such as EGF and TGF-alpha induces receptor dimerization and autophosphorylation of intracellular tyrosine residues, which activates the downstream RAS-RAF-MEK-ERK, PI3K-AKT, and JAK-STAT cascades that govern cell proliferation, survival, migration, and differentiation. Under normal physiology this signaling is tightly regulated, but in cancer it becomes constitutively active through receptor overexpression, gene amplification, or activating mutations.</p>
<p>As an oncology biomarker, EGFR is assessed at two distinct levels. Protein overexpression is measured semi-quantitatively by immunohistochemistry (IHC, scored 0 to 3+) and gene amplification by in-situ hybridization, while activating mutations in the tyrosine kinase domain (most commonly exon 19 deletions and the exon 21 L858R point mutation) are detected by PCR-based assays or next-generation sequencing of tumor tissue or circulating tumor DNA. These two readouts carry different clinical weight: overexpression is largely prognostic and relevant to antibody therapy in colorectal and head-and-neck cancer, whereas activating mutation status is strongly predictive of response to small-molecule tyrosine kinase inhibitors (TKIs) in non-small cell lung carcinoma (NSCLC).</p>
<p>EGFR was one of the first oncogenes to be successfully drugged, and the discovery in 2004 that NSCLC tumors harboring activating EGFR mutations are exquisitely sensitive to TKIs (Lynch et al., NEJM; Paez et al., Science) established EGFR mutation testing as a cornerstone of precision oncology. Today, molecular EGFR testing is standard of care at diagnosis of advanced lung adenocarcinoma, and acquired resistance mutations such as T790M and C797S are tracked over the course of treatment to guide next-line therapy. EGFR overexpression is also seen in glioblastoma (frequently with the EGFRvIII variant), squamous cell carcinomas, and a subset of colorectal cancers.</p>
<h2>Reference Ranges</h2>
<p>EGFR is a qualitative/semi-quantitative biomarker with no continuous numeric reference range. Interpretation depends on the assay platform and tumor type.</p>
<table>
<thead>
<tr>
<th>Assay</th>
<th>Result</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mutation analysis (PCR/NGS)</td>
<td>Wild-type (negative)</td>
<td>No targetable activating mutation; EGFR-TKI benefit unlikely</td>
</tr>
<tr>
<td>Mutation analysis (PCR/NGS)</td>
<td>Activating mutation (exon 19 del, L858R)</td>
<td>Predicts sensitivity to first-line EGFR-TKIs</td>
</tr>
<tr>
<td>Mutation analysis (PCR/NGS)</td>
<td>T790M / C797S resistance mutation</td>
<td>Indicates acquired TKI resistance; guides next-line therapy</td>
</tr>
<tr>
<td>IHC expression</td>
<td>0 / 1+</td>
<td>Negative / low expression</td>
</tr>
<tr>
<td>IHC expression</td>
<td>2+ / 3+</td>
<td>Moderate / strong overexpression</td>
</tr>
<tr>
<td>FISH amplification</td>
<td>Negative</td>
<td>No gene amplification</td>
</tr>
<tr>
<td>FISH amplification</td>
<td>Positive</td>
<td>Gene amplification (poorer prognosis)</td>
</tr>
</tbody>
</table>
<p><strong>Notes:</strong></p>
<ul>
<li>There is no universally standardized IHC cutoff that reliably predicts antibody therapy response, which limits the predictive utility of expression scoring alone.</li>
<li>Mutation status is the clinically actionable readout in NSCLC and must be determined on adequate tumor tissue or validated liquid biopsy (circulating tumor DNA).</li>
<li>Liquid-biopsy ctDNA testing has lower sensitivity than tissue testing; a negative plasma result does not exclude a mutation and should be reflexed to tissue where feasible.</li>
</ul>
<h2>Testing Information</h2>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Detail</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Measurement Unit</strong></td>
<td>Qualitative (mutation positive/negative) or IHC score 0 to 3+</td>
</tr>
<tr>
<td><strong>Sample Type</strong></td>
<td>Tumor tissue (FFPE) or blood (circulating tumor DNA)</td>
</tr>
<tr>
<td><strong>Fasting Required</strong></td>
<td>No</td>
</tr>
<tr>
<td><strong>Preferred Method</strong></td>
<td>Next-generation sequencing or PCR for mutations; IHC for protein expression; FISH for amplification</td>
</tr>
<tr>
<td><strong>Test Frequency</strong></td>
<td>At diagnosis of advanced NSCLC; repeat on progression to detect resistance mutations</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<p><strong>Increase EGFR signaling / expression:</strong></p>
<ul>
<li>Gene amplification (increased copy number drives overexpression)</li>
<li>Activating tyrosine kinase domain mutations (exon 19 deletion, L858R — constitutive activation)</li>
<li>EGFRvIII variant (ligand-independent activation, common in glioblastoma)</li>
<li>Ligand overexpression (EGF, TGF-alpha autocrine loops)</li>
</ul>
<p><strong>Decrease / reduce EGFR signaling:</strong></p>
<ul>
<li>EGFR tyrosine kinase inhibitors (block ATP-binding kinase domain)</li>
<li>Anti-EGFR monoclonal antibodies (block ligand binding and induce receptor internalization)</li>
<li>Loss of downstream pathway dependence (e.g., emergence of bypass signaling)</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Overexpression / amplification / activating mutation is associated with:</strong></p>
<ul>
<li><strong>Non-Small Cell Lung Carcinoma</strong> — activating EGFR mutations occur in roughly 10-15% of Western and up to 50% of East Asian lung adenocarcinomas and are strongly predictive of TKI response (Lynch et al. 2004; Mok et al. 2009).</li>
<li><strong>Colorectal cancer</strong> — EGFR overexpression supports anti-EGFR antibody therapy, but only in RAS/BRAF wild-type tumors; downstream RAS mutations confer resistance.</li>
<li><strong>Glioblastoma</strong> — EGFR amplification and the EGFRvIII variant are frequent and associated with aggressive disease.</li>
<li><strong>Squamous cell carcinoma</strong> (head and neck, lung) — EGFR overexpression is common and associated with poorer prognosis.</li>
</ul>
<p><strong>Diagnostic and predictive approach:</strong></p>
<ul>
<li>In NSCLC, mutation status (not expression level) is the actionable biomarker for TKI selection.</li>
<li>In colorectal cancer, antibody therapy decisions require concurrent assessment of <em>KRAS/NRAS/BRAF</em> status because downstream mutations override EGFR-directed treatment.</li>
<li>Acquired resistance mutations (T790M, C797S) and bypass mechanisms (MET amplification) are monitored to sequence later-line therapy.</li>
</ul>
<p><strong>Monitoring use cases:</strong></p>
<ul>
<li>Baseline molecular profiling at diagnosis of advanced disease</li>
<li>Serial circulating tumor DNA testing to detect emerging resistance mutations</li>
<li>Re-biopsy on progression to characterize resistance mechanism</li>
</ul>
<h2>Strategies to Manage</h2>
<p>EGFR is a tumor biomarker reflecting oncogenic disease biology rather than a modifiable lifestyle parameter; management is governed by oncology treatment, not self-directed intervention.</p>
<ol>
<li><strong>Molecular testing at diagnosis</strong> — obtain comprehensive genomic profiling on adequate tumor tissue before starting systemic therapy in advanced NSCLC.</li>
<li><strong>Match therapy to mutation</strong> — patients with activating mutations receive EGFR-TKIs; expression-positive RAS/BRAF wild-type colorectal tumors are candidates for anti-EGFR antibodies.</li>
<li><strong>Monitor for resistance</strong> — track for acquired resistance mutations (e.g., T790M) via repeat tissue or liquid biopsy on progression and switch to an appropriate next-generation agent.</li>
<li><strong>Co-test downstream pathway genes</strong> — assess <em>KRAS</em>, <em>NRAS</em>, and <em>BRAF</em> status, since downstream activation predicts non-response to EGFR-directed therapy.</li>
<li><strong>Multidisciplinary oncology care</strong> — therapy selection, sequencing, and adverse-event management should be directed by an oncology team within current clinical guidelines.</li>
</ol>
<h2>Relationships</h2>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser38fe0a3c/condition/non-small-cell-lung-carcinoma/" class="internal-link">Non-Small Cell Lung Carcinoma</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser38fe0a3c/condition/lung-neoplasms/" class="internal-link">Lung Neoplasms</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser38fe0a3c/condition/colorectal-neoplasms/" class="internal-link">Colorectal Neoplasms</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser38fe0a3c/condition/glioblastoma/" class="internal-link">Glioblastoma</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser38fe0a3c/condition/squamous-cell-carcinoma/" class="internal-link">Squamous Cell Carcinoma</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser38fe0a3c/condition/carcinoma/" class="internal-link">Carcinoma</a></p>
<h3>Predicts Risk</h3>
<p>PREDICTS_RISK::<a href="/garden/e2euser38fe0a3c/condition/cancer/" class="internal-link">Cancer</a></p>
<h3>Correlated With</h3>
<p>CORRELATED_WITH::<a href="/garden/e2euser38fe0a3c/biomarker/egfr-status/" class="internal-link">EGFR Status</a><br />
CORRELATED_WITH::<a href="/garden/e2euser38fe0a3c/labtest/cea/" class="internal-link">CEA</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/e2euser38fe0a3c/protein/akt1/" class="internal-link">AKT1</a><br />
RELATED::<a href="/garden/e2euser38fe0a3c/protein/src/" class="internal-link">SRC</a><br />
RELATED::<a href="/garden/e2euser38fe0a3c/protein/ubc/" class="internal-link">UBC</a></p>
<h3>Included In</h3>
<p>INCLUDED_IN::<a href="/garden/e2euser38fe0a3c/labtestpanel/cancer-screening-panel/" class="internal-link">cancer_screening_panel</a></p>
<h2>References</h2>
<ul>
<li>Lynch TJ, Bell DW, Sordella R, et al. <em>N Engl J Med.</em> 2004;350(21):2129-2139 -- Activating mutations in EGFR underlying NSCLC responsiveness to gefitinib (PMID: 15118073)</li>
<li>Paez JG, Jänne PA, Lee JC, et al. <em>Science.</em> 2004;304(5676):1497-1500 -- EGFR mutations in lung cancer: correlation with clinical response to gefitinib (PMID: 15118125)</li>
<li>Sordella R, Bell DW, Haber DA, Settleman J. <em>Science.</em> 2004;305(5687):1163-1167 -- Gefitinib-sensitizing EGFR mutations activate anti-apoptotic pathways (PMID: 15284455)</li>
<li>Sharma SV, Bell DW, Settleman J, Haber DA. <em>Nat Rev Cancer.</em> 2007;7(3):169-181 -- Epidermal growth factor receptor mutations in lung cancer (PMID: 17318210)</li>
<li>Mok TS, Wu YL, Thongprasert S, et al. <em>N Engl J Med.</em> 2009;361(10):947-957 -- Gefitinib or carboplatin-paclitaxel in pulmonary adenocarcinoma (IPASS trial) (PMID: 19692680)</li>
</ul>

{% endraw %}