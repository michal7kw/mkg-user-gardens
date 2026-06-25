---
created: 2026-03-17
updated: 2026-03-17
---
# CLAUDE.md - user_garden

## Overview

Eleventy template for **user digital gardens** (Tier 3). This is the template source for the `mkg-user-gardens` GitHub deploy repo, which Vercel builds and serves as the public-facing user gardens site.

**Key difference from admin gardens:** This template serves multiple users. Each user's content lives at `src/site/notes/{username}/{entity_type}/{slug}.md`, and the Eleventy build generates per-user garden pages at `/garden/{username}/`.

## Relationship to Other Gardens

| Garden | Template Dir | Deploy Repo | Content Source |
|--------|-------------|-------------|----------------|
| Medical (admin) | `curated_garden/` | `curated-garden` | `curated_kg/entities/` (disk) |
| Curiosity (admin) | `curiosity_garden/` | `curiosity-garden` | `curiosity_kg/entities/` (disk) |
| **User gardens** | **`user_garden/`** | **`mkg-user-gardens`** | **Neo4j** (`dg-publish=true`) |

## Multi-User Architecture

The `.eleventy.js` config has built-in multi-user support:

- **`derivePermalink()`** — extracts username from file path (`notes/{username}/{type}/{slug}.md` → `/garden/{username}/{type}/{slug}/`)
- **`gardenIndexes` collection** — groups notes by username, computes per-user stats
- **`gardenNotes` collection** — adds `gardenUsername` and `entityType` to each note
- **`gardens.njk`** — directory page listing all user gardens at `/gardens/`
- **`garden-index.njk`** — per-user home page at `/garden/{username}/`

Content is pushed to this template's deploy repo via the backend API (`POST /garden/publish`, `POST /garden/bulk-publish`). Template files are synced via `deploy-garden.sh user` or `POST /garden/admin/sync-template?target=user`.

## Development Commands

```bash
cd user_garden

# Install dependencies
bun install

# Dev server with hot reload (http://localhost:8082)
bun run start

# Production build (output: dist/)
bun run build

# Clean and rebuild
bun run prebuild && bun run build
```

## Template Sync

Template changes in this directory must be pushed to the deploy repo:

```bash
# CLI (rsync-based, preserves user content in src/site/notes/)
./HELPERS/scripts/deploy-garden.sh user
./HELPERS/scripts/deploy-garden.sh user --dry-run   # Preview only

# API (pushes via GitHub Git Data API, overlay mode)
curl -X POST "http://localhost:8000/garden/admin/sync-template?target=user" \
  -H "Authorization: Bearer $TOKEN"
```

## Directory Structure

```
user_garden/
├── .eleventy.js                    # Eleventy config (multi-user collections, permalinks)
├── src/
│   ├── site/
│   │   ├── _data/                  # Site metadata, computed data
│   │   ├── _includes/
│   │   │   ├── components/         # Reusable UI components (navbar, sidebar, search, etc.)
│   │   │   └── layouts/            # Page layouts (note.njk, index.njk, diagram.njk)
│   │   ├── notes/
│   │   │   ├── notes.11tydata.js   # Data cascade (permalink generation, username extraction)
│   │   │   └── {username}/{type}/{slug}.md  # User-published entities (managed by API)
│   │   ├── gardens.njk             # Garden directory page (/gardens/)
│   │   ├── garden-index.njk        # Per-user garden home (/garden/{username}/)
│   │   ├── graph-explorer.njk      # Knowledge graph visualization
│   │   └── styles/                 # SCSS stylesheets
│   └── helpers/                    # JS utility functions
├── package.json
├── vercel.json                     # Vercel deployment config
└── CLAUDE.md                       # This file
```

## Environment Variables

Set in `MKG/.env` for backend publishing:

```bash
GITHUB_GARDEN_PAT=ghp_...           # GitHub PAT with repo scope on mkg-user-gardens
GITHUB_GARDEN_OWNER=michal7kw
GITHUB_GARDEN_REPO=mkg-user-gardens
GITHUB_GARDEN_BRANCH=main
GARDEN_PUBLIC_URL=https://gardens.mkg.app
```
