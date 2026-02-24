# acecursor

You are riding your peak producitivity, hammering your mechanical keyboard at 100 wpm, drafting that blog post you have been putting off for so long. As your observant eyes follow the rapidly moving cursor, your eyes draw their attention towards that un-fortunate typing mistake you made for the hundereth on the previous line. The cursor comes to a sudden halt. Your basal ganglia instructs your fingers to stretch the ⬆ arrow key, simultaneosly, your amygadala feels a **weird anguish** through your fingers for the extremely un-ergonomic manoeuvre your hands just performed.

`acecursor` for the rescue baby! It a lightweight keyboard remapping config built around upon a simple philosophy:

> **CapsLock** as the universal modifier key

## Why CapsLock?

- The `CapsLock` key, located on the [home row](./keyboard.jpg) of the keyboard, is very easily accessibly by the little finger
- The existing use for CapsLock is pretty redundant as you can almost always achieve everything it does with the `Shift` key!

## How?

- AutoHot key is a lightweight and performant automation tool that helps you re-wire your keyboard bindings
- Install [ahk](https://www.autohotkey.com/) on Windows
- For macOS, you can try using something like [karabiner](https://karabiner-elements.pqrs.org/) for recreating the same experience!

## **Config** for ahk

```ahk
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
```

Paste this config file in `C:\Users\<YOUR_NAME>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\CapslockRemap.ahk` and get started!

> [!NOTE]
> You can claude code slight adjustments according to your preferences

## So just vim but kinda global?

Yes ... but I don't really like the fact that Vim forces me into using the `Esc` key as a switch for modes. I wanted something fluid where un-pressing the keyboard flips me back into `INSERT` mode automatically. Vim requires me to press `i` to do the same. Matter of preference fosho!

## Final notes

- Etching neural paths so that these keybindings become second nature takes time. But if you are someone like me, who loves computers, I **encourage** you to slowly and steadily re-train your brain into **using** them! All your existing keyboard combinations are intact so you can **progressively** start adopting these bindings in your workflow as necessary!
- In no way this configuration reduces your mouse usage to zero, it however can be your first step in that direction!
- acecursor shines during active writing, coding, and editing, where cursor precision matters most.
