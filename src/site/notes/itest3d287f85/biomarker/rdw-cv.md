---
aliases:
- RDW
- RDW-CV
- RDW-CV %
- Rdw
- Rdw-Cv
- Red Cell Distribution Width
confidence_score: 0.85
created: 2026-06-16T00:00:00+0000
description: Red Cell Distribution Width, coefficient of variation (RDW-CV) is a hematological
  index quantifying the variation in the size (volume) of circulating red blood cells,
  a state known as anisocytosis. It is reported as a percentage and is calculated
  from the standard deviation of red cell volume divided by the mean corpuscular volume
  (MCV). An elevated RDW is an early, sensitive clue to nutritional anemias and an
  independent prognostic marker in cardiovascular disease and all-cause mortality.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: itest3d287f85
id: rdw_cv
last_modified: 2026-06-21T00:00:00+0000
permalink: /garden/itest3d287f85/biomarker/rdw-cv/
provenance: curated
slug: rdw-cv
source: Manual
tags:
- biomarker
- hematology
- rbc_index
- anemia_diagnostic
templateEngineOverride: njk
title: RDW-CV
type: biomarker
updated: 2026-06-21T00:00:00+0000
---

{% raw %}
<h1>Red Cell Distribution Width (RDW-CV)</h1>
<h2>Overview</h2>
<p>Red Cell Distribution Width, coefficient of variation (RDW-CV) is a measure of the variability in size (volume) of the red blood cells in a sample—a property termed anisocytosis. It is derived directly by automated hematology analyzers, computed as the standard deviation of the red cell volume distribution divided by the mean corpuscular volume (MCV) and multiplied by 100, yielding a percentage. A high RDW-CV signals that the circulating red cell population is heterogeneous in size, mixing small and large cells together.</p>
<p>Clinically, RDW-CV is most powerful when paired with MCV in the anemia work-up. Because it captures the <em>spread</em> of cell sizes rather than the average, it often rises <em>before</em> the MCV becomes frankly abnormal—making it an early, sensitive flag for evolving iron, vitamin B12, or folate deficiency. When a freshly deficient bone marrow begins releasing a subpopulation of abnormally sized cells alongside the older normal-sized cells, the distribution widens while the mean may still sit within range.</p>
<p>A particularly useful discriminating role is separating iron deficiency anemia from thalassemia trait: both present with microcytosis (low MCV), but iron deficiency characteristically <em>elevates</em> RDW (heterogeneous cells) whereas thalassemia trait typically keeps RDW <em>normal</em> (uniformly small cells). Beyond hematology, an elevated RDW has emerged in large cohort studies as an independent prognostic marker—associated with worse outcomes and increased all-cause mortality in cardiovascular disease, heart failure, and critical illness, likely reflecting underlying inflammation, oxidative stress, and impaired erythropoiesis.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal</td>
<td>11.5 - 14.5%</td>
<td>Homogeneous red cell population. Normal anisocytosis.</td>
</tr>
<tr>
<td>Elevated</td>
<td>&gt; 14.5%</td>
<td>Increased anisocytosis. Suggests mixed cell sizes—early nutritional deficiency, mixed anemia, reticulocytosis, or post-transfusion. Also an independent adverse prognostic signal.</td>
</tr>
</tbody>
</table>
<p><em>Notes:</em> Reference intervals vary slightly by analyzer and laboratory; 11.5-14.5% is a widely used adult range. RDW-CV (a percentage) should not be confused with RDW-SD (reported in fL). RDW-CV is most informative when interpreted alongside MCV and the overall CBC, not in isolation.</p>
<h2>Testing Information</h2>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Measurement Unit</strong></td>
<td>% (coefficient of variation)</td>
</tr>
<tr>
<td><strong>Sample Type</strong></td>
<td>Whole Blood (EDTA tube)</td>
</tr>
<tr>
<td><strong>Fasting Required</strong></td>
<td>No</td>
</tr>
<tr>
<td><strong>Preferred Method</strong></td>
<td>Automated hematology analyzer (impedance / flow cytometry)</td>
</tr>
<tr>
<td><strong>Test Frequency</strong></td>
<td>Included in every standard Complete Blood Count (CBC)</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<h3>Factors that Increase RDW-CV</h3>
<ul>
<li><strong>Iron Deficiency:</strong> Newly produced iron-poor microcytes mix with older normocytes, widening the size distribution—often the earliest CBC abnormality, preceding overt microcytosis.</li>
<li><strong>Vitamin B12 / Folate Deficiency:</strong> Impaired DNA synthesis releases oversized macrocytes into a still-normal background population, raising both MCV and RDW.</li>
<li><strong>Mixed Anemia:</strong> Combined iron and B12/folate deficiency yields both small and large cells simultaneously—RDW can be markedly elevated while MCV appears deceptively normal.</li>
<li><strong>Reticulocytosis:</strong> A brisk marrow response (recovery from blood loss, hemolysis, or treatment) floods circulation with large young reticulocytes.</li>
<li><strong>Recent Transfusion:</strong> Mixing donor cells with the recipient's own cells increases measured anisocytosis.</li>
<li><strong>Chronic Inflammation / Oxidative Stress:</strong> Impairs erythropoiesis and red cell membrane integrity, broadening the size distribution.</li>
</ul>
<h3>Factors that Decrease RDW-CV</h3>
<ul>
<li><strong>Uniform Cell Population:</strong> A genuinely homogeneous red cell population (e.g., thalassemia trait, where cells are uniformly small) keeps RDW within or below the normal range. A low RDW is rarely clinically actionable on its own.</li>
</ul>
<h2>Clinical Significance</h2>
<p>RDW-CV is interpreted alongside MCV. The classic RDW + MCV interpretation matrix:</p>
<table>
<thead>
<tr>
<th>MCV</th>
<th>RDW Normal</th>
<th>RDW High</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Low (microcytic)</strong></td>
<td>Thalassemia trait, anemia of chronic disease</td>
<td>Iron deficiency anemia, hemoglobin H disease</td>
</tr>
<tr>
<td><strong>Normal (normocytic)</strong></td>
<td>Normal; anemia of chronic disease; acute blood loss</td>
<td>Early iron/B12/folate deficiency, mixed anemia, myelodysplasia</td>
</tr>
<tr>
<td><strong>High (macrocytic)</strong></td>
<td>Aplastic anemia, liver disease, alcohol</td>
<td>B12 / folate deficiency, immune hemolytic anemia</td>
</tr>
</tbody>
</table>
<p>Elevated levels (&gt; 14.5%) are associated with:</p>
<ul>
<li><strong><a href="/garden/itest3d287f85/condition/iron-deficiency-anemia/" class="internal-link">Iron Deficiency Anemia</a></strong>: High RDW is a hallmark; distinguishes it from thalassemia trait (normal RDW) when both are microcytic.</li>
<li><strong><a href="/garden/itest3d287f85/condition/pernicious-anemia/" class="internal-link">Pernicious Anemia</a></strong>: B12 malabsorption produces megaloblastic macrocytes, widening the distribution.</li>
<li><strong><a href="/garden/itest3d287f85/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a></strong>: An independent prognostic marker—elevated RDW predicts worse outcomes and increased all-cause mortality in heart failure and coronary disease, even after adjusting for hemoglobin and inflammatory markers.</li>
</ul>
<p>Monitoring use cases:</p>
<ul>
<li>Early detection of evolving nutritional deficiency before MCV shifts.</li>
<li>Discriminating iron deficiency (high RDW) from thalassemia trait (normal RDW) in microcytic anemia.</li>
<li>Risk stratification in cardiovascular and critically ill patients.</li>
</ul>
<h2>Strategies to Manage</h2>
<ol>
<li><strong>Correct Iron Deficiency:</strong> When RDW is high with low ferritin/MCV, repleting <a href="/garden/itest3d287f85/supplement/iron/" class="internal-link">Iron</a> (oral or IV) normalizes erythropoiesis; RDW typically falls as the homogeneous, iron-replete cohort replaces the mixed population over 4-8 weeks.</li>
<li><strong>Replete B12 / Folate:</strong> When macrocytosis accompanies a high RDW, <a href="/garden/itest3d287f85/supplement/vitamin-b12/" class="internal-link">Vitamin B12</a> and <a href="/garden/itest3d287f85/supplement/folate/" class="internal-link">Folate</a> supplementation restores normal DNA synthesis, allowing uniform cell production and a declining RDW.</li>
<li><strong>Confirm With Paired Indices:</strong> Always interpret RDW with <a href="/garden/itest3d287f85/biomarker/mcv/" class="internal-link">Mcv</a> and <a href="/garden/itest3d287f85/labtest/ferritin/" class="internal-link">Ferritin</a>; a falling RDW after treatment is a useful confirmation that the targeted deficiency was the cause.</li>
<li><strong>Address Underlying Disease:</strong> In chronic inflammatory or cardiovascular contexts, managing the underlying condition—rather than the RDW itself—is the appropriate target, as elevated RDW here is a marker, not a modifiable endpoint.</li>
</ol>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/itest3d287f85/organ/blood/" class="internal-link">Blood</a><br />
INDICATES_ORGAN_HEALTH::<a href="/garden/itest3d287f85/organ/bone-marrow/" class="internal-link">Bone Marrow</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/itest3d287f85/condition/iron-deficiency-anemia/" class="internal-link">Iron Deficiency Anemia</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest3d287f85/condition/pernicious-anemia/" class="internal-link">Pernicious Anemia</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest3d287f85/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a></p>
<h3>Correlated With</h3>
<p>CORRELATED_WITH::<a href="/garden/itest3d287f85/biomarker/mcv/" class="internal-link">Mcv</a><br />
CORRELATED_WITH::<a href="/garden/itest3d287f85/labtest/ferritin/" class="internal-link">Ferritin</a><br />
CORRELATED_WITH::<a href="/garden/itest3d287f85/supplement/iron/" class="internal-link">Iron</a></p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/garden/itest3d287f85/supplement/iron/" class="internal-link">Iron</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/itest3d287f85/supplement/vitamin-b12/" class="internal-link">Vitamin B12</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/garden/itest3d287f85/supplement/folate/" class="internal-link">Folate</a></p>
<h3>Included In</h3>
<p>INCLUDED_IN::<a href="/garden/itest3d287f85/labtest/complete-blood-count/" class="internal-link">complete_blood_count</a></p>
<h2>References</h2>
<ul>
<li><em>Salvagno GL, Sanchis-Gomar F, Picanza A, Lippi G. Crit Rev Clin Lab Sci. 2015;52(2):86-105</em> -- Red blood cell distribution width: A simple parameter with multiple clinical applications. (PMID: 25535770)</li>
<li><em>Patel KV, Ferrucci L, Ershler WB, Longo DL, Guralnik JM. Arch Intern Med. 2009;169(5):515-523</em> -- Red blood cell distribution width and the risk of death in middle-aged and older adults. (PMID: 19273783)</li>
<li><em>Maner BS, Killeen RB, Moosavi L. StatPearls [Internet]. 2024</em> -- Mean Corpuscular Volume (and red cell indices). (PMID: 31424859)</li>
</ul>

{% endraw %}