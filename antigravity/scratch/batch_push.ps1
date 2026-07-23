$ErrorActionPreference = "Stop"
$projectPath = "c:\Users\Administrator\Downloads\new modification 3.0\search-engine-prototype"

Write-Host "Starting Batched Push (Reliable)..."

Set-Location -Path $projectPath

# 1. Reset to unstage everything
Write-Host "Resetting staged files..."
git reset

# 2. Explicitly untrack node_modules
Write-Host "Ensuring node_modules are not tracked..."
try { git rm -r --cached node_modules 2>$null } catch {}
try { git rm -r --cached frontend/node_modules 2>$null } catch {}
try { git rm -r --cached node_modules_backup 2>$null } catch {}
try { git rm -r --cached frontend/node_modules_backup 2>$null } catch {}

# 3. Push Codebase first
Write-Host "Adding codebase files..."
git add .

# Unstage data folder content using git rm --cached -r (more reliable)
Write-Host "Unstaging data folder..."
try {
    git rm -r --cached backend_production/data
} catch {
    Write-Warning "Failed to unstage data folder or it was empty."
}

# Re-add essential data files
Write-Host "Re-adding essential data files..."
git add backend_production/data/*.py
git add backend_production/data/.gitignore

Write-Host "Committing and pushing codebase..."
git commit -m "Core codebase" --allow-empty
git push -f origin main

# 4. Push Data Chunks in Batches
$chunks = Get-ChildItem "backend_production/data" -Recurse | Where-Object { 
    ($_.Name -match "\.\d+$" -or $_.Name -like "*.bin") -and $_.Name -ne "inverted_barrel_0.bin"
}

$batchSize = 5
$total = $chunks.Count
$count = 0
$batchCount = 0

if ($total -eq 0) {
    Write-Host "No data chunks found to push."
} else {
    Write-Host "Found $total chunks to push."
    foreach ($chunk in $chunks) {
        Write-Host "Adding $($chunk.Name)..."
        git add $chunk.FullName
        $count++
        $batchCount++
        
        if ($batchCount -ge $batchSize) {
            Write-Host "Committing batch ($count / $total)..."
            git commit -m "Data batch $count"
            Write-Host "Pushing batch..."
            git push origin main
            $batchCount = 0
        }
    }

    # Push remaining
    if ($batchCount -gt 0) {
        Write-Host "Committing final batch..."
        git commit -m "Final data batch"
        git push origin main
    }
}

Write-Host "Done!"
