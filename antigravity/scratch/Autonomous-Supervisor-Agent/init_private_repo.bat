@echo off
echo ==================================================
echo [!] INITIALIZING PRIVATE WAKATIME WORKSPACE
echo ==================================================

:: 1. Initialize local git
if not exist .git (
    echo Initializing local git repository...
    git init
) else (
    echo Git repository already initialized.
)

:: 2. Create private repo on GitHub using gh CLI
echo Creating private repository 'antigravity-wakatime-workspace' on GitHub...
"C:\Program Files\GitHub CLI\gh.exe" repo create antigravity-wakatime-workspace --private --source=. --remote=origin

:: 3. Initial commit and push
echo Staging files and committing...
git add .
git commit -m "Initial commit: Setup autonomous supervisor workspace"

echo Pushing to main branch...
git branch -M main
git push -u origin main

echo ==================================================
echo [OK] WORKSPACE SYNCHRONIZED SUCCESSFULLY
echo ==================================================
pause
