$files = Get-ChildItem -Path "src\components\wizards" -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName
    $modified = $false

    for ($i = 0; $i -lt $content.Count; $i++) {
        $line = $content[$i]
        $original = $line

        # Remove duplicate titles (h3/h4 with text-[#e8702a] or text-orange)
        if ($line -match 'text-\[\#e8702a\]' -and $line -match '<h[34]') {
            $content[$i] = ""
            $modified = $true
            continue
        }

        # Replace light backgrounds with Glassmorphism
        $line = $line -replace 'bg-muted/50', 'bg-white/5 border-white/10'
        $line = $line -replace 'bg-muted/30', 'bg-white/5 border-white/10'
        $line = $line -replace 'bg-muted', 'bg-white/5 border border-white/10'
        $line = $line -replace 'bg-background', 'bg-[#111]'
        $line = $line -replace 'bg-rose-50', 'bg-rose-500/10'
        $line = $line -replace 'border-rose-200', 'border-rose-500/20'
        $line = $line -replace 'bg-amber-50', 'bg-amber-500/10'
        $line = $line -replace 'border-amber-200', 'border-amber-500/20 text-amber-200'
        $line = $line -replace 'bg-rose-100', 'bg-rose-500/20'
        
        # Replace border-border with border-white/10
        $line = $line -replace 'border-border', 'border-white/10'

        if ($line -cne $original) {
            $content[$i] = $line
            $modified = $true
        }
    }

    if ($modified) {
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Updated $($file.Name)"
    }
}
