---
confidence_score: 0.65
country_regulatory:
  it:
    agency_status: withdrawn
    notes: Prodotto originario (Geref) non più commercializzato; disponibile solo
      come preparato galenico/non registrato.
    prescription_type: unregistered
  pl:
    agency_status: withdrawn
    notes: Sermorelina nie jest obecnie zarejestrowana w Polsce jako gotowy produkt
      leczniczy (dawny Geref wycofany). Dostępna głównie jako lek recepturowy (compounding)
      lub w szarej strefie klinik "anti-aging"; brak refundacji NFZ. Historycznie
      stosowana w diagnostyce niedoboru hormonu wzrostu.
    prescription_type: compounded
  uk:
    agency_status: withdrawn
    notes: The original licensed product (Geref) is no longer marketed; any current
      supply is unlicensed/compounded.
    prescription_type: unlicensed
created: 2026-07-22T00:00:00+0000
description: Synthetic analogue of the first 29 amino acids of growth-hormone-releasing
  hormone (GHRH 1-29). Formerly an approved drug (Geref) used to assess and treat
  growth-hormone deficiency; now largely withdrawn and supplied mainly through compounding
  pharmacies and gray-market "anti-aging" clinics.
dg-home: false
dg-publish: true
drugbank_id: DB00010
evidence_level: 2
gardenUsername: testuser187d7f497
id: sermorelin
permalink: /garden/testuser187d7f497/drug/sermorelin/
provenance: curated
pubchem_id: '16132413'
slug: sermorelin
source: Manual
tags:
- drug
- peptide
- growth_hormone_secretagogue
- ghrh_analogue
- compounded
templateEngineOverride: njk
title: Sermorelin
type: drug
updated: '2026-08-05T02:09:42.017662Z'
---

{% raw %}
<h1>Sermorelin</h1>
<h2>Overview</h2>
<p>Sermorelin is a synthetic analogue of the biologically active first 29 amino acids of <strong>growth-hormone-releasing hormone (GHRH 1-29)</strong>. Unlike the pure &quot;research peptides&quot;, sermorelin has a genuine regulatory history: it was once an approved drug (<strong>Geref</strong>) used to assess and treat growth-hormone deficiency, including in children. That licensed product has largely been withdrawn, and today sermorelin is supplied mostly through <strong>compounding pharmacies</strong> and &quot;anti-aging&quot; clinics rather than as a registered medicine.</p>
<h2>Mechanism of Action</h2>
<p>Sermorelin binds pituitary GHRH receptors and stimulates the synthesis and <strong>pulsatile release of growth hormone</strong>. Because it works one step upstream of growth hormone and preserves normal negative feedback, it tends to produce a more physiological GH profile than injecting recombinant growth hormone directly. Elevated growth hormone raises hepatic <a href="/garden/testuser187d7f497/hormone/igf-1/" class="internal-link">IGF-1</a>.</p>
<h2>Clinical Evidence</h2>
<p>Sermorelin has more human data than the unapproved research peptides — it was studied and licensed for growth-hormone-deficiency indications — which is why its <code>evidence_level</code> here is <strong>2</strong> rather than 1. However, its modern &quot;anti-aging&quot; and body-composition uses are largely off-label and not supported by outcome trials.</p>
<h2>Safety</h2>
<p>Generally well tolerated in its historical use; the most common effects are injection-site reactions, flushing and headache, with growth-hormone-excess effects (fluid retention, joint discomfort) at higher exposure. Compounded and gray-market supply reintroduces purity and sterility concerns.</p>
<h2>Relationships</h2>
<h3>Modulates Hormone</h3>
<p>MODULATES_HORMONE::<a href="/garden/testuser187d7f497/hormone/growth-hormone/" class="internal-link">Growth Hormone</a> (stimulates pituitary GH release)</p>
<h3>Increases Biomarker</h3>
<p>INCREASES_BIOMARKER::<a href="/garden/testuser187d7f497/hormone/igf-1/" class="internal-link">IGF-1</a> (raises hepatic IGF-1 via GH)</p>
<h3>Affects Organ</h3>
<p>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Hypothalamus</a> (GHRH-receptor axis)</p>
<h3>Side Effect</h3>
<p>SIDE_EFFECT::<a href="/garden/testuser187d7f497/sideeffect/injection-site-reaction/" class="internal-link">Injection Site Reaction</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/testuser187d7f497/drug/cjc-1295/" class="internal-link">CJC-1295</a> (long-acting GHRH analogue)<br />
RELATED::<a href="/garden/testuser187d7f497/drug/tesamorelin/" class="internal-link">Tesamorelin</a> (approved GHRH analogue for HIV lipodystrophy)</p>
<h2>References</h2>
<ul>
<li>PMID: 42123471 (Renke &amp; Chinellato — therapeutic peptides: effects, safety, regulatory status, 2026)</li>
<li>PMID: 41490200 (Rahman et al. — therapeutic peptides in orthopaedics, 2026)</li>
</ul>

{% endraw %}