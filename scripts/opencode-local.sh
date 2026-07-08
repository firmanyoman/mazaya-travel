#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
# shellcheck disable=SC1091
source "$ROOT/scripts/load-project-env.sh"
exec /opt/data/home/.opencode/bin/opencode "$@"
