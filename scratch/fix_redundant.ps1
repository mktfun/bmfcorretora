$files = Get-ChildItem -Path "src\components\wizards" -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName
    $modified = $false

    for ($i = 0; $i -lt $content.Count; $i++) {
        $line = $content[$i]
        $original = $line

        # Fix redundancies and typos created by previous script
        $line = $line -replace 'border-white/10 border border-white/10', 'border border-white/10'
        $line = $line -replace 'border-white/10/50', 'border-white/10'
        $line = $line -replace 'bg-white/5 border-white/10', 'bg-white/5'
        
        # In case we still have 'border-white/10 border'
        $line = $line -replace 'bg-white/5 border border-border', 'bg-white/5 border border-white/10'
        
        # bg-white/5 border border-white/10 border border-white/10
        $line = $line -replace 'border border-white/10 border border-white/10', 'border border-white/10'

        if ($line -cne $original) {
            $content[$i] = $line
            $modified = $true
        }
    }

    if ($modified) {
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Fixed $($file.Name)"
    }
}
