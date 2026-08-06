---
confidence_score: 0.95
created: 2026-01-22T12:00:00+0000
description: The mitochondrial pathway for fatty acid catabolism that sequentially
  removes two-carbon units as acetyl-CoA. Each cycle generates NADH and FADH2 for
  ATP production, making it highly efficient for energy generation from stored fat.
dg-home: false
dg-publish: true
evidence_level: 5
gardenUsername: itest05db0ba3
id: beta_oxidation
permalink: /garden/itest05db0ba3/pathway/beta-oxidation/
provenance: curated
slug: beta-oxidation
source: Manual
tags:
- pathway
- metabolic
- energy_metabolism
- fatty_acid
- catabolic
- mitochondrial
templateEngineOverride: njk
title: Beta-Oxidation
type: pathway
updated: '2026-08-06T02:38:16.535030Z'
---

{% raw %}
<h1>Beta-Oxidation</h1>
<h2>Overview</h2>
<p>Beta-oxidation (fatty acid oxidation, FAO) is the central catabolic pathway by which the body extracts energy from stored and dietary fat. It dismantles activated fatty acids (fatty acyl-CoA) two carbons at a time, releasing one molecule of acetyl-CoA per cycle along with the reducing equivalents NADH and FADH₂. The acetyl-CoA feeds the <a href="/garden/itest05db0ba3/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a>, while NADH and FADH₂ donate electrons to the <a href="/garden/itest05db0ba3/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a> to drive oxidative ATP synthesis. The pathway is named for the oxidation that occurs at the beta-carbon (C3) of the fatty acyl chain across four repeating reactions: dehydrogenation (acyl-CoA dehydrogenase), hydration (enoyl-CoA hydratase), a second dehydrogenation (3-hydroxyacyl-CoA dehydrogenase), and thiolytic cleavage (3-ketoacyl-CoA thiolase).</p>
<p>Because fat is the body's most energy-dense fuel store, beta-oxidation is the dominant energy source during fasting, prolonged exercise, and other low-insulin states. The complete oxidation of palmitate (16 carbons) yields roughly 106 ATP, far exceeding the ~30–32 ATP from a molecule of glucose, which makes FAO indispensable for tissues with high and sustained energy demand. The heart relies on fatty acids for the majority of its ATP at rest, and skeletal muscle, liver, and kidney all shift toward FAO when carbohydrate is scarce. In the liver, surplus acetyl-CoA from beta-oxidation is diverted into <a href="/garden/itest05db0ba3/pathway/ketogenesis/" class="internal-link">Ketogenesis</a>, producing ketone bodies that serve as an alternative fuel for the brain and peripheral tissues during prolonged fasting.</p>
<p>Clinically, beta-oxidation sits at the crossroads of inherited metabolic disease and acquired metabolic dysfunction. Genetic defects in the chain-length-specific dehydrogenases (e.g., MCAD, LCHAD/trifunctional protein) or in the carnitine shuttle cause fatty acid oxidation disorders that present with hypoketotic hypoglycemia, cardiomyopathy, and metabolic crisis during fasting or illness. Conversely, dysregulated FAO contributes to ectopic lipid accumulation in <a href="/garden/itest05db0ba3/condition/non-alcoholic-fatty-liver-disease/" class="internal-link">Non-alcoholic Fatty Liver Disease</a>, insulin resistance, and the excessive ketone production of diabetic ketoacidosis.</p>
<h2>Mechanism</h2>
<p><strong>Activation and transport.</strong> Free fatty acids are first activated in the cytosol to fatty acyl-CoA by acyl-CoA synthetase. Long-chain acyl-CoA cannot cross the inner mitochondrial membrane directly and must use the <strong>carnitine shuttle</strong>: carnitine palmitoyltransferase I (CPT-I) on the outer membrane converts acyl-CoA to acylcarnitine, carnitine-acylcarnitine translocase (CACT/SLC25A20) moves it across the inner membrane, and CPT-II regenerates acyl-CoA in the matrix. CPT-I is the rate-limiting, regulated step and is potently inhibited by <strong>malonyl-CoA</strong>, the first committed intermediate of fatty acid synthesis — an elegant reciprocal control that prevents simultaneous synthesis and breakdown of fat. Medium- and short-chain fatty acids (and <a href="/garden/itest05db0ba3/supplement/mct-oil/" class="internal-link">MCT Oil</a>-derived octanoate/decanoate) bypass the carnitine shuttle and diffuse directly into the matrix.</p>
<p><strong>The four-step spiral.</strong> Each round of beta-oxidation removes two carbons: (1) acyl-CoA dehydrogenase (chain-length-specific VLCAD/LCAD/MCAD/SCAD) introduces a trans double bond, reducing FAD to FADH₂; (2) enoyl-CoA hydratase adds water across the double bond; (3) 3-hydroxyacyl-CoA dehydrogenase oxidizes the hydroxyl group, reducing NAD⁺ to NADH; and (4) thiolase cleaves off acetyl-CoA, leaving a fatty acyl-CoA shortened by two carbons that re-enters the cycle. The FAD and NAD⁺ cofactors depend on adequate <a href="/garden/itest05db0ba3/supplement/riboflavin/" class="internal-link">Riboflavin</a> (FAD) and niacin (NAD⁺) status, and the spiral occurs in the mitochondrial matrix, with very-long-chain and branched fatty acids processed in peroxisomes.</p>
<h2>Clinical Significance</h2>
<p>Beta-oxidation flux is governed by hormonal and nutritional state. Low insulin with elevated glucagon and catecholamines (during fasting and exercise) activates lipolysis, raises circulating free fatty acids, lowers malonyl-CoA, and relieves the brake on CPT-I — driving robust FAO. The fed, high-insulin state does the opposite, favoring carbohydrate oxidation and fat storage. <a href="/garden/itest05db0ba3/protein/ampk/" class="internal-link">AMPK</a>, the cellular energy sensor, promotes FAO by inhibiting acetyl-CoA carboxylase and lowering malonyl-CoA, linking beta-oxidation to the broader <a href="/garden/itest05db0ba3/pathway/ampk-pathway/" class="internal-link">AMPK Pathway</a>.</p>
<p>Impaired beta-oxidation is the defining lesion of the fatty acid oxidation disorders — MCAD deficiency is the most common — which classically manifest as hypoketotic hypoglycemia and may present in neonates with cardiomyopathy or arrhythmia. Defects in the trifunctional protein (HADHA/HADHB) and in the carnitine shuttle produce overlapping syndromes, and acquired or inherited carnitine deficiency similarly throttles long-chain fatty acid import. On the supplement side, <a href="/garden/itest05db0ba3/supplement/l-carnitine/" class="internal-link">L-Carnitine</a> supports the carnitine shuttle, <a href="/garden/itest05db0ba3/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a> and <a href="/garden/itest05db0ba3/supplement/riboflavin/" class="internal-link">Riboflavin</a> support the downstream electron-transfer machinery, and <a href="/garden/itest05db0ba3/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> are themselves substrates that also modulate lipid handling. Markers of fat metabolism such as <a href="/garden/itest05db0ba3/labtest/triglycerides/" class="internal-link">Triglycerides</a>, <a href="/garden/itest05db0ba3/labtest/hdl-cholesterol/" class="internal-link">HDL Cholesterol</a>, <a href="/garden/itest05db0ba3/labtest/ldl-cholesterol/" class="internal-link">LDL Cholesterol</a>, and <a href="/garden/itest05db0ba3/biomarker/glucose-fasting/" class="internal-link">Glucose Fasting</a> reflect the broader metabolic milieu in which beta-oxidation operates.</p>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/itest05db0ba3/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a><br />
RELATED::<a href="/garden/itest05db0ba3/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a><br />
RELATED::<a href="/garden/itest05db0ba3/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a><br />
RELATED::<a href="/garden/itest05db0ba3/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
RELATED::<a href="/garden/itest05db0ba3/metabolite/acylcarnitine/" class="internal-link">Acylcarnitine</a><br />
RELATED::<a href="/garden/itest05db0ba3/pathway/ketogenesis/" class="internal-link">Ketogenesis</a><br />
RELATED::<a href="/garden/itest05db0ba3/supplement/riboflavin/" class="internal-link">Riboflavin</a></p>
<h3>Activates</h3>
<p>ACTIVATES::<a href="/garden/itest05db0ba3/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a><br />
ACTIVATES::<a href="/garden/itest05db0ba3/pathway/ketogenesis/" class="internal-link">Ketogenesis</a></p>
<h3>Regulated By</h3>
<p>REGULATED_BY::<a href="/garden/itest05db0ba3/protein/ampk/" class="internal-link">AMPK</a><br />
DOWNSTREAM_OF::<a href="/garden/itest05db0ba3/pathway/ampk-pathway/" class="internal-link">AMPK Pathway</a></p>
<h3>Occurs In</h3>
<p>OCCURS_IN::<a href="/garden/itest05db0ba3/organ/liver/" class="internal-link">Liver</a><br />
OCCURS_IN::<a href="/garden/itest05db0ba3/organ/heart/" class="internal-link">Heart</a></p>
<h3>Modulated By Supplement</h3>
<p>MODULATED_BY_SUPPLEMENT::<a href="/garden/itest05db0ba3/supplement/l-carnitine/" class="internal-link">L-Carnitine</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/itest05db0ba3/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/itest05db0ba3/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/garden/itest05db0ba3/supplement/mct-oil/" class="internal-link">MCT Oil</a></p>
<h3>Associated Biomarker</h3>
<p>ASSOCIATED_WITH::<a href="/garden/itest05db0ba3/labtest/triglycerides/" class="internal-link">Triglycerides</a><br />
ASSOCIATED_WITH::<a href="/garden/itest05db0ba3/labtest/hdl-cholesterol/" class="internal-link">HDL Cholesterol</a><br />
ASSOCIATED_WITH::<a href="/garden/itest05db0ba3/labtest/ldl-cholesterol/" class="internal-link">LDL Cholesterol</a><br />
ASSOCIATED_WITH::<a href="/garden/itest05db0ba3/biomarker/glucose-fasting/" class="internal-link">Glucose Fasting</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/itest05db0ba3/condition/diabetes/" class="internal-link">Diabetes</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest05db0ba3/condition/weight-gain/" class="internal-link">Weight Gain</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest05db0ba3/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/itest05db0ba3/condition/non-alcoholic-fatty-liver-disease/" class="internal-link">Non-alcoholic Fatty Liver Disease</a></p>
<h2>References</h2>
<ul>
<li>Mallick R et al. <em>Nutrients.</em> 2026;18(9):1429 — Fatty acids and their roles in cardiac physiology and pathology, including the heart's reliance on fatty acid oxidation for ATP (PMID: 42124031)</li>
<li>Chen C et al. <em>Frontiers in Nutrition.</em> 2026;13:1804917 — L-carnitine and the carnitine shuttle in metabolic dysfunction-associated steatotic liver disease: mechanisms and therapeutic potential (PMID: 41988468)</li>
<li>Zhu Y et al. <em>Molecular Biomedicine.</em> 2026;7(1):68 — Mitochondrial trifunctional enzyme HADHA and its role in fatty acid oxidation and lipid metabolism (PMID: 42118212)</li>
<li>Morana E et al. <em>European Journal of Medical Genetics.</em> 2026;80(4):105070 — Cardiac phenotype in neonatal MCAD deficiency, a disorder of medium-chain fatty acid oxidation (PMID: 41611076)</li>
<li>Varotsis D et al. <em>O&amp;G Open.</em> 2026;3(1):e148 — Systematic review of fetal fatty acid oxidation disorders and acute fatty liver of pregnancy (PMID: 41727930)</li>
</ul>

{% endraw %}