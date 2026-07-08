#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
for ENV_FILE in "$ROOT/.env" /opt/data/.env /opt/data/home/.env /opt/data/home/.hermes/.env; do
  if [ -f "$ENV_FILE" ]; then
    set -a
    # shellcheck disable=SC1090
    . "$ENV_FILE"
    set +a
    export HERMES_PROJECT_ENV_FILE="$ENV_FILE"
    break
  fi
done
