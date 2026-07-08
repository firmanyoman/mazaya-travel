# Hermes → OpenCode Orchestration for Mazaya Travel

> Scope: repo-local workflow only  
> Rule: OpenCode worker, Hermes orchestrator/reviewer  
> Rule: no global installs for project-specific integration

---

## 1. Objective

Menyiapkan pola kerja agar development nanti berjalan seperti ini:
- Hermes memilih unit kerja
- Hermes memberi konteks minimum ke OpenCode
- OpenCode mengerjakan diff kecil
- Hermes memverifikasi hasil
- Hermes memberi feedback
- OpenCode melakukan patch lanjutan
- loop diulang sampai acceptance criteria lolos

---

## 2. Repo-local assets

- Root Next.js agent doc: `./AGENTS.md`
- Root Next.js docs cache: `./.next-docs/`
- OpenCode repo instructions: `./.opencode/AGENTS.md`
- OpenCode plugin config: `./.opencode/opencode.json`
- OpenCode graphify reminder plugin: `./.opencode/plugins/graphify.js`
- Graphify local venv: `./.venv-graphify`
- Graphify wrapper: `./scripts/graphify-local.sh`
- OpenCode notes: `./tools/opencode/README.md`

---

## 3. Mandatory source-of-truth docs before UI work

1. `./DESIGN.md`
2. `./docs/design/mazaya-design-system-foundation.md`
3. `./prd_outputs/Mazaya Travel Website Rebuild/mazaya_travel_website_rebuild_PRD.md`
4. `./docs/planning/mazaya-wireframe-spec.md`
5. `./docs/planning/mazaya-page-by-page-content-matrix.md`
6. `./docs/planning/mazaya-payload-implementation-spec.md`

---

## 4. Recursive improvement loop

Untuk setiap task implementasi:

1. **Frame**  
   Hermes mendefinisikan goal, constraints, files, acceptance criteria.

2. **Read minimum context**  
   OpenCode baca hanya file yang perlu.

3. **Implement small diff**  
   OpenCode kerjakan perubahan minimum.

4. **Self-check**  
   OpenCode jalankan lint/build/test relevan.

5. **Hermes verify**  
   Hermes cek diff, output command, dan kesesuaian terhadap design system / PRD.

6. **Patch**  
   Jika ada gap, Hermes kirim feedback terarah ke OpenCode.

7. **Re-verify**  
   Ulangi sampai lolos acceptance criteria.

---

## 5. Task framing template for Hermes

Gunakan format ini saat memberi tugas ke OpenCode:

```text
Objective:
<hasil yang diinginkan>

Why:
<alasan bisnis / UX / design>

Read first:
- <file 1>
- <file 2>
- <file 3>

Constraints:
- small diff only
- follow DESIGN.md
- do not install globally
- preserve CTA hierarchy
- report exact commands run

Acceptance criteria:
- <check 1>
- <check 2>
- <check 3>

Verify:
- run <command>
- run <command>
```

---

## 6. Graphify usage policy

Gunakan graphify lokal hanya dari wrapper ini:

```bash
./scripts/graphify-local.sh --help
```

Contoh:

```bash
./scripts/graphify-local.sh extract . --no-cluster
./scripts/graphify-local.sh update .
./scripts/graphify-local.sh query "where is homepage CTA defined?" --graph graphify-out/graph.json
```

Rule:
- jangan pakai install global
- jangan asumsi graph selalu ada
- query graph dulu untuk pertanyaan arsitektur sempit
- tetap baca file asli untuk verifikasi final

---

## 7. OpenCode run patterns

### One-shot bounded task
```bash
opencode run '<prompt>'
```

### Continue iterative session
```bash
opencode -c
```

### Suggested behavior
- satu sesi untuk satu fokus task
- jangan campur UI, CMS, dan infra dalam satu prompt besar
- lebih baik loop kecil daripada satu prompt raksasa

---

## 8. Acceptance gate before Hermes says done

Hermes tidak boleh menyatakan selesai sebelum ada bukti:
- file yang berubah jelas
- command verifikasi jelas
- output verifikasi jelas
- tidak melanggar design system
- tidak melanggar CTA hierarchy
- tidak menambah dependency tanpa alasan kuat

---

## 9. Current blocker notes

- Graphify upstream punya installer `opencode` yang defaultnya menulis ke config user-level.
- Untuk project ini, integrasi yang dipakai harus repo-local.
- Karena itu workflow aktif memakai:
  - local venv
  - local wrapper
  - repo `.opencode/` files
  - repo docs

---

## 10. Ready state

Repo dianggap siap untuk fase orkestrasi OpenCode jika:
- `AGENTS.md` root ada
- `.next-docs/` ada
- `.opencode/AGENTS.md` ada
- `.venv-graphify` ada
- `scripts/graphify-local.sh` jalan
- Hermes memberi prompt task kecil, bukan task kabur besar
