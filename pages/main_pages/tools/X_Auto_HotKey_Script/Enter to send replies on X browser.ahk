#IfWinActive, ahk_exe msedge.exe
$Enter::
    Send {Ctrl down}  ; Ctrl+Enter is a reliable way to post on X
    Send {Enter}
    Send {Ctrl up}
    Sleep 100         ; Small delay to ensure it registers
    Return
#IfWinActive