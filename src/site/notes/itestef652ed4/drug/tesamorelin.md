---
confidence_score: 0.8
country_regulatory:
  it:
    agency_status: not_marketed
    notes: Non commercializzato nell'UE/Italia; l'approvazione principale è FDA (USA).
    prescription_type: unregistered
  pl:
    agency_status: not_marketed
    notes: Tesamorelina (Egrifta) jest zatwierdzona przez FDA (USA), ale nie jest
      zarejestrowana ani wprowadzona do obrotu w UE/Polsce, więc praktycznie niedostępna
      i nierefundowana przez NFZ. To dobry przykład peptydu popartego badaniami (RCT)
      w konkretnym wskazaniu, a mimo to niedostępnego w Polsce.
    prescription_type: unregistered
  uk:
    agency_status: not_marketed
    notes: Not marketed in the UK; no routine NHS availability.
    prescription_type: POM
created: 2026-07-22T00:00:00+0000
description: Synthetic growth-hormone-releasing hormone (GHRH) analogue and the one
  clearly evidence-backed GH-secretagogue peptide. FDA-approved (Egrifta) to reduce
  excess visceral abdominal fat in HIV-associated lipodystrophy. Not marketed in the
  EU/Poland, so effectively unavailable there.
dg-home: false
dg-publish: true
drugbank_id: DB08869
evidence_level: 4
gardenUsername: itestef652ed4
id: tesamorelin
permalink: /garden/itestef652ed4/drug/tesamorelin/
provenance: curated
pubchem_id: '16137828'
slug: tesamorelin
source: Manual
tags:
- drug
- peptide
- growth_hormone_secretagogue
- ghrh_analogue
- fda_approved
- hiv_lipodystrophy
templateEngineOverride: njk
title: Tesamorelin
type: drug
updated: '2026-08-19T04:16:55.836486Z'
---

{% raw %}
<h1>Tesamorelin</h1>
<h2>Overview</h2>
<p>Tesamorelin is a stabilised synthetic analogue of <strong>growth-hormone-releasing hormone (GHRH)</strong> and the one clearly <strong>evidence-backed</strong> peptide in the GH-secretagogue family. It is <strong>FDA-approved</strong> (as <strong>Egrifta</strong>) to reduce excess visceral abdominal fat in people with <strong>HIV-associated lipodystrophy</strong>. It is a useful contrast to the research peptides: it went through proper randomised trials for a defined indication — yet it is <strong>not marketed in the EU or Poland</strong>, so a Polish patient generally cannot access it.</p>
<h2>Mechanism of Action</h2>
<p>Tesamorelin binds pituitary GHRH receptors and stimulates the body's own <a href="/garden/itestef652ed4/hormone/growth-hormone/" class="internal-link">Growth Hormone</a> secretion, raising <a href="/garden/itestef652ed4/hormone/igf-1/" class="internal-link">IGF-1</a>. In HIV-associated lipodystrophy this preferentially reduces <strong>visceral (intra-abdominal) adipose tissue</strong>, the fat depot most linked to cardiometabolic risk, while largely sparing subcutaneous fat.</p>
<h2>Clinical Evidence</h2>
<p>Tesamorelin's approval rests on randomised, placebo-controlled trials in HIV lipodystrophy showing significant reductions in visceral adipose tissue over 26–52 weeks, with maintenance requiring continued treatment. This RCT support is why its <code>evidence_level</code> is <strong>4</strong> — genuinely recommendable <em>for its indication</em>, in contrast to the level-1 research peptides. Beyond HIV lipodystrophy (e.g. NAFLD), it remains investigational.</p>
<h2>Safety</h2>
<p>The most common effects are injection-site reactions; GH-related effects include arthralgia and peripheral oedema, and — importantly — tesamorelin can <strong>raise blood glucose and worsen glucose tolerance</strong>, so glycaemic monitoring is advised. It is contraindicated where the hypothalamic-pituitary axis is disrupted, in active malignancy, and in pregnancy.</p>
<h2>Relationships</h2>
<h3>Treats</h3>
<p>TREATS::<a href="/garden/itestef652ed4/condition/hiv-infections/" class="internal-link">HIV Infections</a> (HIV-associated lipodystrophy — reduces visceral fat; FDA-approved indication, Evidence Level 1b)</p>
<h3>Modulates Hormone</h3>
<p>MODULATES_HORMONE::<a href="/garden/itestef652ed4/hormone/growth-hormone/" class="internal-link">Growth Hormone</a> (stimulates pituitary GH release)</p>
<h3>Increases Biomarker</h3>
<p>INCREASES_BIOMARKER::<a href="/garden/itestef652ed4/hormone/igf-1/" class="internal-link">IGF-1</a> (raises hepatic IGF-1 via GH)</p>
<h3>Affects Biomarker</h3>
<p>AFFECTS_BIOMARKER::<a href="/garden/itestef652ed4/metabolite/glucose/" class="internal-link">Glucose</a> (can raise blood glucose / worsen glucose tolerance)</p>
<h3>Affects Organ</h3>
<p>AFFECTS_ORGAN::<a href="/garden/itestef652ed4/organ/liver/" class="internal-link">Liver</a> (reduces visceral/hepatic fat; studied in NAFLD)<br />
AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Hypothalamus</a> (GHRH-receptor axis)</p>
<h3>Side Effect</h3>
<p>SIDE_EFFECT::<a href="/garden/itestef652ed4/sideeffect/injection-site-reaction/" class="internal-link">Injection Site Reaction</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/itestef652ed4/drug/sermorelin/" class="internal-link">Sermorelin</a> (related GHRH analogue)<br />
RELATED::<a href="/garden/itestef652ed4/drug/cjc-1295/" class="internal-link">CJC-1295</a> (unapproved long-acting GHRH analogue)</p>
<h2>References</h2>
<ul>
<li>PMID: 41598480 (Arora et al. — pharmacologic preservation of lean body mass; tesamorelin GHRH agonist, 2026)</li>
<li>PMID: 42123471 (Renke &amp; Chinellato — therapeutic peptides: effects, safety, regulatory status, 2026)</li>
<li>PMID: 41490200 (Rahman et al. — therapeutic peptides in orthopaedics, 2026)</li>
</ul>

{% endraw %}