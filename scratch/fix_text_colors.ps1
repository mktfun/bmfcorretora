$files = Get-ChildItem -Path "src\components\wizards" -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName
    $modified = $false

    for ($i = 0; $i -lt $content.Count; $i++) {
        $line = $content[$i]
        $original = $line

        # Replace text-foreground/80 first so it doesn't get partially matched
        $line = $line -replace 'text-foreground/80', 'text-white/80'
        $line = $line -replace 'text-foreground', 'text-white'
        
        # Replace text-muted-foreground with text-neutral-400 to ensure perfect contrast everywhere
        $line = $line -replace 'text-muted-foreground', 'text-neutral-400'

        if ($line -cne $original) {
            $content[$i] = $line
            $modified = $true
        }
    }

    if ($modified) {
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Replaced text-foreground in $($file.Name)"
    }
}
