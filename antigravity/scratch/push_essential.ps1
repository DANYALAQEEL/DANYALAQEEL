$ErrorActionPreference = "Stop"
$projectPath = "c:\Users\Administrator\Downloads\new modification 3.0\search-engine-prototype"
$remoteUrl = "https://github.com/DANYALAQEEL/engine.git"

Write-Host "Starting Repository Reset and Push (Retry)..."

# 1. Navigate to project directory
Set-Location -Path $projectPath
Write-Host "Changed directory to: $projectPath"

# 2. Initialize Git (Clean slate)
if (Test-Path ".git") {
    Write-Host "Removing existing .git directory..."
    Remove-Item -Path ".git" -Recurse -Force
}
Write-Host "Initializing new Git repository..."
git init
git remote add origin $remoteUrl
git branch -M main

# 3. Split Large Files
$splitterScript = "backend_production\file_manager.py"
if (Test-Path $splitterScript) {
    Write-Host "Splitting large files using $splitterScript..."
    python $splitterScript --split
} else {
    Write-Error "Could not find $splitterScript"
}

# 4. Configure .gitignore
$gitignoreContent = @"
__pycache__/
*.py[cod]
*.class
.env
venv/
.vscode/
.idea/
node_modules/
node_modules_backup/
frontend/node_modules/
*backup*
backend_production/data/inverted_barrel_0.bin
"@
Set-Content -Path ".gitignore" -Value $gitignoreContent
Write-Host "Created temporary .gitignore"

# 5. Add and Commit
Write-Host "Adding files to git..."
git add .
git commit -m "Reset: Fresh start with essential code and split data chunks"

# 6. Push
Write-Host "Pushing to remote (Force)..."
git push -f origin main

Write-Host "Done! Repository has been reset and pushed."
