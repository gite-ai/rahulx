#IfWinActive, ahk_exe msedge.exe  ; Only activate this hotkey when Microsoft Edge is the active window
$Enter::                         ; Remap the Enter key
    Send {Enter}                 ; Simulate pressing Enter
    Return
#IfWinActive                     ; End the context-sensitive hotkey