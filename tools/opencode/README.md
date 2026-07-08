# Repo-local OpenCode Integration

Tujuan:
- Hermes jadi orkestrator
- OpenCode jadi worker
- graphify jalan lokal dari repo, bukan global
- Next.js AI docs tersimpan di repo

## Local tools
- Graphify venv: `./.venv-graphify`
- Graphify wrapper: `./scripts/graphify-local.sh`
- DESIGN tokens: `./DESIGN.md`
- Planning docs: `./docs/`

## Intended loop
1. Hermes memilih task kecil.
2. Hermes memberi OpenCode konteks repo + dokumen planning.
3. OpenCode mengerjakan perubahan.
4. Hermes memverifikasi diff/build/test.
5. Hermes memberi feedback.
6. Ulangi sampai acceptance criteria lolos.

## Recursive improvement rule
Setiap task coding harus lewat loop:
- plan
- implement
- self-check
- Hermes review
- patch
- verify ulang

## Local graphify usage
Bangun graph lokal:
```bash
./scripts/graphify-local.sh extract . --no-cluster
```

Update graph lokal:
```bash
./scripts/graphify-local.sh update .
```

Query graph lokal:
```bash
./scripts/graphify-local.sh query "what connects homepage sections to CMS fields?" --graph graphify-out/graph.json
```
