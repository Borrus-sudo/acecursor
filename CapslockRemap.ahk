; ============================================================
; CapsLock as a Universal Modifier (Vim-style global navigation)
; ============================================================


; ------------------------------------------------------------
; Disable CapsLock completely
; ------------------------------------------------------------
SetCapsLockState("AlwaysOff")


; ------------------------------------------------------------
; Cursor movement (Vim bindings)
; CapsLock + h/j/k/l → Arrow keys
; Works globally (editors, browsers, Gmail compose box, etc.)
; ------------------------------------------------------------
CapsLock & h:: Send("{Left}")
CapsLock & j:: Send("{Down}")
CapsLock & k:: Send("{Up}")
CapsLock & l:: Send("{Right}")


; ------------------------------------------------------------
; Text selection helper
; CapsLock + s acts as Shift
; Combine with h/j/k/l to select text ergonomically
; ------------------------------------------------------------
CapsLock & s:: Send("{Shift Down}")
CapsLock & s up:: Send("{Shift Up}")


; ------------------------------------------------------------
; Ctrl-key replacements
; CapsLock acts as Ctrl for common shortcuts
; Much more ergonomic due to home-row placement
; ------------------------------------------------------------
CapsLock & z:: Send("^z")       ; Undo
CapsLock & y:: Send("^y")       ; Redo
CapsLock & x:: Send("^x")       ; Cut
CapsLock & c:: Send("^c")       ; Copy
CapsLock & v:: Send("^v")       ; Paste
CapsLock & a:: Send("^a")       ; Select all
CapsLock & w:: Send("^w")       ; Close tab / VSCode file
CapsLock & d:: Send("^{Left}")  ; Jump word left
CapsLock & f:: Send("^{Right}") ; Jump word right
CapsLock & r:: Send("^{Tab}")   ; Rotate tabs on Chrome
CapsLock & t:: Send("^t")       ; Create new tab on chrome
CapsLock & p:: Send("^+p")      ; Ctrl + Shift + P (VS Code Command Palette)


; ------------------------------------------------------------
; Shift-key replacements
; Allows typing shifted symbols using CapsLock instead of Shift
; Useful for symbols like : < > { ( etc.
; ------------------------------------------------------------
CapsLock & =:: Send("+{=}")
CapsLock & [:: Send("+{[}")
CapsLock & ]:: Send("+{]}")
CapsLock & 9:: Send("+9")
CapsLock & 0:: Send("+0")
CapsLock & -:: Send("+{-}")
CapsLock & `;:: Send("+{;}")
CapsLock & ':: Send("+{'}")
CapsLock & /:: Send("+{/}")
CapsLock & ,:: Send("+{,}")
CapsLock & .:: Send("+{.}")


; ------------------------------------------------------------
; Awkwardly placed keys (home-row friendly)
; ------------------------------------------------------------
CapsLock & e:: Send("{Escape}")     ; Escape key
CapsLock & n:: Send("{Enter}")      ; Enter (n = newline)
CapsLock & b:: Send("{Backspace}")  ; Backspace