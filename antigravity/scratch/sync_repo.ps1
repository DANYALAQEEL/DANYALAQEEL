$sourceDir = 'C:\Users\Administrator\.gemini\antigravity\scratch\test-repo\ghar naari'
$targetDir = 'C:\Users\Administrator\.gemini\antigravity\scratch\gharnaari-website-repo'

Get-ChildItem -Path $targetDir -Exclude '.git' | Remove-Item -Recurse -Force
Copy-Item -Path "$sourceDir\*" -Destination $targetDir -Recurse -Force
Get-ChildItem -Path $targetDir
