$files = Get-ChildItem -Path "src\components\wizards" -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName
    $newContent = @()
    $inHeader = $false
    $modified = $false
    $divDepth = 0

    foreach ($line in $content) {
        if (-not $inHeader) {
            if ($line -match '<div className="border-b border-white/10 pb-4 mb-6">') {
                $inHeader = $true
                $divDepth = 1
                $modified = $true
                continue
            }
            $newContent += $line
        } else {
            # Count opening and closing divs to find the end of this block
            # This is a simple counter.
            $openDivs = ([regex]::Matches($line, '<div').Count)
            $closeDivs = ([regex]::Matches($line, '</div').Count)
            
            $divDepth += $openDivs
            $divDepth -= $closeDivs

            if ($divDepth -le 0) {
                $inHeader = $false
            }
        }
    }

    if ($modified) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Removed header from $($file.Name)"
    }
}
