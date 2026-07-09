#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
for ENV_FILE in "$ROOT/.env" /opt/data/.env /opt/data/home/.env /opt/data/home/.hermes/.env; do
  if [ -f "$ENV_FILE" ]; then
    while IFS= read -r LINE || [ -n "$LINE" ]; do
      case "$LINE" in
        '' | '#'*)
          continue
          ;;
        export\ *)
          LINE=${LINE#export }
          ;;
      esac

      KEY=${LINE%%=*}
      VALUE=${LINE#*=}

      KEY=${KEY%${KEY##*[![:space:]]}}
      if ! [[ "$KEY" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]]; then
        continue
      fi

      export "$KEY=$VALUE"
    done < "$ENV_FILE"
    export HERMES_PROJECT_ENV_FILE="$ENV_FILE"
    break
  fi
done
