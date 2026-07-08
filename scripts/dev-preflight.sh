#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

printf 'repo=%s\n' "$ROOT"
printf 'branch=%s\n' "$(git branch --show-current 2>/dev/null || true)"
printf 'head=%s\n' "$(git rev-parse --short HEAD 2>/dev/null || true)"

# shellcheck disable=SC1091
source "$ROOT/scripts/load-project-env.sh"
printf 'env_file=%s\n' "${HERMES_PROJECT_ENV_FILE:-none}"

printf 'opencode=%s\n' "$(/opt/data/home/.opencode/bin/opencode --version 2>/dev/null || echo missing)"
printf 'graphify_wrapper=%s\n' "$([ -x "$ROOT/scripts/graphify-local.sh" ] && echo ok || echo missing)"
printf 'opencode_wrapper=%s\n' "$([ -x "$ROOT/scripts/opencode-local.sh" ] && echo ok || echo missing)"

printf 'github_remote=%s\n' "$(git remote get-url origin 2>/dev/null || echo missing)"
printf 'has_agents_md=%s\n' "$([ -f "$ROOT/AGENTS.md" ] && echo yes || echo no)"
printf 'has_design_md=%s\n' "$([ -f "$ROOT/DESIGN.md" ] && echo yes || echo no)"
printf 'has_opencode_agents=%s\n' "$([ -f "$ROOT/.opencode/AGENTS.md" ] && echo yes || echo no)"
printf 'has_next_docs=%s\n' "$([ -d "$ROOT/.next-docs" ] && echo yes || echo no)"

printf 'github_token=%s\n' "${GITHUB_TOKEN:+set}"
printf 'composio_key=%s\n' "${COMPOSIO_API_KEY:+set}"
printf 'gemini_key=%s\n' "${GEMINI_API_KEY:+set}"
printf 'google_key=%s\n' "${GOOGLE_API_KEY:+set}"
printf 'anthropic_key=%s\n' "${ANTHROPIC_API_KEY:+set}"
printf 'openrouter_key=%s\n' "${OPENROUTER_API_KEY:+set}"
