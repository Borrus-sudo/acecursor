# acecursor

You are riding your peak producitivity, smashing your mechanical keyboard at 100 wpm, finally drafting that blog post you procrasinated writing for so long. As your observant eyes follow the rapidly moving cursor, your eyes draw their attention towards that un-fortunate typing mistake you made for the hundereth on the previous line. The cursor comes to the sudden halt and as your basal ganglia instructs your fingers to press the ⬆ arrow key, simultaneosly, your amygadala feels a weird anguish through your fingers for the extremely un-ergonomic manoeuvre your hands just performed.

`acecursor` for the rescue baby! It is config file with built with a philosophy of using Caps-Lock to reduce keyboard friction!

## Why CapsLock?

- The presence of `CapsLock` on the `home row` of the keyboard makes it extremely easily accessible for your fingers.
- The existing use for CapsLock is pretty redundant as you can almost always achieve everything it does with the `Shift` key!

## How?

- AutoHot key is a lightweight and performant automation tool that helps you re-wire your keyboard bindings
- Install [ahk](https://www.autohotkey.com/) on Windows here
- For macOS, you can try using something like [karabiner](https://karabiner-elements.pqrs.org/) for recreating the same experience!

## **Config**

```ahk
; We free CapsLock of its current duties
SetCapsLockState("AlwaysOff")

; CapsLock + (h/j/k/l) are mapped to the arrow keys
; The standard vim bindings are followed which can now be used globally! Even in your draft email box!
CapsLock & h:: Send("{Left}")
CapsLock & j:: Send("{Down}")
CapsLock & k:: Send("{Up}")
CapsLock & l:: Send("{Right}")

; Ctrl replacement.
; For the following bindings CapsLock essentially plays the role of Ctrl. The presence of CapsLock on the home row makes it much more ergonomic
CapsLock & z:: Send("^z") ; CapsLock + z (undo)
CapsLock & x:: Send("^x") ; CapsLock + x (cut)
CapsLock & c:: Send("^c") ; CapsLock + c (copy)
CapsLock & v:: Send("^v") ; CapsLock + v (paste)
CapsLock & a:: Send("^a") ; CapsLock + a (select all)
CapsLock & w:: Send("^w") ; CapsLock + w (to close the current Chrome Tab/VSCode file etc)
CapsLock & d:: Send("^{Left}") ; CapsLock + d (Ctrl + Left) (jumps cursor by word towards left)
CapsLock & f:: Send("^{Right}") ; CapsLock + f (Ctrl + Right) (jumps cursor by word towards right)
CapsLock & t:: Send("^{Tab}") ; CapsLock + t (Ctrl + Tab) (performs chrome tab rotation)
CapsLock & p:: Send("^+p") ; CapsLock + p (Ctrl + Shift + p) (opens command palette in vscode)

; Capslock + s effectively presses the shift key for you. When composed along with (h/j/k/l) keys,
;you can effectively perform the select text operation super ergonomically!
CapsLock & s:: Send("{Shift Down}")
CapsLock & s up:: Send("{Shift Up}")

; Awkwardly placed keys.
CapsLock & e:: Send("{Escape}") ; CapsLock + e (Escape key)
CapsLock & n:: Send("{Enter}")  ; CapsLock + n (Enter key) (present too far on the home row imo) (n stands for newline)
CapsLock & b:: Send("{Backspace}") ; CapsLock + b (Backspace)

; Shift replacement
; All characters that need the Shift key can use the CapsLock key as an alternative!
; E.g. ';' ',' '+' ...
CapsLock & =:: Send("+{=}")
CapsLock & [:: Send("+{[}")
CapsLock & ]:: Send("+{]}")
CapsLock & 9:: Send("+9")
CapsLock & 0:: Send("+0")
CapsLock & -:: Send("+{-}")
```

> [!NOTE]
> You can claude code slight adjustments according to your preferences

## Caveat

- Etching neural paths so that these keybindings become second nature takes time. But if you are someone like me, who loves computers, I encourage you to slowly and steadily re-train your brain into learning them! All your existing keyboard combinations are intact so you can progressively start adopting these bindings in your workflow as necessary!
- In no way this configuration reduces your mouse usage to zero, but it however can be your first step in that direction!