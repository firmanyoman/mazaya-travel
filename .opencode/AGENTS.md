# OpenCode Repo Instructions — Mazaya Travel Rebuild

OpenCode bekerja hanya di repository ini.

## Source of truth docs
- `./DESIGN.md`
- `./docs/design/mazaya-design-system-foundation.md`
- `./prd_outputs/Mazaya Travel Website Rebuild/mazaya_travel_website_rebuild_PRD.md`
- `./docs/planning/mazaya-epic-story-task-breakdown.md`
- `./docs/planning/mazaya-cms-content-model-spec.md`
- `./docs/planning/mazaya-page-by-page-content-matrix.md`
- `./docs/planning/mazaya-wireframe-spec.md`
- `./docs/planning/mazaya-payload-implementation-spec.md`

## Working rules
- Do not install tools globally.
- Prefer repo-local tools and scripts.
- Treat Hermes as orchestrator/reviewer.
- Keep diffs small.
- Validate against design system before claiming UI done.
- Primary CTA stays `Daftar Sekarang`.
- Secondary CTA stays `WhatsApp Konsultasi`.
- Deep teal is primary action color. Brand teal/yellow are accents only.

## Graphify local
Use local wrapper only:
```bash
./scripts/graphify-local.sh --help
```

If graph exists, query it before broad file reading for architecture questions.

## Recursive improvement loop
For each task:
1. Restate objective.
2. Read only needed files.
3. Change minimum files.
4. Run local verification.
5. Report exact files changed, exact commands run, exact remaining risks.
