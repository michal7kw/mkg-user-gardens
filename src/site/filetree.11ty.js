// Emits /garden/{username}/filetree.json — a per-user serialization of that
// user's navigation subtree. Consumed by client JS in
// _includes/components/filetree.njk, which fetches the path matching the
// current page's username after DOMContentLoaded idle and builds the sidebar
// DOM lazily.
//
// Why per-user (not one global /filetree.json):
//   1. Privacy/UX — visitors to /garden/mk7w/… should not incidentally see
//      the folder structures of /garden/mk2s/, /garden/k7w/, etc. in their
//      sidebar. The /gardens/ directory page is the intended discovery
//      surface; nav sidebars should be scoped to the page context.
//   2. Payload — each per-user tree is ~100–150 KB vs the ~346 KB combined
//      tree, so every page fetch is ~2× smaller.
//   3. Memory — same shape as the previous once-per-build emit (getFileTree
//      is memoized), with the pagination walker iterating the already-cached
//      structure per user.
//
// Replaces the inline-per-page recursive rendering of ~2,400 <div> elements
// that was pushing Vercel's 8 GB build container into OOM. With this emit
// + the AJAX loader in components/filetree.njk, peak RSS sits at ~3 GB.

const { getFileTree } = require('../helpers/filetreeUtils');

class FiletreeJson {
  data() {
    return {
      // Paginate over the gardenIndexes collection (one entry per username,
      // built by the addCollection('gardenIndexes', …) block in .eleventy.js).
      // Each iteration emits a JSON file at /garden/{username}/filetree.json.
      pagination: {
        data: 'collections.gardenIndexes',
        size: 1,
        alias: 'garden',
      },
      // In .11ty.js templates `{{ … }}` string interpolation is NOT auto-
      // evaluated (unlike .njk). Must supply permalink as a function that
      // receives the pagination-iterated data and returns the real path.
      permalink: (data) => `/garden/${encodeURIComponent(data.garden.username)}/filetree.json`,
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    // getFileTree() is memoized by reference identity of
    // data.collections.note (see helpers/filetreeUtils.js). First call per
    // build does the full compute; subsequent per-user paginations hit the
    // cache and just index into the top-level username key below.
    const fullTree = getFileTree(data);
    const username = data.garden.username;
    const userSubtree = fullTree[username] || {};
    return JSON.stringify(userSubtree);
  }
}

module.exports = FiletreeJson;
