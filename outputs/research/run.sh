#!/bin/zsh
AGY=~/.local/bin/agy
run() {
  local name="$1"; shift
  $AGY --print "$1" --print-timeout 8m --dangerously-skip-permissions > "$name.md" 2>&1
}
run "$1" "$2"
