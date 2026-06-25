// Emits /garden/{username}/graph.json — a per-user subgraph of the global
// knowledge-graph serialization. Consumed by client JS in
// _includes/components/graphScript.njk, which fetches the path matching the
// current page's username on Alpine x-init.
//
// Why per-user (not one global /graph.json):
//   1. Payload — each per-user subgraph is ~1.5-3 MB vs the ~18 MB combined
//      graph (6 users × admin content + cross-links). Every page load
//      previously fetched the full 18 MB on Alpine x-init, including every
//      hover-preview iframe. Switching to per-user cuts page-load bandwidth
//      by ~6-10× and makes hover popouts genuinely snappy.
//   2. Privacy — the current global graph already contains only dg-publish=true
//      content, so no privacy leak today; per-user filtering keeps cross-user
//      URL references out of a visitor's loaded graph state anyway.
//
// The global /graph.json is still emitted by graph.njk and used by
// /graph/ (graph-explorer.njk) which intentionally shows all gardens.

class PerUserGraphJson {
  data() {
    return {
      // Paginate over gardenIndexes (one entry per published username),
      // emitting one file per user.
      pagination: {
        data: 'collections.gardenIndexes',
        size: 1,
        alias: 'garden',
      },
      permalink: (data) =>
        `/garden/${encodeURIComponent(data.garden.username)}/graph.json`,
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    const username = data.garden.username;
    const prefix = `/garden/${username}/`;

    // `graph` is the computed global graph from eleventyComputed.js
    // (helpers/linkUtils.getGraph). Shape: { nodes: {id: node, ...}, links: [...] }.
    const graph = data.graph || { nodes: {}, links: [] };
    const nodes = graph.nodes || {};
    const links = graph.links || [];

    // Filter nodes to this user's namespace. Note the graph shape:
    //   - `nodes` is keyed by URL: { '/garden/mk7w/...': { id: 42, url: '/garden/mk7w/...', ... } }
    //   - `links` use the numeric `node.id`: { source: 42, target: 101 }
    // So the per-user match set must contain numeric IDs (from node.id),
    // not the Object.entries keys (which are URLs).
    const userNodes = {};
    const userNodeIds = new Set();
    for (const [key, node] of Object.entries(nodes)) {
      if (node && typeof node.url === 'string' && node.url.startsWith(prefix)) {
        userNodes[key] = node;
        if (node.id !== undefined) userNodeIds.add(String(node.id));
      }
    }

    // Filter links to those entirely within the user's node set. Links may
    // reference source/target by numeric id or (rarely, after force-graph
    // hydration) by the node object itself; handle both defensively.
    const userLinks = [];
    for (const l of links) {
      const sid = typeof l.source === 'object' && l.source ? l.source.id : l.source;
      const tid = typeof l.target === 'object' && l.target ? l.target.id : l.target;
      if (userNodeIds.has(String(sid)) && userNodeIds.has(String(tid))) {
        userLinks.push(l);
      }
    }

    return JSON.stringify({ nodes: userNodes, links: userLinks });
  }
}

module.exports = PerUserGraphJson;
