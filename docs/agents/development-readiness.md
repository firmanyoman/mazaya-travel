# Development Readiness — Mazaya Travel

Status: ready to start real development with Hermes as orchestrator and OpenCode as executor.

## Completed
- Git repo initialized and pushed to GitHub
- Vercel project deployed via Composio
- Root `AGENTS.md` generated from Next.js docs workflow
- `.next-docs/` present in repo
- Design system and planning docs saved in repo
- Repo-local OpenCode instructions present at `.opencode/AGENTS.md`
- Repo-local OpenCode plugin config present at `.opencode/opencode.json`
- Repo-local wrappers created:
  - `scripts/load-project-env.sh`
  - `scripts/opencode-local.sh`
  - `scripts/graphify-local.sh`
  - `scripts/dev-preflight.sh`
- OpenCode smoke test passed

## Live URLs
- GitHub: `https://github.com/firmanyoman/mazaya-travel`
- Vercel deploy URL: `https://mazaya-travel-poteo4fax-firmanyomans-projects.vercel.app`
- Vercel inspect URL: `https://vercel.com/firmanyomans-projects/mazaya-travel/5ZYEUnJoSGWQfL8ABnHqjU8RW4Ht`

## Verified commands
```bash
./scripts/dev-preflight.sh
./scripts/opencode-local.sh run 'Respond with exactly: OPENCODE_SMOKE_OK'
```

## Current caveat
Full graphify semantic extraction still depends on an LLM key being visible to the repo-local wrapper process. This is not a blocker for starting development because Hermes can still orchestrate OpenCode directly and graphify can be revisited later if needed.

## Recommended phase-1 build order
1. scaffold actual Next.js app in current repo
2. wire Tailwind and design tokens from `DESIGN.md`
3. build homepage shell from blueprint + wireframe spec
4. push and verify on Vercel
5. continue iterative OpenCode loops per feature slice
