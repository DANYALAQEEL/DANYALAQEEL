import sys
import json
import base64
import urllib.request
import urllib.error

REPO = "DANYALAQEEL/DANYALAQEEL"

CHESS_YML = """\
name: Chess

on:
  issues:
    types: [opened]

permissions:
  contents: write
  issues: write

jobs:
  run:
    runs-on: ubuntu-latest
    if: contains(github.event.issue.title, 'Chess')
    steps:
      - uses: actions/checkout@v4

      - name: Clone chess engine
        run: git clone https://github.com/marcizhu/readme-chess.git engine

      - name: Initialize data directory
        run: |
          mkdir -p data games
          if [ ! -f data/settings.yaml ]; then cp engine/data/settings.yaml data/; fi
          if [ ! -f data/top_moves.txt ]; then echo "{}" > data/top_moves.txt; fi
          if [ ! -f data/last_moves.txt ]; then touch data/last_moves.txt; fi

      - name: Copy script files
        run: cp -r engine/src engine/main.py engine/requirements.txt .

      - name: Install dependencies
        run: |
          pip install --upgrade pip
          pip install -r requirements.txt

      - name: Run chess bot
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GITHUB_REPOSITORY: ${{ github.repository }}
          REPOSITORY_OWNER: ${{ github.repository_owner }}
          ISSUE_NUMBER: ${{ github.event.issue.number }}
        run: python main.py

      - name: Commit changes
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add README.md data games
          git commit -m "Chess: update board moves" || true
          git push
"""

README_MD = """\
<div align="center">

# ⚡ DANYALAQEEL ⚡

### Elite Backend Architect · Systems Engineer · Terminal Dweller

[![Carbon Sentinel](https://img.shields.io/badge/Carbon%20Sentinel-Live-00ff88?style=for-the-badge&logo=vercel)](https://github.com/DANYALAQEEL/fluidhack)
[![Search Engine Elite](https://img.shields.io/badge/Search%20Engine%20Elite-Active-00aaff?style=for-the-badge&logo=elasticsearch)](https://github.com/DANYALAQEEL/Search-Engine-Elite)
[![Production Core Engine](https://img.shields.io/badge/Production%20Core%20Engine-Deployed-ff6600?style=for-the-badge&logo=docker)](https://github.com/DANYALAQEEL/Production-Core-Engine)

</div>

---

## 🔴 LIVE PROJECTS

| Project | Status | Stack |
|---|---|---|
| [Carbon Sentinel](https://github.com/DANYALAQEEL/fluidhack) | 🟢 Live | TypeScript · FastAPI · Vercel |
| [Search Engine Elite](https://github.com/DANYALAQEEL/Search-Engine-Elite) | 🟢 Active | Python · Elasticsearch · Redis |
| [Production Core Engine](https://github.com/DANYALAQEEL/Production-Core-Engine) | 🟢 Deployed | Rust · Docker · Kubernetes |

---

## ♟️ TERMINAL CHESS ENGINE

> `ENCRYPTED TRANSMISSION DETECTED...`
> `INITIATING CHESS SEQUENCE...`
> `MULTIPLAYER PROTOCOL ENGAGED...`

It's **<!-- BEGIN TURN -->white<!-- END TURN -->**'s turn! Click any move link below to play.

<!-- BEGIN CHESS BOARD -->
<!-- END CHESS BOARD -->

**📋 Available Moves**

<!-- BEGIN MOVES LIST -->
<!-- END MOVES LIST -->

**📜 Last 5 Moves**

<!-- BEGIN LAST MOVES -->
<!-- END LAST MOVES -->

**🏆 Top Players**

<!-- BEGIN TOP MOVES -->
<!-- END TOP MOVES -->

> [▶ Start a new game](https://github.com/DANYALAQEEL/DANYALAQEEL/issues/new?title=Chess%3A+Start+new+game&body=Just+click+Submit)
"""


def api_request(token, method, path, body=None):
    url = f"https://api.github.com{path}"
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "chess-fix-script"
    }
    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        print(f"HTTP Error {e.code}: {e.read().decode()}")
        raise


def update_file(token, path, content, message):
    try:
        current = api_request(token, "GET", f"/repos/{REPO}/contents/{path}")
        sha = current["sha"]
        print(f"  Found existing {path} (sha: {sha[:7]})")
    except Exception:
        sha = None
        print(f"  {path} not found, will create new")

    encoded = base64.b64encode(content.encode()).decode()
    body = {"message": message, "content": encoded}
    if sha:
        body["sha"] = sha

    result = api_request(token, "PUT", f"/repos/{REPO}/contents/{path}", body)
    print(f"  ✅ Committed: {path} -> {result['commit']['sha'][:7]}")
    return result


def create_issue(token, title):
    result = api_request(token, "POST", f"/repos/{REPO}/issues", {"title": title})
    print(f"  ✅ Issue #{result['number']} created: {result['title']}")
    return result


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python apply_chess_system_fix.py <GITHUB_TOKEN>")
        sys.exit(1)

    token = sys.argv[1]
    print(f"\n🔧 Updating {REPO}...\n")

    print("1. Updating chess.yml workflow...")
    update_file(token, ".github/workflows/chess.yml", CHESS_YML, "Fix chess workflow structure and data isolation")

    print("\n2. Ensuring README.md has chess markers...")
    update_file(token, "README.md", README_MD, "Refresh README with terminal chess framework")

    print("\n3. Generating base top_moves.txt if missing...")
    update_file(token, "data/top_moves.txt", "{}", "Initialize top_moves.txt dict")

    print("\n4. Creating 'Chess: Start new game' issue to trigger the workflow...")
    try:
        create_issue(token, "Chess: Start new game")
    except Exception as e:
        print("Issue creation might have failed, please try starting manually!")

    print("\n✅ Done! Check https://github.com/DANYALAQEEL/DANYALAQEEL/actions for workflow status.")
