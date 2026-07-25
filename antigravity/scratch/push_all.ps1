Set-Location 'C:\Users\Administrator\.gemini\antigravity\scratch\gharnaari-website-repo'
git add .
git commit -m "docs: update Hugging Face Space metadata for Ghar Naari API"
git push origin main

$hfToken = "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"
$hfRemoteUrl = "https://gharnaari:$hfToken@huggingface.co/spaces/gharnaari/gharnaari-api"

git remote remove hf 2>$null
git remote add hf $hfRemoteUrl
git push hf main --force
