---
aliases:
- Mchc
- MCHC
- Mean Corpuscular Hemoglobin Concentration
confidence_score: 0.9
created: '2026-01-03T17:55:36+00:00'
description: Mean Corpuscular Hemoglobin Concentration (MCHC) measures the average
  concentration of hemoglobin per unit volume within a red blood cell (g/dL of RBC
  volume). Unlike MCH (which measures absolute hemoglobin mass) and MCV (which measures
  absolute cell size), MCHC isolates the geometric density of hemoglobin packaging.
  It is the principal CBC index for distinguishing hypochromic anemias (iron deficiency,
  thalassemia) from normochromic anemias and for flagging hereditary spherocytosis
  and autoimmune hemolytic anemia (high MCHC >36 g/dL). Normal MCHC is 32-36 g/dL.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: e2euser73acebff
id: mchc
last_modified: 2026-06-21T00:00:00+0000
permalink: /garden/e2euser73acebff/biomarker/mchc/
provenance: curated
slug: mchc
source: Manual
tags:
- biomarker
- hematology
- rbc_index
- anemia_diagnostic
- complete_blood_count
- spherocytosis
- hypochromic
templateEngineOverride: njk
title: MCHC
type: biomarker
updated: 2026-06-21T00:00:00+0000
---

{% raw %}
<h1>Mean Corpuscular Hemoglobin Concentration (MCHC)</h1>
<h2>Overview</h2>
<p>Mean Corpuscular Hemoglobin Concentration (MCHC) measures the average <strong>concentration</strong> of hemoglobin per unit <strong>volume</strong> within a red blood cell, expressed in grams per deciliter (g/dL of RBC volume). It is calculated from the CBC as <strong>MCHC = Hemoglobin (g/dL) × 100 / Hematocrit (%)</strong>. Unlike MCH (which measures absolute hemoglobin mass per cell) and MCV (which measures absolute cell size), MCHC isolates the <strong>geometric density</strong> of hemoglobin packaging. It is the principal CBC index for distinguishing hypochromic anemias from normochromic anemias and for flagging hereditary spherocytosis and autoimmune hemolytic anemia.</p>
<p><strong>Physiologically, RBCs cannot be truly &quot;hyperchromic&quot;</strong> because hemoglobin crystallizes out of solution above ~37 g/dL. Therefore, a truly elevated MCHC (&gt;36 g/dL) is rare and intensely specific -- it indicates either:</p>
<ol>
<li><strong>Spherocytes</strong> (hereditary spherocytosis, autoimmune hemolytic anemia) -- cells that have lost surface area (membrane loss) without losing hemoglobin mass, raising the concentration ratio</li>
<li><strong>Cold agglutinin artifact</strong> -- autoantibodies clump RBCs during automated analysis, falsely inflating MCHC</li>
</ol>
<p>Conversely, <strong>low MCHC (&lt;32 g/dL, &quot;hypochromic&quot;)</strong> indicates iron-restricted erythropoiesis: insufficient hemoglobin synthesis per cell, producing pale (&quot;hollow&quot;) cells under microscopy. The principal causes are <strong>iron deficiency anemia</strong> (most common) and <strong>thalassemia</strong>. Anemia of chronic disease can also lower MCHC modestly.</p>
<p>The combination of MCV, MCH, and MCHC (with RDW and peripheral smear) provides a powerful anemia classification framework: <strong>microcytic hypochromic</strong> (low MCV, low MCHC -- iron deficiency, thalassemia); <strong>macrocytic normochromic</strong> (high MCV, normal MCHC -- B12/folate deficiency); <strong>normocytic normochromic</strong> (normal MCV, normal MCHC -- anemia of chronic disease, acute blood loss, marrow failure).</p>
<p><strong>Evidence Level: 5/5</strong> (foundational CBC index; universal clinical use).</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value (g/dL)</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Hypochromic</td>
<td>&lt;32</td>
<td>Iron deficiency anemia, thalassemia, anemia of chronic disease</td>
</tr>
<tr>
<td>Normochromic</td>
<td>32-36</td>
<td>Healthy erythropoiesis</td>
</tr>
<tr>
<td>Optimal</td>
<td>33-35</td>
<td>The biological ideal</td>
</tr>
<tr>
<td>&quot;Hyperchromic&quot; (spherocytes)</td>
<td>&gt;36</td>
<td>Hereditary spherocytosis, autoimmune hemolytic anemia, sickle cell disease</td>
</tr>
<tr>
<td>Falsely elevated (&gt;36)</td>
<td>--</td>
<td>Cold agglutinin artifact, lipemia</td>
</tr>
</tbody>
</table>
<p><strong>Caveats:</strong></p>
<ul>
<li>Reference range is analyzer-specific</li>
<li>Cold agglutinins can falsely elevate MCHC (warm the sample to 37C and retest)</li>
<li>High MCHC &gt;36 g/dL should prompt peripheral smear review for spherocytes</li>
<li>MCHC is reported on every CBC; widely available</li>
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
<td>g/dL</td>
</tr>
<tr>
<td>Sample Type</td>
<td>Whole blood (EDTA tube)</td>
</tr>
<tr>
<td>Fasting Required</td>
<td>No</td>
</tr>
<tr>
<td>Preferred Method</td>
<td>Automated cell counter (impedance, flow cytometry)</td>
</tr>
<tr>
<td>Test Frequency</td>
<td>Reported on every standard CBC</td>
</tr>
<tr>
<td>Turnaround</td>
<td>Same day (often within 1 hour)</td>
</tr>
<tr>
<td>Stability</td>
<td>Stable 24 h at room temp; 48 h at 4C</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<p><strong>Increase MCHC (&gt;36 g/dL, &quot;hyperchromic&quot;):</strong></p>
<ul>
<li><strong>Hereditary spherocytosis</strong> -- autosomal dominant defect in RBC cytoskeleton (spectrin, ankyrin, band 3, protein 4.2); cells lose membrane and become spheroidal, raising hemoglobin concentration</li>
<li><strong>Autoimmune hemolytic anemia</strong> (warm antibody type) -- IgG-mediated membrane loss</li>
<li><strong>Sickle cell disease</strong> -- dense, dehydrated sickle cells</li>
<li><strong>Severe burns</strong> (membrane damage)</li>
<li><strong>Cold agglutinin artifact</strong> -- autoantibodies clump RBCs during analysis; warm sample to 37C and retest</li>
<li><strong>Lipemia, hemolysis</strong> -- lab artifacts</li>
</ul>
<p><strong>Decrease MCHC (&lt;32 g/dL, hypochromic):</strong></p>
<ul>
<li><strong>Iron deficiency anemia</strong> (most common cause) -- insufficient hemoglobin synthesis</li>
<li><strong>Thalassemia</strong> (alpha or beta trait) -- reduced globin chain synthesis</li>
<li><strong>Sideroblastic anemia</strong> -- impaired heme synthesis</li>
<li><strong>Anemia of chronic disease</strong> -- hepcidin-mediated iron sequestration</li>
<li><strong>Lead poisoning</strong> -- impaired heme synthesis</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Elevated MCHC (&gt;36 g/dL) is associated with:</strong></p>
<ul>
<li><strong>Hereditary spherocytosis:</strong> the most common hereditary hemolytic anemia in Northern Europeans; family history, splenomegaly, jaundice, gallstones; confirmed by osmotic fragility test, EMA-binding flow cytometry, or eosin-5-maleimide test</li>
<li><strong>Autoimmune hemolytic anemia (warm antibody type):</strong> IgG-mediated; positive direct antiglobulin test (DAT); reticulocytosis; spherocytes on smear</li>
<li><strong>Cold agglutinin disease:</strong> IgM-mediated; cold-induced acrocyanosis; warm sample before retesting</li>
<li><strong>Sickle cell disease:</strong> dense, dehydrated sickle cells</li>
</ul>
<p><strong>Reduced MCHC (&lt;32 g/dL, hypochromic) is associated with:</strong></p>
<ul>
<li><strong>Iron deficiency anemia:</strong> the most common cause; low MCV, low MCHC, low ferritin, high TIBC</li>
<li><strong>Thalassemia trait:</strong> low MCV (often &lt;75 fL), low MCH, high/normal RBC count, normal iron studies, Hb electrophoresis for confirmation</li>
<li><strong>Anemia of chronic disease:</strong> low-normal MCV, low MCHC, high ferritin, low TIBC</li>
<li><strong>Sideroblastic anemia, lead poisoning</strong></li>
</ul>
<p><strong>Limitations:</strong></p>
<ul>
<li><strong>Not independently diagnostic</strong> -- always interpret with MCV, hemoglobin, ferritin, peripheral smear</li>
<li><strong>Lab artifacts common</strong> (cold agglutinins, lipemia, hemolysis)</li>
<li><strong>High MCHC should always prompt smear review</strong></li>
</ul>
<p><strong>Monitoring use cases:</strong></p>
<ul>
<li>Anemia classification (with MCV, MCH, RDW)</li>
<li>Iron deficiency anemia treatment monitoring (MCHC rises with iron repletion over 4-8 weeks)</li>
<li>Hereditary spherocytosis screening (with osmotic fragility)</li>
<li>Autoimmune hemolytic anemia workup (with DAT, reticulocyte count)</li>
</ul>
<h2>Strategies to Manage</h2>
<p>MCHC reflects underlying erythropoiesis; management targets the cause:</p>
<ol>
<li><strong>For low MCHC (iron deficiency):</strong>
<ul>
<li><strong>Oral iron supplementation:</strong> ferrous sulfate 325 mg TID on empty stomach; alternate-day dosing improves absorption (Stoffel 2017)</li>
<li><strong>Vitamin C</strong> 200-500 mg with iron enhances non-heme iron absorption</li>
<li><strong>Heme-iron dietary emphasis:</strong> red meat, organ meats, shellfish</li>
<li><strong>Cast-iron cookware</strong></li>
<li><strong>Avoid calcium, coffee, tea, bran</strong> at the same meal as iron</li>
<li><strong>Investigate and treat underlying cause:</strong> celiac disease, H. pylori, menorrhagia, GI bleeding</li>
</ul>
</li>
<li><strong>For high MCHC (spherocytes):</strong>
<ul>
<li><strong>Hereditary spherocytosis:</strong> folate supplementation 1-5 mg daily (support erythropoiesis); splenectomy for severe hemolysis; vaccination against encapsulated organisms before splenectomy</li>
<li><strong>Autoimmune hemolytic anemia:</strong> corticosteroids (prednisone 1-1.5 mg/kg/day); rituximab for refractory; splenectomy for chronic cases</li>
<li><strong>Cold agglutinin disease:</strong> treat underlying cause (Mycoplasma, EBV, lymphoma); rituximab; avoid cold exposure</li>
</ul>
</li>
<li><strong>For thalassemia trait:</strong> no treatment needed (carrier state); genetic counseling; avoid unnecessary iron supplementation</li>
<li><strong>For anemia of chronic disease:</strong> treat underlying cause; consider IV iron for select cases</li>
<li><strong>Folate supplementation</strong> 1-5 mg daily in any active hemolytic anemia (spherocytosis, AIHA, sickle cell)</li>
</ol>
<h2>Relationships</h2>
<h3>INDICATES_ORGAN_HEALTH</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/garden/e2euser73acebff/organ/blood/" class="internal-link">Blood</a> - MCHC reflects RBC hemoglobin concentration and erythropoietic function<br />
INDICATES_ORGAN_HEALTH::<a href="/garden/e2euser73acebff/organ/spleen/" class="internal-link">Spleen</a> - spherocytes are destroyed in the spleen; splenectomy treats hereditary spherocytosis</p>
<h3>ASSOCIATED_WITH_CONDITION</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser73acebff/condition/iron-deficiency-anemia/" class="internal-link">Iron Deficiency Anemia</a> - low MCHC (with low MCV, low MCH) indicates iron-restricted erythropoiesis<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser73acebff/clinicalpattern/iron-deficiency/" class="internal-link">Iron Deficiency</a> - same<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/e2euser73acebff/condition/pernicious-anemia/" class="internal-link">Pernicious Anemia</a> - macrocytic anemia (typically normochromic, not affecting MCHC)</p>
<h3>CORRELATED_WITH</h3>
<p>CORRELATED_WITH::<a href="/garden/e2euser73acebff/biomarker/mcv/" class="internal-link">Mcv</a> - companion RBC index (cell size); together classify anemias<br />
CORRELATED_WITH::<a href="/garden/e2euser73acebff/biomarker/mch/" class="internal-link">Mch</a> - companion RBC index (absolute hemoglobin mass per cell)<br />
CORRELATED_WITH::<a href="/garden/e2euser73acebff/labtest/hemoglobin/" class="internal-link">Hemoglobin</a> - MCHC is calculated from hemoglobin and hematocrit<br />
CORRELATED_WITH::<a href="/garden/e2euser73acebff/supplement/iron/" class="internal-link">Iron</a> - iron availability determines hemoglobin synthesis per cell<br />
CORRELATED_WITH::<a href="/garden/e2euser73acebff/labtest/ferritin/" class="internal-link">Ferritin</a> - storage iron; combined with MCHC differentiates iron deficiency from thalassemia</p>
<h3>AFFECTED_BY_SUPPLEMENT</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/garden/e2euser73acebff/supplement/iron/" class="internal-link">Iron</a> - supplementation raises low MCHC back to normal over 4-8 weeks</p>
<h3>INCLUDED_IN</h3>
<p>INCLUDED_IN::<a href="/garden/e2euser73acebff/labtest/complete-blood-count/" class="internal-link">complete_blood_count</a></p>
<h3>MEASURED_BY_TEST</h3>
<p>MEASURED_BY_TEST::<a href="/garden/e2euser73acebff/labtest/complete-blood-count/" class="internal-link">complete_blood_count</a></p>
<h2>References</h2>
<ul>
<li>Tefferi A, Hanson CA, Inwards DJ. <em>Mayo Clin Proc.</em> 2005;80(7):923-936. How to interpret and pursue an abnormal complete blood cell count in adults (PMID: 16007898)</li>
<li>Tefferi A. <em>Mayo Clin Proc.</em> 2003;78(10):1274-1280. Anemia in adults: a contemporary approach to diagnosis (PMID: 14534088)</li>
<li>Bain BJ. <em>BMJ.</em> 2006;333(7576):1040-1042. Diagnosis from the blood smear (PMID: 17074835)</li>
<li>Michaels LA, Cohen AR, Zhao H, Raphael RI, Manno CS. <em>Pediatrics.</em> 1997;99(1):10-13. Screening for hereditary spherocytosis by use of automated erythrocyte indexes (PMID: 8990000)</li>
<li>Camaschella C. <em>N Engl J Med.</em> 2019;380(9):848-859. Iron deficiency (review) (PMID: 30811908)</li>
<li>Cappellini MD, Motta I. <em>Lancet.</em> 2021;397(10270):233-248. Long-term follow-up of iron chelation in iron overload (PMID: 32711695)</li>
<li>Johnson-Wimbley TD, Graham DY. <em>Therap Adv Gastroenterol.</em> 2011;4(3):177-184. Diagnosis and management of iron deficiency anemia in the 21st century (PMID: 21694802)</li>
<li>Powell LW, George DK, McDonnell SM, Kowdley KV. <em>Lancet.</em> 2000;356(9238):1317-1324. Diagnosis of hemochromatosis (PMID: 11073021)</li>
<li>Bolton-Maggs PH, Langer JC, Iolascon A, Tittensor P, King MJ. <em>Br J Haematol.</em> 2011;156(3):411-423. Guidelines for the diagnosis and management of hereditary spherocytosis (PMID: 22229725)</li>
<li>Bermejo A, Vega-Cabrera C, Correa-Alvarez Y, et al. <em>Eur J Haematol.</em> 2023;110(3):247-254. Approach to macrocytic anemia (PMID: 36519875)</li>
<li>Piel FB, Weatherall DJ. <em>N Engl J Med.</em> 2014;371(20):1915-1925. The alpha-thalassemias (PMID: 25390741)</li>
<li>Koperdanova M, Cullis JO. <em>Br J Haematol.</em> 2022;198(3):494-505. Interpreting raised serum ferritin in non-haematological contexts (BSH guidelines) (PMID: 35578353)</li>
<li>Stoffel NU, Zeder C, Brittenham GM, Moretti D, Zimmermann MB. <em>Lancet Haematol.</em> 2020;7(2):e160-e165. Iron absorption from oral iron supplements given on consecutive vs alternate days (PMID: 31843335)</li>
<li>Bender MA. StatPearls [Internet]. 2024. Hereditary Spherocytosis (PMID: 28613681)</li>
</ul>

{% endraw %}