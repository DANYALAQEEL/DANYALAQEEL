$backendDir = "C:\Users\Administrator\.gemini\antigravity\scratch\gharnaari-website-repo\backend"
$hfRepoDir = "C:\Users\Administrator\.gemini\antigravity\scratch\hf-repo"

if (Test-Path $hfRepoDir) {
    Remove-Item -Path $hfRepoDir -Recurse -Force
}

git clone https://gharnaari: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@huggingface.co/spaces/gharnaari/gharnaari-api $hfRepoDir

# Remove old files except .git
Get-ChildItem -Path $hfRepoDir -Exclude '.git' | Remove-Item -Recurse -Force

# Copy backend files to HF repo root
Copy-Item -Path "$backendDir\*" -Destination $hfRepoDir -Recurse -Force

# Create README.md metadata for Docker space if not existing
$readmeContent = @"
---
title: Ghar Naari API
emoji: 🌺
colorFrom: pink
colorTo: red
sdk: docker
app_port: 7860
pinned: false
---

# Ghar Naari Backend Express REST API Server
"@

Set-Content -Path "$hfRepoDir\README.md" -Value $readmeContent -Force

Set-Location $hfRepoDir
git config user.name "gharnaari"
git config user.email "ghaar.naarii@gmail.com"
git add .
git commit -m "deploy: updated Express REST API backend container"
git push origin main --force
