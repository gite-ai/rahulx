#IfWinActive, ahk_exe msedge.exe

$Enter::
    Send {Ctrl down}
    Send {Enter}
    Send {Ctrl up}
    Sleep 100
    Return

$RButton::
    Send {Ctrl down}
    Send {Enter}
    Send {Ctrl up}
    Sleep 100
    Return

#IfWinActive
