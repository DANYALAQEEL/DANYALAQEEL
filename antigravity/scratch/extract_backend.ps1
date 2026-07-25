Add-Type -Assembly System.IO.Compression.FileSystem

$zipPath = 'C:\Users\Administrator\Downloads\ghar naari.zip'
$targetDir = 'C:\Users\Administrator\.gemini\antigravity\scratch\gharnaari-website-repo'

if (Test-Path $targetDir) {
    Remove-Item -Recurse -Force $targetDir
}
New-Item -ItemType Directory -Path $targetDir | Out-Null

$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)

foreach ($entry in $zip.Entries) {
    $name = $entry.FullName
    if ($name.StartsWith("ghar naari/backend/")) {
        $relativePath = $name.Substring("ghar naari/backend/".Length)
        if ([string]::IsNullOrWhiteSpace($relativePath)) { continue }
        if ($relativePath.StartsWith("node_modules/")) { continue }

        $destinationPath = Join-Path $targetDir $relativePath

        if ($name.EndsWith("/")) {
            if (-not (Test-Path $destinationPath)) {
                New-Item -ItemType Directory -Path $destinationPath | Out-Null
            }
        } else {
            $dir = Split-Path $destinationPath -Parent
            if (-not (Test-Path $dir)) {
                New-Item -ItemType Directory -Path $dir | Out-Null
            }
            [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $destinationPath, $true)
        }
    }
}

$zip.Dispose()
Write-Host "Extraction of backend completed to $targetDir"
