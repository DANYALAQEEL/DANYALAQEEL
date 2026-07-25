Add-Type -Assembly System.IO.Compression.FileSystem
$z = [System.IO.Compression.ZipFile]::OpenRead('C:\Users\Administrator\Downloads\ghar naari.zip')
$z.Entries | ForEach-Object { $_.FullName } | Select-Object -First 50
$z.Dispose()
