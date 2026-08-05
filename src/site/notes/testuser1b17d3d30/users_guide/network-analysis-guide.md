---
aliases:
- network-analysis
created: '2026-08-05T21:07:30.800087Z'
description: Explore BiomedKG interaction networks with propagation (experimental)
dg-home: false
dg-publish: true
gardenUsername: testuser1b17d3d30
permalink: /garden/testuser1b17d3d30/users_guide/network-analysis-guide/
provenance: curated
slug: network-analysis-guide
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Network Analysis — Guide
type: users_guide
updated: '2026-08-05T21:07:30.800087Z'
---

{% raw %}
<h1>Network Analysis — Guide</h1>
<h2>What this page is</h2>
<p>An experimental, flag-gated tool to explore the BiomedKG interaction network —<br />
genes, proteins, pathways, chemicals, and variants — as an interactive graph.</p>
<h2>Key actions</h2>
<ol>
<li><strong>Build a subgraph</strong> — start from an entity and expand its neighbourhood using<br />
relationship presets (genes &amp; pathways, protein interactions, chemicals &amp;<br />
drugs, variants).</li>
<li><strong>Colorize nodes</strong> by type, cancer-driver status, ClinVar, or overlay your own<br />
biomarkers.</li>
<li><strong>Run propagation</strong> (personalized PageRank / random walk) to find functionally<br />
related nodes — when the graph backend has GDS available.</li>
<li><strong>Run enrichment</strong> — over-representation analysis to surface enriched pathways.</li>
</ol>
<h2>Tips &amp; gotchas</h2>
<ul>
<li>This feature is experimental and only appears when enabled by the deployment.</li>
<li>Propagation and enrichment need the Neo4j GDS plugin; without it, the viewer and<br />
colorizers still work.</li>
</ul>
<h2>Related</h2>
<ul>
<li><a href="/garden/testuser1b17d3d30/users_guide/brain-explorer-guide/" class="internal-link">Brain Explorer — Guide</a></li>
<li><a href="/garden/testuser1b17d3d30/users_guide/knowledge-graph-guide/" class="internal-link">Knowledge Graph — Guide</a></li>
</ul>

{% endraw %}